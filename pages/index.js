import React, { useState } from 'react'
// packages
import Head from 'next/head';
import uniqid from 'uniqid';
// Custom Components
import DefaultLayout from "../layouts/DefaultLayout";
import RecursiveMenu from '../components/RecursiveMenu';
import MyTable from '../components/MyTable';
// CSS Module Styling
import styles from '../styles/Home.module.css';
// load data
import { initialColumns, initialItems, makeData } from '../constants';

function StyledTable() {
  const data = React.useMemo(() => makeData(20), [])

  return (
    <MyTable columns={initialColumns} data={data} />
  )
}

export default function Home() {
  const [skills, setSkills] = useState([
    {
      id: uniqid(),
      name: "JavaScript",
      children: [
        {
          id: uniqid(),
          name: "React",
        },
        {
          id: uniqid(),
          name: "Angular",
        },
        {
          id: uniqid(),
          name: "Vue.js",
        },
        {
          id: uniqid(),
          name: "Node.js",
        },
      ]
    },
    {
      id: uniqid(),
      name: "Python",
      children: [
        {
          id: uniqid(),
          name: "Numpy",
        },
        {
          id: uniqid(),
          name: "Pandas",
        },
        {
          id: uniqid(),
          name: "Beautiful Soup4",
        },
        {
          id: uniqid(),
          name: "TensorFlow",
        },
        {
          id: uniqid(),
          name: "OpenCV",
        },
      ]
    },
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="An example of a meta description. These show up in search engine results." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Resume Skills Builder</a>
        </h1>
        <RecursiveMenu items={skills} />
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