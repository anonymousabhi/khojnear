import React from 'react'


export async function generateStaticParams() {
  return [
      { path: 'path1'},
      { path: 'path2'}
  ]
}
 


export default function Page({ params }) {
  const {path} = params
  return <div>Category {path}</div>
}