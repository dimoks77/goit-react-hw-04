
// id 590287

// API Key oHSngIMzDXZCbwhqwUHSZli2mFEs0n8X8x8LNOmGO_M

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY


import axios from 'axios';

export const fetchArticles = async (query, page) => {
  const response = await axios.get(`http://hn.algolia.com/api/v1/search`, {
    params: { query, page, hitsPerPage: 10 },
  });

  return response.data.hits;
};