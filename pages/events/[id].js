import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../layout/Layout'
import { NEXT_URL } from '@/config'

function eventPage({ events }) {
  const router = useRouter()


  return (
    <>
      <Layout title={'event'}>
        <h1>{events.name}</h1>

      </Layout>
    </>
  )
}



export async function getStaticPaths() {
  const res = await fetch(`${NEXT_URL}/api/events`)
  const events = await res.json()

  const paths = events.map((evt) => ({
    params: { slug: evt.slug}
  }))


  return {
    paths,
    fallback: true
  }
}




export async function getStaticProps({ query:{slug} }) {
console.log(slug)
  const res = await fetch(`${NEXT_URL}/api/events/${slug}`)
  const events = await res.json()


  return {
    props: {
      evt:events[0]
      },
      revalidate: 1
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