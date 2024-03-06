import { Poppins, Lato, Roboto } from 'next/font/google'
import localFont from '@next/font/local'

export const higuenSerif = localFont({
  src: [
    {
      path: '../public/fonts/higuen_serif.otf',
      weight: '400'
    },
  ],
  variable: '--font-higuen'
})

export const brittanySignature = localFont({
  src: [
    {
      path: '../public/fonts/brittany_signature.ttf',
      weight: '400'
    },
  ],
  variable: '--font-brittany'
})

export const poppins = Poppins({
    variable: '--font-poppins',
    weight: ["400", "700"],
    subsets: ['latin'],
    display: 'swap',
})
 
export const lato = Lato({
    subsets: ['latin'],
    variable: '--font-lato',
    weight: ["400", "700"],
    display: 'swap',
})

export const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ["100", "300", "400"],
    display: 'swap',
})