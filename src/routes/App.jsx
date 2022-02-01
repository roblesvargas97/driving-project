import React from 'react';
import { Routes , Route , BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import initial from '../initial';
import WelcomeValidator from '../components/WelcomeValidator/WelcomeValidator';
import Context from '../Context/Context';
import ComponentTestValidator from '../components/ComponentTestValidator/ComponentTestValidator';
import './App.scss'
import Guide from '../pages/Guide/Guide';
const App = () => {

    const initialState = initial();

    return (
        <Context.Provider value={initialState}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/welcome' element={<WelcomeValidator/>} />
                    <Route path='/test' element={<ComponentTestValidator/>} />
                    <Route path='/guide' element={<Guide/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Context.Provider>

        
    );
}

export default App;