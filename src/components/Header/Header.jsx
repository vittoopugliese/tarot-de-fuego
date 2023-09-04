import { useState } from "react"
import './header.css'

const headerLinks = [
  {name:'Inicio', state:'Inicio'},
  {name:'Carta Astral', state:'CartaAstral'},
  {name:'Servicios', state:'Servicios'},
  {name:'Productos', state:'Productos'},
  {name:'Recomendaciones', state:'Recomendaciones'},
]

export const Header = () => {
  const [linkActive, setLinkActive] = useState('Inicio')

  return (
    <header>
    <div className="logo-section">
      <p className="font-tarot">Tarot del<br />Fuego</p>
      <img src="./images/fuego.png" alt="fire-logo" 
      width='28px' draggable={false}/>
    </div>

    <nav>
      <div className="nav-items">
        {headerLinks.map(link => {
          return <a href={'#'+ link.state} draggable={false} onClick={() => setLinkActive(link.state)} key={link.name} 
          className={linkActive == link.state ? 'nav-item-active' : ''}>{link.name}</a>
        })}
      </div>
    </nav>

    <button className="init-session-btn">
      <p>Iniciar Sesión</p>
    </button>
  </header>
  )
}
