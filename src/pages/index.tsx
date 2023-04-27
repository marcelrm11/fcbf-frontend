import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

interface Team {
  id: string;
  name: string;
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://jobarcelonanestle.herokuapp.com/api/v1/teams`
        );
        const data = await response.json();
        console.log(data);
        setTeams(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [search]);

  const teamsMemo = useMemo(() => teams, [teams]);

  const filteredTeams = teamsMemo.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

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
      <div className={`${styles.container} ${inter.className}`}>
        <Header />
        <main className={styles.main}>
          <h1>Football is Life</h1>
          <section className={styles.search}>
            <label>Find your team</label>
            <input
              type="text"
              placeholder="Barcelona"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div>
              {search &&
                filteredTeams.map((team) => (
                  <Link
                    href={`/teams/${team.id}`}
                    key={team.id}
                  >
                    <p>{team.name}</p>
                  </Link>
                ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
