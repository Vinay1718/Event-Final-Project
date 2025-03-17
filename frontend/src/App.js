import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar />
    </BrowserRouter>
    </>
  );
}

export default App;
