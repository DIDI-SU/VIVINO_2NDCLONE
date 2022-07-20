import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Modal from './components/Modal/Modal';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { ModalProvider } from './Contexts/Modal/ModalContext';

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Modal>
          <Login />
        </Modal>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
