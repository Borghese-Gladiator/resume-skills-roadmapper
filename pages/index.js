import React from 'react'
// Next.js Imports
import Head from 'next/head';
// Custom Components
import DefaultLayout from "../layouts/DefaultLayout";
import RecursiveMenu from '../components/RecursiveMenu';
import MyTable from '../components/MyTable';
// CSS Module Styling
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

import { initialColumns, initialItems, makeData } from '../constants';

function StyledTable() {
  const data = React.useMemo(() => makeData(20), [])

  return (
    <MyTable columns={initialColumns} data={data} />
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="An example of a meta description. These show up in search engine results." />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Resume Skills Builder</a>
        </h3>
        <RecursiveMenu items={initialItems} />
        <StyledTable />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

Home.Layout = DefaultLayout;