'use client';
import styles from './page.module.css'
import Gallery from '../components/gallery';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const projects = [
  {
    name: "Buddha",
    handle: "Buddha"
  },
  {
    name: "Hasnain",
    handle: "Hasnain"
  },
  {
    name: "Temple",
    handle: "Temple"
  },
  {
    name: "Green",
    handle: "Green"
  }
]

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
     <main className={styles.main}>
      {
        projects.map( ({handle}, i) => {
          return <Gallery handle={handle} key={i}/>
        })
      }
      {/* <Description projects={projects}/> */}
    </main>
  )
}