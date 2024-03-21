import { IPhoto } from "@/interfaces/IPhoto";
import { api } from "@/libs/axios";

export async function getPhotos() {
    const response = await api.get<IPhoto[]>('/photos/');
    return response.data;
}