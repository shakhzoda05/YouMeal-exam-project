import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-evenly pt-[55px] bg-white mt-[100px] pb-[14px]'>
      <div>
        <img className='' src='./footer-logo.svg' alt='footer-logo' width={300} height={58}/>
        <p className='pt-[59px] pb-[5px]'>© YouMeal, 2022</p>
        <p>Design: Anastasia Ilina</p>
      </div>
      <div>
        <p className='pb-[5px]'>Номер для заказа</p>
        <p>+7(930)833-38-11</p>
      </div>
      <div>
        <p>Мы в соцсетях</p>
        <div className='flex items-center gap-4 pb-[10px]'>
        <img  src='./footer-vk.svg' alt='img' width={36} height={36}/>
        <img src='./footer-tg.svg' alt='img' width={36} height={36}/>
        </div>
       
      </div>
    </div>
  )
}

export default Footer
