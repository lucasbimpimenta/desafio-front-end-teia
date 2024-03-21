import { IPhoto } from "@/interfaces/IPhoto";

interface PhotoThumbProps {
  photo: IPhoto;
}

export default function PhotoThumb({ photo }: PhotoThumbProps) {
  return (
    <div className="basis-36 cursor-pointer">
      <img
        className="h-auto max-w-full rounded-md object-cover align-middle ring-2 ring-gray-200"
        src={photo.url}
      />
    </div>
  );
}
