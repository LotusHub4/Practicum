
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Questionnaire/Header";
import AllFields from './components/Questionnaire/AllFields';
import AddField from './components/Questionnaire/AddField';
import NewField from './components/Questionnaire/NewField';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form/:id" element={<AddField />} />
          <Route exact path="/" element={<><Header/><NewField /><AllFields /></>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
