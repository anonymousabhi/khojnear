import React from 'react'

export const dynamicParams = false


export async function generateStaticParams() {
  try {
    const categories = await fetch(`http://${process.env.API_URL}/api/best-of-categories?populate=*`)
    const categoriesJson = await categories.json()
    const data = categoriesJson.data
    const paths = data.map((service) => {
      return { params: { path: service.attributes.path } }
    })
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