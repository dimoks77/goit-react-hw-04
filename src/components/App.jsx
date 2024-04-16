import ImageGallery from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { SearchBox } from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState({
    items: [],
    loading: false,
    error: false,
  });

  const searchPhotos = async (newQuery) => {
    setQuery(newQuery); // установка нового поиска
    setPage(1); // ресет формы
    setPhotos({
      items: [],
      loading: false,
      error: false,
    });
  };

  const loadMore = () => {
    console.log("loadMore", page);
    setPage(page + 1);
  };

  useEffect(() => {
    // useEffect не может быть ассинхронным. Поэтому внутри создается асинхронная функция
    if (query === "") {
      return;
    }
  
    async function fetchData() {
      try {
        setPhotos((prevPhotos) => ({ ...prevPhotos, loading: true, error: false }));
        const response = await axios.get(`https://api.unsplash.com/photos/`, {
          params: {
            // client_id: "oHSngIMzDXZCbwhqwUHSZli2mFEs0n8X8x8LNOmGO_M",
            client_id: "GjwKFQOqKftQmeZ6ydrvUZ_gTeXWQf7fBqrIxA-HNow",
            query: query,
            per_page: 12,
            page: page,
            orientation: "landscape",
          },
        });
        setPhotos((prevPhotos) => ({
          ...prevPhotos,
          items: [...prevPhotos.items, ...response.data],
        }));
      } catch (error) {
        setPhotos((prevPhotos) => ({ ...prevPhotos, error: true }));
      } finally {
        setPhotos((prevPhotos) => ({ ...prevPhotos, loading: false }));
      }
    }
      fetchData();
  }, [query, page]);
  

  return (
    <>
      <SearchBox onSearch={searchPhotos} />
      {photos.loading && <b>Loading photos, please wait...</b>}
      {photos.error && <b>Oops! There was error, please try again!</b>}
      {photos.items.length > 0 && <ImageGallery photos={photos.items} />}
      {/* {photos.items.length > 0 && <LoadMoreBtn loadMore={loadMore} />} */}
      <LoadMoreBtn loadMore={loadMore} />
    </>
  );
};

export default App;
