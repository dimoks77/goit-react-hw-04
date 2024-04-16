import axios from 'axios';
import toast from 'react-hot-toast';

export async function fetchData(query, page, setPhotos, setLoading, setError) {
    try {
        setLoading(true);
        const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
            params: {
                client_id: '4Ha1lW10vYE2G9EauE11B4hkWzNMh1SuojsbWDZ2Kl8',
                query: query,
                per_page: 12,
                page: page,
                orientation: 'landscape',
            },
        });
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
    } catch (error) {
        setError(error.message);
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
}
