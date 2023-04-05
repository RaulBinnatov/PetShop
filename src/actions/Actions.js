import axios from "axios";

export const getVideos = async ()=> {
    return await axios.get('./cont.json')
    .then(resp=>{
        console.log(resp.data)
       return resp.data
    }).catch(err=>{console.log(err.response)})
}

export const getInfo = async ()=> {
    return await axios.get('./cont2.json')
    .then(resp=>{
        console.log(resp.data)
       return resp.data
    }).catch(err=>{console.log(err.response)})
}