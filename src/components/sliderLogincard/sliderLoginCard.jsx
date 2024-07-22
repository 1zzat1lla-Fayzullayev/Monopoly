

const SliderLoginCard = () => {
  return (
    <div className="slid max-w-[570px] w-full">
        <div className="first-as bg-slate-700 p-[30px] shadow-[0px_4px_50px_0px_#4F557508] rounded-[25px]">
            <div className="tp-e">
                <div className="but">
                    <button className="lik_as border-none rounded-[10px] px-[25px] pt-[13px] pb-[14px] text-[18px] font-[600] leading-[24.59px] text-center text-white">
                    Авторизация
                    </button>
                </div>
                <div className="pag">
                    
                        <p>1 из 2</p>
                  
                </div>
            </div>
            <div className="btm-e">
                <p>Почта или никнейм</p>
                <input type="text" placeholder="Введите свою почту или никнейм..." />
                <button>Войти</button>
            </div>
        </div>
    </div>
  )
}

export default SliderLoginCard