// import type { PageProps } from "@/types/common";
import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Toolbar } from "./toolbar";

export default async function DocumentPage() {
  // const documentId = (await params).documentId;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="fixed top-0 right-0 left-0 z-10 flex h-[112px] flex-col gap-y-2 bg-[#FAFBFD] px-4 pt-2 print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
}
