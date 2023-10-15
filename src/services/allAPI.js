import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// uploading video
export const uploadVideo = async (body)=>{
    // call post http request tp https://locslhost/4000/videos to add video in json server return response to Add component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}

// get all videos
export const getAllVideos = async()=>{
    // call get http request to http://localhost:4000/videos to get videos from json server, return response to view component
   return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a single video
export const getAVideo = async(id)=>{
    // call get http request to http://localhost:4000/videos/id to get videos from json server, return response to videoCard component
return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete a Single video
export const deleteAVideo = async(id)=>{
    // call delete http request to http://localhost:4000/videos/id to remove video from json server, return response to VideoCard component
   return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store video watching history to json server
export const addHistory = async (videoHistory)=>{
    // call post http request tp https://locslhost/4000/history to get all video history from json server return response to videocard component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}

// store video watching history to json server
export const getHistory = async ()=>{
    // call post http request tp https://locslhost/4000/history to get all video history from json server return response to watchhistory component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// store category to json server
export const saveCategory = async (body)=>{
       // call post http request t0 https://locslhost/4000/category to add category in  json server return response to category component
       return await commonAPI("POST",`${serverURL}/categories `,body)
}

// get category from json server
export const getAllCategory = async ()=>{
    // call get http request t0 https://locslhost/4000/category to get all category from  json server return response to category component
    return await commonAPI("GET",`${serverURL}/categories `,"")
}

// delete category from json server
export const deleteCategory = async (id)=>{
    // call delete http request t0 https://locslhost/4000/category to delete category from  json server return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id} `,{})
}

// Update category from json server
export const updateCategory = async (id,body)=>{
    // call put http request to http://localhost:4000/categories/id to update category from json server, return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}

// delete video watching history to json server
export const deleteHistory = async (id) => {
    // call delete http request to http://localhost:4000/history/id to remove a video history from json server, return response to watch History component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

