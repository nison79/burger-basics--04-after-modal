import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-5fe3e-default-rtdb.firebaseio.com/'
});

export default instance;