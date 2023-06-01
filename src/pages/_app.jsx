import React, { useEffect, useState } from 'react'
import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/header'

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Portfólio</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

