import { useState, useEffect} from "react"

export default function LikeButton(){
    const [state, setState] = useState({liked: false, target: null})

    useEffect(()=>{
        const liked = state.liked
        const target = state.target

        if(target){
            if(liked){
                target.style.stroke = 'red'
                target.style.fill = 'red'
            }
            else {
                target.style.stroke = 'currentColor'
                target.style.fill = 'none'
            }
        }
    }, [state])

    const handleClick = (e)=>{
        const target = e.currentTarget.firstElementChild
        setState(prevState => ({liked: !prevState.liked, target}))
    }

    return(
        <button onClick={handleClick}>
            <svg className="w-12 h-12 cursor-pointer " fill='none' stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
    )
}