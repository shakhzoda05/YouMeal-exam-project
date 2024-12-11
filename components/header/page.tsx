import React from 'react'

const Header = () => {
  return (
    <div className='pt-[25px]'>
      <div className='pl-[645px]'>
        <img src='./project-logo.svg' alt='header-img' width={150} height={29}/>
      </div>
      <div className='flex justify-center pt-[77px] pl-[326px] pr-[328px] pb-[103px] items-center gap-[21px]'>
        <img src='./big-gamburger.png' alt='big-burger' width={326} height={326} />
        <h2 className='text-[50px] text-[#FF5C00]  w-[437] h-[120px] font-black '>Только самые сочные бургеры!</h2>
      </div>
    </div>
  )
}

export default Header
