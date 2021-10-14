import {useRouter} from "next/router"
import Link from "next/link"
import Image from "../../components/image"
import { Spinner } from "@shopify/polaris"

import Layout from "../../components/layout"
import utilStyles from "../../styles/utils.module.css"
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
    const data = await fetchData(params.id)
    return {
        props: {
            data
        }
    }
}

export default function Post({data}){
    const router = useRouter()

    if(router.isFallback){
        return(
            <Spinner accessibilityLabel="Loading" size="small" />
        )
    }
    return(
            <div className="flex flex-col lg:flex-row overflow-hidden h-1/2 lg:h-full shadow-lg rounded w-full mx-auto">
                <div className="h-1/2 lg:h-full lg:w-1/2">
                    <img alt={data.title} src={data.hdurl} className="w-full object-cover"/>
                </div>

                <section className="overflow-hidden overflow-y-auto dark:bg-gray-800 w-full h-1/2 lg:h-full lg:w-1/2 p-4">
                    <div className="flex justify-end px-4 py-5">
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                    <header className="text-gray-800 dark:text-white text-2xl font-lg mb-2 px-4 pt-5 sm:px-6">
                        {data.title}
                    </header>                        
                    <p className="text-gray-400 dark:text-gray-300 font-md text-xl px-4 pt-2 sm:px-6">
                        {data.explanation}
                    </p>
                </section>
            </div>                
        
    )
}