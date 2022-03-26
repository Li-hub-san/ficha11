import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import {useState} from "react";
import Login from "./components/Login";
import Info from "./components/Info";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import VegetableDetails from "./components/VegetableDetails";

function App() {
    const [user, setUser] = useState();

    return (
        <div className="App">
            <BrowserRouter>
                {user && <NavBar/>}
                <Routes>
                    <Route path="/home"
                           element={
                               <VerificaUser user={user}>
                                   <HomePage/>
                               </VerificaUser>
                           }>
                    </Route>
                    <Route path="/home/:id"
                           element={
                               <VerificaUser user={user}>
                                   <VegetableDetails/>
                               </VerificaUser>
                           }>
                    </Route>
                    <Route path="/info"
                           element={
                               <VerificaUser user={user}>
                                   <Info/>
                               </VerificaUser>
                           }>
                    </Route>
                    <Route path="/contacts"
                           element={
                               <VerificaUser user={user}>
                                   <Contacts/>
                               </VerificaUser>
                           }>
                    </Route>

                    {/* a route default (/*) tem que estar no fim */}
                    <Route path="/*" element={
                        <Login doLogin={setUser}/>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function VerificaUser({user, children}) {
    if (!user) {
        return <Navigate to="/" replace={true}/>;
    }
    return children;
}

export default App;
