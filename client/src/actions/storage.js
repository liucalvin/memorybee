const axios = require('axios').default;

const baseUrl = 'http://localhost:5000/api/users'

export const loadWords = async () => {
  try {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const getWordsQuery = {
      method: 'GET',
      url: `${baseUrl}/${userId}/words`,
      headers: { 'auth-token': token }
    };
    
    const words = await axios.request(getWordsQuery);
    console.log(words);
    return words.data
  } catch (error) {
    return error.message;
  }
}

export const addWord = async (wordToAdd) => {
  try {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const addWordQuery = {
      method: 'POST',
      url: `${baseUrl}/${userId}/words`,
      headers: { 'auth-token': token },
      data: {
        word: wordToAdd
      }
    };

    const word = await axios.request(addWordQuery);
    return word;
  } catch (error) {
    return error.response.data;
  }
}