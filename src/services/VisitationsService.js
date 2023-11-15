import { BASE_URL } from "./Utils";

const VisitationsService = () => {
  const URL = BASE_URL;
  const LISTENDPOINT = "/v1/visitation/list";
  const CREATEENDPOINT = "/v1/visitation";

  const create = (formData, callback, errorCallback) => {
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
  };

  const getList = (limit, offset, query, callback, erorResponse) => {
    const apiUrl = URL + LISTENDPOINT + "?limit=" + limit + "&offset=" + offset;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.log( error);
        //erorResponse(error);
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
export default VisitationsService;
