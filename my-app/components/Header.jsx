import Link from 'next/link';
import { Button } from './ui/button';

//Components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='py-10 xl:py-12 text-white '>
     <div className='container mx-auto flex justify-between items-center'>
        
        
        {/*logo */}
        <Link href="/">
         <h1 className='text-4xl font-semibold'>
           Samar<span className="text-accent">.</span>
         </h1>
        </Link>

        {/*desktop nav & hire me button */}
        
            <div className = "xl:flex hidden items-center gap-10">
              <Nav/>
                 <Link href ="/contact">
                <Button className="text-sm">Hire me</Button>
                 </Link>
            </div>

        {/*mobile nav*/}
           <div className='xl:hidden'>
            <MobileNav/>
          </div>


<div>

</div>




     </div>
    </header> 
  )
}

export default Header

