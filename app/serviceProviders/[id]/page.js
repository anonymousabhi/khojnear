
import { sql } from "@vercel/postgres";

export default async function ServiceProviders({params}) {

  const serviceProviderId = params.id;

  try {
    const userData = await sql`SELECT * from service_provider WHERE id =${serviceProviderId} LIMIT 1`;
    const serviceProviderData =  userData.rows[0];

    const imageData = await sql`SELECT * from service_provider_images WHERE id =${serviceProviderId} LIMIT 1`;
    const serviceProviderImage =  imageData.rows[0].url;

    const reviewData = await sql`SELECT * from reviews WHERE id =${serviceProviderId} LIMIT 1`;
    const reviews =  reviewData.rows;

    const timingData = await sql`SELECT * from service_provider_timing WHERE id =${serviceProviderId} LIMIT 1`;
    const timings =  timingData.rows[0];

    return (
      <div>
        <img src="https://hips.hearstapps.com/clv.h-cdn.co/assets/17/29/2048x1152/hd-aspect-1500566326-gettyimages-512366437-1.jpg" width="500" height="600"></img>
        <h1>Name : {serviceProviderData.name}</h1> 
        <h1>Address : {serviceProviderData.address}</h1> 
        <h1>City : {serviceProviderData.city}</h1> 
        <h1>State : {serviceProviderData.state}</h1> 
        <h1>Email : {serviceProviderData.email}</h1> 
        <h1>Pincode : {serviceProviderData.pincode}</h1> 
        <h1>Mobile Number : {serviceProviderData.phone_number}</h1>
        <h1>Provides Services on : {serviceProviderData.service_category}</h1> 
        <h1>Rating : {serviceProviderData.rating}/10</h1>
        <h1>Reviews : {serviceProviderData.review_count}</h1>

        <br/>
        <br/>
        <br/>
        <br/>


        <h1>Timings  :</h1>
        <h1>Day : {timings.day}</h1>
        <h1>Opens at : {timings.opening_time}</h1>
        <h1>Closes at : {timings.closing_time}</h1>




        <br/>
        <br/>
        <br/>
        <br/>


        <h1>Reviews: </h1>
        <ul>
          {reviews.map((prop)=>
          <li key={prop.id}>
            <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTBRNmeK96NGJXTd-kkAXxHcleKuUHjaCso23VwHDCVcwzdODVHZRdvyv4P4S26DgNfFOYDP5yYZvkjHY8" width="100" height="100"></img>
            {prop.reviewer_name}<br/>
            {prop.review}<br/>
            Likes: {prop.likes}<br/>
            Dislikes: {prop.dislikes}<br/>
            Rating:  {prop.rating}
          </li>)}
        </ul>

        <br/>
        <br/>
        <br/>
        <br/>

        
        
      </div>
    )




  } catch (error) { 
    console.log(error)

    return (
      <div>
        
        <h1>Data ERROR</h1> 
        
      </div>
    )
  }
  
} 





