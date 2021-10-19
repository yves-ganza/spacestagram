import utilStyles from '../styles/utils.module.css'

export default function DetailsBtn(){
    const handleClick = (e)=>{
        const parent = e.target.parentElement.parentElement.parentElement

        document.querySelectorAll('.selected').forEach(el=>{
            console.log(el)
            if(!el.classList.contains('hidden')){
                el.classList.add('hidden')
                el.classList.remove('flex')
                el.classList.remove('selected')
                el.removeAttribute('tabindex')
            }
        })
        parent.nextElementSibling.classList.add('selected')
        parent.nextElementSibling.classList.remove('hidden')
        parent.nextElementSibling.setAttribute('tabindex', '0')
        parent.nextElementSibling.classList.add('flex')
        parent.nextElementSibling.scrollIntoView({behaviour: 'smooth', block: 'start'})

    }
    return(
        <button onClick={handleClick} className='text-blue-600 hover:text-blue-700  transition ease-in duration-200 text-center text-2xl font-semibold'>
            Details
        </button>
    )
}