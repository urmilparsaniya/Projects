// pages/_app.js
import Head from 'next/head';
import '../styles/global.css'; // Import the global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Global SEO settings */}
        <title>Urmil's Portfolio</title>
        <meta name="description" content="Welcome to Urmil's personal portfolio. Explore my resume, projects, and ways to contact me." />
        <meta name="keywords" content="Urmil, Software Engineer, Portfolio, Resume, Projects, Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://urmilparsaniya.vercel.app/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Urmil's Portfolio" />
        <meta property="og:description" content="Explore Urmil's resume, projects, and contact information." />
        <meta property="og:image" content="https://urmilparsaniya.vercel.app/images/Urmil.png" />
        <meta property="og:url" content="https://urmilparsaniya.vercel.app/" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Urmil's Portfolio" />
        <meta name="twitter:description" content="Explore Urmil's resume, projects, and contact information." />
        <meta name="twitter:image" content="https://urmilparsaniya.vercel.app/images/Urmil.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
