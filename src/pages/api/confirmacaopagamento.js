export default async function confirmacaopagamento(request, response) {
  try {
    
    const { body, query } = request;

    console.log(request);

    return response.status(200).json({ message: 'OK' });
    
  } catch(err) {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

