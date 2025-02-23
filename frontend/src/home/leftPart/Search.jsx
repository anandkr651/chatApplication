import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="p-5 z-10 fixed bg-black w-[30%]">
      <form action="">
        <div className="flex items-center">
          <label className="">
            <input
              type="text"
              className="px-5 py-2 rounded-xl text-xl outline-none border border-slate-700"
              placeholder="Search"
            />
          </label>
          <FaSearch className="text-4xl px-1 rounded-full duration-300" />
        </div>
      </form>
    </div>
  );
}

export default Search;
