import { BASE_URL } from "./Utils";

const RequestService = () => {
  const url = BASE_URL;
  const endpoint = "/v1/request/visit/list";

  const getList = (limit, offset, query, callback,erorResponse) => {
    const apiUrl = url + endpoint + "?limit=" + limit + "&offset=" + offset;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => { 
        callback(data);
      })
      .catch((error) => {
      
        console.error("Error fetching data:", error);
        erorResponse(error);
      });
  };

  const getByID = (id) => {
    //get item by id
  };

  const archive = (id) => {
    //send archive data
  };

  const save = (data) => {
    //todo: send save data
  };

  return {
    list: getList,
    get: getByID,
    archive: archive,
    save: save,
  };
};
export default RequestService;
