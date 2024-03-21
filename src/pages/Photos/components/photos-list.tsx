import { IPhoto } from "@/interfaces/IPhoto";
import PhotoCard from "./photo-card";

interface PhotosListProps {
  photos: IPhoto[];
  filter: string | undefined;
  perPage?: number;
  orderBy?: string;
}

export default function PhotosList({
  photos,
  filter,
  perPage = 10,
  orderBy = "title|asc",
}: PhotosListProps) {
  const totalRegistros = photos.length;

  if (!perPage) perPage = 10;
  if (perPage == -1) perPage = totalRegistros;

  if (filter && filter != "")
    photos = photos?.filter(
      (photoItem) =>
        photoItem.title.toLowerCase().includes(filter.toLowerCase()) ||
        photoItem.id.toString().toLowerCase().includes(filter.toLowerCase()) ||
        photoItem.albumId
          .toString()
          .toLowerCase()
          .includes(filter.toLowerCase()),
    );

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

  return (
    <div className="m-2 flex flex-wrap justify-center gap-4 after:basis-36">
      {photos?.map(
        (photo, idx) =>
          idx < perPage && (
            <PhotoCard key={photo.id} photo={photo} highlightText={filter} />
          ),
      )}
    </div>
  );
}
