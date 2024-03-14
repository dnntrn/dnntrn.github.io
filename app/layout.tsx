import Navigation from "./components/navbar";
import './globals.css'
import clsx from "clsx";
import { poppins, lato, roboto, higuenSerif, brittanySignature } from "./fonts";
import Footer from "./components/footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className={clsx(higuenSerif.variable, poppins.variable, lato.variable, roboto.variable, brittanySignature.variable)}>
            <Navigation />
            
            <main>{children}</main>
            <Footer />
        </body>
      </html>
    )
  }
