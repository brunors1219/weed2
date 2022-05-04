import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router'; 

const GuestInvite = () => {
  const { query } = useRouter();
  const { id } = query;
  const [name , setName] = useState('');
  const [status , setStatus] = useState('Pendente');
  const [escorts , setEscorts] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${id}`)
        .then(response => response.json())
        .then(data => {
          setName(data.name);
          setStatus(data.confirmed);
          setEscorts(data.escorts);
        });
    }
  }, [id]);

  const setConfirmedStatus = useCallback((confirmed, escortId) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        confirmed,
        escortId,
      }),
    })
    .then(response => response.json())
    .then(data => {
      setStatus(data.confirmed);

      if (escortId) {
        setEscorts(data.escorts);
      }
    });
  }, [id]);
  
  return (
    <div>
      <h1>Guest Id: {id}</h1>
      <h2>{name}</h2>
      <h3>
        Situação da confirmação: {status == null ? 'Pendente' : status ? 'Confirmado' : 'Não irá'}
      </h3>
      <button onClick={() => setConfirmedStatus(true)}>Eu vou</button>
      <button onClick={() => setConfirmedStatus(false)}>Infelizmente não vou poder</button>
      <button onClick={() => setConfirmedStatus(null)}>Não sei ainda</button>
      {status && (
        <ul>
          {escorts.map(escort => (
            <li>
              <span>Id: {escort._id}</span>
              <br />
              <span>Nome do acompanhante: {escort.name}</span>
              <h3>
                Situação da confirmação: {escort.confirmed == null ? 'Pendente' : escort.confirmed ? 'Confirmado' : 'Não irá'}
              </h3>
              <button onClick={() => setConfirmedStatus(true, escort._id)}>Confirmar</button>
              <button onClick={() => setConfirmedStatus(false, escort._id)}>Não irá</button>
              <button onClick={() => setConfirmedStatus(null, escort._id)}>Não sei ainda</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default GuestInvite;