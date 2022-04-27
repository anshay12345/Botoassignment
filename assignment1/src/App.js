import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import NewBucketCreation from "./Components/BucketCreation";
import BucketListing from './Components/BucketListing';
import DeleteBucketComponent from './Components/DeleteBucketComponent';
import CreateInstance from './Components/CreateInstance';

import DisplayInstance from './Components/DIsplayInstances';
import Home from "./Components/Home";
import StopInstance from "./Components/StopInstance";
import TerminateInstance from "./Components/TerminateInstance";
function App() {
  const navigate = useNavigate();
  
  const coursesPage = () => {
      navigate('/list')
  }
  return (
    <div className="Container App">
      

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" onClick={()=>navigate("/")}>Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" onClick={coursesPage}>Buckets</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" onClick={()=>navigate("/instance")}>Instances</a>
      </li>
     
      
    </ul>
    
  </div>
</nav>


       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/list" element={<BucketListing />} />
        <Route path="/create" element={<NewBucketCreation />} />
        <Route path="/delobj" element={<DeleteBucketComponent />} />
        <Route path="/instance/create" element={<CreateInstance />} />
        <Route path="/instance/stop" element={<StopInstance />} />
   
        <Route path="/instance/" element={<DisplayInstance />} />
        
        <Route path="/instance/terminate" element={<TerminateInstance />} />
        </Routes>
    
    </div>
  );
}

export default App;
