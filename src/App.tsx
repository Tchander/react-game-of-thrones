import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/_common/Navigation/Navigation';
import { routes } from './router';

function App() {
    return (
        <>
            <Navigation />
            <main className={'main'}>
                <Routes>
                    {routes.map((route) => (
                        <Route path={route.path} element={route.element} key={route.path} />
                    ))}
                </Routes>
            </main>
        </>
    );
}

export default App;
