import './App.css';
import ManageStudents from './Components/ManageStudents';
import HeaderComponent from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddStudent from './Components/AddStudent';
import AddClass from './Components/AddClass';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path='/' exact element={<ManageStudents />}></Route>
        <Route path='/students' element={<ManageStudents />}></Route>
        <Route path='/add-student' element={<AddStudent />}></Route>
        <Route path='/add-class' element={<AddClass />}></Route>
      </Routes>
      <Footer />
    </Router>
      

    
  );
}

export default App;
