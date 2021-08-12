import { useState } from "react";
import useFetch from "../hooks/useFetch";

const SearchBar = ({ userInput, setUserInput }) => {
  let [page, setPage] = useState(1);
  // const key = "236b37b2fd3c3f517e9c555b8287d582";
  // const secret = "1a5e0b140606ca66";
  // let searchUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${key}&tags=cat&per_page=10&page=1&format=json&nojsoncallback=1`;
  // const images = useFetch(searchUrl, userInput, page);
  const onChangeHandler = ({ target }) => {
    setUserInput(target.value);
    setPage(page + 1);
  };
  const searchHandler = () => {};
  return (
    <>
      <div className="bg-blue-900 text-white font-medium text-center p-5 border-none pb-8">
        <input
          value={userInput}
          onChange={onChangeHandler}
          type="text"
          className="p-2 placeholder-gray-600 rounded-md pr-6 text-black focus:outline-none"
          placeholder="Search"
        ></input>
        <button
          onClick={searchHandler}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3"
        >
          Search
        </button>{" "}
      </div>
    </>
  );
};

export default SearchBar;
