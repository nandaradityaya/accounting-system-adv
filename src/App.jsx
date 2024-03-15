// import "./App.css";
// import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
// import Reference from "./pages/master/reference";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { AppRoutes } from "./routes";

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
  // const [count, setCount] = useState(0)

  return (
    // <div className="wrapper">
    //   <Sidebar />
    //   <Header />
    //   <div className="page-wrapper">
    //     <div className="page-content"></div>
    //   </div>
    // </div>
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Header />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
