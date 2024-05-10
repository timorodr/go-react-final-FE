import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import App from "./App";
  import Dashboard from "./pages/Dashboard";
  import Register from "./pages/Register";
  import Login from "./pages/Login";
  import './App.css';
import Entries from "./components/allMedEntries";
import OpenAIDrugInteraction from "./pages/OpenAIDrugInteraction";
import { loginAction, signupAction } from "./actions";
import Landing from "./pages/Landing";


 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/signup" element={<Register/>} action={signupAction}/>
        <Route path="/login" element={<Login/>} action={loginAction}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/user/entry/create/:id" element={<Entries/>}/>
        <Route path="/druginteraction" element={<OpenAIDrugInteraction/>}/>
      </Route>
    )
  );
  
  export default router;