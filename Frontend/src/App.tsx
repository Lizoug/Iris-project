import 'antd/dist/reset.css';
import './App.css';
import React from 'react';
import {PageHeader} from "./components/header"
import PageFooter from "./components/footer";
import Routing from "./components/router";


export default function App() {

    return (
        <div>
            <PageHeader/>
            <Routing/>
            <PageFooter/>

        </div>
    );
}
