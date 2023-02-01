import Header from "./components/Header";
import Information from "./pages/Information";
import TopPage from "./pages/TopPage";
import OtherHeader from "./components/OtherHeader"
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const getHeader = () =>{
    console.log(location.pathname)
    return location.pathname === "/morguchifoods" ? <Header/>: <OtherHeader/>;
  }
  return (
    <div className="App">
      {getHeader()}
      <Routes>
        <Route path="/morguchifoods/" element={<TopPage/>}></Route>
        <Route path="/morguchifoods/information" element={<Information/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
