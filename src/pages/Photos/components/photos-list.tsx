import { Button } from "@/components/Shadcn-ui/Button";
import { IPhoto } from "@/interfaces/IPhoto";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useMemo, useState } from "react";
import PhotoCard from "./photo-card";

interface PhotosListProps {
  photos: IPhoto[];
  filter: string | undefined;
  pageIdx?: number;
  perPage?: number;
  orderBy?: string;
}

const getPage = (photos: IPhoto[], perPage: number, page: number) =>
  photos.slice((page - 1) * perPage, page * perPage);

const addFilter = (photos: IPhoto[], filter?: string) => {
  if (filter && filter != "")
    return photos?.filter(
      (photoItem) =>
        photoItem.title.toLowerCase().includes(filter.toLowerCase()) ||
        photoItem.id.toString().toLowerCase().includes(filter.toLowerCase()) ||
        photoItem.albumId
          .toString()
          .toLowerCase()
          .includes(filter.toLowerCase()),
    );

  return photos;
};

const orderPhotos = (photos: IPhoto[], orderBy: string) => {
  const [orderByColumn, orderByDirection] = orderBy.split("|");

  // ===============================================================================
  // Isso pode ser dinamico, mas não consegui fazer sem o TypeScript ficar reclamando
  if (orderByColumn == "title" && orderByDirection == "asc")
    photos.sort((a, b) => a.title.localeCompare(b.title));

  if (orderByColumn == "title" && orderByDirection == "desc")
    photos.sort((a, b) => b.title.localeCompare(a.title));

  if (orderByColumn == "id" && orderByDirection == "asc")
    photos.sort((a, b) => a.id - b.id);

  if (orderByColumn == "id" && orderByDirection == "desc")
    photos.sort((a, b) => b.id - a.id);

  if (orderByColumn == "albumId" && orderByDirection == "asc")
    photos.sort((a, b) => a.albumId - b.albumId);

  if (orderByColumn == "albumId" && orderByDirection == "desc")
    photos.sort((a, b) => b.albumId - a.albumId);

  // -------------------------------------------------------------------------------

  return photos;
};

export default function PhotosList({
  photos,
  filter,
  perPage = 10,
  orderBy = "title|asc",
}: PhotosListProps) {
  const [pageIdx, setPageIdx] = useState(1);

  const totalGlobal = photos.length;

  useEffect(() => {
    setPageIdx(1);
  }, [filter, perPage]);

  const page = useMemo(() => {
    const photosFiltradas = addFilter(photos, filter);
    const photosOrdenadas = orderPhotos(photosFiltradas, orderBy);
    const totalPages = Math.ceil(photosFiltradas.length / perPage) || 1;
    const pagina = getPage(photosOrdenadas, perPage, pageIdx);

    return {
      data: pagina,
      totalPages: totalPages,
      totalPhotos: photosFiltradas.length,
    };
  }, [photos, perPage, pageIdx, filter, orderBy]);

  return (
    <div className="grid grid-cols-[32px_1fr_32px] gap-4 px-4">
      <div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
          disabled={pageIdx === 1}
          onClick={() => setPageIdx(pageIdx - 1)}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Página anterior</span>
        </Button>
      </div>
      <div className="w-full grow flex-row">
        <div className="flex w-full justify-center text-xs text-white">
          <div>
            Página {pageIdx} de {page.totalPages}
          </div>
          {filter && filter != "" && (
            <div className="ml-1">
              - Encontrados {page.totalPhotos} de um total de {totalGlobal}
            </div>
          )}
        </div>
        <div className="m-2 flex flex-wrap justify-center gap-4">
          {page?.data.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} highlightText={filter} />
          ))}
        </div>
      </div>
      <div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
          disabled={page.totalPages <= pageIdx + 1}
          onClick={() => setPageIdx(pageIdx + 1)}
        >
          <ArrowRightIcon className="h-4 w-4" />
          <span className="sr-only">Próxima página</span>
        </Button>
      </div>
    </div>
  );
}
