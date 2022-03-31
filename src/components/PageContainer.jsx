import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

//Components
import FirstTutorial from './FirstTutorial/FirstTutorial';
import GridTutorial from './GridTutorial/GridTutorial';
import HiddenTutorial from './HiddenTutorial/HiddenTutorial';
import NodeApiRest from './NodeApiRest/NodeApiRest';
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
                path='/node-api-rest'
                element={<NodeApiRest />}
            ></Route>

        </Routes>
    );
}

export default PageContainer;