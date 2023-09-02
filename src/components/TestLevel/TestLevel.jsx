import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import c from './TestLevel.module.css'
const TestLevel = () => {
    const { testData } = useSelector(({test}) => test)
    const [testPage, setTestPage] = useState(1)
    const [progressPageWidth, setProgressPageWidth] = useState(20)
    console.log(testData)
  return (
    <div>
        <div className={c.test_header}>
            <span>Test your English</span>
        </div>
        <p className={c.page_number_text}>Page <b>{testPage}</b> of 5</p>
        <div className={c.progress_test_box}>
<div style={{width: progressPageWidth + '%'}} className={c.progress_page_box}></div>
        </div>
        <div className={c.test_questions_container}></div>
        <div className={c.next_page_btn_box}>
            <button>Next</button>
        </div>
    </div>
  )
}

export default TestLevel