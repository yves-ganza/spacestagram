import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'

import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


export const siteTitle = 'SpaceStagram'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Photos from NASA's image apis"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      {home && (
        <header className={styles.header}>
          <h1 className='text-5xl sm:text-9xl font-mono text-indigo-900'>SpaceStagram</h1>
        </header>        
      )}

      <main className={home ? utilStyles.grid : utilStyles.wrapper}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}