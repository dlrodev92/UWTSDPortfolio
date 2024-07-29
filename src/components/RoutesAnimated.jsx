
import { Route, Routes } from 'react-router-dom';

import AppLayout from '../pages/AppLayout';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import LDEA from '../pages/LDEA';
import Task1 from '../pages/LDEApages/Task1';
import Task2 from '../pages/LDEApages/Task2';
import Task3 from '../pages/LDEApages/Task3';
import Task4 from '../pages/LDEApages/Task4';

export default function RoutesAnimated() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="About" element={<About />} />
        <Route path="LDEAssesment" element={<LDEA />} />
        <Route path="LDEAssesment/task1" element={<Task1 />} />
        <Route path="LDEAssesment/task2" element={<Task2 />} />
        <Route path="LDEAssesment/task3" element={<Task3 />} />
        <Route path="LDEAssesment/task4" element={<Task4 />} />
      </Route>
    </Routes>
  );
}