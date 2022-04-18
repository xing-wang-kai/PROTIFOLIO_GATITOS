import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:3001',
    //timeout: 2000,
    //headers: "X-Custom-Header": "foobar"
})


