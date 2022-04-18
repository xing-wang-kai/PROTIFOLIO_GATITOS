import axios from 'axios';

export default axios.create({
    baseURL: 'host=mysterious-everglades-36385.herokuapp.com',
    //timeout: 2000,
    //headers: "X-Custom-Header": "foobar"
})


