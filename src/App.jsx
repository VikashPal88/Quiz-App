import React, { useState } from 'react'
import NavBar from './components/NavBar'
import QuizQuestion from './components/QuizQuestion'
import Cards from './components/Cards'

function App() {



  let [points, setPoints] = useState(100)
  let [playerName, setPlayerName] = useState("")
  let [homePage, setHomePage] = useState(true)
  let [quizData, setQuizData] = useState([])
  let [showPopup, setShowPopup] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPopup(false)
  }



  return (
    <>
      <div className='bg-gradient-to-r from-violet-500 to-purple-500 h-[100vh] w-[100] flex justify-center  items-center flex-col'>
        <div className='flex flex-col items-center bgColor min-h-[80vh] w-[350px] shadow-2xl rounded-xl'>

          {/* 1st div */}
          <NavBar points={points} playername={playerName} />


          {/* 2nd div */}
          <div style={{ display: `${homePage ? 'block' : 'none'}` }}>
            <div className='mt-4 flex items-start flex-col ml-7'>
              <h1 className='text-lg'>Hi {playerName},</h1>
              <div className='flex items-center gap-2 font-medium'>
                <p className='text-xl font-semibold'>Choose a category</p>
                <img className='h-7' src="\src\assets\star.png" alt="" />
              </div>
            </div>


            {/* 3rd div */}
            <div className='mt-10 grid grid-cols-2 gap-10 mx-8 content-center text-center relative'>
              <Cards homePage={homePage} setHomePage={setHomePage} setquizdata={setQuizData}
              />

            </div>
          </div>
          {/* Quiz Div */}
          <div className={`flex justify-center ${homePage ? 'hidden' : 'block'}`}>
            <QuizQuestion quizdata={quizData} points={points} setpoints={setPoints} setHomePage={setHomePage} />
            <h1></h1>
          </div>

        </div>
      </div >

      {/* username */}
      {
        showPopup && <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">Please enter your name</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="border p-2 rounded w-full mb-4"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Username"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      }

    </>

  )
}

export default App
