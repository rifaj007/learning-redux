import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <main className="container px-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
