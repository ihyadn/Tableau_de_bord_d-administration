import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productlist/ProductList'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Product from './pages/product/Product'
import NewProduct from './pages/newproduct/NewProduct'
import Sales from './pages/sales/Sales'
function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="Container">
          <Sidebar />
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
