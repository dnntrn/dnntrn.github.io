import { Poppins, Lato, Roboto, Black_Han_Sans } from 'next/font/google'
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

export const ttCommonsPro = localFont({
    src: [
      {
        path: '../public/fonts/tt_commons_pro_regular.otf',
        weight: '400'
      },
    ],
    variable: '--font-commons'
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