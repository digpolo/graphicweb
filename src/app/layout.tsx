import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Script from "next/script";

const poppins = Poppins({
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
});


export const metadata = {
  title: "GraphicWeb",
  description: "Diseño Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        /> */}
        <head>
        <title>reCAPTCHA demo: Simple page</title>
    <script src="build/react.js"></script> 
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>

        </head>
      </head>
      <body className={poppins.className}>
      <div id="example"></div>
    <script src="build/index.js"></script> 
        {children}
        <script src="https://www.google.com/recaptcha/api.js"></script>


        
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>

      </body>
    </html>
  );
}