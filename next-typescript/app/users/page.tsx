import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
  return (
    <main>
      <div> Text </div>
      <Link href="/users/subPage"> Go to Sub</Link> <br/>
      <Link href="/"> Back to Home</Link>
    </main>
  )
}

export default UsersPage