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
  description: "Desarrollo web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* <style>
          .container {margin: 0 auto; padding: 40px; width: 80%; color: #333; background: #419be0; }
        </style> */}
      </head>
      <body className={poppins.className}>
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