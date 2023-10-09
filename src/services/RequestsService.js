const RequestService = () => {
  const data = [
    {
      id: "1",

      host: {
        id: 1,
        firstName: "Rogers",
        lastName: "Muyinda",
        Email: "Login Notification Message",
      },
      guest: {
        id: 10,
        firstName: "Rita",
        lastName: "Nabirye",
        Email: "Login Notification Message",
      },
      status: "pending",
      dateCreated: "05,10,2023",
      visitationDate: "05,10,2023",
      visitationType: "Online",
      details: [
        {
          link: "url",
        },
      ],
    },
    {
      id: "3",

      host: {
        id: 1,
        firstName: "Andreas",
        lastName: "Blasio",
        Email: "Login Notification Message",
      },
      guest: {
        id: 10,
        firstName: "Bisaso",
        lastName: "Bilingi",
        Email: "Login Notification Message",
      },
      status: "pending",
      dateCreated: "05,10,2023",
      visitationDate: "05,10,2023",
      visitationType: "Physical",
      details: [
        {
          link: "url",
        },
      ],
    },

    {
      id: "2",

      host: {
        id: 1,
        firstName: "Juliana",
        lastName: "Bilogot",
        Email: "Login Notification Message",
      },
      guest: {
        id: 10,
        firstName: "Mistil",
        lastName: "Kanyama",
        Email: "Login Notification Message",
      },
      status: "active",
      dateCreated: "05,10,2023",
      visitationDate: "05,10,2023",
      visitationType: "Online",
      details: [
        {
          link: "url",
        },
      ],
    },
  ];
  const url = "localhost:9000/v1/request/visit/list?limit=10&offset=0";

  const getList = (limit, offset, query) => {
    return data;
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
