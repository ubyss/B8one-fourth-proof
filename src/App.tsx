import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes";
import Modal from "./components/Modal";
import UserContextProvider from "./components/Contexts/UserContext";


function App() {

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
      <Modal />
    </UserContextProvider>
  )
}

export default App;
