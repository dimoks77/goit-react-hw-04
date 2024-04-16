import { useEffect, useState } from "react";
import axios from "axios";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { SearchBox } from "./SearchBar/SearchBar";
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const searchPhotos = async (newQuery) => {
    setQuery(newQuery); 
    setPage(1); 
    setLoading(false); 
    setError("");
    setPhotos([]); 
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
  
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.unsplash.com/photos/`, {
          params: {
            client_id: "4Ha1lW10vYE2G9EauE11B4hkWzNMh1SuojsbWDZ2Kl8",
            query: query,
            per_page: 12,
            page: page,
            orientation: "landscape",
          },
        });
        // setPhotos(response.data);
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);
  
  return (
    <>
      <SearchBox onSearch={searchPhotos} />
      {/* {loading && <Loader />} */}
      {/* {error && <Loader error={error.message} />} */}
      {photos.length > 0 && <ImageGallery photos={photos} /> }
      {photos.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
    </>
  );
};

export default App;
