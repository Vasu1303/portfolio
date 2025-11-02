import React from 'react'


const navLinks = [
    {label:"Home", href:"#"},
    {label:"Introduction", href:"#features"},
    {label:"Experience", href:"#"},
    {label:"Projects", href:"#"},
    
]
const Navbar = () => {
  return (
    <section className='py-4  fixed w-full top-0 z-50'>
        <div className='container max-w-5xl'>
            <div className='border border-white/15 rounded-full bg-neutral-950/70 backdrop-blur'>
                <div className='grid grid-cols-3 p-4 items-center px-4 '>
                    <div>

                    </div>
                    <div className='flex justify-center'>
                        <nav className='flex gap-6 font-sans items-center'>
                            {navLinks.map(link =>(
                            <a href={link.href} key={link.label}>{link.label}</a>
                        ))}

                        </nav>
                        

                    </div>

                </div>


            </div>

        </div>

    </section>
  )
}

export default Navbar