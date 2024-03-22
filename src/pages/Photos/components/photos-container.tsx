import { getPhotos } from "@/api/get-photos";
import Loader from "@/components/Loader/loader";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/Shadcn-ui/Alert";
import { Input } from "@/components/Shadcn-ui/Input";
import { Label } from "@/components/Shadcn-ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Shadcn-ui/Select";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PhotosList from "./photos-list";

enum orderByList {
  "title|asc" = "Título (crescente)",
  "title|desc" = "Título (decrescente)",
  "id|asc" = "ID (crescente)",
  "id|desc" = "ID (decrescente)",
  "albumId|asc" = "Album ID (crescente)",
  "albumId|desc" = "Album ID (decrescente)",
}

export default function PhotosContainer() {
  const {
    status: statusPhotos,
    data: photos,
    error: errorLoadingPhotos,
    isLoading: isLoadingPhotos,
  } = useQuery({
    queryKey: ["getPhotos"],
    queryFn: () => getPhotos(),
    staleTime: Infinity,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [itensPerPage, setItensPerPage] = useState<number>(9);
  const [orderBy, setOrderBy] = useState<string>("title|asc");

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
      <div className="flex-col items-center gap-4 p-4">
        <div className="flex flex-col gap-2 sm:flex-row ">
          <div className="grid grow gap-2">
            <Label htmlFor="buscar" className="text-white">
              Buscar:
            </Label>
            <Input
              placeholder="Digite para buscar..."
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-white"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="paginas" className="text-white">
              Itens por página:
            </Label>
            <Select
              value={itensPerPage.toString()}
              onValueChange={(value) => setItensPerPage(Number(value))}
            >
              <SelectTrigger className="bg-white">
                <SelectValue>{itensPerPage}</SelectValue>
              </SelectTrigger>
              <SelectContent className="font-[futuraBook]">
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="24">24</SelectItem>
                <SelectItem value="111">111</SelectItem>
                <SelectItem value="201">201</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="paginas" className="text-white">
              Ordenar por:
            </Label>
            <Select
              value={orderBy}
              onValueChange={(value) => setOrderBy(value)}
            >
              <SelectTrigger className="bg-white">
                <SelectValue>
                  {orderByList[orderBy as keyof typeof orderByList]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="font-[futuraBook]">
                <SelectItem value="title|asc">Título (crescente)</SelectItem>
                <SelectItem value="title|desc">Título (decrescente)</SelectItem>
                <SelectItem value="id|asc">ID (crescente)</SelectItem>
                <SelectItem value="id|desc">ID (decrescente)</SelectItem>
                <SelectItem value="albumId|asc">
                  Album ID (crescente)
                </SelectItem>
                <SelectItem value="albumId|desc">
                  Album ID (decrescente)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {photos && (
        <PhotosList
          photos={photos}
          filter={searchQuery}
          perPage={itensPerPage}
          orderBy={orderBy}
        />
      )}
    </div>
  );
}
