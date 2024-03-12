import Navigation from "./navbar";
import './globals.css'
import clsx from "clsx";
import { poppins, lato, roboto, higuenSerif, brittanySignature } from "./fonts";
import Footer from "./footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */
 
export default function RootLayout({ children }:any) {
    return (
      <html lang="en">
        <body className={clsx("pt-20", higuenSerif.variable, poppins.variable, lato.variable, roboto.variable, brittanySignature.variable)}>
            <Navigation />
            
            <main>{children}</main>
            <Footer />
        </body>
      </html>
    )
  }
