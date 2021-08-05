import React from 'react'
import Chart from '../../components/chart/Chart'
import { DataGrid } from "@material-ui/data-grid";
export default function Sales() {
    const columns = [
    { field: "order date", headerName: "Order Date", width: 90 },
    {
      field: "source",
      headerName: "Source",
      width: 200,
      
    },
    {
      field: "products",
      headerName: "Products",
      width: 200,
      editable: true,
    },
    {
      field: "profit",
      headerName: "Profit",
      width: 110,
      editable: true,
    },
    {
      field: "listing",
      headerName: "Listing",
      width: 160,
    },
    
  ];
    return (
      <div style={{ flex: "8" }}>
        <h3 style={{ fontWeight: "600" }} className="m-3">
          Sales Overview
        </h3>
        <div className="d-flex justify-content-between mx-3 mt-3 ">
          <div className="p-3 d-flex shadow-sm flex-grow-1 flex-column align-items-center">
            <span style={{ fontWeight: "900", fontSize: "40px" }}>0</span>
            <span style={{ fontWeight: "200" }}>Orders Made</span>
          </div>
          <div className="p-3 d-flex shadow-sm flex-grow-1 flex-column align-items-center">
            <span style={{ fontWeight: "900", fontSize: "40px" }}>0</span>
            <span style={{ fontWeight: "200" }}>Units Solde</span>
          </div>
          <div className="p-3 d-flex shadow-sm flex-grow-1 flex-column align-items-center">
            <span style={{ fontWeight: "900", fontSize: "40px" }}>$0,00</span>
            <span style={{ fontWeight: "200" }}>Total Profit</span>
          </div>
        </div>
        <Chart />
        
      </div>
    );
}
