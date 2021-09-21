import { BrowserRouter, Route, Switch } from "react-router-dom";

import { DashBoard } from "./pages/dashBoard/index"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
