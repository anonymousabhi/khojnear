import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import React from 'react'
export const dynamicParams = false



export async function generateStaticParams() {
    // API call to get all the categories
  const categories = await fetch(`http://${process.env.API_URL}/api/best-of-categories?populate=*`)
  const categoriesJson = await categories.json()
  const data = categoriesJson.data
  console.log(data)
  const paths = data.map((service) => {
    return { path: service.attributes.path }
  })
  console.log(paths)
  return paths
}

 


export default function Page({ params }) {
  const {path} = params
  return <div>Category {path}</div>
}