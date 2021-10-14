import {useRouter} from "next/router"
import Image from "next/image"
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
            <Layout>
                <Spinner accessibilityLabel="Spinner example" size="large" />
            </Layout>
        )
    }
    return(
        <Layout>
            <h1 className={utilStyles.headingXl}>{data.title}</h1>
            <div>
                <Image
                    src={data.url}
                    width={900}
                    height={700}
                    alt={data.title}
                />
            </div>
            <p>{data.explanation}</p>
        </Layout>
    )
}