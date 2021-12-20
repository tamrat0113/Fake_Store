import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/bwproject-9e131/us-central1/api',
//   baseURL: 'https://us-central1-project-f9105.cloudfunctions.net/api',
});

export default instance;