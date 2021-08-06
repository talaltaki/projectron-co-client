import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddService from "./components/Dashboard/AdminDashboard/AddService/AddService";
import MakeAdmin from "./components/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/AdminDashboard/ManageServices/ManageServices";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Feedback from "./components/Dashboard/UserDashboard/Feedback/Feedback";
import Order from "./components/Dashboard/UserDashboard/Order/Order";
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
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/order/:id">
              <Order />
            </PrivateRoute>

            <PrivateRoute path="/order-list">
              <OrderList />
            </PrivateRoute>

            <PrivateRoute path="/feedback">
              <Feedback />
            </PrivateRoute>

            <PrivateRoute path="/add-service">
              <AddService />
            </PrivateRoute>

            <PrivateRoute path="/make-admin">
              <MakeAdmin />
            </PrivateRoute>

            <PrivateRoute path="/manage-services">
              <ManageServices />
            </PrivateRoute>

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
