import { BASE_URL } from "./Utils";

const ProfileService = () =>{
    const url = BASE_URL
    const endpoint = "/v1/profile/list";


    const getList =(limit, offset, profileType,callback)=>{
        const apiUrl = url + endpoint + "?limit=" + limit + "&offset=" + offset;+ "&profileType=" + profileType;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => { 
            callback(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    }

    return{
        list:getList
    }

}
export default ProfileService;