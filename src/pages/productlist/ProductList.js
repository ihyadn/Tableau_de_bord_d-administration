import React from "react";
import "./productlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Productrows } from "../../DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function ProductList() {
  const [data, setData] = useState(Productrows);
  console.log(data, Productrows);
  const handelDelete = (id) => {
    const newData = data.filter((product) => product.id !== id);
    setData(newData);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Prodcut",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handelDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
