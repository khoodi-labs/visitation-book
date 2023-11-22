import { BASE_URL } from "./Utils";

const URL = BASE_URL;
const LISTENDPOINT = "/v1/request/visit/list";
const CREATEENDPOINT = "/v1/request/visit";



const RequestService = () => {

  const create = (formData, callback) => {
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
       // errorCallback(error);
      });
  };

  const getList = (limit, offset, query, callback) => {
    const apiUrl = URL + LISTENDPOINT + "?limit=" + limit + "&offset=" + offset;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
       // erorResponse(error);
      });
  };

  const getByID = (id) => {
    //get item by id
  };

  const archive = (id) => {
    //send archive data
  };

  return {
    list: getList,
    get: getByID,
    archive: archive,
    add: create,
  };
};
export default RequestService;
