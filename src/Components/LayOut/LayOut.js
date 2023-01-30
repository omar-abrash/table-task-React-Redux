import FilterationForm from "../FilterationForm/FilterationForm";
import Navigation from "../Navigation/Navigation";

import classes from "./LayOut.module.css";

const LayOut = (props) => {
  return (
    <div className={classes.main}>
      <header>
        <h1>React/Redux-Version</h1>
        <FilterationForm />
      </header>
      <main>{props.children}</main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
};

export default LayOut;
