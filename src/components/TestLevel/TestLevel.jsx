import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import c from './TestLevel.module.css'
const TestLevel = () => {
    let {testData} = useSelector(({test}) => test)
    let { section } = useSelector(({testLevel}) => testLevel).level
    const [testPage, setTestPage] = useState(1)
    const [numberQuestion, setNumberQuestion] = useState(0)
    const [progressPageWidth, setProgressPageWidth] = useState(20)
    const [optionChosen, setOptionChosen] = useState([])
    let optionArr = []
    if(testData) localStorage.setItem('test-data', JSON.stringify(testData))
    if(section) localStorage.setItem('section', section)
    testData = JSON.parse(localStorage.getItem('test-data'))
    section = localStorage.getItem('section')
  return (
    <div>
        <div className={c.test_header}>
            <span>Test your English</span>
        </div>
        <p className={c.page_number_text}>Page <b>{testPage}</b> of 5</p>
        <div className={c.progress_test_box}>
<div style={{width: progressPageWidth + '%'}} className={c.progress_page_box}></div>
        </div>
        <div className={c.test_questions_container}>
          {
            testData[section].splice(numberQuestion, numberQuestion + 4).map((e) => 
              <div className={c.question_box} key={e._id}>
              <span>{e.test}</span>
              <div style={{marginTop: '20px'}}>
            {e.options.map((option, index) => 
            <div style={optionChosen.includes(option._id) ? {background: 'black', color: 'white'} : null} onClick={() => {
            if((optionArr.indexOf(option._id) === -1)){
              optionArr.push(option._id)
              // setOptionChosen(optionChosen.push(option._id))
            }
            }} className={c.question_options_box} key={uuidv4()}>
              <span>{index === 0 ? 'A' :  index === 1 ? 'B' : 'C'}</span><span style={{width: '50%', display: 'flex', justifyContent: 'center'}}>{option.option}</span>
              </div>
              )}
              </div>
              </div>
            )
          }
        </div>
        <div className={c.next_page_btn_box}>
            <button onClick={() => {
            if(testData[section].length > numberQuestion)  setNumberQuestion(numberQuestion + 4)
            if(testData[section].length < numberQuestion)  setNumberQuestion(0)
            }}>Next</button>
        </div>
    </div>
  )
}

export default TestLevel