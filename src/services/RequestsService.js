const RequestService = () => {
  const url = "http://localhost:9000";
  const endpoint = "/v1/request/visit/list";

  const getList = (limit, offset, query, callback) => {
    const apiUrl = url + endpoint + "?limit=" + limit + "&offset=" + offset;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data in the state
        callback(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
