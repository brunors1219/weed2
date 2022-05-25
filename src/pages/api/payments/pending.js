export default async function handler(request) {
  console.log("MPPending", request);

  return response.status(200).json({ message: 'OK' });

}