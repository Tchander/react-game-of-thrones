import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTER_PATHS} from '../../../enums';
import cl from './Navigation.module.scss';

const Navigation = () => {
    return (
        <header className={cl.navigation}>
            <nav className={cl.navigation__wrapper}>
                <Link className={cl.navigation__link} to={ROUTER_PATHS.HOME}>Home</Link>
                <div className={cl.navigation__rightBlockLinks}>
                    <Link className={cl.navigation__link} to={ROUTER_PATHS.HOUSES}>Houses</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;