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
  console.log(data)
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
            <MediaCard
              key={date}
              title={title.split(':')[0]}
              description={`
               ${title.split(':')[1] || ''}\n
               ${date}
              `
              }
              primaryAction={{
                content: 'Like',
                onAction: () => {},
              }}

              secondaryAction={{
                content: 'Details',
                onAction: () => (router.push(`/posts/${date}`)),
              }}
              portrait={true}
            >
              <div className='relative w-full max-h-1/2'>
                <Image
                  alt={title}
                  src={url}
                  layout='fill'
                />                
              </div>
            </MediaCard>
        )) :
            <Error statusCode={500}/>
      }
    </Layout>
  )
}
