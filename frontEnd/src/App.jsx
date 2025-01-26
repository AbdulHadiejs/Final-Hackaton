import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/NavBar';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This will render the nested route components */}
      </main>
    </>
  );
}

export default App;
