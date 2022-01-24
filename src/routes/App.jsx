import React from 'react';
import { Routes , Route , BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import initial from '../initial';
import Welcome from '../pages/Welcome/Welcome';
import './App.scss'
import Context from '../Context/Context';
const App = () => {

    const initialState = initial();

    return (
        <Context.Provider value={initialState}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/welcome' element={<Welcome/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Context.Provider>

        
    );
}

export default App;