import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Header from "./componant/header/Header";
import Footer from "./componant/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
