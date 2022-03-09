import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'http://localhost:5001/bwproject-9e131/us-central1/api',
  // https://console.firebase.google.com/project/calvin-klein-project/overview  
  baseURL: 'https://us-central1-calvin-klein-project.cloudfunctions.net/api',
  
});

export default instance;