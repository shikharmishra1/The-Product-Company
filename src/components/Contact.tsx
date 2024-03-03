import { useState } from "react";



export default function Contact({onSubmit}: {onSubmit:()=>void}) {
  

    const [textAreaFilled, setTextAreaFilled] = useState(false);

    return (


        <div className="flex flex-col gap-5  ">
            <div className="font-poppins text-[#0F0F0F] px-4 text-center font-semibold text-[19px]">Let us know what your queries are!</div>
            <hr className="h-px  border-0 bg-[#CCCCCC]"></hr>
            <div className="flex flex-col gap-2">
                <label className="font-poppins font-semibold text-[#0F0F0F]">Your Name</label>
                <input placeholder="Enter your Name" type="text" className="w-full border-[#CCCCCC] border  h-[42px] text-[#0F0F0F] font-poppins placeholder:font-poppins placeholder:font-semibold placeholder-[#808080]  p-4 rounded-md bg-[#E0E0E0]"></input>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center">
                    <label className="font-poppins font-semibold text-[#0F0F0F]">What would you like to ask? </label><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00013 1V9M8.46413 3L1.53613 7M1.53613 3L8.46413 7" stroke="#FD443A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                
                <textarea onChange={(e)=>{
                    if(e.target.value.length>0){
                        setTextAreaFilled(true);
                    }else{
                        setTextAreaFilled(false);
                    }
                }} placeholder="Write here..."  className="w-full border-[#CCCCCC] border h-[120px] text-start text-[#0F0F0F] font-poppins placeholder:font-poppins placeholder:font-semibold placeholder-[#808080]  p-4 rounded-md bg-[#E0E0E0]"></textarea>
            </div>
            <button onClick={()=>{
                onSubmit();
                
            }} disabled={!textAreaFilled} className="bg-black disabled:bg-[#6c6c6c] font-semibold text-[20px] self-end rounded-[4px] w-[114px] font-poppins py-[7px] px-[19px] text-[#F8F8F8]">Submit</button>

        </div>


    );
}
