import React from 'react'

function LoginMobileNav({ handleOpenNavbar }) {
	return (
		<>
			<div className='bg-white w-screen h-screen inset-0 fixed'>
				<div className='flex justify-between items-center p-[20px]'>
					<img src='/assets/лого.png' alt='logo' className='w-[150px]' />
					<img
						src='/assets/close.png'
						alt='close'
						className='w-[40px]'
						onClick={handleOpenNavbar}
					/>
				</div>

				<div className='flex flex-col justify-center max-w-[300px] gap-[20px] mx-auto h-full'>
					<button className='px-[26px] py-[16px] bg-[#E9ECFF] rounded-[40px] text-[17px]'>
						Правила игры
					</button>
					<button className='px-[26px] py-[16px] bg-[#E9ECFF] rounded-[40px] text-[17px]'>
						О проекте
					</button>
				</div>
			</div>
		</>
	)
}

export default LoginMobileNav
