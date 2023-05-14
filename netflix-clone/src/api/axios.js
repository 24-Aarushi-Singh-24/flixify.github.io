import axios from "axios";

/**base url to make requests*/
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

// instance.get("/foo-bar"); gives : "https://api.themoviedb.org/3/foo-bar"

export default instance;