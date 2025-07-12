
import Image from 'next/image'
import React from 'react'
import HeroImage from "@/public/images/vasuImage.jpg"

const Introduction = () => {
  return (
    <section className='py-48'>
        <div className='container'>
            <div className='flex justify-between'>
                <div>
                    <Image src={HeroImage} alt='Hero Image' className='rounded-2xl' width={250} />

                </div>
                <div className='max-w-2xl'>
                    <h2 className='text-2xl'>Myself Vasu Singh, I am a Final Year BTech(IT) student from MAIT, Delhi.</h2>
                    <p>I am a FullStack Developer with my expertise in Frontend Developemnt</p>

                </div>
            </div>

        </div>

    </section>
  )
}

export default Introduction