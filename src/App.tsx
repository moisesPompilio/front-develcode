import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './page/Home/Home';
import { store } from './store/store';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Alert } from './components/Alert/Alert';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
          <Alert />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
