import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

//Components
import FirstTutorial from './FirstTutorial/FirstTutorial';
import GridTutorial from './GridTutorial/GridTutorial';
import HiddenTutorial from './HiddenTutorial/HiddenTutorial';

const Btn = (to) => { const navigate = useNavigate(); 
    return (<div><button onClick={() => navigate(to.to)}>ir a {to.to}</button></div>); }
const A = () => { return (<div style={{ background: "red", width: 100, height: 100 }}><Btn to="/B" /></div>); }

//TODO: split in Page and Routing
const PageContainer = () => {

    return (
        <Routes>
            <Route
                path='/first-tutorial'
                element={<FirstTutorial />}
            ></Route>

            <Route
                path='/hidden-tutorial'
                element={<HiddenTutorial />}
            ></Route>

            <Route
                path='/'
                element={<GridTutorial />}
            ></Route>

        </Routes>
    );
}

export default PageContainer;