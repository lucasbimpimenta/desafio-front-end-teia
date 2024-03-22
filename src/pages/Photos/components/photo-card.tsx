import { Card } from "@/components/Shadcn-ui/Card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/Shadcn-ui/Dialog";
import { IPhoto } from "@/interfaces/IPhoto";
import Highlighter from "react-highlight-words";
import PhotoThumb from "./photo-thumb";

import { AspectRatio } from "@/components/Shadcn-ui/AspectRatio";

interface PhotoCardProps {
  photo: IPhoto;
  highlightText?: string;
}

export default function PhotoCard({ photo, highlightText }: PhotoCardProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Card className="grid h-auto basis-full cursor-pointer grid-cols-[115px_1fr] items-start gap-4 rounded-md p-1 sm:basis-[235px] md:basis-[275px] lg:basis-[282px]">
          <PhotoThumb photo={photo} />
          <div className="h-full flex-col items-start justify-between space-y-4 py-2">
            <div>
              <p className="text-sm font-medium leading-none">Title</p>
              <p className="text-sm font-semibold text-muted-foreground">
                {highlightText ? (
                  <Highlighter
                    highlightClassName=".highlight"
                    searchWords={[highlightText]}
                    autoEscape={true}
                    textToHighlight={photo.title}
                  />
                ) : (
                  photo.title
                )}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">
                Album ID: {photo.albumId}
              </p>
            </div>
          </div>
        </Card>
      </SheetTrigger>
      <SheetContent className="w-full ">
        <SheetHeader className="text-left">
          <SheetTitle className="mb-4 mt-4 border-l-4 border-[#F39200] pl-2 font-[futuraBold] text-xl capitalize text-[#005ca9]">
            {photo.title}
          </SheetTitle>
          <SheetDescription asChild>
            <div className="max-w-[330px] flex-col items-start justify-between space-y-4 ">
              <AspectRatio ratio={9 / 9}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="rounded-md object-cover shadow-xl"
                />
              </AspectRatio>
              <div className="h-full flex-col items-start justify-between space-y-4 divide-y-2 py-2">
                <div className="font-[futuraBold]">
                  <p className="font-[futuraBook] leading-none text-gray-400">
                    Title
                  </p>
                  <p className="font-semibold capitalize text-muted-foreground">
                    {photo.title}
                  </p>
                </div>
                <div className="pt-4 ">
                  <p className="font-[futuraBook] leading-none text-gray-400">
                    Album ID
                  </p>
                  <p className="font-[futuraBold] font-semibold text-muted-foreground">
                    {photo.albumId}
                  </p>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
