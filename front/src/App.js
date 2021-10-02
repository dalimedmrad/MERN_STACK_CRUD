import { useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./App.css";
import Add from "./Components/Add";
import ConatctList from "./Components/ConatctList";
import { toggleFalse } from "./JS/actions/edit";

const App = () => {
  const  dispatch = useDispatch();
  return (
    
    <div className="App">
      <div className="bt"> 
        <Link to="/add"><Button inverted color="blue" onClick={()=>dispatch(toggleFalse())}>
          Add Contact
        </Button></Link>
        <Link to="/"><Button inverted color="blue">
          Contacts List
        </Button></Link>
      </div>
      
      <Switch>
        <Route path="/" exact component={ConatctList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>  
    </div>
  
  );
};

export default App;
