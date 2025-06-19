import React from 'react'

const Collections = () => {
  return (
    <>
    <section className='px-[18px] mt-[40px] flex flex-col gap-3 mb-[88px]'>
    <h1 className='font-medium text-[24px] my-2'>Our collection 
best project  </h1>

    <div className='grid grid-cols-2 gap-5 '>
        <img src="./project1.png" alt="" />
        <img src="./project2.png" alt="" />
        <img src="./project3.png" alt="" />
        <img src="./project4.png" alt="" />

    </div>
</section>
    </>
  )
}

export default Collections