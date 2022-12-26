import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import TaskList from './pages/TaskList';
import Completed from './pages/Completed';
import Page404 from './pages/Page404';
import { Context } from "./context/Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  
  const [taskList, setTaskList] = useState([]);
  return (
    <Context.Provider value={[taskList, setTaskList]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/tasklist" element={<TaskList/>}/>
          <Route path="/completed" element={<Completed/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
