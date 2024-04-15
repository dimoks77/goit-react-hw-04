import ImageGallery from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./LoadMoreBtn/LoadMoreBtn";
import { SearchBox } from "./SearchBar/SearchBar";
import { useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [photos, setPhotos] = useState({ 
          items: [],
          loading: false,
          error: false 
      });

  const searchPhotos = async query => {
      try {
      setPhotos({ ...photos, loading: true, error: false });
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=oHSngIMzDXZCbwhqwUHSZli2mFEs0n8X8x8LNOmGO_M&query=${query}`
      );

      setPhotos(prevPhotos => ({ ...prevPhotos, items: response.data }));
    } catch (error) {
      setPhotos(prevPhotos => ({ ...prevPhotos, error: true }));
    } finally {
      setPhotos(prevPhotos => ({ ...prevPhotos, loading: false }));
    }
  };


  return (
    <>
      <SearchBox onSearch={searchPhotos} />
      {photos.loading && <b>Loading photos, please wait...</b>}
      {photos.error && ( <b>Oops! There was error, please try again!</b>)}
      {photos.items.length > 0 && <ImageGallery photos={photos.items} />}
      <LoadMoreBtn />
    </>
  );
};

export default App;