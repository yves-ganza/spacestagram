import Error from 'next/error'
import LikeButton from '../components/likeButton'
import DetailsBtn from '../components/detailsBtn'
import CloseBtn from '../components/closeButton'
import Spinner from '../components/spinner'
import ImgModal from '../components/imgModal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

import '@shopify/polaris/build/esm/styles.css';

import fetchData from '../lib/fetchData';

export async function getStaticProps() { 
  const data = await fetchData(25) || null
  return {
    props: {
      data 
    }
  }
}

export default function Home({data}) {
  const router = useRouter()

  if(router.isFallback) return <Spinner />

  const handleClick = (e)=>{
    e.preventDefault()
    const target = e.currentTarget.parentElement.nextElementSibling
    target.classList.remove('hidden');
  }

  return (
    <Layout home>
      {
        data ?
        data.map(({copyright, date, explanation, hdurl, title, url, media_type}) => (
            media_type==='image' &&
            <>
              <div key={date} className="grid dark:bg-gray-800 rounded-lg shadow">
                <div className="h-96">
                    <img src={url} alt={title.split(':')[0]} className="rounded-lg inset-0 w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col justify-between px-4">
                    <div className="flex items-center justify-between flex-wrap pt-2">
                        <h1 className="flex-auto text-2xl font-semibold dark:text-gray-50">
                          {title.split(':')[0]}
                        </h1>
                        <div className="flex justify-end text-xl font-medium text-gray-500 dark:text-gray-300 mt-2">
                            {date}
                        </div>
                    </div>
                    <div className="flex justify-between items-end py-5 text-gray-700 dark:text-gray-300">
                      <LikeButton />
                      <DetailsBtn />
                    </div>
                </div>
              </div>
              <div className={`flex-col justify-start shadow rounded hidden bg-white my-4 ${utilStyles.fullwidth} lg:max-h-screen lg: max-w-4xl mx-auto`}>
                <Link href="#">
                  <a  onClick={handleClick}>
                    <div className='h-96 relative'>
                      <Image alt={title} src={hdurl} layout='fill' objectFit='cover' loading='eager'/>
                    </div>
                  </a>
                </Link>
                <section className="dark:bg-gray-800 px-6 py-5 md:px-8 overflow-hidden overflow-y-auto">
                  <div className='flex justify-end items-center p'>
                    <CloseBtn />
                  </div>
                    <h1 className="flex-auto text-4xl md:text-6xl pt-2 font-semibold dark:text-gray-50">
                        {title.split(':')[0]}
                    </h1>                       
                    <p className="text-gray-500 dark:text-gray-300 font-md leading-relaxed text-2xl pt-8 ">
                        {explanation}
                    </p>
                </section>
            </div>
            <ImgModal url={hdurl}/> 
            </>

        )) :
            <Error statusCode={500}/>
      }
    </Layout>
  )
}
