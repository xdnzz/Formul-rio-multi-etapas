import * as S from  '../../../styles/theme/style';
import {ReactNode} from 'react';
import Header from '../Header/index';
import {Sidebar} from '../Sidebar/index';
import {useForm} from '../../context/formcontext'

type Props = {
children: ReactNode;
}


export default function Theme({children}:Props){
    const {state} = useForm();

    return (

      <S.Container>
          <S.Area>
              <Header/>
              <S.Steps>
                  <S.Sidebar>

                    <Sidebar
                        title="Pessoal"
                        description="Se identifique"
                        icon="profile"
                        path="/step2"
                        active={state.currentStep === 1}
                    />

                        <Sidebar
                        title="Profissional"
                        description="seu nível"
                        icon="profile"
                        path="/"
                        active={state.currentStep === 2}
                    />

                        <Sidebar
                        title="Contatos"
                        description="Como te achar"
                        icon="profile"
                        path="/step3"
                        active={state.currentStep === 3}
                    />

                  </S.Sidebar>
                  <S.Page>
                  {children}
                  </S.Page>
              </S.Steps>
          </S.Area>
      </S.Container>
    )
}