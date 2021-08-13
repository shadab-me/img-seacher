import Loader from "./common/Loader";
import { useState, useEffect, useRef, useCallback } from "react";
import Modal from "./common/Model";

const Home = ({ callInput }) => {
  let [page, setPage] = useState(1);
  let [images, setImages] = useState([]);
  let [loading, setLoading] = useState(false);
  let [model, setModel] = useState("");
  const pageEnd = useRef();

  const fetchData = async () => {
    try {
      const key = "236b37b2fd3c3f517e9c555b8287d582";
      const url = !callInput.length
        ? `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${key}&per_page=12&page=${page}&format=json&nojsoncallback=1`
        : `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${callInput}&per_page=12&page=${page}&format=json&nojsoncallback=1`;
      let checkSearch = url.includes("search");
      let data = await fetch(url);
      let { photos } = await data.json();
      if (checkSearch) {
        setPage(1);
      }
      checkSearch && page === 1
        ? setImages(photos.photo)
        : setImages([...images, ...photos.photo]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    console.log();
    if (pageEnd.current) observer.observe(pageEnd.current);
  }, [handleObserver]);

  useEffect(() => {
    fetchData();
  }, [callInput, page]);

  if (loading) return <Loader />;
  return (
    <div className="text-center">
      <Modal imageUrl={model} setModal={setModel} />
      <div className="container grid lg:grid-cols-3 gap-2 mx-auto mt-8 sm:grid-cols-1">
        {images.map((image) => {
          return (
            <div class="w-full rounded hover:shadow-2xl">
              <img
                onClick={() =>
                  setModel(
                    `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`
                  )
                }
                className="w-full h-full p-3"
                key={image.id + image.secret}
                src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`}
                alt={image.title}
              />
            </div>
          );
        })}
      </div>
      <div ref={pageEnd}>
        <h3 className="text-center text-2xl text-blue-300">Loading...</h3>
        <Loader />
      </div>
    </div>
  );
};

export default Home;
