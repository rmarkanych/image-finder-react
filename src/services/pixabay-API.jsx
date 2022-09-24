import axios from 'axios';

const fetchPictures = async (query, page) => {
  const key_API = '29467934-4572e40f44c288e7a55931bb1';
  const url = 'https://pixabay.com/api/';
  const per_page = 12;
  const params = {
    key: key_API,
    q: query,
    per_page,
    page,
  };
  return await axios
    .get(url, { params })
    .then(res => res.data.hits)
    .catch(error => console.log(error));
};
export default fetchPictures;
