import { getPhotos } from "@/api/get-photos";
import Loader from "@/components/Loader/loader";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/Shadcn-ui/Alert";
import { Input } from "@/components/Shadcn-ui/Input";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PhotosList from "./photos-list";

export default function PhotosContainer() {
  const {
    status: statusPhotos,
    data: photos,
    error: errorLoadingPhotos,
    isLoading: isLoadingPhotos,
  } = useQuery({
    queryKey: ["getPhotos"],
    queryFn: () => getPhotos(),
  });

  const [searchQuery, setSearchQuery] = useState("");

  if (isLoadingPhotos) return <Loader />;

  if (statusPhotos === "error" && errorLoadingPhotos) {
    return (
      <Alert className="border-0 bg-red-500 text-white">
        <AlertTitle className="font-semibold">
          Ops! Aconteceu um erro!
        </AlertTitle>
        <AlertDescription>{errorLoadingPhotos?.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center p-4">
        <Input
          placeholder="Filtrar registros..."
          onChange={(event) => setSearchQuery(event.target.value)}
          className="max-w-sm"
        />
      </div>
      {photos && <PhotosList photos={photos} filter={searchQuery} />}
    </div>
  );
}
