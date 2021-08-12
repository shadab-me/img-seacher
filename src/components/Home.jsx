import Loader from "./common/Loader";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

const Home = ({ userInput }) => {
  let [page, setPage] = useState(1);

  const images = useFetch(userInput);

  const pageChanger = () => {
    setPage(page + 1);
  };

  if (images.length < 1) return <Loader />;
  return (
    <>
      <div className="container grid grid-cols-3 gap-2 mx-auto mt-8">
        {images.map((image) => {
          return (
            <div class="w-full rounded hover:shadow-2xl">
              <img
                className="w-full h-full p-3"
                key={image.id + image.secret}
                src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`}
                alt={image.title}
              />
            </div>
          );
        })}
      </div>
      <button className="btn btn-primary" onClick={pageChanger}>
        Next Page
      </button>
    </>
  );
};

export default Home;
