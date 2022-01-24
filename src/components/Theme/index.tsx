import * as S from  '../../../styles/theme/style'
import {ReactNode} from 'react'
import Header from '../Header/index'


type Props = {
children: ReactNode;
}


export default function Theme({children}:Props){
    return (

      <S.Container>
          <S.Area>
              <Header/>
              <S.Steps>
                  <S.Sidebar>

                  </S.Sidebar>
                  <S.Page>
                  {children}
                  </S.Page>
              </S.Steps>
          </S.Area>
      </S.Container>
    )
}