import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../layout/Layout'

function eventPage() {
    const router = useRouter()
  const { id } = router.query

  return (
    <>
    <Layout title={'event'}>
      <h1>event select</h1>

    </Layout>
    </>
  )
}

export default eventPage