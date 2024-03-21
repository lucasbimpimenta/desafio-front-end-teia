import { IPhotos } from "@/interfaces/IPhotos";
import { api } from "@/libs/axios";

export async function getPhotos() {
    const response = await api.get<IPhotos[]>('/photos/');
    return response.data;
}