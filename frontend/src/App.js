import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Questionnaire/Header";
import AllFields from './components/Questionnaire/AllFields';
import AddField from './components/Questionnaire/AddField';
import NewField from './components/Questionnaire/NewField';
import { Report } from './components/ReportComponents/Report';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form/:id" element={<AddField />} />
          <Route exact path="/" element={<><Header /><NewField /><AllFields /></>} />
          <Route exact path="/report" element={<Report />} />

        </Routes>
      </Router>



    </div>
  );
}

export default App;
