import Title from '../Titles/GneralTile'
export default function View2() {
  return (
    <div className='w-full py-4'>
        <Title size={"md:w-[40rem] w-[60%] mx-auto h-[10vh] bg-transparent bg-contain bg-no-repeat bg-center"}/>
        <div className='text-white grid gap-y-8'>
          <h1 className='text-center md:text-4xl  text-xl font-extrabold'>Welcome to CryptaVita</h1>
          <p className='md:w-[50%] w-[80%] mx-auto text-lg justify-center text-center'>Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.</p>
        </div>
        <div className='flex gap-x-8 py-3 justify-center align-middle text-center '>
          <a href='/#' className='p-4 px-8 rounded-[40rem] text-center border-2 text-white hover:border-white border-[#7c2aff]'>Get Started</a>
          <a href='/#' className='p-4 px-8 rounded-[40rem] text-center border-2 text-white hover:border-white border-[#7c2aff]'>Get Started</a>
          {/* <a>Vist</a> */}
        </div>
    </div>
  )
}

