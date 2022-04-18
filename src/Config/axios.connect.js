import axios from 'axios';

export default axios.create({
    baseURL: 'https://git.heroku.com/mysterious-everglades-36385',
    //timeout: 2000,
    //headers: "X-Custom-Header": "foobar"
})


