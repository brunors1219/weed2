import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinearProgress from '@material-ui/core/LinearProgress'
import Unidades from "../context/Unidades"
import emailjs from 'emailjs-com'

import { Form } from '@unform/web'
import Input from "./Form/Input";
import Select from "./Form/Select";
import TextArea from "./Form/TextArea";
import HandleMask from "../context/HandleMask"

import * as Yup from 'yup'


const ContactContent = () => {
  const formRef = useRef(null);
  const [locale, setLocale] = useState({
    email: "",
    whatsapp: []
  })
  const [success, setSuccess] = useState(false)
  const [progress, setProgress] = useState(false)
  const { uf } = useParams()


  useEffect(() => {
    // setContacts(Unidades.renderMany(uf))
    // setEmail(Unidades.renderMany(uf)[0].email),
    setLocale(Unidades.renderRegiaoMail(uf))
  }, [])


  const handleMail = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Este campo é obrigatório'),
        email: Yup.string().required('Cambo obrigatório'),
        // horario:Yup.string().required('Selecione o intervalo que podemos entrar em contato'),
        telefone: Yup.string().required('Coloque seu telefone com DDD para que podemos entrar em contato'),
        message: Yup.string().required('Campo obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      setProgress(true)
      const sendMail = await emailjs.send(
        'service_3bxkltm', 'template_9tvnqzq',
        {
          from_email: locale.email,
          assunto: data.assunto,
          to_name: data.name,
          description: data.message,
          contact: data.horario,
          to_email: data.email,
          to_telefone: data.telefone
        }, 'user_XUQ5qj4pX8lafVTZ6q2PT'
      )

      setSuccess(true)
      setProgress(false)
      reset()

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erroMessages = {}

        err.inner.forEach(error => {
          erroMessages[error.path] = error.message
        })

        formRef.current?.setErrors(erroMessages)
      }

    }
  }

  return (
    <>
      <div id="marcoscontact-area" className="marcoscontact-area mt-100 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title">
                <h4>Contato</h4>
                <h3>Fale conosco</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-7 col-md-12 col-sm-12 pr-30">
              <div className="appnox-contact-form-area">
                <Form
                  className="appnox-contact-form"
                  onSubmit={handleMail} ref={formRef}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <Input
                          type="text"
                          name="name"
                          placeholder="Nome *"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <Input
                          type="email"
                          name="email"
                          placeholder="E-mail *"
                        />
                      </div>

                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Input
                          type="text"
                          name="telefone"
                          placeholder="Telefone"
                        />
                      </div>

                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <Select
                          name="horario"
                        />
                      </div>

                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                        <Input
                          type="text"
                          name="assunto"
                          placeholder="Assunto"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <TextArea
                          name="message"
                          placeholder="Mensagem"
                        ></TextArea>
                      
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-2">
                        <button className="btn btn-type-1">
                          Enviar
                          </button>
                      </div>
                      <div className="col-xl-10 ">
                        {
                          progress
                            ? <LinearProgress color="secondary"/>
                            : null
                        }{
                          success
                            ? <div className="alert alert-success m-0" role="alert">
                                Contato enviado com sucesso! Entraremos em contato.
                              </div>
                            : null
                        }
                        
                      </div>
                    </div>
                    <p className="form-message float-left mt-15"></p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="marcoscontact-info-area"
        className="marcoscontact-info-area mb-70"
      >
        <div className="container">
          <p>Entraremos em contato somente por chamada via Whatsapp!</p>
          <div className="row">
            {
              locale.whatsapp.map(cont =>
                <a href={`https://api.whatsapp.com/send/?phone=${cont.contato}`} className="contact-whats">
                  <WhatsAppIcon style={{ color: "#00db50", marginRight: "30px" }} fontSize="large" />
                  <span>
                    {cont.cidade}<br /> <strong>{HandleMask(cont.contato)}</strong>
                  </span>
                </a>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
