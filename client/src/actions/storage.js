const axios = require('axios').default;

const baseUrl = 'http://localhost:5000/api/users'

export const loadWords = async () => {
  try {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const wordsQuery = {
      method: 'GET',
      url: `${baseUrl}/${userId}/words`,
      headers: { 'auth-token': token }
    };
    
    const words = await axios.request(wordsQuery);
    console.log(words);
    return words.data
  } catch (error) {
    return error.message;
  }
}