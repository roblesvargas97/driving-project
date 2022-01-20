import React from 'react';
import { Routes , Route , BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import './App.scss'
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;