// import logo from './logo.svg';
// // import './App.css';
// import Login from './pages/Login';
// import Nav from './components/Nav';
// import {BrowserRouter, Route} from "react-router-dom"
// import Home from './pages/Home';
// import Register from './pages/Register';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  <div className="App">
      {/* <Nav/>
    <main className="form-signin w-100 m-auto">
      <BrowserRouter>
       
          <Route path="/" component={Home}/>
          <Route path="/signup" component={Register}/>
          <Route path="/login" component={Login}/>

      </BrowserRouter>

    </main> */}
    <Outlet />
  </div>
  );
}

export default App;
