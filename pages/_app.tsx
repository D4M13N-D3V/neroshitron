// Optional: add the reset to get more consistent styles across browsers

import '@tamagui/core/reset.css'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

import { AppProps } from 'next/app'

import Head from 'next/head'

import React, { useMemo } from 'react'

import { TamaguiProvider, createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v3'

const tamaguiConfig = createTamagui(config)

// you usually export this from a tamagui.config.ts file:

// import tamaguiConfig from '../tamagui.config'
// make TypeScript type everything based on your config

type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {

  interface TamaguiCustomConfig extends Conf {}

}
export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useRootTheme()
  // memo to avoid re-render on dark/light change

  const contents = useMemo(() => {

    return <Component {...pageProps} />

  }, [pageProps])
  return (

    <NextThemeProvider onChangeTheme={setTheme as any}>

      <Head>

        <script
          dangerouslySetInnerHTML={{
           // avoid flash of animated things on enter:
            __html: `document.documentElement.classList.add('t_unmounted')`,
          }}
        />

      </Head>

      <TamaguiProvider
        config={tamaguiConfig}
        disableInjectCSS
        disableRootThemeClass
        defaultTheme={theme}
      >

        {contents}

      </TamaguiProvider>

    </NextThemeProvider>

  )

}
