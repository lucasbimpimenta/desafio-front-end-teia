import { IPhoto } from "@/interfaces/IPhoto";

interface PhotoThumbProps {
  photo: IPhoto;
}

export default function PhotoThumb({ photo }: PhotoThumbProps) {
  return (
    <img
      className="h-auto max-w-full rounded-md  object-cover align-middle shadow "
      src={photo.thumbnailUrl}
    />
  );
}
