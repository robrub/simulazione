import axios from "axios";
const instance = axios.create({
    baseURL: "http://www.omdbapi.com/?apikey=efc30d58&",
})
export const getMovies = async () => {
    const response = await instance.get("t=indiana+jones")
    return response;
}

export const getDetailsMovie = async (id:number) => {
    const response = await instance.get("i="+id)
    return response;
}