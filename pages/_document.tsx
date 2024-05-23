import NextDocument, {

    DocumentContext,
  
    Head,
  
    Html,
  
    Main,
  
    NextScript,
  
  } from 'next/document'
  
  
  
  // you usually export this from a tamagui.config.ts file:
  
  // import tamaguiConfig from '../tamagui.config'
  export default class Document extends NextDocument {
  
    static async getInitialProps({ renderPage }: DocumentContext) {
  
      const page = await renderPage()
      // @ts-ignore RN doesn't have this type
  
      return {
  
        ...page,
  
        styles: (
  
          <>
  
  
  
          </>
  
        ),
  
      }
  
    }
  
    render() {
  
      return (
  
        <Html lang="en">
  
          <Head>
  
            <meta id="theme-color" name="theme-color" />
  
            <meta name="color-scheme" content="light dark" />
  
          </Head>
  
          <body>
  
            <Main />
  
            <NextScript />
  
          </body>
  
        </Html>
  
      )
  
    }
  
  }
  