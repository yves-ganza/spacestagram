export default function ImgModal({url}){

    const handleClick = (e) =>{
        const target = e.currentTarget.parentElement.parentElement.parentElement
        target.classList.toggle("hidden");
    }

    return (
        <div className="hidden fixed z-10 inset-0" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-1 transition-opacity" aria-hidden="true">
                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-full shadow-sm p-8 bg-none text-base font-medium text-gray-700 hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleClick}>
                    <svg className="w-12 lg:h-24 lg:w-24 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            
                {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
                <div className="inline-block text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-5xl max-h-screen" style={{background: `url(${url})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <img src={url} alt="modal" className="opacity-0" loading="eager"/>
                </div>
            </div>
        </div>
    )
}