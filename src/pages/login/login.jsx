import GooglePerevyazka from "../../components/googlePerevyazka/googlePerevyazka";
import SliderLoginCard from "../../components/sliderLogincard/sliderLoginCard";

const Login = () => {
  return (
    <div className="main-window-page pt-[59px] pb-[71px] px-[70px] flex">
      <div className="left-side">
        <div className="tpm">
          <div className="textps text-[25px] font-light text-center">
            Выигрывайте по-крупному и наслаждайтесь щедрыми призами вместе с
            <span className="font-[600]"> Land Of Monopoly</span> на всех
            популярных платформах.
          </div>
          <div className="img-ps">
            <img src="/public/Group 74175.png" alt="macbook-pixel-screen" />
          </div>
        </div>
        <div className="btm">
          <div className="lic text-[14px] font-[400] text-left">
            © Land Of Monopoly
          </div>
          <div className="multi-l">
            <ul>
              <li>
                <a href="#" className="text-[14px] font-[400] text-left text-[#726CED]">Русский</a>
              </li>
              <li>
                <a href="#" className="text-[14px] font-[400] text-left text-[#726CED]">English</a>
              </li>
              <li>
                <a href="#" className="text-[14px] font-[400] text-left text-[#726CED]"> все языки » </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="mnb">
          <SliderLoginCard />
          <GooglePerevyazka />
        </div>
      </div>
    </div>
  );
};

export default Login;
