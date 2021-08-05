import React from 'react'
import './newproduct.css'
export default function NewProduct() {
    return (
      <div className="newproduct">
        <h1 className="newProductTitle">New Product</h1>
        <form className="newProductForm">
          <div className="newProductItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="newProductItem">
            <label>Name</label>
            <input type="text" placeholder="name" />
          </div>
          <div className="newProductItem">
            <label>Stock</label>
            <input type="text" placeholder="stock" />
          </div>
          <div className="newProductItem">
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          
        <button className="newProductButton">Create</button>
        </form>
      </div>
    );
}
