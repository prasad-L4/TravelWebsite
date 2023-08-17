import React from "react";
import'./RecentTrips.css'
import {trips} from'./RecentTripsContent'



function RecentTrips() {
  return (
    <div className="recenttrips">
      <div className="rcnt-trip-hdlne-sub">
        <p className="recent-trip-hdlne">Recent Trips</p>

        <p className="recent-trip-sub">
          You can discover unique destinations using Google Maps
        </p>
      </div>
      <div className="cards">
      {
       trips.map((trip)=>(
       
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top1" src={trip.image} />
          <div class="card-body">
            <h5 class="card-title">{trip.title}</h5>
            <p class="card-text">
               {trip.content}
            </p>
         
          </div>
        </div>

       

        
      

       ))

      }
     </div>
    </div>
  );
}


export default RecentTrips;
