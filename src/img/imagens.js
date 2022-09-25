import TECNOLOGIA from './TECNOLOGIA.png';
import FISCAL from './FISCAL.png';
import CONTAB from './CONTAB.png';
import VENDAS from './NOTAS.png';
import POSVENDAS from './POSVENDAS.png';   
import INTEGRACAO from './INTEGRACAO.png';
import NOTAS from './NOTAS.png';


const imagem = [    
                     TECNOLOGIA, 
                     FISCAL, 
                     CONTAB,
                     VENDAS, 
                     POSVENDAS,
                     INTEGRACAO,
                     NOTAS

                    ]
                

export default function Imagens(props) {
    
    return (
        <> 
         <img width="150" height="150" src={imagem[props.IMG]} ></img>
         </>
    )
}

export function Imagens1() {
    
    return (
        console.log(imagem[0])
    )
}
 
 