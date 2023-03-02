import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Datatable = ({columns}) => {
  const [data, setData]= useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchdata = async () => {
     await fetch(`http://localhost:3000/api/${path}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
    fetchdata();
  }, [path]);
  const handleDelete = (movieid) => {
    try{  
      fetch(`http://localhost:3000/api/movies/${movieid}`, {
        method: "delete",
      });
      setData(data.filter((item) => item.movieid !== movieid));
    }catch(err){

    }
    
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {path === "movies" && 
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.movieid)}
            >Delete

              
            </div>}
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        ADD NEW USER
        <Link
          to={`/admin/${path}/new`}
          className="link1"
          style={{ textDecoration: "none" }}
        >
          ADD NEW
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
        getRowId={(row) => {
          if (path === "users"){
            return row.id;
          }else{
            return row.movieid;
          }
        }}
      />
    </div>
  );
};
