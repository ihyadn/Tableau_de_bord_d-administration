import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
import Sales from "./pages/sales/Sales";
import { useState, useEffect } from "react";
import OrdersList from "./pages/orders/OrdersList";
import OrderDetails from "./pages/orders/OrderDetails";
function App() {
  const [sidebaropen, setsidebaropen] = useState(false);
  const [id, setid] = useState(JSON.parse(localStorage.getItem("admin-id")));
  useEffect(() => {
    localStorage.setItem("admin-id", JSON.stringify(id));
  }, [id]);
  useEffect(() => {
    setid(JSON.parse(localStorage.getItem("admin-id")));
  }, []);
  return id === null ? (
    <Login setid={setid} />
  ) : (
    <Router>
      <div className="App">
        <Topbar sidebaropen={sidebaropen} setsidebaropen={setsidebaropen} />
        <div className="Container">
          <Sidebar sidebaropen={sidebaropen} setsidebaropen={setsidebaropen} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
            <Route path="/users/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route exact path="/products">
              <ProductList />
            </Route>
            <Route path="/products/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
            <Route path="/sales">
              <Sales />
            </Route>
            <Route exact path="/orders">
              <OrdersList />
            </Route>
            <Route path="/orders/:id">
              <OrderDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
