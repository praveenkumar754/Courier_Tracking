import React from 'react'

export default function Blog() {
  return (
    <div>



  <section>
<div className='text-blue-500 text-center text-4xl'>
  <h1>Services</h1>
</div>

<div className='text-black text-center text-4xl'>
  <h1>Our services for you</h1>
</div>

<div className='flex justify-center gap-16 py-28'>
<div className='max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 '>
  <img src="src/assets/cards1.jpg" alt=""  className='w-full'/>
  <div className='px-6 py-4'>
  <div className='font-bold text-xl mb-2 text-red-600'>
     <h4>Express Delivery</h4>
  </div>
  <div className='font-bold text-sm mb-2 text-black'>
     <p>This service  ensure that your urgent document or packages delivered Quickly</p>
  </div>
  <div>
    <button className='bg-blue-500 text-white rounded-full w-32 text-center items-center'>
      view Details
    </button>
  </div>
  </div>
</div>


<div className='max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300'>
  <img src="src/assets/cards2.jpg" alt=""  className='w-full'/>
  <div className='px-6 py-4'>
  <div className='font-bold text-xl mb-2 text-red-600'>
     <h4>Standard Delivery</h4>
  </div>
  <div className='font-bold text-sm mb-2 text-black'>
     <p>This service  ensure that your urgent document or packages delivered Quickly</p>
  </div>
  <div>
    <button className='bg-blue-500 text-white rounded-full w-32 text-center items-center'>
      view Details
    </button>
  </div>
  </div>
</div>

<div className='max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300'>
  <img src="src/assets/cards3.webp" alt=""  className='w-full'/>
  <div className='px-6 py-4'>
  <div className='font-bold text-xl mb-2 text-red-600'>
     <h4>Corporate Bulk  Delivery</h4>
  </div>
  <div className='font-bold text-sm mb-2 text-black'>
     <p>Our reliable logistics network enables faster and most dependable door-to-door transmit service in the industry.</p>
  </div>
  <div>
    <button className='bg-blue-500 text-white rounded-full w-32 text-center items-center '>
      view Details
    </button>
  </div>
  </div>
</div>
</div>

</section>




</div>

  )
}

