import '../styles/genero.css'
import { useNavigate } from 'react-router-dom'

export default function Genero(){
const navigate = useNavigate();

    return(
        <>
        <div className='genero'>
            <div className='genero-main'>
                <h1>Primero dime ¿Cúal es tu género?</h1>
                <div className='generos'>
                    <div className='lgtb'>
                        <img src="https://i.postimg.cc/50M9dHGx/girl-4140073.png" alt="" />
                        <button onClick={() => navigate("/questions")}>Mujer</button>
                    </div>
                    <div className='lgtb'>
                        <img src="https://i.postimg.cc/BbSqbr4k/man-4140077.png" alt="" />
                        <button onClick={() => navigate("/questions")}>Hombre</button>
                    </div>
                    <div className='lgtb'>
                        <img src="https://i.postimg.cc/43c4SvWL/friends-945879.png" alt="" />
                        <button onClick={() => navigate("/questions")}>Distinto</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}