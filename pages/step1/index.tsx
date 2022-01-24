import * as A from '../../styles/form1/style'

export default function Step1(){

const handleNextStep = () => {
    
}

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
               />

               <button onClick={handleNextStep}>Próxima página</button>
           </label>
        </A.Display>
    )
}