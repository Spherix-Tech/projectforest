import { useRouter } from "next/router";
import { useRef } from "react";
import ImageComponent from "../shared/ImageComponent";

const SearchBar = () => {
  const searchRef = useRef();
  const router = useRouter();
  return (
    <form
      className="md:hidden flex justify-start w-full my-3 md:py-1 rounded-md bg-white bg-opacity-50"
      onSubmit={(e) => {
        e.preventDefault();
        router.push({
          pathname: "/marketplace",
          query: { ...router.query, search: searchRef.current.value },
        });
      }}
    >
      <button
        type="submit"
        className="rounded-l-md px-4 py-2 hover:bg-slate-100 cursor-pointer"
      >
        <ImageComponent src="/assets/marketplace/search.svg" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="text-[14px] py-2 p-2 rounded-r-md w-4/5 outline-none bg-transparent placeholder:text-[14px] placeholder:font-light"
        ref={searchRef}
      />
    </form>
  );
};

export default SearchBar;
