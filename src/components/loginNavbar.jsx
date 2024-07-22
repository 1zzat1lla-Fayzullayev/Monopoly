import React from 'react'
import Wrapper from '../layout/Wrapper'

function LoginNavbar() {
	return (
		<>
			<nav>
				<Wrapper>
					<div className='flex items-center justify-between p-[18px]'>
						<img src='/assets/лого.png' alt='logo' />
						<div className='flex items-center gap-[20px]'>
							<button className='px-[26px] py-[16px] bg-[#E9ECFF] rounded-[40px] text-[17px]'>
								Правила игры
							</button>
							<button className='px-[26px] py-[16px] bg-[#E9ECFF] rounded-[40px] text-[17px]'>
								О проекте
							</button>
						</div>
					</div>
				</Wrapper>
			</nav>
		</>
	)
}

export default LoginNavbar
