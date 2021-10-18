export default function CloseBtn(){
    
    const handleClick = (e)=>{
        const target = e.currentTarget.parentElement.parentElement.parentElement
        target.classList.remove('selected')
        target.classList.remove('flex')
        target.classList.add('hidden')
        target.removeAttribute('tabindex', '0')
        target.previousElementSibling.setAttribute('tabindex', '0')
        target.previousElementSibling.scrollIntoView({behaviour: 'smooth', block: 'center'})
    }
    return(
        <button onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 hover:text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>  
        </button>
    )
}