// Optional: add the reset to get more consistent styles across browsers


import { AppProps } from 'next/app'

import Head from 'next/head'

import React, { useMemo } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  // memo to avoid re-render on dark/light change

  const contents = useMemo(() => {

    return <Component {...pageProps} />

  }, [pageProps])
  return (
    <>
    <Head>

      <script
        dangerouslySetInnerHTML={{
         // avoid flash of animated things on enter:
          __html: `document.documentElement.classList.add('t_unmounted')`,
        }}
      />

    </Head>
    {contents}  
    </>
  )

}
