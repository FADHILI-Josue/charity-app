import { FC } from 'react'
import Layout from '../components/Layout'
import Stats from '../components/Stat'

const HomePage: FC = () => {
  return <Layout cln='mt-0 h-screen overflow-hidden'>
    <div className="w-full flex">
      <div className="hidden lg:block flex-[0.6]">
        <img src="/child-mask.png" alt="child with disability" className='h-screen scale-110 relative z-10 w-4/5 object-contain' />
        <img src="/Vector.png" alt="child with disability" className='absolute h-96 z-0 bottom-20 -rotate-12 -left-[5%] w-4/5 object-contain' />
      </div>
      <div className="flex-[0.4] ml-10 lg:ml-0 mt-64">
        <h1 className='text-5xl lg:max-w-sm leading-snug'>
          We&apos;re with <br />
          <span className='font-bold'>Every disabled kid in Africa</span>
        </h1>
        <p className="text-white/90 text-lg mt-3 lg:max-w-md">Empower lives with your generosity. Support disabled African children and transform futures today.</p>
      </div>
    </div>
    <Stats />
  </Layout>
}

export default HomePage