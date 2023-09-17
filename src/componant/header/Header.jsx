import { NavLink } from 'react-router-dom'
import logo from '../../asset/logo.png'
import '../../style/index.css'
import './header.css'

export default function Header(){
    return(
        <header className='dark'>
            <div className='container flex'>
            <img src={logo} alt="" className='logo'/>
            <ul className='flex header_list'>
                <li><NavLink>Accueil</NavLink></li>
                <li><NavLink>Profil</NavLink></li>
                <li><NavLink>Réglage</NavLink></li>
                <li><NavLink>Communauté</NavLink></li>
            </ul>
            </div>
        </header>
    )
}