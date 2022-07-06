import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Modal from './components/Modal/Modal';
import { ModalProvider } from './Contexts/Modal/ModalContext';
function App() {
  return (
    <ModalProvider>
      <Modal>
        <Login />
      </Modal>
      <Header />
    </ModalProvider>
  );
}

export default App;
