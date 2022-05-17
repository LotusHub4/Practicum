import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllFields from './components/Questionnaire/AllFields';
import AddField from './components/Questionnaire/AddField';
import UpdateField from './components/Questionnaire/UpdateField';
import NewField from './components/Questionnaire/NewField';
import { Report } from './components/ReportComponents/Report';
import { Form } from './CandidateForm/form';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="questionnaire/update/form/:id" element={<UpdateField />} />
          <Route path="questionnaire/add/form/:id" element={<AddField />} />
          <Route exact path="/questionnaire" element={<><NewField /><AllFields /></>} />
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/candidateform" element={<Form />} />

        </Routes>
      </Router>



    </div>
  );
}

export default App;
