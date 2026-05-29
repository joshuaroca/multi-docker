import "./App.css";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home {}</Link>
        <Link to="/otherpage">Other Page</Link>

        <Switch>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
