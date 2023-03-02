export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || `https://robohash.org/${params.row.id}`}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 200,
  },
  {
    field: "city",
    headerName: "City",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithcity ${params.row.city}`}>
          {params.row.city}
        </div>
      );
    },
  },
];

export const movieColumns = [
  { field: "movieid", headerName: "ID", width: 50 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.movieimg} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "country",
    headerName: "Country",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 400,
  },

  {
    field: "genre",
    headerName: "Genre",
    width: 100,
  },
  {
    field: "movielanguage",
    headerName: "Language",
    width: 100,
  },
];
