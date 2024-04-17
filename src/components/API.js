import axios from 'axios';

export async function fetchData(query, page, setPhotos, setLoading, setError) {
    try {
        setLoading(true);
        const response = await axios.get(`https://api.unsplash.com/search/photos/`, {
            params: {
                client_id: 'sSw2A24lCtgMKKWaGbVZZ3GjpqcpzhpoZDxANpcbn30',
                query: query,
                per_page: 12,
                page: page,
                orientation: 'landscape',
            },
        });
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data.results]);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}
