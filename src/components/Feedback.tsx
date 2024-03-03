import { Listbox, Menu } from "@headlessui/react";
import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../AuthContext";

interface SuggestionProps {
    onSubmit: () => void;
    
}

export default function Feedback({ onSubmit}: SuggestionProps) {

    


    const [textAreaFilled, setTextAreaFilled] = useState(false);
    
    const [attachment, setAttachment] = useState('' as string | ArrayBuffer | null);
    const { loggedIn } = useAuth();
    const [isValidEmail, setIsValidEmail] = useState(true);

    const hiddenFileInput = useRef(null);

    function handleChange(event: any) {
        console.log(event.target.files[0]);
        const fileUploaded = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            setAttachment(e.target ? e.target.result : '');
        }
        reader.readAsDataURL(fileUploaded);
    }

    return (

        <div className="flex flex-col gap-5  ">
            <div className="font-poppins text-[#0F0F0F] px-4 text-center font-semibold text-[19px]">Let us know about the issue you are facing right now!</div>
            <hr className="h-px  border-0 bg-[#CCCCCC]"></hr>
           
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                    <label className="font-poppins font-semibold text-[#0F0F0F]">Describe the issue in detail </label><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00013 1V9M8.46413 3L1.53613 7M1.53613 3L8.46413 7" stroke="#FD443A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="relative flex">
                    <div key={1} className="z-10 absolute ml-3 mb-2 self-end">
                        <button onClick={
                            () => {
                                console.log("hiddenFileInput");
                                (hiddenFileInput as any).current.click();
                            }
                        } className="text-[#333333] font-[500] text-md bg-[#C7C7C7] px-2 py-1 text rounded-sm">
                            <div className='flex gap-1'>
                                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.49951 5.7478V16.3278C9.49951 18.4178 7.96951 20.2778 5.88951 20.4778C5.33386 20.5333 4.77274 20.4717 4.24239 20.2968C3.71204 20.122 3.22426 19.8379 2.81055 19.4628C2.39684 19.0878 2.0664 18.6301 1.84058 18.1194C1.61475 17.6086 1.49856 17.0562 1.49951 16.4978V4.1378C1.49951 2.8278 2.43951 1.6378 3.73951 1.5078C4.08815 1.47134 4.44055 1.50861 4.77385 1.61718C5.10714 1.72576 5.41389 1.90321 5.67415 2.13802C5.93442 2.37282 6.14241 2.65974 6.2846 2.98014C6.42679 3.30054 6.50001 3.64726 6.49951 3.9978V14.4978C6.49951 15.0478 6.04951 15.4978 5.49951 15.4978C4.94951 15.4978 4.49951 15.0478 4.49951 14.4978V5.7478C4.49951 5.3378 4.15951 4.9978 3.74951 4.9978C3.33951 4.9978 2.99951 5.3378 2.99951 5.7478V14.3578C2.99951 15.6678 3.93951 16.8578 5.23951 16.9878C5.58815 17.0243 5.94055 16.987 6.27385 16.8784C6.60715 16.7698 6.91389 16.5924 7.17415 16.3576C7.43442 16.1228 7.64241 15.8359 7.7846 15.5155C7.92679 15.1951 8.00001 14.8483 7.99951 14.4978V4.1678C7.99951 2.0778 6.46951 0.2178 4.38951 0.0177996C3.83401 -0.0369303 3.27321 0.0252682 2.7432 0.200391C2.2132 0.375514 1.72574 0.659679 1.3122 1.03459C0.898661 1.40951 0.568214 1.86687 0.34213 2.37722C0.116046 2.88757 -0.000664563 3.43961 -0.000488081 3.9978V16.2678C-0.000488081 19.1378 2.09951 21.7078 4.95951 21.9778C8.24951 22.2778 10.9995 19.7178 10.9995 16.4978V5.7478C10.9995 5.3378 10.6595 4.9978 10.2495 4.9978C9.83951 4.9978 9.49951 5.3378 9.49951 5.7478Z" fill="#333333" />
                                </svg>
                                <div>Attach</div>
                            </div>
                        </button>
                        <input type="file" accept=".png,.jpg" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} />

                    </div>
                    {attachment?<div key={2} className="absolute ml-3 mb-2 self-end w-[93%] text-right">
                        <div className=" font-[500] text-md px-2 py-1 flex justify-end rounded-sm">
                            
                                <div className='relative'>
                                    <button onClick={
                                        ()=>{
                                            setAttachment('');
                                        }
                                    } className="absolute top-0 right-0 bg-[#0a0a0a] opacity-50 text-[#F8F8F8] rounded-full h-4 w-4 flex items-center justify-center">x</button>
                                    <img src={attachment as string} className="h-12 rounded-md w-12" />

                                </div>
                            
                        </div>
                    </div>:null}

                    <textarea onChange={(e) => {
                        if (e.target.value.length > 0) {
                            setTextAreaFilled(true);
                        } else {
                            setTextAreaFilled(false);
                        }
                    }} placeholder="Write here..." className="w-full pt-1 border-[#CCCCCC] border h-[180px] text-start text-[#0F0F0F] font-poppins placeholder:font-poppins placeholder:font-semibold placeholder-[#808080]  px-3 rounded-md bg-[#E0E0E0]">
                    </textarea>
                </div>

            </div>
            {loggedIn?
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                    <label className="font-poppins font-semibold text-[#0F0F0F]">Enter your email to receive an update</label>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00013 1V9M8.46413 3L1.53613 7M1.53613 3L8.46413 7" stroke="#FD443A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                
                    <input
                    onFocus={
                        (e)=>{
                            
                        }
                    
                    }
                    onBlur={
                        (e)=>{
                            const email = e.target.value;

                            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

                            
                            

                             if(regex.test(email)){
                                setIsValidEmail(true);
                            }
                            else{
                                setIsValidEmail(false);
                            }
                        }
                    } placeholder="Enter your Email" type="email" className="w-full border-[#999999] border-[2px]  h-[42px] text-[#0F0F0F] font-poppins placeholder:font-poppins placeholder:font-semibold placeholder-[#808080]  p-4 rounded-lg bg-[#ffffff]"></input>
                    {!isValidEmail?<div className="text-[#FD443A] font-poppins text-[14px]">invalid email</div>:null}
            </div>:null}
            { !loggedIn?
            <div className="flex flex-row gap-1 items-center">
                <input type="checkbox"  className="h-5 w-5 rounded-[4px]  border-2 checked:bg-black focus:ring-0 focus:checked:bg-black accent-white"  />
                <div className="text-[#4d4d4d] font-[500]">Send feedback anonymously</div>
            </div>
            :null}
            <button onClick={() => {
                onSubmit();

            }} disabled={!(textAreaFilled && isValidEmail) } className="bg-black disabled:bg-[#6c6c6c] font-semibold text-[20px] self-end rounded-[4px] w-[114px] font-poppins py-[7px] px-[19px] text-[#F8F8F8]">Submit</button>
            
        </div>


    );
}
