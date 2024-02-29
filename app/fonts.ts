import { Poppins, Lato } from 'next/font/google'
 
export const poppins = Poppins({
    variable: '--font-poppins',
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
})
 
export const lato = Lato({
    subsets: ['latin'],
    variable: '--font-lato',
    weight: "400",
    display: 'swap',
})