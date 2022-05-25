export default async function handler(request, response) {
  console.log("MPPending", request);

  return response.status(200).json({ message: 'OK' });

}