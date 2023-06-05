import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import {Layout} from 'antd';
import './css/index.css';
import {PageHeader} from "./components/header";



const apiUrl = 'http://localhost:8000/api/datapoints';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );
    })
    .catch(error => {
        console.error('Error fetching API data:', error);
    });

reportWebVitals();


const {Header} = Layout;
const root = createRoot(document.getElementById("root")!);
root.render(
    <Layout>
        <Header className='header'>
            <PageHeader/>
        </Header>
    </Layout>
);
