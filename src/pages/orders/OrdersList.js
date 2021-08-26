import React from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { ordersData } from "../../DummyData";
import {Link} from "react-router-dom";

export default function OrdersList() {
    const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "orderdate", headerName: "OrderDate", width: 140 },
      {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="d-flex align-items-center">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          );
        },
      },
      {
        field: "Paymentstatus",
        headerName: "Payment status",
        width: 110,
        editable: true,
      },
      {
        field: "Fulfillmentstatus",
        headerName: "Fulfillment status",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/orders/" + params.row.id}>
                <button className="btn btn-success">View</button>
              </Link>
            </>
          );
        },
      },
    ];
    return (
      <div className="" style={{flex:8,margin:"20px 20px"}}>
        <DataGrid
          rows={ordersData}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
}
