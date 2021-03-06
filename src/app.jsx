import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}></Login>
          </Route>
          <Route path="/maker">
            <Maker FileInput={FileInput} authService={authService}></Maker>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
