import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../../layout/Wrapper'
import LoginMobileNav from './loginMobileNav'

function LoginNavbar() {
	const [showNavbar, setShowNavbar] = useState(false)

	const handleOpenNavbar = () => {
		setShowNavbar(!showNavbar)
	}

	return (
		<>
			<nav>
				<Wrapper>
					<div className='flex items-center justify-between p-[18px]'>
						<motion.img
							src='/assets/лого.png'
							alt='logo'
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						/>
						<div className='md:flex items-center gap-[20px] hidden'>
							<motion.button
								className='px-[26px] py-[16px] bg-[#E9ECFF] rounded-[40px] text-[17px]'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.5 }}
							>
								Правила игры
							</motion.button>
							<motion.button
								className='px-[26px] py-[16px] bg-[#E9ECFF] rounded-[40px] text-[17px]'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.5 }}
							>
								О проекте
							</motion.button>
						</div>
						<motion.img
							src='/assets/hamburger.png'
							alt='hamburger'
							className='w-[40px] cursor-pointer md:hidden'
							onClick={handleOpenNavbar}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.5 }}
						/>
					</div>
				</Wrapper>
			</nav>
			<motion.div
				initial={{ x: '-100%' }}
				animate={showNavbar ? { x: 0 } : { x: '-100%' }}
				transition={{ duration: 0.5 }}
				className='fixed top-0 left-0 w-full h-full bg-white z-50'
			>
				{showNavbar && <LoginMobileNav handleOpenNavbar={handleOpenNavbar} />}
			</motion.div>
		</>
	)
}

export default LoginNavbar
