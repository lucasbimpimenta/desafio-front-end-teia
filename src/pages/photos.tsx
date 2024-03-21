import { getPhotos } from "@/api/get-photos";
import { useQuery } from "@tanstack/react-query";

export default function Photos() {
    const { data: photos, isLoading: isLoadingPhotos } = useQuery({
        queryKey: ["getPhotos"],
        queryFn: () => getPhotos(),
      });
    
      console.log(isLoadingPhotos, photos);

      return (<h1>Hello World</h1>)
}