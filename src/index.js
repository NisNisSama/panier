import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Catalogue from './components/Catalogue.js';
import './style/style.css';


ReactDOM.render(
    <div>

        <Header name='Moi'/>

        <Catalogue/>

    </div>
    , document.getElementById('root')
)




