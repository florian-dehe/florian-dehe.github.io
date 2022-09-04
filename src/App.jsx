import { Outlet } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ height:"100vh" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
