import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Awards from './pages/Awards';
import Contact from './pages/Contact';
import Timeline from './pages/Timeline';
import './i18n';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="education" element={<Education />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
          <Route path="timeline" element={<Timeline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;