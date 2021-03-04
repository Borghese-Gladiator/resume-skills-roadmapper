// Next.js Imports
import Head from 'next/head';
import Link from "next/link";
// Custom Components
import RecursiveMenu from '../components/RecursiveMenu';
import MyTable from '../components/MyTable';
// CSS Module Styling
import styles from '../styles/Home.module.css';

const menu = [
  {
    title: 'Item 1',
    children: [
      {
        title: 'Item 1.1',
        children: [
          {
            title: 'Item 1.1.1',
          },
        ],
      },
      {
        title: 'Item 1.2',
      },
    ],
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="An example of a meta description. These show up in search engine results." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Link href="/profile">
          <a className="my-link">Go: Profile</a>
        </Link>

        <RecursiveMenu items={menu} />
        <MyTable />
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
