import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';


// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import SinglePage from "./pages/Singlepage";
import Homepage from "./pages/Homepage";
import Singlepage from "./pages/Singlepage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path="/singleshow/:id" Component={Singlepage} />
          </Routes>
      
      
      </BrowserRouter>
  );
};

export default App;
/*
<div className="container">
       <Routes>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route path="/singleshow/:id" component={Singlepage} />
          </Routes>
      </div>*/ 