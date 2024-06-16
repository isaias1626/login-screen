import { ModalProvider } from "./pages/context/modal-context";
import Login from "./pages/login/login";

const Home = () => {
  return ( 
      <ModalProvider>
        <Login />
      </ModalProvider>
  );
}

export default Home;