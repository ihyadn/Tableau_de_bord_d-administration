import React from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { Productrows } from "../../DummyData";
import {Link} from 'react-router-dom'
import './orderdetails.css'
export default function OrderDetails() {
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
            </>
          );
        },
      },
    ];
    return (
      <div className="order">
        <div className="orderTitleContainer">
          <h1 className="orderTitle">Edit order</h1>
        </div>
        <div className="orderContainer">
          <div className="orderShow">
            <div className="orderShowBottom">
              <span className="orderShowTitle">Order Id</span>
              <div className="orderShowInfo">
                <span className="orderShowInfoTitle">1</span>
              </div>
              <span className="orderShowTitle">Product Id</span>
              <div className="orderShowInfo">
                <span className="orderShowInfoTitle">9</span>
              </div>
              <span className="orderShowTitle">Product Name</span>
              <div className="orderShowInfo">
                <span className="orderShowInfoTitle">Apple airpods</span>
              </div>
              <span className="orderShowTitle">Product Quantity</span>
              <div className="orderShowInfo">
                <span className="orderShowInfoTitle">10</span>
              </div>
              <span className="orderShowTitle">UnitCost</span>
              <div className="orderShowInfo">
                <span className="orderShowInfoTitle">$120</span>
              </div>
              <span className="orderShowTitle">Total Price</span>
              <div className="orderShowInfo">
                <span className="orderShowInfoTitle">$1200</span>
              </div>
            </div>
            <img src="https://th.bing.com/th/id/OIP.0U2325wshPJtg_Kp8aHvdwHaHa?w=158&h=182&c=7&o=5&pid=1.7" alt="" className="productimg"/>
          </div>
          <div className="orderUpdate">
            <span className="orderUpdateTitle">Edit</span>
            <div className="orderUpdateRight">
              <label>Payment status</label>
              <select name="Payment status" id="Payment status">
                <option value="Queued">Queued</option>
                <option value="Accepted">Accepted</option>
                <option value="Chargeable">Chargeable</option>
                <option value="Declined ">Declined </option>
                <option value="Canceled">Canceled</option>
              </select>
              <label>Fulfillment status</label>
              <select name="Fulfillment status" id="Fulfillment status">
                <option value="New">New</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered  ">Delivered  </option>
                <option value="Will not deliver">Will not deliver</option>
              </select>
              <button className="orderUpdateButton">Update</button>
            </div>
          </div>
        </div>
      </div>
    );
}
