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

      let confirmedPeopleAnselmoA = 0;
      let confirmedPeopleAnselmoC = 0;
      let confirmedPeopleAnselmoN = 0;
      let confirmedPeopleAnselmoX = 0;

      let confirmedPeopleMargoA = 0;
      let confirmedPeopleMargoC = 0;
      let confirmedPeopleMargoN = 0;
      let confirmedPeopleMargoX = 0;

      let presentPeopleA = 0;
      let presentPeopleC = 0;
      let presentPeopleN = 0;
      let presentPeopleX = 0;

      let presentPeopleAnselmoA = 0;
      let presentPeopleAnselmoC = 0;
      let presentPeopleAnselmoN = 0;
      let presentPeopleAnselmoX = 0;

      let presentPeopleMargoA = 0;
      let presentPeopleMargoC = 0;
      let presentPeopleMargoN = 0;
      let presentPeopleMargoX = 0;

      let pendingPeopleA = 0;
      let pendingPeopleC = 0;
      let pendingPeopleN = 0;
      let pendingPeopleX = 0;

      let pendingPeopleAnselmoA = 0;
      let pendingPeopleAnselmoC = 0;
      let pendingPeopleAnselmoN = 0;
      let pendingPeopleAnselmoX = 0;

      let pendingPeopleMargoA = 0;
      let pendingPeopleMargoC = 0;
      let pendingPeopleMargoN = 0;
      let pendingPeopleMargoX = 0;


      let invitePendingPeopleA = 0;
      let invitePendingPeopleC = 0;
      let invitePendingPeopleN = 0;
      let invitePendingPeopleX = 0;
      let recusedPeople = 0;

      guests.map((guest)=>{
        totalPeople += guest.escorts.length;
        if (guest.dueDate)
          inviteDelivered ++;
        else {
          invitePending ++;
          invitePendingPeople += guest.escorts.length;
        }

        guest.escorts.map((escort)=>{
          if (escort.present){
            if (escort.age == 18)
              presentPeopleA ++;
            else if (escort.age == 11)
              presentPeopleC ++;
            else if (escort.age == 6)
              presentPeopleN ++;
            else 
              presentPeopleX ++;

            if (guest.owner == "Anselmo")
              if (escort.age == 18)
                presentPeopleAnselmoA ++;
              else if (escort.age == 11)
                presentPeopleAnselmoC ++;
              else if (escort.age == 6)
                presentPeopleAnselmoN ++;
              else 
                presentPeopleAnselmoX ++;
            else
              if (escort.age == 18)
                presentPeopleMargoA ++;
              else if (escort.age == 11)
                presentPeopleMargoC ++;
              else if (escort.age == 6)
                presentPeopleMargoN ++;
              else 
                presentPeopleMargoX ++;
          }          
          if (guest.dueDate)
            if (escort.confirmed){
              if (escort.age == 18)
                confirmedPeopleA ++;
              else if (escort.age == 11)
                confirmedPeopleC ++;
              else if (escort.age == 6)
                confirmedPeopleN ++;
              else 
                confirmedPeopleX ++;

              if (guest.owner == "Anselmo")
                if (escort.age == 18)
                  confirmedPeopleAnselmoA ++;
                else if (escort.age == 11)
                  confirmedPeopleAnselmoC ++;
                else if (escort.age == 6)
                  confirmedPeopleAnselmoN ++;
                else 
                  confirmedPeopleAnselmoX ++;
              else
                if (escort.age == 18)
                  confirmedPeopleMargoA ++;
                else if (escort.age == 11)
                  confirmedPeopleMargoC ++;
                else if (escort.age == 6)
                  confirmedPeopleMargoN ++;
                else 
                  confirmedPeopleMargoX ++;
            }
            else if (escort.confirmed===false)
              recusedPeople ++;   
            else {
              if (escort.age == 18)
                pendingPeopleA ++;
              else if (escort.age == 11)
                pendingPeopleC ++;
              else if (escort.age == 6)
                pendingPeopleN ++;
              else 
                pendingPeopleX ++;
              
              if (guest.owner == "Anselmo")
                if (escort.age == 18)
                  pendingPeopleAnselmoA ++;
                else if (escort.age == 11)
                  pendingPeopleAnselmoC ++;
                else if (escort.age == 6)
                  pendingPeopleAnselmoN ++;
                else 
                  pendingPeopleAnselmoX ++;
              else
                if (escort.age == 18)
                  pendingPeopleMargoA ++;
                else if (escort.age == 11)
                  pendingPeopleMargoC ++;
                else if (escort.age == 6)
                  pendingPeopleMargoN ++;
                else 
                  pendingPeopleMargoX ++;

          }  else 
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
        confirmedPeopleAnselmoA,
        confirmedPeopleAnselmoC,
        confirmedPeopleAnselmoN,
        confirmedPeopleAnselmoX,
        confirmedPeopleMargoA,
        confirmedPeopleMargoC,
        confirmedPeopleMargoN,
        confirmedPeopleMargoX,

        presentPeopleA,
        presentPeopleC,
        presentPeopleN,
        presentPeopleX,
        presentPeopleAnselmoA,
        presentPeopleAnselmoC,
        presentPeopleAnselmoN,
        presentPeopleAnselmoX,
        presentPeopleMargoA,
        presentPeopleMargoC,
        presentPeopleMargoN,
        presentPeopleMargoX,

        recusedPeople,
        pendingPeopleA,
        pendingPeopleC,
        pendingPeopleN,
        pendingPeopleX,

        pendingPeopleAnselmoA,
        pendingPeopleAnselmoC,
        pendingPeopleAnselmoN,
        pendingPeopleAnselmoX,
        
        pendingPeopleMargoA,
        pendingPeopleMargoC,
        pendingPeopleMargoN,
        pendingPeopleMargoX                

      }
      return response.json(data);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  
  return response.status(405).json({ message: 'Method not allowed' });
}