import Link from 'next/link'
import React from 'react'

const  Text  = () => {
  const data = new URLSearchParams().get('data')
  console.log(data)
  return (
    <main>
      <div> Sub componemt for  the  code</div>
      <Link href="/"> Back to Home</Link>
    </main>
  )
}

export default  Text 