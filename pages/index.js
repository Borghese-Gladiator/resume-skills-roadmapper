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


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
function StyledTable() {
  const data = React.useMemo(() => makeData(20), [])

  return (
    <Styles>
      <MyTable columns={initialColumns} data={data} />
    </Styles>
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