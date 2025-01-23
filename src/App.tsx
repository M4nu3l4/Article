
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import ArticleDetail from './components/ArticleDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FunctionComponent = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
