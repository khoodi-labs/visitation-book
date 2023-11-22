import { BASE_URL } from "./Utils";

const URL = BASE_URL
const LISTENDPOINT = "/v1/profile/list";
const CREATEENDPOINT = "/v1/profile";


const ProfileService = () =>{ 
    const create=(formData,callback,errorCallback)=>{
      const apiUrl = URL + CREATEENDPOINT; 
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.table(data);
          callback(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          errorCallback(error);
        });


    }


    const getList =(limit, offset, profileType,callback,errorCallback)=>{
        const apiUrl = URL + LISTENDPOINT + "?limit=" + limit + "&offset=" + offset+ "&profileType=" + profileType;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => { 
            console.table(data);
            callback(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error.message);
            errorCallback(error)
          });
    }

    return{
        list:getList,
        add:create
    }

}
export default ProfileService;