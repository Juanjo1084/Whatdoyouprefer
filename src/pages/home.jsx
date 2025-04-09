import '../styles/home.css'
import { useNavigate } from 'react-router-dom'

export default function Home(){
const navigate = useNavigate();
    return(
        <>
        <div className='home-main'>
            <div className="home">
                <h1>Bienvenido a ¿Que prefieres?</h1>
                <button onClick={() => navigate("/genero")}>Empecemos</button>
            </div>
        </div>
        </>
    )
}