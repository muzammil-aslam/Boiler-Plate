import logo from "./logo.svg";
import "./App.css";
import Approuters from "./config/route/router";
import Card from "./component/card";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Approuters />
      </Provider>
    </div>
  );
}

export default App;
