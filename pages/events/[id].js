import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../layout/Layout'
import { NEXT_URL } from '@/config'

function eventPage({ events }) {
  const router = useRouter()


  return (
    <>
      <Layout title={'event'}>
        {/* <h1>{events.name}</h1> */}

      </Layout>
    </>
  )
}



export async function getStaticPath () {
const res = await fetch(`${NEXT_URL}/api/events`)
const result = await res.json()
const paths = result.map((evt)=>(
  {params : {slug : evt.slug}}
))

console.log(paths)

return {
paths,
fallback:false  
}

}


export async function getStaticProps ({params}){
  console.log(params)
  return{
    params:{}
  }
}






// get server side props

// export async function getServerSideProps ({query:slug}){

//  const res = await fetch(`${NEXT_URL}/api/events/${slug.id}`)
//   const events= await res.json()

//   return{
//     props:{events:events[0]}
//   }
// } 



export default eventPage