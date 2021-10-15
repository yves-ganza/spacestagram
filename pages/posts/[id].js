import {useRouter} from "next/router"
import Link from "next/link"
import Error from "next/error"
import Spinner from "../../components/spinner"
import fetchData from "../../lib/fetchData"

export async function getStaticPaths(){
    return {
        paths: [{
            params:{
                id: "2012-12-12"
            }
        }],
        fallback: true,
    }
}

export async function getStaticProps({params}){
    const data = await fetchData(params.id) || null
    return {
        props: {
            data
        }
    }
}

export default function Post({data}){
    const router = useRouter()

    if(router.isFallback) return <Spinner />

    return(
        <div className="mt-8 mx-6">
            <div className="flex justify-end px-4 py-5">
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        {
            data?
            <div className="lg:flex overflow-hidden h-full max-h-3/4 shadow-lg rounded w-full m-auto">
                <div className="h-1/3 lg:h-full lg:w-1/2">
                    <img alt={data.title} src={data.hdurl} className="w-full h-full object-cover"/>
                </div>
                <section className="overflow-hidden overflow-y-auto dark:bg-gray-800 w-full min-h-2/3 lg:h-full lg:w-1/2 p-4">
                    <h1 className="flex-auto text-4xl lg:text-6xl px-4 sm:px-6 pt-2 font-semibold dark:text-gray-50">
                <section className="overflow-hidden overflow-y-auto dark:bg-gray-800 w-full h-2/3 lg:h-full lg:w-1/2 p-4">
                    <h1 className="flex-auto text-4xl lg:text-6xl px-4 sm:px-6 pt-2 font-semibold dark:text-gray-50">
                        {data.title.split(':')[0]}
                    </h1>                       
                    <p className="text-gray-500 dark:text-gray-300 font-md text-2xl px-4 pt-8 sm:px-6">
                        {data.explanation}
                    </p>
                </section>
            </div> : <Error statusCode={500}/>
    
        }
        </div>
    )
}
