import React from 'react';

import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h2>Football Stats</h2>
      </Link>
      {/* <nav>
        <Link href="#">Players</Link>
        <Link href="#">Teams</Link>
        <Link href="#">Matches</Link>
      </nav> */}
    </header>
  );
}
