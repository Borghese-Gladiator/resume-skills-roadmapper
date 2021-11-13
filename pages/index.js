import React, { useState } from 'react'
import Head from 'next/head';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="An example of a meta description. These show up in search engine results." />
      </Head>

      <main>
        <h1>
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
      </main>
    </div>
  )
}