import Head from 'next/head';
import Header from '../components/Header';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Instagram - Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Feed */}


      {/* Modul */}


      <footer className="flex items-center justify-center w-full h-20 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
         Created By Fawwaz Bayureksa
        </a>
      </footer>
    </div>
  )
}
