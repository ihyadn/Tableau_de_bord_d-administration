import React from 'react'
import './userlist.css'
import { DataGrid } from '@material-ui/data-grid'
import {DeleteOutline} from '@material-ui/icons'
import {Userrows} from '../../DummyData'
import {Link} from 'react-router-dom'
import { useState } from 'react'

export default function UserList() {
    const [data,setData]=useState(Userrows)
    console.log(data,Userrows)
    const handelDelete=(id)=>{
        const newData=data.filter(user=>user.id!==id)
        setData(newData)
    }
    
    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
            </div>
          );
        },
      },
      {
        field: "email",
        headerName: "Email",
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
        field: "transaction",
        headerName: "Transaction Voulme",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/users/" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={()=>handelDelete(params.row.id)}
             
              />
            </>
          );
        },
      },
    ];

    return (
      <div className="userlist">
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
