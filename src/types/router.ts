import { ROUTER_PATHS } from '../enums';

export interface IRouter {
    path: ROUTER_PATHS;
    element: JSX.Element;
}
