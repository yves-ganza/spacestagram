export default function Spinner(){
    return(
        <div className="h-96 w-96 text-center mx-auto my-auto" aria-label="loading">
            <svg className="animate-spin h-full w-full box p-4 rounded-full border-b-4 border-indigo-900" viewBox="0 0 24 24"></svg>
        </div>
    )
}