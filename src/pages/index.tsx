import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Football Stats</title>
        <meta
          name="description"
          content="Find the most accurate football statistics for your team"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <header className={styles.header}>
        HEADER
        <nav>
          <a href="#">Players</a>
          <a href="#">Teams</a>
          <a href="#">Matches</a>
        </nav>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Football is Life</h1>
        <label>Find your team</label>
        <input
          type="text"
          placeholder="FCBarcelona"
        />
      </main>
    </>
  );
}
