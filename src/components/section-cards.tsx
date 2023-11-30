import Image from 'next/image'
import Mockup from '../assets/mockup-main.png'

import Card01 from '../assets/image-01.png'
import Card02 from '../assets/image-02.png'
import Card03 from '../assets/image-03.png'
import Card04 from '../assets/image-04.png'
import Card05 from '../assets/image-05.png'
import Card06 from '../assets/image-06.png'

export function SectionCards() {
    return (
        <section className='w-full pb-20'>
            <Image 
                src={Mockup}
                alt='Mockup main'
                className='sticky z-10 top-56 mx-auto -mt-[32rem] mb-16'
            />

            <h2 className='text-center text-7xl font-semibold text-black mb-52'>Faça <span className='text-green-card-title'>você</span> mesmo de casa</h2>

            <div className='relative w-full max-w-area-cards mx-auto h-area-cards'>
                <Image src={Card01} className='absolute top-8 left-44' alt='Card0 1'/>
                <Image src={Card02} className='absolute left-0 bottom-32' alt='Card0 2'/>
                <Image src={Card03} className='absolute bottom-0 left-80' alt='Card0 3'/>
                <Image src={Card04} className='absolute top-0 right-32' alt='Card0 4'/>
                <Image src={Card05} className='absolute right-0 bottom-28' alt='Card0 5'/>
                <Image src={Card06} className='absolute bottom-0 right-80' alt='Card0 6'/>
            </div>
        </section>
    )
}