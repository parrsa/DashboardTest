import React from 'react';
import './App.css';
import routes, {AllRoutes} from "./routes/Routes";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import theme from './assets/theme/theme';
import PageLayout from './components/layouts/mainLayout/index';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis'


function App() {
    const getRoutes = (AllRoute: AllRoutes[]): any => AllRoute.map((route) => {
        if (route.route) {
            return (
                <Route path={route.route} element={<>{route.component}</>}/>
            )
        }
        return null
    })
    return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        {getRoutes(routes)}
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
    );
}

export default App;
