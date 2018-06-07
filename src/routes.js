// import App from "./App";

import Calculator from "./Calculator";
import Roster from "./Roster";
import Home from './Home'

const routeConfig = [
  { path: "/", component: Home ,exact:true},
  { path: "/calculator", component: Calculator },
  { path: "/roster", component: Roster }
];

export default routeConfig;
