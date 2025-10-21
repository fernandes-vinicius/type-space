import type { PageProps } from "@/types/common";
import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

export default async function DocumentPage({ params }: PageProps<{ documentId: string }>) {
  const documentId = (await params).documentId;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
}
