import Error from 'next/error'
import Image from '../components/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

import '@shopify/polaris/build/esm/styles.css';
import { MediaCard,Spinner} from '@shopify/polaris';

import fetchData from '../lib/fetchData';

export async function getStaticProps() { 
  const data = await fetchData() || null
  return {
    props: {
      data 
    }
  }
}

export default function Home({data}) {
  const router = useRouter()

  return (
    <Layout home>
      {
        router.isFallback ?
        <Spinner accessibilityLabel="Loading" size="small" /> : data ?
        data.map(({copyright, date, explanation, hdurl, title, url, media_type}) => (
            media_type==='image' &&
            <div key={date} className="flex flex-col max-h-3/4 sm:max-h-1/2 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="h-96">
                    <img src={url} alt={title.split(':')[0]} className="rounded-lg inset-0 w-full h-full object-cover"/>
                </div>
                <div className="flex-auto px-4">
                    <div className="flex items-center justify-between flex-wrap pt-8">
                        <h1 className="flex-auto text-2xl font-semibold dark:text-gray-50">
                          {title.split(':')[0]}
                        </h1>
                        <div className="flex justify-end text-xl font-medium text-gray-500 dark:text-gray-300 mt-2">
                            {date}
                        </div>
                    </div>
                    {
                      title.split(':')[1] && 
                      <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                        {title.split(':')[1].trim()}
                      </div>
                    }
                    <div className="flex justify-between items-center py-5 text-gray-700 dark:text-gray-300">
                      <button type="button" className="py-4 px-8  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-2xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Like
                      </button>
                      <Link href={`/posts/${date}`} className='text-2xl'>
                        <a>Details</a>
                      </Link>
                    </div>
                </div>
            </div>

        )) :
            <Error statusCode={500}/>
      }
    </Layout>
  )
}
