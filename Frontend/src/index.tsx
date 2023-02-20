import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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
