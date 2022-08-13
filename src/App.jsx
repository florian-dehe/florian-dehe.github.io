import { Outlet } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div style={{ height:"100vh" }}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
