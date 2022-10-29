import React, { use } from 'react'
import Image from 'next/image'
import Link from "next/link";


async function SSRData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
}

export default async function Home() {
  // const dataAll = await use(SSRData());
    const dataAll = await SSRData();
    console.log(dataAll);
  return (
    <div className='p-5'>
      dfgdfg
      {
        dataAll.map((data: any, index: number) => {
          return (
            <div key={index} className='bg-gray-200 p-5 rounded-md my-2'>
              <h1 className='text-xl font-bold'>{data.title}</h1>
              <p className='text-gray-500'>{data.body}</p>
            </div>
          )
        }
        )}
    </div>
  );
}
