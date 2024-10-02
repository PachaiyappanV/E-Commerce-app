import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <>
        <Navbar />
        <div className="flex w-full">
          <Sidebar />
          <div
            className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 
          text-base"
          >
            <Routes>
              <Route path="/add" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </>
    </div>
  );
}
