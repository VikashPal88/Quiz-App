import React, { useState } from 'react'

const QuizNames = ["General", "Music", "Sports", "Video games", "Books", "Movies"]

const QuizImgName = [
    "general", "music", "sports", "games", "books", "movies"
]

const ApiUrl = [
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple"

]

function Cards({ homePage, setHomePage, setquizdata }) {
    // const [quizData, setQuizData] = useState(null)

    const homePageHandler = (index) => {
        setHomePage(!homePage)
        fecthApi(ApiUrl[index])
    }

    const fecthApi = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setquizdata(data.results)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {
                QuizNames && QuizNames.length ?
                    QuizNames.map((quiz, index) => (
                        <div key={index} onClick={() => homePageHandler(index)} className='boxes'>
                            <img className={`imgs ${QuizImgName[index] === "sports" ? `w-32 -translate-x-2 rotate-0` : null} `} src={`/src/assets/${QuizImgName[index]}.png`} alt="" />
                            <h1 className='names'>{quiz}</h1>
                        </div>
                    )) :
                    null
            }

        </>

    )
}

export default Cards
