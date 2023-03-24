import { About } from '../../pages/About/About';
import { Feedback } from '../../pages/Feedback/Feedback';
import { Main } from '../../pages/Main/Main';
import { Projects } from '../../pages/Projects/Projects';
import { Skills } from '../../pages/Skills/Skills';
import { Routes, Route } from 'react-router-dom';

export function PageRoutes() {
  return (
    <Routes>
      
      <Route path="/" exact element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}
