// import App from "./App";

import Calculator from "./page/Calculator/Calculator";
import Roster from "./page/Roster/Roster";
import Home from './page/Home/Home'
import Todos from './page/Todos'
import Login from './page/Login'
import LifeCyle from './page/LifeCyle'

const routeConfig = [
  { path: "/", component: Home, exact: true },
  { path: "/calculator", component: Calculator },
  { path: "/roster", component: Roster },
  { path: "/todos", component: Todos },
  { path: "/login", component: Login },
  { path: "/LifeCyle", component: LifeCyle },
];

export default routeConfig;
