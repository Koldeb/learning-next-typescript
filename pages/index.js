import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>Page d'introduction</a>
          </Link>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

      </main>

    </div>
  )
}
