import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

//Constants
import LinkName from './constants/linkName';

/**
 * Screens
 */
const Login = React.lazy(() => import("./screens/Login/Login"));
const Home = React.lazy(() => import("./screens/Layout/Layout"));





function App() {
    /**
     * render template
     */
    return (
        <React.Suspense fallback={<>...</>}>
            <Routes>
                <Route path={LinkName.LOGIN} element={<Login />}></Route>
                <Route path={LinkName.HOME} element={<Home />}></Route>
            </Routes>
        </React.Suspense>
    );
}

export default App;
