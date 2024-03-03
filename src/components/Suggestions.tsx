import { Listbox, Menu } from "@headlessui/react";
import { useState } from "react";
import { useRef } from "react";
import { AuthProvider, useAuth } from "../AuthContext";

interface SuggestionProps {
    onSubmit: () => void;
    suggestionCategories: string[];
}

export default function Suggestion({ onSubmit, suggestionCategories }: SuggestionProps) {
    const { loggedIn } = useAuth();
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState<string>('');


    const [textAreaFilled, setTextAreaFilled] = useState(false);
    const [listboxOpened, setListboxOpened] = useState(false);
    const [attachment, setAttachment] = useState('' as string | ArrayBuffer | null);

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
                <label className="font-poppins font-semibold text-[#0F0F0F]">Choose a section</label>
                <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                    <Listbox.Button onClick={() => {
                        setListboxOpened(!listboxOpened);

                    }} className="w-full text-start px-3 border-[#CCCCCC] border  h-[42px] text-[#0F0F0F] font-poppins flex flex-row items-center justify-between  rounded-md bg-[#E0E0E0]">{selectedCategory.length > 0 ? selectedCategory : 'Select'} <div>{!listboxOpened ? <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5735 1.03341C18.669 0.943191 18.7813 0.872661 18.904 0.825845C19.0267 0.77903 19.1575 0.756845 19.2888 0.76056C19.4201 0.764274 19.5494 0.793814 19.6693 0.847493C19.7891 0.901172 19.8973 0.977938 19.9875 1.07341C20.0777 1.16888 20.1482 1.28119 20.1951 1.40392C20.2419 1.52664 20.2641 1.65739 20.2603 1.78869C20.2566 1.92 20.2271 2.04928 20.1734 2.16917C20.1197 2.28905 20.043 2.39719 19.9475 2.48741L10.9475 10.9874C10.7618 11.1629 10.516 11.2608 10.2605 11.2608C10.005 11.2608 9.75916 11.1629 9.57349 10.9874L0.572493 2.48741C0.474932 2.39779 0.396149 2.28967 0.340725 2.16934C0.285301 2.04902 0.254337 1.91888 0.249634 1.78648C0.24493 1.65409 0.266581 1.52208 0.313326 1.39812C0.360071 1.27417 0.430981 1.16073 0.521935 1.06441C0.612888 0.968091 0.722076 0.890803 0.843153 0.837037C0.96423 0.783271 1.09478 0.754098 1.22723 0.751214C1.35968 0.748329 1.49138 0.77179 1.61468 0.820234C1.73798 0.868678 1.85043 0.941139 1.94549 1.03341L10.2605 8.88541L18.5735 1.03341Z" fill="#333333" />
                    </svg> : <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.42651 10.9666C2.33104 11.0568 2.21873 11.1273 2.096 11.1742C1.97327 11.221 1.84252 11.2432 1.71122 11.2394C1.57992 11.2357 1.45064 11.2062 1.33075 11.1525C1.21086 11.0988 1.10273 11.0221 1.01251 10.9266C0.922289 10.8311 0.851759 10.7188 0.804943 10.5961C0.758128 10.4734 0.735943 10.3426 0.739658 10.2113C0.743372 10.08 0.772912 9.95072 0.826591 9.83083C0.880269 9.71095 0.957036 9.60281 1.05251 9.51259L10.0525 1.01259C10.2382 0.837055 10.484 0.739247 10.7395 0.739247C10.995 0.739247 11.2408 0.837055 11.4265 1.01259L20.4275 9.51259C20.5251 9.60221 20.6039 9.71033 20.6593 9.83066C20.7147 9.95098 20.7457 10.0811 20.7504 10.2135C20.7551 10.3459 20.7334 10.4779 20.6867 10.6019C20.6399 10.7258 20.569 10.8393 20.4781 10.9356C20.3871 11.0319 20.2779 11.1092 20.1568 11.163C20.0358 11.2167 19.9052 11.2459 19.7728 11.2488C19.6403 11.2517 19.5086 11.2282 19.3853 11.1798C19.262 11.1313 19.1496 11.0589 19.0545 10.9666L10.7395 3.11459L2.42651 10.9666Z" fill="#333333" />
                    </svg>
                    }
                        </div></Listbox.Button>
                    <Listbox.Options onClick={
                        () => {
                            setListboxOpened(false);
                        }

                    } className="overflow-auto z-20 max-h-[230px] absolute mt-[76px]  w-[89.5%]  border-[#CCCCCC] border   text-[#0F0F0F] font-poppins  rounded-md bg-[#E0E0E0]">
                        {suggestionCategories.map((category, index) => (
                            <Listbox.Option key={index} value={category} className=" py-4  px-3 cursor-pointer border-b">
                                {category}
                            </Listbox.Option>
                        ))}</Listbox.Options>
                </Listbox>

            </div>
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
                </div>
                
                    <input onBlur={
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
            
            <button onClick={() => {
                onSubmit();

            }} disabled={!(textAreaFilled && isValidEmail)}  className="bg-black disabled:bg-[#6c6c6c] font-semibold text-[20px] self-end rounded-[4px] w-[114px] font-poppins py-[7px] px-[19px] text-[#F8F8F8]">Submit</button>

        </div>


    );
}
