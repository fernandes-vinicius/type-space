import { LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FullscreenLoader({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-2 text-muted-foreground text-sm",
        className,
      )}
      {...props}
    >
      <LoaderIcon className="size-6 animate-spin text-muted-foreground" />
      {children}
    </div>
  );
}
