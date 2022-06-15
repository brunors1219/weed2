import connectToDatabase from '../../database';
import Guest from '../../database/schemas/Guest';

export default async function handler(request, response) {
  if (request.method === 'GET' ) {
    try {
      await connectToDatabase();

      let guests = await Guest.find().exec(); 
      
      let totalPeople = 0;
      let inviteDelivered = 0;
      let invitePending = 0;
      let confirmedPeople = 0;
      let recusedPeople = 0;
      let pendingPeople = 0;

      guests.map((guest)=>{
        totalPeople += guest.escorts.length;
        if (guest.dueDate)
          inviteDelivered ++;
        else
          invitePending ++;

        guest.escorts.map((escort)=>{
          if (escort.confirmed)
            confirmedPeople ++;
          else if (escort.confirmed===false)
            recusedPeople ++;   
          else 
            pendingPeople ++;          
        })
      })

      let data = {
        qtdInvite : guests.length, 
        totalPeople : totalPeople,
        inviteDelivered : inviteDelivered,
        invitePending : invitePending,
        confirmedPeople : confirmedPeople,
        recusedPeople : recusedPeople,
        pendingPeople : pendingPeople,
      }

      return response.json(data);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  
  return response.status(405).json({ message: 'Method not allowed' });
}