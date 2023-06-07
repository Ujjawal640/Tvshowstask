import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from "react-router-dom";


// Components
import Navbar from "./components/Navbar";

// Pages
import Homepage from "./pages/Homepage";
import Singlepage from "./pages/Singlepage";
import Form from "./pages/Form";
import Done from "./pages/Done";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path="/singleshow/:id" Component={Singlepage} />
          <Route path="/bookticket/:id" Component={Form} />
          <Route path="/done" Component={Done} />
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