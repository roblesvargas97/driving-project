import React from 'react';
import { Routes , Route , BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import initialState from '../initialState';
import './App.scss'
import Context from '../Context/Context';
const App = () => {

    const initialState1 = initialState();

    return (
        <Context.Provider value={initialState1}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Context.Provider>

        
    );
}

export default App;