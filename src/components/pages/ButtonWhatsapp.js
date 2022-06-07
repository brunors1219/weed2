import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { useParams } from 'react-router-dom';
import Unidades from "../context/Unidades"


const BtWhatsapp = () => {
  const [whatsapp, setWhatsapp] = useState("")
  const [is_visible, setIs_Visible] = useState(true)
  const [visibilityMsg, setVisibilityMsg] = useState("hidden")

  const {uf} = useParams()
 
  useEffect(() => {
    const whats = Unidades.renderRegiao(uf).filter(value => value.principal === true)
    setWhatsapp(whats[0].contato.substring(1))

    function toggleVisibility() {
      if (uf.toUpperCase() === "MARCOS") {
        setIs_Visible(true);
      } else {
        if (window.pageYOffset > 50) {
          setIs_Visible(true);
        } else {
          setIs_Visible(false);
        }  
      }
    }

    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    })

  }, [])

  useEffect(() => {
    if (uf.toUpperCase() === "MARCOS") {
      setVisibilityMsg("visible")
    }else{
    visibilityMsg === "hidden"
    ? setTimeout(() => {
        setVisibilityMsg("visible")
      }, 1000)
    : setTimeout(() => {
        setVisibilityMsg("hidden")
      }, 5000)
    };
  },[visibilityMsg])

  return (
    <>
    { is_visible && (
      <div>
        <a className="whatsapp whatsappDesktop" href={`https://web.whatsapp.com/send/?phone=${whatsapp}`} target="_blank"><WhatsAppIcon className="icon" /></a>
        <a className="whatsapp whatsappMobile" href={`https://api.whatsapp.com/send/?phone=${whatsapp}`} target="_blank"><WhatsAppIcon className="icon" /></a>
        <div id="msg1" style={{visibility: `${visibilityMsg}`}}><p>Fale conosco via WhatsApp</p></div>
      </div>
    )}
    
    </>
  )
}


export default BtWhatsapp;