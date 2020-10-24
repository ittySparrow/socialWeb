import { PhotosType, ProfileType } from "../types/types";
import { ResponseType, instance } from "./API";

type SavePhotoResponseDataType = {
  photos: PhotosType
}
type SavePhotoResponseType = ResponseType<SavePhotoResponseDataType>

export default {
  getUserProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`).then(({ data }) => data);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`).then(({ data }) => data);
  },
  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/status`, { status: status });
  },
  saveProfile(profile: ProfileType) {
    return instance.put<ResponseType>(`profile`, profile)
  },
  savePhoto(file: File) {
    const formData = new FormData();
    formData.append("image", file);
    return instance.put<SavePhotoResponseType>(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(response => response.data);
  },
};