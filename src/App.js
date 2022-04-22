import './App.css';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import ContactForm from './Components/Contactform';
import store from './Store';
import { Provider } from "react-redux";

function App() {
  return (
    <>
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
