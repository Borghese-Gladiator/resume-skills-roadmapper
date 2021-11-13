import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DefaultLayout({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <div id="root">
      <p>
        <button onClick={() => setCounter(counter + 1)}>
          Clicked {counter} Times
        </button>
      </p>
      <Navbar />
      <main id='content'>
        {children}
      </main>
      <Footer />
    </div>
  )
}