import React from 'react'

function Result({ quizScore, correctAnswerNo, WrongAnswerNo, setback }) {
    return (
        <div className='w-64 '>
            <div className='text-3xl text-white font-extrabold text-center flex justify-between'>
                <h1>Quiz Summery</h1>
                <h1 onClick={setback} className='cursor-pointer'><i class="ri-home-4-fill"></i></h1>
            </div>

            <div className='bg-white flex flex-col items-center mt-16 rounded-xl'>
                <div className=' -translate-y-14 rotate-12 absolute'>
                    <img src="\src\assets\trophy.png" alt="img" className='h-28' />
                </div>
                <div className='mt-20 text-center'>
                    <h1 className='text-2xl font-bold'>Congratulations !</h1>
                    <p className='text-lg text-zinc-500 mt-2'>You've scored <span className='text-green-400 font-semibold'>{quizScore}</span> points</p>
                </div>
                <div className='flex gap-2 mt-3 border-[2px] w-full justify-between rounded-b-lg text-center'>
                    <div className='border-r-[2px] px-2'>
                        <h1 className='text-lg font-medium'> <span className=' text-purple-400 font-extrabold'>Q </span>10</h1>
                        <p className='text-sm font-medium text-zinc-400'>Total Ques</p>
                    </div>
                    <div className='border-r-[2px] px-2'>
                        <h1 className='text-lg font-medium'><span className='text-green-600 rounded-full'><i class="ri-checkbox-circle-fill"></i> </span>{correctAnswerNo}</h1>
                        <p className='text-sm font-medium text-zinc-400'>Correct</p>
                    </div>
                    <div className='px-2'>
                        <h1 className='text-lg font-medium'><span className='text-red-500'><i class="ri-close-circle-fill"></i></span>{WrongAnswerNo}</h1>
                        <p className='text-sm font-medium text-zinc-400'>Wrong</p>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Result
