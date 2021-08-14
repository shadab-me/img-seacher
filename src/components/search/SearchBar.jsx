import { useState } from "react";
import { debounce } from "lodash";
import {
  setToStorage,
  getFromStorage,
  clearStorage,
} from "../../helper/storage";

const SearchBar = ({ callInput, setCallInput }) => {
  const [userInput, setUserInput] = useState("");
  const [isLastSearch, setIsLastSearch] = useState(false);
  var allValues = JSON.parse(getFromStorage("userInput")) || [];

  const onChangeHandler = ({ target }) => {
    setUserInput(target.value);
    const debounceSave = debounce(() => setCallInput(target.value), 1000);
    debounceSave();
  };

  const searchHandler = () => {
    if (allValues.length) {
      allValues.push(userInput);
      allValues = JSON.stringify(allValues);
      setToStorage("userInput", allValues);
    } else {
      let value = JSON.stringify([callInput]);
      setToStorage("userInput", value);
    }
  };

  const blurHandler = (event) => {
    const clickHandler = ({ target }) => {
      if (target?.className?.split(" ").includes("list-items")) {
        window.removeEventListener("click", clickHandler);
      } else {
        window.removeEventListener("click", clickHandler);
        setIsLastSearch(false);
      }
    };
    window.addEventListener("click", clickHandler);
  };

  return (
    <>
      <div className="bg-blue-900 text-white font-medium text-center p-5 border-none pb-8">
        <div className="flex  w-full justify-center flex-col items-center">
          <input
            value={userInput}
            onChange={onChangeHandler}
            onFocus={() => setIsLastSearch(true)}
            onBlur={() => blurHandler()}
            type="text"
            className="p-2 placeholder-gray-600 rounded-md pr-6 text-black focus:outline-none lg:w-1/4 sm:w-full"
            placeholder="Search"
          ></input>
          <div className="lg:w-1/4 sm:w-full">
            {isLastSearch ? (
              <div className="list text-center w-full">
                <ul class="list-none md:list-none bg-white rounded-xl text-black w-full">
                  {allValues.map((search) => {
                    return (
                      <li
                        key={search}
                        className="list-item p-2 text-blue-500 cursor-pointer"
                        onClick={() => {
                          setIsLastSearch(true);
                          setCallInput(search);
                          setUserInput(search);
                        }}
                      >
                        {search}
                      </li>
                    );
                  })}
                  {allValues.length ? (
                    <i
                      className="text-red-500 text-left cursor-pointer mb-2"
                      onClick={() => clearStorage()}
                    >
                      Clear history
                    </i>
                  ) : null}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <button
          onClick={searchHandler}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded-full ml-3"
        >
          Search
        </button>{" "}
      </div>
    </>
  );
};

export default SearchBar;
