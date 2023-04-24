
import React from 'react'
import useSWR from 'swr'

// export async function generateStaticParams() {
//   const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

//   return users?.slice(0, 3).map((user: any) => ({
//     id: user?.id,
//   }));
// }

const fetcher = (args: any) => fetch(args).then(res => res.json())

function Page({ params }: { params: { id: string } }) {
  // const { isLoading, data, error } = useSWR(`https://jsonplaceholder.typicode.com/users/${params.id}`, fetcher)
  return <div><h1>Loading....</h1></div>

  if (false)
    return <div><h1>Error</h1></div>

  return (
    <div>
      <h1>Loading....</h1>
    </div>
  )
}

export default Page