import { useState } from "react";
import { debounce } from "lodash";

const SearchBar = ({ callInput, setCallInput }) => {
  const [userInput, setUserInput] = useState("");
  const onChangeHandler = ({ target }) => {
    setUserInput(target.value);
    const debounceSave = debounce(() => setCallInput(target.value), 1000);
    debounceSave();
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
