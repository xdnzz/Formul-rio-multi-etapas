import * as A from '../../styles/form1/style'
import {useForm, FormActions } from '../../src/context/formcontext'
import Link from 'next/link';
import {ChangeEvent, useEffect} from 'react'

export default function Step3(){

    useEffect(()=>{
        if(state.name===''){
            window.location.href="/"
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
       
    },[])


    const {state, dispatch} = useForm();
    
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleChangeGithub = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    },[])

   const showData = () => {
       if(state.email !== '' && state.github !== ''){


           console.log(state)
           alert('Dados enviados com sucesso!')
       } else {
           alert('preencha os dados acima.')
       }
   }

    return(
        <A.Display>
           <p>Passo 3/3</p>
           <h1>Legal {state.name}, onde te achamos?</h1>
           <p>Preencha suas informações de contato.</p>

           <hr/>

           <label>
               Email:
               <input 
               type="email"
               autoFocus
               value={state.email}
               onChange={handleChangeEmail}
               />

                Github:
               <input 
               type="email"
               autoFocus
               value={state.github}
               onChange={handleChangeGithub}
               />
               <Link href="/step2"><label className="backbutton">Voltar</label></Link>

             

                    <button onClick={showData}>Finalizar Cadastro</button>

                
           </label>
        </A.Display>
    )
}