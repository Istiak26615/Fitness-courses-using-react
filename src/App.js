import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home';
import Error from './Component/Error/Error';
import MenuBar from './Component/Menubar/Menubar';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Trainer from './Component/Trainer/Trainer';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';



function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <MenuBar></MenuBar>
       <Switch>
       <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/trainer">
              <Trainer></Trainer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
