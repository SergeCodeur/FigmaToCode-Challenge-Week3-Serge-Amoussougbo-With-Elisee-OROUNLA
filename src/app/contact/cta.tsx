import { Button } from "@/components/ui/button";

function Cta() {
  return (
    <div className="px-4 pb-30 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 flex flex-col items-center justify-center relative max-md:pt-[70px]">
            <svg
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
              className="absolute left-24 top-0 lg:-translate-x-2/4 translate-x-2/4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.9052 61.2058C44.5713 62.0869 45.8256 62.2611 46.7067 61.5949L61.0645 50.7389C61.9456 50.0727 62.1198 48.8184 61.4536 47.9374C60.7874 47.0563 59.5331 46.8821 58.6521 47.5483L45.8896 57.1981L36.2398 44.4356C35.5736 43.5545 34.3193 43.3803 33.4382 44.0465C32.5572 44.7127 32.383 45.9669 33.0491 46.848L43.9052 61.2058ZM0.367223 4.49559C13.131 5.34642 22.0886 9.24913 28.4012 14.4985C34.7283 19.7599 38.5351 26.4888 40.7922 33.1997C43.0521 39.9191 43.7382 46.5647 43.8525 51.5532C43.9095 54.0417 43.8239 56.1028 43.7249 57.5345C43.6755 58.2501 43.6228 58.8073 43.5831 59.181C43.5632 59.3678 43.5466 59.5086 43.5354 59.6003C43.5297 59.6461 43.5254 59.6796 43.5227 59.7005C43.5213 59.7109 43.5203 59.7181 43.5198 59.7221C43.5195 59.7242 43.5194 59.7254 43.5193 59.7257C43.5193 59.7259 43.5193 59.7256 43.5193 59.7257C43.5194 59.7252 43.5195 59.7245 45.5005 59.9996C47.4815 60.2747 47.4816 60.2736 47.4818 60.2722C47.4819 60.2715 47.4821 60.27 47.4823 60.2685C47.4827 60.2656 47.4832 60.2619 47.4838 60.2574C47.485 60.2483 47.4867 60.236 47.4887 60.2204C47.4928 60.1893 47.4985 60.1453 47.5054 60.0889C47.5193 59.976 47.5384 59.8132 47.5607 59.6036C47.6052 59.1846 47.6623 58.5782 47.7154 57.8104C47.8215 56.2753 47.9117 54.0903 47.8515 51.4616C47.7313 46.2158 47.0111 39.1427 44.5835 31.9246C42.153 24.6981 37.991 17.2708 30.9587 11.423C23.9119 5.56306 14.1195 1.40343 0.63327 0.50445L0.367223 4.49559Z"
                fill="#23A6F0"
              />
            </svg>
            <h2 className="max-w-lg mb-6 font-montserrat text-sm font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto lg:mt-24">
              WE Can&apos;t WAIT TO MEET YOU
            </h2>
            <p className="text-base text-text_color md:text-5xl">
              Let&apos;s Talk
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="px-[25px] py-[15px] gap-[15px] font-monserrat font-bold-">
              <span>Try it free now</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
