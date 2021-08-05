import React from 'react'
import './newuser.css'
export default function NewUser() {
    return (
        <div className="newuser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Full Name"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="email"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="Phone"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="address"/>
                </div>
                <div className="newUserItem">
                    <label>birthdate</label>
                    <input type="text" placeholder="jj/mm/aa"/>
                </div>
                <div className="newUserBottom">
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}
