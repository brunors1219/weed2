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
      let invitePendingPeople = 0;
      let confirmedPeopleA = 0;
      let confirmedPeopleC = 0;
      let confirmedPeopleN = 0;
      let confirmedPeopleX = 0;
      let recusedPeople = 0;
      let pendingPeople = 0;
      let pendingPeopleA = 0;
      let pendingPeopleC = 0;
      let pendingPeopleN = 0;
      let pendingPeopleX = 0;
      let invitePendingPeopleA = 0;
      let invitePendingPeopleC = 0;
      let invitePendingPeopleN = 0;
      let invitePendingPeopleX = 0;

      guests.map((guest)=>{
        totalPeople += guest.escorts.length;
        if (guest.dueDate)
          inviteDelivered ++;
        else {
          invitePending ++;
          invitePendingPeople += guest.escorts.length;
        }

        guest.escorts.map((escort)=>{
          if (guest.dueDate)
            if (escort.confirmed)
              if (escort.age == 18)
                confirmedPeopleA ++;
              else if (escort.age == 11)
                confirmedPeopleC ++;
              else if (escort.age == 6)
                confirmedPeopleN ++;
              else 
                confirmedPeopleX ++;
            else if (escort.confirmed===false)
              recusedPeople ++;   
            else 
              if (escort.age == 18)
                pendingPeopleA ++;
              else if (escort.age == 11)
                pendingPeopleC ++;
              else if (escort.age == 6)
                pendingPeopleN ++;
              else 
                pendingPeopleX ++;
          else
              if (escort.age == 18)
                invitePendingPeopleA ++;
              else if (escort.age == 11)
                invitePendingPeopleC ++;
              else if (escort.age == 6)
                invitePendingPeopleN ++;
              else 
                invitePendingPeopleX ++;
        })
      })

      let data = {
        qtdInvite : guests.length, 
        totalPeople,
        inviteDelivered,
        invitePending,
        invitePendingPeople,
        invitePendingPeopleA,
        invitePendingPeopleC,
        invitePendingPeopleN,
        invitePendingPeopleX,       
        confirmedPeopleA,
        confirmedPeopleC,
        confirmedPeopleN,
        confirmedPeopleX,
        recusedPeople,
        pendingPeopleA,
        pendingPeopleC,
        pendingPeopleN,
        pendingPeopleX        
      }
      return response.json(data);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  
  return response.status(405).json({ message: 'Method not allowed' });
}