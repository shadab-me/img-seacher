import { useState } from "react";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const onChangeHandler = ({ target }) => {
    setUserInput(target.value);
  };

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
      </div>
      <h1>{userInput}</h1>
    </>
  );
};

export default SearchBar;
