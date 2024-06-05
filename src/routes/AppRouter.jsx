import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Fiche_logement from '../pages/Fiche_logement';
import Error404 from '../pages/Error404';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<home />} />;
                    <Route path="/about" element={<about />} />;
                    <Route path="/fiche_logement" element={<fiche_logement />} />;
                    <Route path="*" element={<error404 />} />;
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;