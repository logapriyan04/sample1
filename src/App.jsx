// import "./App.css";

import Home from "./Components/Home";

import "./Styles/Style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Firstpage from "./Components/Firstpage";

import Secondprofile from "./Components/Secondprofile";
import Ajith from "./Components/ajith";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/sample1" Component={Firstpage}></Route>

            <Route path="/ajith" Component={Ajith}></Route>
            <Route path="/Secondprofile" Component={Secondprofile}></Route>
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;