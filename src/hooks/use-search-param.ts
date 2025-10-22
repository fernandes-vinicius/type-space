"use client";

import { parseAsString, useQueryState } from "nuqs";

export function useSearchParam(key: string = "q") {
  return useQueryState(key, parseAsString.withDefault("").withOptions({ clearOnDefault: true }));
}
