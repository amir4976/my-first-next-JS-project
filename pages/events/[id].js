import React from 'react'
import { useRouter } from 'next/router'


function eventPage() {
    const router = useRouter()
  const { id } = router.query

  return (
    <div>eventPage {id}</div>
  )
}

export default eventPage