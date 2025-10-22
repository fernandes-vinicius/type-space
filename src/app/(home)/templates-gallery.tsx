"use client";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { templates } from "@/constants/templates";
import { cn } from "@/lib/utils";
import { api } from "../../../convex/_generated/api";

export function TemplatesGallery() {
  const router = useRouter();
  const create = useMutation(api.documents.create); // TODO: replace with useQuery by Tanstack Query

  const [isCreating, setIsCreating] = useState(false);

  function onTemplateClick(title: string, initialContent: string) {
    setIsCreating(true);
    create({ title, initialContent })
      .catch(() => toast.error("Something went wrong"))
      .then((documentId) => {
        setIsCreating(false);
        toast.success("Document created");
        router.push(`/documents/${documentId}`);
      })
      .finally(() => setIsCreating(false));
  }

  return (
    <div className="bg-[#F1F3F4]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-16 py-6">
        <h3 className="font-normal text-base">Start a new document</h3>
        <Carousel>
          <CarouselContent className="-ml-4">
            {templates.map((template) => (
              <CarouselItem
                key={template.id}
                className="basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%]"
              >
                <div
                  className={cn("flex aspect-[3/4] flex-col gap-y-2.5", isCreating && "pointer-events-none opacity-50")}
                >
                  <button
                    type="button"
                    disabled={isCreating}
                    onClick={() => onTemplateClick(template.label, "")} // TODO: Add proper initial content
                    style={{
                      backgroundImage: `url(${template.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="flex size-full flex-col items-center justify-center gap-y-4 rounded-sm border bg-white transition hover:border-blue-500 hover:bg-blue-50"
                  />
                  <p className="truncate font-medium text-sm">{template.label}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
