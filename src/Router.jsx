import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
