import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Step1 from './step1'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Step1/>
    </div>

      )}
export default Home
