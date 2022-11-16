import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        white: {
            "100": "#ffffff"
        },
        black: {
            "100": "#000000"
        },
        blue: {
            "100": '#1022FF',
            "200": '#0B1EDB'
        },
        gray: {
            "50": '#B0B0B0',
            "100": '#F8F8F8',
            "150": '#D5D5D5',
            "200": '#F9F9F9'
        },
        yellow: {
            "100": "#FFE706"
        },
        purple: {
            "100": '#8103E5'
        }
    },
    fonts: {
        heading: 'Supply, sans-serif',
        body: 'Roboto, sans-serif'
    },
    styles: {
        global: {
            body: {
                bg: '#ffffff',
                color: 'black.100'
            }
        }
    }
})