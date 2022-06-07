import react from 'react'
import { Link, useParams } from "react-router-dom";

const Menu2 = () => {
  const {uf} = useParams()

  return (
    <ul className="menu">
      <li>
        <a href={`${process.env.PUBLIC_URL + '/' + uf + "/rede_sociais"}`}>Investigação nas redes sociais</a>
      </li>
      <li>
        <a href={`${process.env.PUBLIC_URL + '/' + uf + "/localizar_pessoas"}`}>Localizar Pessoas</a>
      </li>
      <li>
        <a href={`${process.env.PUBLIC_URL + '/' + uf + "/localizar_devedores"}`}>Localização de devedores</a>
      </li>
      <li>
        <a href={`${process.env.PUBLIC_URL + '/' + uf + "/localizar_golpista"}`}>Localização de golpista</a>
      </li>
      <li>
        <a href={`${process.env.PUBLIC_URL + '/' + uf + "/levantamento"}`}>Levantamento de informações</a>
      </li>
      <li>
        <a href={`${process.env.PUBLIC_URL + '/' + uf + "/rastreamento"}`}>Rastreamento de bens desviados</a>
      </li>
      <li>
        <a href={`${process.env.PUBLIC_URL + '/' + uf + "/pericia"}`}>Perícia em computadores e celulares</a>
      </li>
      <li>
        <a href={`${process.env.PUBLIC_URL + '/' + uf + "/dossie"}`}>Dossiê completo pessoa/empresa</a>
      </li>
    </ul>
  )

}

export default Menu2;