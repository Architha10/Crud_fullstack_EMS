import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
         <div className="App">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent/>}></Route>
            <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
            <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent/>}></Route>
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent/>}></Route>
                  

          </Routes>

           
         </div>
       <FooterComponent/>
      </Router>
      
    </div>
    
  );
}

export default App;
