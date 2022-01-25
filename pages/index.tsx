import type { NextPage } from 'next'
import  Step1  from './step1'
import {FormProvider} from '../src/context/formcontext'
import Theme from '../src/components/Theme/index'
import Step2 from './step2'
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
