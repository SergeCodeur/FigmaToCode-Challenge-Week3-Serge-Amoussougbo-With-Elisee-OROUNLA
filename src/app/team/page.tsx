import { Button } from "@/components/ui/button";

function Page() {
    const team = [
        {
            img:"images/team/t1.png",
            title: "Username",
            desc: "Username",
        },   
         {
            img:"images/team/t2.png",
            title: "Username",
            desc: "Username",
        },    
        {
            img:"images/team/t3.png",
            title: "Username",
            desc: "Username",
        },    
        {
            img:"images/team/t4.png",
            title: "Username",
            desc: "Username",
        },    
        {
            img:"images/team/t5.png",
            title: "Username",
            desc: "Username",
        },    
        {
            img:"images/team/t6.png",
            title: "Username",
            desc: "Username",
        },    
        {
            img:"images/team/t7.png",
            title: "Username",
            desc: "Username",
        },    
        {
            img:"images/team/t8.png",
            title: "Username",
            desc: "Username",
        },    
        {
            img:"images/team/t9.png",
            title: "Username",
            desc: "Username",
        }
    ]
    return ( <>
        <div className="container my-12">
            <div className="flex flex-col my-5 text-center space-y-8">
                <h3 className="text-second_text_color font-medium"> WHAT WE DO </h3>
                <h2 className="text-5xl font-bold text-text_color">Innovation <br className="lg:hidden md:hidden"/> tailored for you</h2>
                <div className="flex gap-3 m-auto ">
                    <span className="font-semibold text-text_color">Home</span>
                    <i className="bi bi-chevron-right"></i>
                    <span className="text-second_text_color">Team</span>
                </div>
            </div>
        </div>
        <div className="w-screen  p-0 flex flex-col md:flex-row lg:flex-row gap-2 mx-0 box-border">

            <div className="flex-1"><img src="images/team/1.png" className="object-cover w-full"/></div>
        
            <div className="flex flex-1 flex-col gap-2 box-border p-0 ">
                <div className="flex gap-2 box-border h-1/2">
                    <img src="images/team/2.png" className="w-1/2 object-cover"/>
                    <img src="images/team/3.png" className="w-1/2 object-cover"/>
                </div>
                <div className="flex gap-2 box-border  h-1/2">
                    <img src="images/team/4.png" className="w-1/2 object-cover"/>
                    <img src="images/team/5.png" className="w-1/2 object-cover"/>
                </div>
            </div>
        </div>


        <div className="w-full flex flex-col  justify-center">
            <h3 className="text-text_color font-bold text-2xl mx-auto p-5 md:m-8 flex mx-auto text-center md:p-8 justify-center"> Meet Our <br className="md:hidden"/> Team </h3>

            <div className="flex  box-border sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto w-full flex-wrap ">
{           

team?.map((item, index)=>(

            <div key={index} className="flex w-full md:w-1/3 lg:w-1/3 p-8 mb:p-4 lg:p-4 flex-col">
                <img src={item?.img} className="object-cover"/>
                <div className="py-4 flex flex-col gap-2 justify-center text-center">
                <div className="font-bold text-lg text-text_color"> {item?.title} </div>
                <div className="font-semibolf text-base text-second_text_color">{item?.desc}</div>
                <div className="font-semibolf text-2xl text-primary gap-3 flex justify-center">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                </div>
                </div>
            </div>
))
            }
            </div>
        </div>

        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 my-5">
      <div className="">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          
          <div className="md:mx-auto sm:text-center flex flex-col items-center justify-center w-full">
            <h2 className="justify-center font-montserrat text-5xl font-bold tracking-tight text-text_color text-center  md:mx-auto flex w-full">

              Start your <br className="md:hidden lg:hidden"/> 14 days free trial
            </h2>
            <p className="text-s text-center text-second_text_color my-5 m-auto font-medium p-5">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br className="hidden md:flex lg:flex"/> do met sent. RELIT official consequent.
            </p>
          </div>

          <div className="flex justify-center">
          <Button className="px-[25px] py-[15px] gap-[15px] font-monserrat font-bold-">
              <span>Try it free now</span>
            </Button>
          </div>

          <div className="font-semibolf text-2xl  gap-4 flex justify-center mt-5">
                    <i className="bi bi-twitter text-primary"></i>
                    <i className="bi bi-facebook text-[#395185] "></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-linkedin text-[#0A66C2] "></i>
                </div>
        </div>
      </div>
    </div>


    </> );
}

export default Page;