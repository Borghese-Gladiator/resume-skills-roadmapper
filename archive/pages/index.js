import React, { useState } from 'react'
// packages
import Head from 'next/head';
import Link from 'next/link'
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

// given skills Object, recursively search children for a node
// @return array of path to 
const getPathToNode = (node, skillID) => {
  if (node.id === skillID) {
    return [{
      id: node.id,
      name: node.name
    }
    ];
  }
  // if node has children, check each for skillID
  if (node["children"] !== undefined) {
    for (let childNode of node.children) {
      const result = getPathToNode(childNode, skillID);
      if (result) {
        result.unshift({
          id: node.id,
          name: node.name
        })
        return result;
      }
    }
  }

}

export default function Home() {
  const [skillID, setSkillID] = useState('all');
  const [skills, setSkills] = useState({
    id: 'all',
    name: "All Skills",
    children: [
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
            children: [
              {
                id: 'test',
                name: "Image Smoothing",
              }
            ]
          },
        ]
      }
    ]
  });

  console.log(getPathToNode(skills, 'test'))


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
        <ul>
          <li>
            <Link
              href={{
                pathname: '/post/[pid]',
                query: { pid: 'abc' },
              }}
            >
              <a>Go to pages/post/[pid].js</a>
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: '/post/[pid]',
                query: { pid: 'xyz' },
              }}
            >
              <a>Go to pages/post/[pid].js</a>
            </Link>
          </li>
        </ul>
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