import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

import '@shopify/polaris/build/esm/styles.css';
import { MediaCard,} from '@shopify/polaris';

import fetchData from '../lib/fetchData';

export async function getStaticProps() { 
  const data = await fetchData()
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
        data.map(({copyright, date, explanation, hdurl, title, url, media_type}) => (
            media_type==='image' &&
            <MediaCard
              key={date}
              title={title}
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
              {/* <Image
                src={url}
                alt={title}
                layout='fill'
              /> */}
                <img
                  alt=""
                  className={utilStyles.postImage}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  src={url}
                />
            </MediaCard>
        ))
      }
    </Layout>
  )
}
