import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      '*::-webkit-scrollbar': {
        width: '10px',
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: '4px',
        backgroundColor: 'darkgrey',
      },
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    primary: {
      50: '#e3fafc',
      100: '#c5f6fa',
      200: '#99e9f2',
      300: '#66d9e8',
      400: '#3bc9db',
      500: '#22b8cf',
      600: '#15aabf',
      700: '#1098ad',
      800: '#0c8599',
      900: '#0b7285',
    },
  },
})
