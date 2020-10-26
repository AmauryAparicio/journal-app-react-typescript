import LoginScreen from './../components/auth/LoginScreen';
import RegisterScreen from './../components/auth/RegisterScreen';
import ErrorScreen from '../ErrorScreen';
import JournalScreen from './../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { iRoute } from './../misc/Interfaces';
import { routesType } from './../misc/Types';

const { auth, hidden } = routesType

const Routes: Array<iRoute> = [
  {
    path: '/auth',
    component: AuthRouter,
    type: hidden,
    routes: [

      {
        path: "/auth/login",
        component: LoginScreen,
        exact: true
      },
      {
        path: '/auth/register',
        component: RegisterScreen,
        exact: true
      },
    ]
  },
  {
    path: '/',
    component: JournalScreen,
    exact: true,
    type: auth
  },
  {
    path: '*',
    component: ErrorScreen,
  }
]

export default Routes;