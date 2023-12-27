import React from 'react'
import {db} from '@vercel/postgres';


export default async function ServiceProvider(request, response) {

  const client = await db.connect();

//   try {
//     const insertedValue = await client.sql`INSERT INTO service_provider (id,name,address,rating,phone_number,city,state,pincode,email,review_count,service_category) VALUES(1, 'Abhi','takiyapar',4.0, 23423423,'patna','bihar',800012,'asdasd@adad.com',34,'carpenter')`
//   } catch (error) {
//     console.log('Got some error')
//     console.log(error.detail);

//   }

  const serviceProvider = await client.sql`SELECT * FROM service_provider;`
  console.log('Found ' + serviceProvider.rowCount + ' rows in table')
  //console.log(serviceProvider.rows)

  return(
  <div>
    Services Provider  Table
  </div>
  )
}