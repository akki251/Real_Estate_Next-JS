import axios from 'axios';
// headers: {
//     'X-RapidAPI-Key': '9733081d1amsh7dd8d4b5732a013p1bfe04jsn6ea75eb974b2',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '9733081d1amsh7dd8d4b5732a013p1bfe04jsn6ea75eb974b2',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });

  return data;
};
