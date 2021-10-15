import { useState,useEffect } from "react"


export default function LikeButton(){
    const [liked, setLiked] = useState(false)

    useEffect(()=>{}, [liked])

    const handleClick = (e)=>{
        e.preventDefault()
        setLiked(prev=>!prev)
    }

    return(
        <>
        {
            liked?
            <svg onClick={handleClick} className="w-12 h-12 text-red-700 cursor-pointer" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>:
            <button onClick={handleClick} type="button" className="py-4 px-8  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-2xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Like
            </button>
        }
        </>
    )
}