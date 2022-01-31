import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dog App</title>
        <link rel="shortcut icon" href="/img/icon.ico" />
        <link rel="apple-touch-icon" href="/img/icon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
