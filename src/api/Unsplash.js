import Axios from 'axios'

export default Axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:
        'Client-ID tYoqdp9rukcE-gNnJocSd6W2n0WYCcwOSlWqzWO262g'
    }
});