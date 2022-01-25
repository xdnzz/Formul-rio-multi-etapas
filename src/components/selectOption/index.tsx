import * as S from '../../../styles/selectoption/style'

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean
    onClick: ()=>void;
}

export default function SelectOption({title, description, icon, selected, onClick}: Props){
    return(
        <S.Container selected={selected} onClick={onClick}>
            <S.Icon>{icon}</S.Icon>
            <S.Info>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Info>
        </S.Container>
    )
}