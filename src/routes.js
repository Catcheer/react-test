// import App from "./App";

import Calculator from "./page/Calculator/Calculator";
import Roster from "./page/Roster/Roster";
import Home from './page/Home/Home'
import Todos from './page/Todos'

const routeConfig = [
  { path: "/", component: Home ,exact:true},
  { path: "/calculator", component: Calculator },
  { path: "/roster", component: Roster },
  { path: "/todos", component: Todos }
];

export default routeConfig;
