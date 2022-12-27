import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TasksProvider } from './modules/tasks'
import MainPage from './pages/MainPage';
import TaskList from './pages/TaskList';
import Completed from './pages/Completed';
import Page404 from './pages/Page404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/tasklist" element={<TaskList/>}/>
          <Route path="/completed" element={<Completed/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </TasksProvider>
  );
}

export default App;
