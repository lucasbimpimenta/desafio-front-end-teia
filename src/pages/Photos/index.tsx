import HeaderTeia from "@/components/HeaderTeia/header-teia";
import PhotosContainer from "./components/photos-container";

export default function Photos() {
  return (
    <div className="bg-teia min-h-full w-full">
      <div className="m-auto max-w-screen-lg flex-row space-y-4">
        <HeaderTeia />
        <PhotosContainer />
      </div>
    </div>
  );
}
