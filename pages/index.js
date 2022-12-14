import Head from "next/head";
import styles from "../styles/Home.module.scss";

import { useState, useEffect } from "react";

export default function Home() {


  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [coords, setCoords] = useState({x: 0, y: 0});

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      // console.log(event.screenX)
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Zkrat Kolektiv</title>
        <link rel="icon" href="favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Interactive, Installations, Visualizations, Zkrat, Zkrat Kolektiv, Zkrat PDF, Zkrat Collective, Collective, zkrat.pdf, @zkrat.pdf, @zkrat.kolektiv"
        />
        <meta
          name="description"
          content="Zkrat is collective of multidisciplinatory artists based in Brno (CZE)"
        />
      </Head>

      <main className={styles.main} style={{transform: `translate(${x}px, ${y}px)` }} onMouseMove={handleMouseMove}>

      </main>

      <div className={styles.homepageTitle}>
          <a href='https://instagram.com/zkrat.kolektiv'>
            <h1>@Zkrat.Kolektiv</h1>
          </a>
          <p>
            Interactive Installations <br /> Visualizations
          </p>
        </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}
