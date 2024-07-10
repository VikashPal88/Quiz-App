import React from 'react'

function NavBar({ points, playername }) {
    return (
        <div className='mt-4 flex justify-between h-10 w-[95%] px-2 items-center  bg-purple-500 rounded-3xl shadow-3xl shadow-black
</div>' >
            <div className='flex justify-center items-center px-3 relative'>
                <img className='h-8 border-2 rounded-full border-white absolute mr-16 bg-purple-400' src="\src\assets\coin.png" alt="" />
                <p className='font-bold border-2 rounded-xl px-3 h-7 border-white pl-6'>{points}</p>
            </div>
            <div className='mr-3'>
                <h1 className='font-bold text-xl text-zinc-50'>Quiz App</h1>
            </div>
            <div className='flex justify-center items-center w-[35%] '>
                <p className='font-bold border-2 rounded-xl pr-8 px-1   border-white'>{playername}</p>
                <img className='h-8 border-2 rounded-full border-white absolute ml-[75px] bg-purple-400' src="\src\assets\player.png" alt="" />
            </div>
        </div>

    )
}

export default NavBar
