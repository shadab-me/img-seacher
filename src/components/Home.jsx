import Loader from "./common/Loader";
import { useState, useEffect } from "react";

const Home = ({ callInput }) => {
  let [page, setPage] = useState(1);
  let [images, setImages] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const key = "236b37b2fd3c3f517e9c555b8287d582";
      const url = !callInput.length
        ? `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${key}&tags=cat&per_page=10&page=1&format=json&nojsoncallback=1`
        : `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${callInput}&per_page=15&page=5&format=json&nojsoncallback=1`;
      let data = await fetch(url);
      let { photos } = await data.json();
      setImages(photos.photo);
      setLoading(false);
    };
    fetchData();
  }, [callInput, page]);

  const pageChanger = () => {
    setPage(page + 1);
  };

  if (loading) return <Loader />;
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
