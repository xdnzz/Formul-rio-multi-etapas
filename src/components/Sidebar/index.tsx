import * as D from '../../../styles/form1/Sidebar/style';
import Link from 'next/link';


type Props ={
    title: string,
    description: string,
    icon: string,
    path:string,
    active: boolean
}


export const Sidebar = ({title,description, icon, path, active }:Props) => {
    return(
        <D.Container>  
               <Link href={path}>
                   <div style={{display:'flex'}}>
                   <D.Info>
                        <D.Title>{title}</D.Title>
                        <D.Description>{description}</D.Description>
                    </D.Info>
                    <D.IconArea active={active}>
                        ✅
                    </D.IconArea>
                    <D.Point active={active}>

                    </D.Point>
                   </div>
               </Link>
                   
           
        </D.Container>
    )
}

