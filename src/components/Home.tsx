import { Listbox, Menu } from "@headlessui/react";
import Answer from "./Answer";
import Question from "./Question";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

export default function Home() {
    return (
        <div className="h-screen  shadow-[inset_0px_8px_6px_-6px_rgba(255,_255,_255,_0.4)] ">
            <div className="flex gap-5  justify-start w-screen flex-col    ">
                <div className="flex mx-10 gap-2 items-center">
                    <div className="text-bold"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" stroke="currentColor" strokeWidth="0.7" />
                    </svg></div>
                    <div className=" text-lg ">Back to Questions</div>
                </div>
                <div className="flex w-screen flex-col items-center">
                    <div><Question views={100} className="sm:w-[75vw] w-[90vw] p-4 rounded-md  bg-[#F8F8F8]" tags={['Design', 'Technology']} title="A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? " content="Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? " /></div>
                </div>
                <div className="sm:mx-[12.3%] mx-[5%] flex flex-row justify-between  ">
                    <div className="font-bold text-[24px]">Answers (23)</div>
                    
                        <div className='text-[18px] flex gap-1 items-center'>
                            <div className="w-full">Sort By:</div>
                            <div className=""><SortByDropdown items={['Popular','Newest','Oldest']} /></div>
                        </div>
                    
                </div>
                <div className=" flex w-screen flex-col items-center">
                    <div><Answer className="sm:w-[75vw] w-[90vw] px-7 py-4 rounded-md  bg-[#F8F8F8]" answerContent="Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi...." answerDate="Jun 27, 2023" isCurrentUser={true} userIcon="https://s3-alpha-sig.figma.com/img/75b9/e5a0/96e8fac2a30399afa235d655b5f5b396?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bgkYfnLN7pBQETj2iPzASx1rq4RXSmxameFQs~AaYVsGrUlMY21qkkPlwTEUMzhOQuWNtEW-EzwGy6eCyHsl80~aZn7kgNSEBLTeriQLtlvZWPYtp6Nw0NmptQ4HnOG1laUGMZ~6HdjD7Nux3rqRITKqG1ZoHPgkalVB-7eXzAKm2SbZNjFW9Esn8acsHO8zcY-KvLcHQgjWz5RhcuorrXIDq~ncXj0y7ek7~-xm89aJXkb7~YGBQmR1WuQ6eZjAJUqhhhIQnHRYICYZDIY~Ssk1UVckAMdVTn3CX1CGW2az2l8t9zCmZHXqtKsgX6eb3HGnRq~3~8gmGpH43K~-Dw__" userName="Neha Bhat" /></div>
                </div>

            </div>
        </div>
    )
}

const SortByDropdown = ({items}:{items:string[]}) => {
    const [listboxOpened, setListboxOpened] = useState(false);
    const [selected, setSelected] = useState<string>('');
    return (
        <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button  onClick={() => {
            setListboxOpened(!listboxOpened);

        }} className="w-full gap-2 text-start px-3 border-[#CCCCCC] border  h-[42px] text-[#0F0F0F] font-poppins flex flex-row items-center justify-between  rounded-md bg-[#E0E0E0]">{selected.length > 0 ? selected : 'Select'} <div>{!listboxOpened ? <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        } className="overflow-auto z-20 max-h-[230px] absolute mt-[2px] ml-[-2.8%] w-[150px]  border-[#CCCCCC] border   text-[#0F0F0F] font-poppins  rounded-md bg-[#E0E0E0]">
            {items.map((category, index) => (
                <Listbox.Option key={index} value={category} className=" py-4  px-3 cursor-pointer border-b">
                    {category}
                </Listbox.Option>
            ))}</Listbox.Options>
    </Listbox>
    )
}