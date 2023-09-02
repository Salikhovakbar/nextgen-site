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
            {e.options.map((option) => 
            <div className={c.question_options_box} key={uuidv4()}>
                <input name={e._id} id={uuidv4()} type="radio" /> <label htmlFor={uuidv4()}>{option}</label>
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