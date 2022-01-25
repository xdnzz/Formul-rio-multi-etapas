import * as A from '../../styles/form1/style'
import {useForm, FormActions } from '../../src/context/formcontext'
import Link from 'next/link';
import {ChangeEvent, useEffect} from 'react'
import SelectOption from '../../src/components/selectOption/index'

export default function Step1(){
    const {state, dispatch} = useForm();
    
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    

    useEffect(()=>{
        if(state.name===''){
            window.location.href="/"
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
       
    },[])

   const setLevel = (level: number)=> {
       dispatch({
           type: FormActions.setLevel,
           payload: level
       })
   }

    return(
        <A.Display>
           <p>Passo 2/3</p>
           <h1>{state.name}, O que melhor descreve você?</h1>
           <p>Escolha a melhor opção baseado em seu tempo atuando como Dev.</p>

           <hr/>
            <SelectOption
                title="Sou iniciante"
                description="Comecei a programar há menos de 2 anos"
                icon="🤪"
                selected={state.level===0}
                onClick={()=>setLevel(0)}
            />
            <SelectOption
                title="Sou programador"
                description="já programo há mais de 2 anos"
                icon="😎"
                selected={state.level===1}
                onClick={()=>setLevel(1)}
            />
            <Link href="/"><label className="backbutton">Voltar</label></Link>
            <Link  href="step3">
                 <button>Próxima página</button>
            </Link>
          
        </A.Display>
    )
}