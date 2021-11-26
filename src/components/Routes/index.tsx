import React from 'react';
import { Routes as Router, Route } from "react-router-dom";

import HomePage from '../Pages/HomePage';
import MapPage from '../Pages/MapPage';
import PricingPage from '../Pages/PricingPage';
import FAQPage from '../Pages/FAQPage';
import AboutPage from '../Pages/About';
import DashboardsPage from '../Pages/DashboardsPage';
import ProductsPage from '../Pages/ProductsPage';
import CustomersPage from '../Pages/CustomersPage';

const Routes = () => {
    return (
        <div className="container-fluid">
            <Router>
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/dashboards" element={<DashboardsPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/customers" element={<CustomersPage />} />
            </Router>
        </div>
    );
};

export default Routes;
