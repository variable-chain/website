/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "./components/context/LayoutContext";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Variable",
  description: "Variable blockchain solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="text/javascript"
          src="https://zc1.maillist-manage.in/js/optin.min.js"
          onload="setupSF('sf3z1c142d5b4f5c4654e98e4ce8364c62f58515d24cd7f6619ab7a7072a764a253e','ZCFORMVIEW',false,'light',false,'0')"
        ></script>
        <script type="text/javascript">
          function
          runOnFormSubmit_sf3z1c142d5b4f5c4654e98e4ce8364c62f58515d24cd7f6619ab7a7072a764a253e(th)
          {/*Before submit, if you want to trigger your event, "include your code here"*/}
          ;
        </script>
      </Head>
      <body className={`${inter.className} ${poppins.className}`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
