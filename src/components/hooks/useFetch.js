import { useState, useEffect } from "react";

const useFetch = (userInput, text = null, page = null) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const key = "236b37b2fd3c3f517e9c555b8287d582";
    const url = !userInput.length
      ? `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${key}&tags=cat&per_page=10&page=1&format=json&nojsoncallback=1`
      : `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${key}&tags=cat&per_page=12&page=5&format=json&nojsoncallback=1`;

    const fetchData = async () => {
      let data = await fetch(url);
      let { photos } = await data.json();
      setImages(photos.photo);
    };
    fetchData();
  }, [userInput, text, page]);

  return images;
};

export default useFetch;
