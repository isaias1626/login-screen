import { ModalProvider } from "./pages/context/modal-context";
import Login from "./pages/login/page";

const Home = () => {
  return ( 
    <ModalProvider>
      <Login />
    </ModalProvider>
  );
}

export default Home;