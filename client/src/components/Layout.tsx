import { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import { cn } from '../lib/utils'


const Layout = ({ children, cln }: PropsWithChildren&{cln?: string}) => {
    return <div className='bg-black relative text-white w-screen overflow-hidden h-screen'>
        <Navbar />
        <div className={cn('w-full mt-60',cln)}>
            {children}
        </div>
    </div>
}

export default Layout