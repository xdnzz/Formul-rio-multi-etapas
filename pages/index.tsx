import type { NextPage } from 'next'
import Step1 from './step1'
import {FormProvider} from '../src/context/formcontext'
import Theme from '../src/components/Theme/index'
const Home: NextPage = () => {
  

  return (
  <main>
      <div className='container'>
         <title>Multiforms - Typescript and Next</title>
         <FormProvider>
            <Theme>
               <Step1/>
            </Theme>
         </FormProvider>
        
    
      </div>

   </main>
)}
export default Home
