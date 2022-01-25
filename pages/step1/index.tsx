import * as A from '../../styles/form1/style'
import {useForm, FormActions } from '../../src/context/formcontext'
import Link from 'next/link';
import {ChangeEvent, useEffect} from 'react'

export default function Step1(){
    const {state, dispatch} = useForm();
    
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    },[])

   

    return(
        <A.Display>
           <p>Passo 1/3</p>
           <h1>Vamso começar com o seu nome</h1>
           <p>Preencha o nome abaixo com seu nome completo.</p>

           <hr/>

           <label>
               Seu nome completo
               <input 
               type="text"
               autoFocus
               value={state.name}
               onChange={handleChangeName}
               />

             {state.name !== '' ?  
                <Link  href="step2">

                    <button>Próxima página</button>

                </Link> : ''}
           </label>
        </A.Display>
    )
}