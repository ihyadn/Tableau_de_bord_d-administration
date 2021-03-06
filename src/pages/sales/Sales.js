import React from 'react'
import Chart from '../../components/chart/Chart'
import { SalesData } from "../../DummyData";
import './sales.css'
export default function Sales() {
    
    return (
      <div style={{ flex: 8 }}>
        <h3 style={{ fontWeight: "600" }} className="m-3">
          Sales Overview
        </h3>
        <div className="d-flex top justify-content-between mx-3 mt-3 ">
          <div className="p-3 topElement d-flex shadow-sm flex-grow-1 flex-column align-items-center">
            <span style={{ fontWeight: "900", fontSize: "40px" }}>0</span>
            <span style={{ fontWeight: "200" }}>Orders Made</span>
          </div>
          <div className="p-3 d-flex topElement shadow-sm flex-grow-1 flex-column align-items-center">
            <span style={{ fontWeight: "900", fontSize: "40px" }}>0</span>
            <span style={{ fontWeight: "200" }}>Units Solde</span>
          </div>
          <div className="p-3 d-flex topElement shadow-sm flex-grow-1 flex-column align-items-center">
            <span style={{ fontWeight: "900", fontSize: "40px" }}>$0,00</span>
            <span style={{ fontWeight: "200" }}>Total Profit</span>
          </div>
        </div>
        <Chart
          data={SalesData}
          title="Sales Analytics"
          grid
          dataKey="Sales"
        />
      </div>
      
    );
}
