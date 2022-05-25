export default async function handler(request) {
  console.log("MPFailure", request);

  return response.status(200).json({ message: 'OK' });

}