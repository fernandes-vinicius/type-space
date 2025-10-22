"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParam } from "@/hooks/use-search-param";

export function SearchInput() {
  const [searchParam, setSearchParam] = useSearchParam();

  const [value, setValue] = useState(searchParam);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleClear() {
    setValue("");
    setSearchParam("");

    inputRef.current?.blur();
    inputRef.current?.focus();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchParam(value);
    inputRef.current?.blur();
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <form onSubmit={handleSubmit} className="relative w-full max-w-[720px]">
        <Input
          ref={inputRef}
          value={value}
          onChange={handleChange}
          placeholder="Search"
          className="h-[48px] w-full rounded-full border-none bg-[#F0F4F8] px-14 placeholder:text-neutral-800 focus:bg-white focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] focus-visible:ring-0 md:text-base"
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="-translate-y-1/2 absolute top-1/2 left-3 rounded-full [&_svg]:size-5"
        >
          <SearchIcon />
        </Button>
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="-translate-y-1/2 absolute top-1/2 right-3 rounded-full [&_svg]:size-5"
          >
            <XIcon />
          </Button>
        )}
      </form>
    </div>
  );
}
