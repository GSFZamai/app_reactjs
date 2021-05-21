import Buttom from '../Buttom';
import { useState } from 'react';

const Card = () => {

    const [value, setValue] = useState(0);

    console.log(useState());

    function Adicionar() {
        setValue(value + 1);
    }

    function Remover() {
        if (value > 0) {
            setValue(value - 1);
        }
    }

    return(
        <div class="card">
            <h5 class="card-header">Meu primeiro Card</h5>
            <div class="card-body">
                <h5 class="card-title">Card de manipulação de Estado</h5>
                <p class="card-text">Clique nos Botões abaixo para adicionar um diminuir o valor.</p>
                <p class="card-text">O valor nunca será negativo.</p>
                <p>{value}</p>
                <Buttom 
                    className="btn btn-success" 
                    onClick={Adicionar}
                >
                    Adicionar
                </Buttom>
                <Buttom 
                    className="btn btn-danger" 
                    onClick={Remover}
                >
                    Remover
                </Buttom>
            </div>
        </div>
    )

}

export default Card;