import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./components/Dashboard/AdminDashboard/AddService/AddService";
import AdminOrderList from "./components/Dashboard/AdminDashboard/AdminOrderList/AdminOrderList";
import MakeAdmin from "./components/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/AdminDashboard/ManageServices/ManageServices";
import Feedback from "./components/Dashboard/UserDashboard/Feedback/Feedback";
import Order from "./components/Dashboard/UserDashboard/Order/Order";
import UserOrderList from "./components/Dashboard/UserDashboard/UserOrderList/UserOrderList";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import PageNotFound from "./components/PageNotFound/PageNotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="font-poppins">
          <Switch>
            <Route path="/manage-services">
              <ManageServices />
            </Route>
            <Route path="/make-admin">
              <MakeAdmin />
            </Route>
            <Route path="/add-service">
              <AddService />
            </Route>
            <Route path="/order-list-admin">
              <AdminOrderList />
            </Route>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route path="/order-list-user">
              <UserOrderList />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
