import React from 'react';
import { Route, Routes } from "react-router-dom";

//Components
import FirstTutorial from './FirstTutorial/FirstTutorial';
import GridTutorial from './GridTutorial/GridTutorial';
import HiddenTutorial from './HiddenTutorial/HiddenTutorial';
import UdemyTutorial from './UdemyTutorial/UdemyTutorial';

//TODO: split in Page and Routing
const PageContainer = () => {

    return (
        <Routes>
            <Route
                path='/first-tutorial'
                element={<FirstTutorial />}
            ></Route>

            <Route
                path='/grid-tutorial'
                element={<GridTutorial />}
            ></Route>

            <Route
                path='/hidden-tutorial'
                element={<HiddenTutorial />}
            ></Route>

            <Route
                path='/udemy-tutorial'
                element={<UdemyTutorial />}
            ></Route>

            <Route
                path='/'
                element={<GridTutorial />}
            ></Route>

        </Routes>
    );
}

export default PageContainer;