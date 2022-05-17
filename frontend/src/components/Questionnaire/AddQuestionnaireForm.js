import React, { useState, useEffect } from 'react'
import "./QuestionnaireForm.css"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EmailIcon from '@material-ui/icons/Email';
import MenuItem from '@material-ui/core/MenuItem';
import { MdOutlinePassword, MdSportsScore, MdSchool } from 'react-icons/md';
import { HiIdentification } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ShortTextIcon from '@material-ui/icons/ShortText';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import SubjectIcon from '@material-ui/icons/Subject';
import BackupIcon from '@material-ui/icons/Backup';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { BsTrash } from "react-icons/bs"
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { VscFileCode, VscInbox } from "react-icons/vsc";
import { BsFileText } from "react-icons/bs"
import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';


export default function AddQuestionnaireForm() {
  const history = useNavigate();
  const [{ }, dispatch] = useStateValue();
  const [questions, setQuestions] = useState([]);
  const [option, setOption] = useState("");
  const [questionType, setType] = useState("text");

  let { id } = useParams();

  useEffect(() => {
    var newQuestion = { questionText: "", answer: false, answerKey: "", questionType: "text", options: [{ option: "" }], open: true, required: false }

    setQuestions([...questions, newQuestion])

  }, [])



  function changeType(e) {
    setType(e.target.id)

  }


  useEffect(() => {
    setType(questionType)
  }, [changeType])

  function saveQuestions() {
    console.log("auto saving questions initiated");
    var data = {
      formId: "1256",
      name: "My-new_file",
      description: "first file",
      questions: questions
    }
    setQuestions(questions)
  }


  function commitToDB() {
    dispatch({
      type: actionTypes.SET_QUESTIONS,
      questions: questions
    })

    axios.post(`http://localhost:5555/questionnaire/add_questions/${id}`, {
      "questions": questions,
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    history("/questionnaire")
  }




  function addMoreQuestionField() {
    expandCloseAll(); //I AM GOD

    setQuestions(questions => [...questions, { questionText: "", questionType: "text", type: "text", options: [{ option: "" }], open: true, required: false }]);
  }

  function addQuestionType(i, type, realType) {

    let qs = [...questions];
    if (realType === "checkbox") {
      setOption("option");

    }
    else {
      setOption("");
      for (let j = 0; j < qs[i].options.length; j++) {

        removeOption(i, j)

      }

    }
    qs[i].questionType = realType;
    qs[i].type = type;
    qs[i].questionText = type;
    setQuestions(qs);
  }


  // function copyQuestion(i) {
  //   expandCloseAll()
  //   let qs = [...questions]
  //   var newQuestion = qs[i]

  //   setQuestions([...questions, newQuestion])

  // }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs)
  }

  function handleOptionValue(text, i, j) {
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].options[j].option = text;
    //newMembersEmail[i]= email;
    setQuestions(optionsOfQuestion);
  }

  function handleQuestionValue(text, i) {

    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].questionText = text;
    setQuestions(optionsOfQuestion);
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    var itemgg = [...questions];
    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
    setQuestions(itemF);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };


  function addOption(i) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({ option: "" })
    } else {
      console.log("Max  5 options ");
    }
    setQuestions(optionsOfQuestion)
  }

  function setOptionAnswer(ans, qno) {
    var Questions = [...questions];

    Questions[qno].answer = ans;


    setQuestions(Questions)
  }

  function setOptionPoints(points, qno) {
    var Questions = [...questions];

    Questions[qno].points = points;


    setQuestions(Questions)
  }

  function doneAnswer(i) {
    var answerOfQuestion = [...questions];

    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

    setQuestions(answerOfQuestion)
  }

  function requiredQuestion(i) {
    var requiredQuestion = [...questions];

    requiredQuestion[i].required = !requiredQuestion[i].required

    setQuestions(requiredQuestion)
  }


  function removeOption(i, j) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length > 1) {
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion)
      console.log(i + "__" + j);
    }
  }

  function expandCloseAll() {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  }

  function handleExpand(i) {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;

      } else {
        qs[j].open = false;
      }
    }
    setQuestions(qs);
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <Draggable key={i} draggableId={i + 'id'} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div style={{ marginBottom: "0px" }}>
                <div style={{ width: '100%', marginBottom: '0px' }}>
                  <DragIndicatorIcon style={{ transform: "rotate(-90deg)", color: '#DAE0E2', position: "relative", left: "300px" }} fontSize="small" />
                </div>

                <Accordion onChange={() => { handleExpand(i) }} expanded={questions[i].open}

                  className={questions[i].open ? 'add_border' : ""} >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    elevation={1} style={{ width: '100%' }}
                  >
                    {!questions[i].open ? (


                      <div className="saved_questions">


                        <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px" }} >{i + 1}.  {ques.questionText}</Typography>


                        {ques.options.map((op, j) => (

                          <div key={j} >
                            <div style={{ display: 'flex', }}>
                              <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled control={<input type={ques.questionType} color="primary" style={{ marginRight: '3px', }} required={ques.type} />} label={
                                <Typography style={{
                                  fontFamily: ' Roboto,Arial,sans-serif',
                                  fontSize: ' 13px',
                                  fontWeight: '400',
                                  letterSpacing: '.2px',
                                  lineHeight: '20px',
                                  color: '#202124'
                                }}>
                                  {ques.options[j].option}
                                </Typography>
                              } />
                            </div>


                          </div>



                        ))}
                      </div>
                    ) : ""}
                  </AccordionSummary>
                  <div className="question_boxes">
                    {!ques.answer ? (<AccordionDetails className="add_question" >

                      <div >
                        <div className="add_question_top">
                          <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e) => { handleQuestionValue(e.target.value, i) }}></input>
                          <Select className="select" style={{ color: "#5f6368", fontSize: "13px" }} defaultValue={ques.questionType}>


                            <option selected disabled value={ques.questionType}>{ques.questionType}</option>

                            <MenuItem value="10" id="text" onClick={() => { addQuestionType(i, "text", "text") }}> <ShortTextIcon style={{ marginRight: "10px" }} />  Short Pharaghraph</MenuItem>
                            <MenuItem id="text" value="Text" onClick={() => { addQuestionType(i, "paragraph", "text") }}> <SubjectIcon style={{ marginRight: "10px" }} />  Paragraph</MenuItem>
                            <MenuItem value="checkbox" id="checkbox" onClick={() => { addQuestionType(i, "multiCheckbox", "checkbox") }}><RadioButtonCheckedIcon checked style={{ marginRight: "10px", color: "#70757a" }} /> Multiple Choice</MenuItem>
                            <MenuItem id="checkbox" value="Checkbox" onClick={() => { addQuestionType(i, "checkbox", "checkbox") }}><CheckBoxIcon style={{ marginRight: "10px", color: "#70757a" }} checked /> Checkboxes</MenuItem>
                            <MenuItem value="50" onClick={() => { addQuestionType(i, "select", "checkbox") }}> <ArrowDropDownCircleIcon style={{ marginRight: "10px" }} /> Drop-down</MenuItem>
                            <MenuItem value="60" onClick={() => { addQuestionType(i, "uploadFile", "file") }}> <BackupIcon style={{ marginRight: "10px" }} /> File Upload</MenuItem>
                            <MenuItem value="70" onClick={() => { addQuestionType(i, "uploadImage", "file") }}> <BackupIcon style={{ marginRight: "10px" }} /> File Image</MenuItem>
                            <MenuItem value="80" id="text" onClick={() => { addQuestionType(i, "email", "text") }}> <EmailIcon style={{ marginRight: "10px" }} /> Email</MenuItem>
                            <MenuItem value="90" id="text" onClick={() => { addQuestionType(i, "password", "text") }}> <MdOutlinePassword style={{ marginRight: "10px" }} /> Password</MenuItem>
                            <MenuItem value="100" onClick={() => { addQuestionType(i, "date", "date") }}> <EventIcon style={{ marginRight: "10px" }} /> Date</MenuItem>
                            <MenuItem value="110" onClick={() => { addQuestionType(i, "time", "time") }}> <ScheduleIcon style={{ marginRight: "10px" }} /> Time</MenuItem>
                            <MenuItem id="text" value="2" onClick={() => { addQuestionType(i, "phoneNumber", "number") }}> <AiFillPhone style={{ marginRight: "10px" }} />  Phone Number</MenuItem>
                            <MenuItem id="text" value="4" onClick={() => { addQuestionType(i, "postalCode", "number") }}> <VscFileCode style={{ marginRight: "10px" }} />  Postal Code</MenuItem>
                            <MenuItem id="text" value="6" onClick={() => { addQuestionType(i, "grade", "number") }}> <MdSportsScore style={{ marginRight: "10px" }} />  Grade</MenuItem>
                            <MenuItem id="text" value="8" onClick={() => { addQuestionType(i, "POBox", "number") }}> <VscInbox style={{ marginRight: "10px" }} />  Po Box</MenuItem>
                            {/* <MenuItem id="text" value="12" onClick={() => { addQuestionType(i, "units") }}> <VscSymbolNumeric style={{ marginRight: "10px" }} />  Units</MenuItem> */}
                            <MenuItem id="text" value="14" onClick={() => { addQuestionType(i, "age", "number") }}> <MdSchool style={{ marginRight: "10px" }} />  Age</MenuItem>
                            <MenuItem id="text" value="16" onClick={() => { addQuestionType(i, "id", "number") }}> <HiIdentification style={{ marginRight: "10px" }} />  Id</MenuItem>
                            <MenuItem id="text" value="18" onClick={() => { addQuestionType(i, "other", "text") }}> <SubjectIcon style={{ marginRight: "10px" }} />  Other</MenuItem>
                          </Select>

                        </div>




                        {ques.options.map((op, j) => (
                          <div className="add_question_body" key={j}>
                            {
                              (ques.questionType === "text" || ques.questionType === "number" || ques.questionType === "file" || ques.questionType === "date" || ques.questionType === "time") ?
                                <input type={ques.questionType} style={{ marginRight: "10px" }} /> :

                                <div>
                                  <div className='add-option-row'>
                                    {/* <input type={ques.questionType} style={{ marginRight: "10px" }} /> */}
                                    <input type="text" className="text_input" placeholder={option} value={ques.options[j].option} onChange={(e) => { handleOptionValue(e.target.value, i, j) }}></input>


                                    <IconButton aria-label="delete" onClick={() => { removeOption(i, j) }}>
                                      <CloseIcon />
                                    </IconButton>
                                  </div>
                                </div>
                            }
                          </div>
                        ))}

                        {ques.options.length < 5 ? (
                          <div className="add_question_body">
                            <FormControlLabel disabled control={

                              (ques.questionType === "checkbox") ?
                                <div> 
                                  {/* <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} style={{ marginLeft: "10px", marginRight: "10px" }} disabled /> */}
                                  <div>
                                    <Button size="small" onClick={() => { addOption(i) }} style={{ textTransform: 'none', color: "#FFDAC4 ", fontSize: "13px", fontWeight: "600" }}>Add Option</Button>
                                  </div>
                                </div>
                                : <div></div>

                            } />
                          </div>

                        ) : ""}
                        <div className="add_footer">

                          <div className="add_question_bottom">
{/* 
                            <IconButton aria-label="Copy" onClick={() => { copyQuestion(i) }}>
                              <FilterNoneIcon />
                            </IconButton> */}

                            <IconButton aria-label="delete" onClick={() => { deleteQuestion(i) }}>
                              <BsTrash />
                            </IconButton>
                            <span style={{ color: "#5f6368", fontSize: "13px" }}>Required </span> <Switch  name="checkedA" color="primary" checked={ques.required} onClick={() => { requiredQuestion(i) }} />
                          </div>
                        </div>
                      </div>

                    </AccordionDetails>) : (

                      <AccordionDetails className="add_question" >

                        <div >
                          <div className="add_question_top">
                            <input type="text" className="question " placeholder="Question" value={ques.questionText} onChange={(e) => { handleQuestionValue(e.target.value, i) }} disabled />
                            <input type="number" className="points" min="0" step="1" placeholder="0" onChange={(e) => { setOptionPoints(e.target.value, i) }} />


                          </div>




                          {ques.options.map((op, j) => (
                            <div className="add_question_body" key={j} style={{ marginLeft: "8px", marginBottom: "10px", marginTop: "5px" }}>

                              <div key={j}>
                                <div style={{ display: 'flex' }} className="">
                                  <div className="form-check">
                                    <label style={{ fontSize: "13px" }} onClick={() => { setOptionAnswer(ques.options[j].option, i) }}>

                                      {(ques.questionType != "text") ?
                                        <input
                                          type={ques.questionType}
                                          name={ques.questionText}

                                          value="option3"
                                          className="form-check-input"
                                          required={ques.required}
                                          style={{ marginRight: "10px", marginBottom: "10px", marginTop: "5px" }}
                                        /> :
                                        <ShortTextIcon style={{ marginRight: "10px" }} />
                                      }

                                      {ques.options[j].option}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="add_question_body">
                            <Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}> <BsFileText style={{ fontSize: "20px", marginRight: "8px" }} />Add Answer Feedback</Button>
                          </div>

                          <div className="add_question_bottom">
                            <Button variant="outlined" color="primary" style={{ textTransform: 'none', color: "#4285f4", fontSize: "12px", marginTop: "12px", fontWeight: "600" }} onClick={() => { doneAnswer(i) }}>
                              Done
                            </Button>
                          </div>
                        </div>

                      </AccordionDetails>

                    )}
                    {!ques.answer ? (<div className="question_edit">
                      <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit" />

                    </div>) : ""}
                  </div>

                </Accordion>

              </div>
            </div>
          </div>
        )}
      </Draggable>
    )
    )
  }




  return (
    <div >
      <div className="question_form">
        <br></br>
        <div className="section">

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {questionsUI()}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="save_form">
            <Button variant="contained" color="primary" onClick={commitToDB} style={{ fontSize: "14px" }} className="save-btn">Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

