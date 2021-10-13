import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I&apos;m <em>Yves.</em> A fullstack web developer.</p><br/>
        <p>You can reach me on <a href='https://twitter.com/lebon_yg'>Twitter</a></p>
      </section>
    </Layout>
  )
}
