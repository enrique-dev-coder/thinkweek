import Head from 'next/head'


const Layout = ({children})=>{


  return (
    <>
      <Head>
        <title>Thinkweek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      {children}
 
    </>
  )
}

export default Layout