import './App.css';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import ContactForm from './Components/Contactform';
import store from './Store';
import { Provider } from "react-redux";
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ContactForm}   />
        </Switch>
      </BrowserRouter>
    </Provider>
    </> 
  );
}

export default App;
