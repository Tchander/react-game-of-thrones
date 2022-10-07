import {Navigate} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Houses from '../pages/Houses/Houses';
import House from '../pages/House/House';
import {IRouter} from '../types';
import {ROUTER_PATHS} from '../enums';

export const routes: IRouter[] = [
    { path: ROUTER_PATHS.HOME, element: <Home /> },
    { path: ROUTER_PATHS.HOUSES, element: <Houses /> },
    { path: ROUTER_PATHS.HOUSE, element: <House /> },
    {
        path: ROUTER_PATHS.OTHERS_URLS,
        element: <Navigate to={ROUTER_PATHS.HOME} replace />,
    },
];
