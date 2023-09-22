import "./styles/reset.css"
import "./styles/global.css"
import TopNav from "./components/TopNav/TopNav";
import Home from "./pages/Home/Home";
import GlobalStock from "./pages/GlobalStocks/GlobalStock";


function App(){
  return <div className="layout">
    <TopNav/>
    {/* <Home/> */}
    <GlobalStock/>
  </div>;
}

export default App;