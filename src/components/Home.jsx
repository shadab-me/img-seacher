import { useEffect, useState } from "react";

const Home = () => {
  const [images, setImages] = useState([]);
  const fetchData = async (url) => {
    console.log(url);
    let data = await fetch(url);
    let { photos } = await data.json();
    setImages(photos.photo);
  };
  useEffect(() => {
    const key = "236b37b2fd3c3f517e9c555b8287d582";
    const secret = "1a5e0b140606ca66";
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${key}&tags=nyc&per_page=100&page=1&format=json&nojsoncallback=1`;
    fetchData(url);
  }, []);

  return (
    <div className="container grid grid-cols-3 gap-2 mx-auto mt-8">
      {images.map((image) => {
        return (
          <div class="w-full rounded hover:shadow-2xl">
            <img
              className="w-full h-full p-3"
              src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`}
              alt={image.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
