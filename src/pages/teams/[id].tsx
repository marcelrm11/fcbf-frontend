import React, { useEffect, useState } from 'react';
import styles from '@/styles/Team.module.css';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Stat {
  [key: string]: string | number;
}

export default function TeamPage() {
  const router = useRouter();
  const { id } = router.query;
  const [stats, setStats] = useState<Stat>({});

  useEffect(() => {
    console.log(id);
    async function fetchData() {
      try {
        const response = await fetch(`/api/test-team`);
        const data = await response.json();
        console.log(data);
        setStats(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <>
      <Header />
      <article className={styles.container}>
        <h1>Team {id}</h1>
        <section className={styles.teamStats}>
          {Object.entries(stats).map(([key, value]) => (
            <div key={key}>
              <h5>{value}</h5>
              <p>{key}</p>
            </div>
          ))}
        </section>
      </article>
      <Footer />
    </>
  );
}
