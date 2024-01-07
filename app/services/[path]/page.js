import React from 'react'
import { sql } from "@vercel/postgres";
export const dynamicParams = false


export async function generateStaticParams() {
  try {
    const { rows } = await sql`SELECT * from best_of_category`;
    console.log('rows', rows)
    const paths = rows.map((service) => {
      return  { path: service.path }
    })
    console.log('paths', paths)
    return paths
  } catch (error) { 
    console.log('error', error)
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