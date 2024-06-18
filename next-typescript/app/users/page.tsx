import Link from 'next/link';
import React, { DetailedHTMLProps } from 'react'

interface DataType{
  id : number;
  userId : number;
  title : string;
  body : string;
}
const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data : DataType[] = await res.json();
  return (
    <>
    <h1>Users : </h1>
    <Link href="/">{"Back to home ->"}</Link>
    <ul>
      {data.map(user => <li key={user.id}>{user.title}</li>)}
    </ul>
    </>
  )
}

export default UsersPage