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

  
//   import { cardLoader, deckLoader } from "./loaders";
 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route index element={<Landing />} loader={deckLoader} />
        <Route path="deck/:id" element={<Deckshow />} loader={cardLoader} />
        <Route
          path="create"
          element={<AddDeckForm />}
          action={createDeckAction}
        />
        <Route path="edit/deck/:id" element={<EditDeckForm />} />
        <Route path="update/:id" action={updateDeckAction} />
        <Route path="delete/:id" action={deleteDeckAction} />
        <Route path="deck/:id/manage-cards" element={<ManageCards />} />
  
        <Route
          path="create/card/:deckId"
          element={<AddCardForm />}
          action={createCardAction}
        />
        <Route path="edit/card/:deckId/:cardId" element={<EditCardForm />} />
        <Route path="update/card/:deckId/:cardId" action={updateCardAction} />
        <Route path="delete/card/:id" action={deleteCardAction} /> */}
      </Route>
    )
  );
  
  export default router;