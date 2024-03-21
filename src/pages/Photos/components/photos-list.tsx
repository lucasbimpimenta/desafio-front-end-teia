import { IPhoto } from "@/interfaces/IPhoto";
import PhotoThumb from "./photo-thumb";

interface PhotosListProps {
  photos: IPhoto[];
  filter: string | undefined;
  max?: number;
}

export default function PhotosList({
  photos,
  filter,
  max = 10,
}: PhotosListProps) {
  if (!max) max = 10;
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

  return (
    <div className="m-2 flex flex-wrap justify-center gap-4 after:basis-36">
      {photos?.map(
        (photo, idx) =>
          idx < max && <PhotoThumb key={photo.id} photo={photo} />,
      )}
    </div>
  );
}
