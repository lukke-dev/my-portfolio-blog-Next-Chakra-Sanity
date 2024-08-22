import { theme } from '@/config'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AdminLayout, DefaultLayout, ErrorLayout } from '@/layout'

export default function App({ Component, pageProps }: AppProps) {
  const layouts = {
    ErrorPage: ErrorLayout,
    StudioPage: AdminLayout,
  }

  const Layout =
    layouts[String(Component.displayName) as 'StudioPage'] || DefaultLayout

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
