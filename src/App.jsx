// import "./App.css";
// import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Reference from "./pages/master/reference";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { AppRoutes } from "./routes";
import Footer from "./components/Footer";
import SignIn from "./pages/signin";

// function Home() {
//   return <h1>Home</h1>;
// }

// function Categories() {
//   return <h1>Categories</h1>;
// }

// function About() {
//   return <h1>About</h1>;
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for Sign In */}
        <Route path="/signin" element={<SignIn />} />

        {/* Route for other pages */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

// AppLayout.jsx
function AppLayout() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
