import React, { Children } from 'react'
import Document, {Html, Head, Main, NextScript} from "next/document"

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default class MyDocument extends Document {

    static async getInitialProps ({ renderPage }) {
        const page = await renderPage()
        const styles = [
          // eslint-disable-next-line react/jsx-key
          <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
        ]
        return { ...page, styles: Children.toArray(styles) }
    }

    render () {
        return (
          <Html style={{ height: '100%' }}>
            <Head/>
            <body style={{ height: '100%', overflow: 'hidden' }}>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
}