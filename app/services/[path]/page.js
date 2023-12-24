import React from 'react'
import { sql } from "@vercel/postgres";
export const dynamicParams = false


export async function generateStaticParams() {
  try {
    const { rows } = await sql`SELECT * from services`;

    const paths = rows.map((service) => {
      return  { path: service.name }
    })
    console.log(paths)
    return paths
  } catch (error) { 
    console.log(error)
    return [
      { path: '' }
    ]
  }
}

export default function Page({ params }) {
  return (
    <div>
      <h1>{params.path}</h1>
    </div>
  )
}