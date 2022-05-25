export default async function handler(request, response) {
  console.log("MPFailure", request);

  return response.status(200).json({ message: 'OK' });

}