import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from "../../pages/Home";
import FristSetps from "../../pages/FristSteps";
import LastSteps from "../../pages/LastSteps";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <Router>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/frist-steps">Frist steps</Link>
        </li>
        <li className={styles.item}>
          <Link to="/last-steps">Last steps</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/frist-steps" element={<FristSetps />} />

        <Route path="/last-steps" element={<LastSteps />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
