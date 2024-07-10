import React, { useEffect } from 'react'
import { useState } from 'react'
import Result from './Result'




function QuizQuestion({ quizdata, points, setpoints, setHomePage }) {
    const [questionNo, setQuestionNo] = useState(1)
    const [data, setData] = useState([])
    const [allAnswer, setAllAnswer] = useState([])
    const [dataIndex, setDataIndex] = useState(1)
    const [selectedOption, setSelectedOption] = useState(null);
    const [disableBtn, setDisableBtn] = useState(false)
    const [nextBtn, setNextBtn] = useState(true)
    const [quizScore, setQuizScore] = useState(0)
    const [correctAnswerNo, setCorrectAnswerNo] = useState(0)
    const [WrongAnswerNo, setWrongAnswerNo] = useState(0)


    useEffect(() => {
        if (quizdata && quizdata.length) {
            setData(quizdata)
        }
    }, [quizdata])

    useEffect(() => {
        if (data && data.length && dataIndex < 10) {
            let CorrectAnswer = data[dataIndex].correct_answer
            let IncorrectAnswer = data[dataIndex].incorrect_answers
            let allAns = [CorrectAnswer, ...IncorrectAnswer]
            console.log(dataIndex)
            for (let i = allAns.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allAns[i], allAns[j]] = [allAns[j], allAns[i]];
            }
            setAllAnswer([...allAns])
        } else {
            <h1>Pleas wait</h1>
        }

    }, [data, dataIndex])



    const handleNext = () => {
        if (dataIndex < 10) {
            setDataIndex(dataIndex + 1)
            console.log("setDataIndex", dataIndex)
        } else {
            setDisableBtn(true)

        }

        if (questionNo <= 10) {
            setQuestionNo(questionNo + 1)
        } else {
            setNextBtn(true)
        }
        setSelectedOption(null)
        setDisableBtn(false)
        setNextBtn(true)


    }

    const checkAnswer = (e) => {
        let value = e.target.textContent
        let CorrectAnswer = data[dataIndex].correct_answer

        if (value === CorrectAnswer) {
            setSelectedOption('correct');
            setpoints(points + 10)
            setQuizScore(quizScore + 10)
            setCorrectAnswerNo(correctAnswerNo + 1)
        } else {
            setSelectedOption('wrong');
            setWrongAnswerNo(WrongAnswerNo + 1)
        }
        setDisableBtn(true)
        setNextBtn(false)
    }

    const handleBack = () => {
        setHomePage(true)
        setDataIndex(0)
        setQuestionNo(0)
        setCorrectAnswerNo(0)
        setWrongAnswerNo(0)
        console.log("Hello")
    }




    return (
        <>
            <div className={`flex justify-center items-center flex-col`}>
                <div className='mt-4'>
                    <p className='text-lg font-bold text-white'> {data && dataIndex < 10 ? <p>{questionNo}/10</p> : null}</p>
                </div>
                <div className='w-[100%] h-[70px] mt-4'>

                    <div className={`${dataIndex === 10 ? "block" : "hidden"} w-full`}>
                        <Result quizScore={quizScore} correctAnswerNo={correctAnswerNo} WrongAnswerNo={WrongAnswerNo} setback={handleBack} />
                    </div>

                    <p className='font-semibold text-lg text-white leading-5 text-center'>{data && data.length && dataIndex < 10 ? data[dataIndex].question : null}</p>
                </div>
                <div className='flex flex-col gap-5 mt-4'>
                    {
                        allAnswer && allAnswer.length && dataIndex < 10 ?
                            allAnswer.map((val, index) => (
                                <button key={index} onClick={(e) => checkAnswer(e)} className={`btns ${selectedOption === 'correct' && val === data[dataIndex].correct_answer ? 'correct' : selectedOption === 'wrong' && val !== data[dataIndex].correct_answer ? 'wrong' : ''} ${selectedOption === 'wrong' ? 'correct' : ""}`} disabled={disableBtn}>{val}</button>)
                            ) :
                            null
                    }
                </div>
                <div className='mt-5 mb-2'>
                    {
                        data && dataIndex < 10 ?
                            <button onClick={handleNext} disabled={nextBtn} className='btns w-36 bg-purple-400 hover:bg-purple-700' >Next</button> : null
                    }
                </div>
            </div >
        </>
    )
}

export default QuizQuestion

