import axios from 'axios';

const KEY = 'AIzaSyBfc1idgE8rPf2OWQf-284FquDlCNZu0ZQ';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY
        }
});
