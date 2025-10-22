"use client";

import { usePaginatedQuery } from "convex/react";
import { useSearchParam } from "@/hooks/use-search-param";
import { api } from "../../../convex/_generated/api";
import DocumentsTable from "./documents-table";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";

export default function HomePage() {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(api.documents.get, { search }, { initialNumItems: 5 });

  return (
    <div className="flex min-h-screen flex-col">
      <div className="top0 fixed right-0 left-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable documents={results} loadMore={loadMore} status={status} />
      </div>
    </div>
  );
}
