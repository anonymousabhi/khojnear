import React from 'react'
import {db} from '@vercel/postgres';



export default async function Services(request, response) {

  const client = await db.connect();

  // try {
  //   const insertedValue = await client.sql`INSERT INTO service_provider_images (id, url, service_provider_id)
  //   VALUES (1, 'https://picsum.photos/200/300',1);`
  // } catch (error) {
  //   console.log(error.detail);
  // }

  const services = await client.sql`SELECT * FROM service_provider_images;`

  console.log(services.rows)

  return(
  <div>
    Services Provider Image Table
  </div>
  )
}
