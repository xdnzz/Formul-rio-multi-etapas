import type { NextPage } from 'next'
import {useState} from 'react';
import Step1 from './step1'

const Home: NextPage = () => {
  

  return (
  <main>
      <div className='container'>
         <title>Multiforms - Typescript and Next</title>
         <Step1/>
    
      </div>

   </main>
)}
export default Home
