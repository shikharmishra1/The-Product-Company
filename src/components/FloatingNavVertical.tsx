import { Transition } from "@headlessui/react"
import { useEffect, useState } from "react"
import Contact from "./Contact"
import Suggestion from "./Suggestions"
import Feedback from "./Feedback"
import { useMobileStatus } from '../MobileContext'

export default function FloatingNavVertical() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [itemClicked, setItemClicked] = useState(false)
    const [showSuggestion, setShowSuggestion] = useState(false)
    const [contactSubmitted, setContactSubmitted] = useState(false)
    const [submittedText, setSubmittedText] = useState('')
    const [showContact, setShowContact] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)
    const [showReport, setShowReport] = useState(false)
    const { isMobile } = useMobileStatus();



    return (

        <div className="flex  sm:flex-col flex-col-reverse items-end">
            <div className={`z-0   h-screen w-screen absolute sm:hidden  opacity-30 pointer-events-none bg-black  ${isExpanded ? 'visible' : 'hidden'}`} ></div>
            <div className={`z-10 flex  sm:items-end sm:flex-col ${contactSubmitted ? 'flex-col' : 'flex-col-reverse'}`}>
                <Transition
                    show={contactSubmitted}
                    enter="transition-transform origin-bottom-right duration-300"
                    enterFrom="transform scale-0"
                    enterTo="transform scale-100"
                    leave="transition-transform transition-opacity opacity-100 origin-bottom-right duration-200"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-0"
                >
                    <div className="relative ">
                        <div className="absolute   p-4 h-[70%] text-[#0F0F0F] text-center w-full  font-poppins font-semibold">{submittedText}</div>
                        <div className="">
                            <svg width="416" height="88" viewBox="0 0 416 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8C0 3.58172 3.58172 0 8 0H408C412.418 0 416 3.58172 416 8V68.7705C416 73.1888 412.418 76.7705 408 76.7705H398.783C398.084 76.7705 397.435 77.136 397.073 77.7344L391.689 86.6232C391.305 87.2573 390.389 87.2677 389.99 86.6425L384.29 77.6958C383.923 77.1194 383.287 76.7705 382.603 76.7705H8C3.58172 76.7705 0 73.1887 0 68.7705V8Z" fill="#F8F8F8" />
                            </svg>
                        </div>
                    </div>
                </Transition>
                <Transition
                    className={'bg-[#F8F8F8] mb-[-40px] sm:mb-0  w-[100vw]  sm:mr-3 px-[16px]  py-[50px] sm:py-4 rounded-t-3xl sm:rounded-md sm:w-[400px]'}
                    show={showReport}
                    enter="transition-transform sm:origin-bottom-right origin-bottom duration-300"
                    enterFrom="transform scale-y-0 sm:scale-0"
                    enterTo="transform scale-y-100 sm:scale-100"

                >

                    <Suggestion suggestionCategories={['Concept cards', 'Interview Questions', 'Practice Questions', 'Quizzes', 'Test']} onSubmit={
                        () => {
                            setShowContact(false);
                            setShowSuggestion(false);
                            setShowFeedback(false);
                            setShowReport(false);
                            setIsExpanded(false);


                            setTimeout(() => {
                                setContactSubmitted(true);
                                setSubmittedText(`Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!`);
                            }, 300)
                            setTimeout(() => {
                                setContactSubmitted(false);
                                setItemClicked(false);
                            }, 4000)
                        }
                    } />

                </Transition>
                <Transition
                    className={'bg-[#F8F8F8] mb-[-40px] sm:mb-0  w-[100vw]  sm:mr-3 px-[16px]  py-[50px] rounded-t-3xl sm:rounded-md sm:w-[400px]'}
                    show={showFeedback}
                    enter="transition-transform sm:origin-bottom-right origin-bottom duration-300"
                    enterFrom="transform scale-y-0 sm:scale-0"
                    enterTo="transform scale-y-100 sm:scale-100"

                >

                    <Feedback onSubmit={
                        () => {
                            setShowContact(false);
                            setShowSuggestion(false);
                            setIsExpanded(false);
                            setShowFeedback(false);
                            setShowReport(false);


                            setTimeout(() => {
                                setContactSubmitted(true);
                                setSubmittedText('Thanks for your valuable feedback!');
                            }, 300)
                            setTimeout(() => {
                                setContactSubmitted(false);
                                setItemClicked(false);
                            }, 4000)
                        }
                    } />

                </Transition>
                <Transition
                    className={'bg-[#F8F8F8] mb-[-40px] sm:mb-0  w-[100vw]  sm:mr-3 px-[16px]  py-[50px] sm:py-4 rounded-t-3xl sm:rounded-md sm:w-[400px]'}
                    show={showSuggestion}
                    enter="transition-transform sm:origin-bottom-right origin-bottom duration-300"
                    enterFrom="transform scale-y-0 sm:scale-0"
                    enterTo="transform scale-y-100 sm:scale-100"

                >

                    <Suggestion suggestionCategories={['Concept cards', 'Interview Questions', 'Practice Questions', 'Quizzes', 'Test']} onSubmit={
                        () => {
                            setShowContact(false);
                            setShowSuggestion(false);
                            setIsExpanded(false);


                            setTimeout(() => {
                                setContactSubmitted(true);
                                setSubmittedText('Thanks for your valuable Suggestion!');
                            }, 300)
                            setTimeout(() => {
                                setContactSubmitted(false);
                                setItemClicked(false);
                            }, 4000)
                        }
                    } />

                </Transition>
                <Transition
                    className={'bg-[#F8F8F8] mb-[-40px] sm:mb-0  w-[100vw]  sm:mr-3 px-[16px]  py-[50px] rounded-t-3xl sm:rounded-md sm:w-[400px]'}
                    show={showContact}
                    enter="transition-transform sm:origin-bottom-right origin-bottom duration-300"
                    enterFrom="transform scale-y-0 sm:scale-0"
                    enterTo="transform scale-y-100 sm:scale-100"
                >

                    <Contact onSubmit={
                        () => {
                            setShowContact(false);
                            setShowSuggestion(false);
                            setIsExpanded(false);
                            setShowFeedback(false);
                            setShowReport(false);


                            setTimeout(() => {
                                setContactSubmitted(true);
                                setSubmittedText('Thanks for reaching out to us! We will get back to you as soon as possible');
                            }, 300)
                            setTimeout(() => {
                                setContactSubmitted(false);
                                setItemClicked(false);
                            }, 4000)
                        }
                    } />

                </Transition>
                <div className={!itemClicked ? "flex place-items-end flex-col rounded-full mr-3 mb-2" : 'flex mr-3 sm:mr-0 mb-2 self-end'}>
                    <Transition
                        show={isExpanded}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="flex flex-row gap-2 items-center max-w-full">
                            {!itemClicked ? <div className="font-poppins h-8 py-1 px-4 rounded-md text-[#0F0F0F] bg-[#F8F8F8]">Report an Issue</div> : null}
                            <button onClick={
                                () => {
                                    setItemClicked(true)
                                    setShowContact(false)
                                    setShowSuggestion(false)
                                    setShowFeedback(false)

                                    setShowReport(!showReport)
                                }

                            } >
                                <div className={showReport ? "border-[3px] rounded-full" : ''}>
                                    <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2663_3483)">
                                            <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8" />
                                            <path d="M26.4536 38.002V50.002H28.1567H28.8599V45.6285V41.2504L29.2208 41.0723C31.4661 39.9801 34.0021 39.8676 36.2661 40.7676C36.5286 40.8707 37.1896 41.1848 37.7333 41.466C38.2817 41.7473 38.938 42.0613 39.2005 42.1645C41.4411 43.0551 43.8036 43.1254 46.0864 42.3707C46.5083 42.2301 47.0614 41.9957 47.6333 41.7051L48.5239 41.2598L48.538 34.0785L48.5474 26.8973L47.9755 27.2301C46.0208 28.3504 44.6567 28.7676 42.9224 28.7676C42.1255 28.7676 41.4646 28.6832 40.7239 28.4816C39.9599 28.2801 39.4864 28.0832 38.1646 27.4082C36.9317 26.7848 36.3692 26.5598 35.4505 26.3301C34.0255 25.9691 32.3942 25.9504 30.9364 26.2785C30.3974 26.4004 29.713 26.616 29.2302 26.8223L28.8599 26.977V26.4895V26.002H28.1567H26.4536V38.002Z" fill="#0F0F0F" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2663_3483" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="1" dy="1" />
                                                <feGaussianBlur stdDeviation="4" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2663_3483" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2663_3483" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </Transition>
                    <Transition
                        show={isExpanded}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="flex flex-row gap-2 items-center max-w-full">
                            {!itemClicked ? <div className="font-poppins h-8 py-1 px-4 rounded-md text-[#0F0F0F] bg-[#F8F8F8]">Share Feedback</div> : null}
                            <button onClick={() => {
                                setItemClicked(true)
                                setShowContact(false)
                                setShowSuggestion(false)
                                setShowReport(false)
                                setShowFeedback(!showFeedback)
                            }}>

                                <div className={showFeedback ? "border-[3px] rounded-full" : ''}>
                                    <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2663_3489)">
                                            <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8" />
                                            <path d="M45.7269 52.7216C46.2761 52.5772 46.4627 52.1301 46.519 50.7994C46.5437 50.303 46.5718 50.0073 46.6246 49.796C46.7197 49.4053 47.0154 48.8068 47.3182 48.4054C47.7406 47.8421 48.5715 47.0747 49.2192 46.6452L49.3706 46.5466V41.8925V37.2348L48.9798 37.0693C47.9378 36.6293 46.5824 36.2737 45.1636 36.0695C44.118 35.9181 43.4421 35.8794 41.8544 35.8759C40.3828 35.8724 40.3335 35.8759 40.0659 35.9533C39.0274 36.2526 38.267 36.9778 37.9677 37.9495C37.9255 38.0833 37.6896 39.3436 37.4432 40.7483C37.0172 43.1951 36.9996 43.3218 36.9996 43.7759C37.0031 44.1878 37.0172 44.2935 37.0982 44.5681C37.3728 45.4764 38.01 46.184 38.8655 46.5255C39.3618 46.7261 39.4745 46.7332 41.5903 46.7332H43.5195L43.3963 47.0782C43.1112 47.8773 42.9844 48.6554 42.9844 49.62C42.9844 50.3664 43.0232 50.6163 43.1992 51.0564C43.3541 51.4472 43.5231 51.7006 43.8399 52.014C44.1532 52.3273 44.4454 52.5104 44.8538 52.6512C45.0756 52.7286 45.5579 52.7674 45.7269 52.7216Z" fill="#0F0F0F" />
                                            <path d="M54.0923 47.2406C54.476 47.1244 54.814 46.7794 54.9337 46.3816C55.0041 46.1563 55.0041 46.0647 54.997 41.5937L54.9865 37.0346L54.8703 36.7987C54.7295 36.51 54.4513 36.246 54.1662 36.1298C53.969 36.0488 53.9409 36.0488 52.7509 36.0488C51.561 36.0488 51.5329 36.0488 51.3357 36.1298C51.0506 36.246 50.7724 36.51 50.6316 36.7987L50.5154 37.0346L50.5049 41.5937C50.4978 46.0647 50.4978 46.1563 50.5682 46.3816C50.6915 46.7899 51.0259 47.1244 51.4237 47.2441C51.6772 47.318 53.8493 47.318 54.0923 47.2406Z" fill="#0F0F0F" />
                                            <path d="M28.2731 21.2784C27.7239 21.4228 27.5373 21.8699 27.481 23.2006C27.4563 23.697 27.4282 23.9927 27.3754 24.204C27.2803 24.5947 26.9846 25.1932 26.6818 25.5946C26.2594 26.1579 25.4285 26.9253 24.7808 27.3548L24.6294 27.4534V32.1075V36.7652L25.0202 36.9307C26.0622 37.3707 27.4176 37.7263 28.8364 37.9305C29.882 38.0819 30.5579 38.1206 32.1456 38.1241C33.6172 38.1276 33.6665 38.1241 33.9341 38.0467C34.9726 37.7474 35.733 37.0222 36.0323 36.0505C36.0745 35.9167 36.3104 34.6564 36.5568 33.2517C36.9828 30.8049 37.0004 30.6782 37.0004 30.2241C36.9969 29.8122 36.9828 29.7065 36.9018 29.4319C36.6272 28.5236 35.99 27.816 35.1345 27.4745C34.6382 27.2739 34.5255 27.2668 32.4097 27.2668H30.4805L30.6037 26.9218C30.8888 26.1227 31.0156 25.3446 31.0156 24.38C31.0156 23.6336 30.9768 23.3837 30.8008 22.9436C30.6459 22.5528 30.4769 22.2994 30.1601 21.986C29.8468 21.6727 29.5546 21.4896 29.1462 21.3488C28.9244 21.2714 28.4421 21.2326 28.2731 21.2784Z" fill="#0F0F0F" />
                                            <path d="M19.9077 26.7594C19.524 26.8756 19.186 27.2206 19.0663 27.6184C18.9959 27.8437 18.9959 27.9353 19.003 32.4063L19.0135 36.9654L19.1297 37.2013C19.2705 37.49 19.5487 37.754 19.8338 37.8702C20.031 37.9512 20.0591 37.9512 21.2491 37.9512C22.439 37.9512 22.4671 37.9512 22.6643 37.8702C22.9494 37.754 23.2276 37.49 23.3684 37.2013L23.4846 36.9654L23.4951 32.4063C23.5022 27.9353 23.5022 27.8437 23.4318 27.6184C23.3085 27.2101 22.9741 26.8756 22.5763 26.7559C22.3228 26.682 20.1507 26.682 19.9077 26.7594Z" fill="#0F0F0F" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2663_3489" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="1" dy="1" />
                                                <feGaussianBlur stdDeviation="4" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2663_3489" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2663_3489" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </Transition>
                    <Transition
                        show={isExpanded}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="flex flex-row gap-2 items-center max-w-full">
                            {!itemClicked ? <div className="font-poppins h-8 py-1 px-4 rounded-md text-[#0F0F0F] bg-[#F8F8F8]">Give Suggestion</div> : null}
                            <button onClick={() => {
                                setItemClicked(true)
                                setShowContact(false)
                                setShowFeedback(false)
                                setShowReport(false)
                                setShowSuggestion(!showSuggestion)
                            }}>
                                <div className={showSuggestion ? "border-[3px] rounded-full" : ''}>
                                    <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2663_3508)">
                                            <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8" />
                                            <path d="M24 27V30.5756H43.6658V27H24ZM24 34.1512V37.7268H43.6658V34.1512H24ZM54.3926 34.33C54.2138 34.33 53.8562 34.5088 53.6775 34.6875L51.8897 36.4753L55.644 40.2297L57.4318 38.4419C57.7894 38.0843 57.7894 37.3692 57.4318 37.0117L55.1077 34.6875C54.9289 34.5088 54.7501 34.33 54.3926 34.33ZM50.9958 37.548L40.0902 48.2748V52.0292H43.8446L54.7501 41.1236L50.9958 37.548ZM24 41.3024V44.878H36.5146V41.3024H24Z" fill="#0F0F0F" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2663_3508" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="1" dy="1" />
                                                <feGaussianBlur stdDeviation="4" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2663_3508" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2663_3508" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </Transition>
                    <Transition
                        show={isExpanded}
                        enter="transition-opacity duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-1000"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="flex flex-row gap-2 items-center">
                            {!itemClicked ? <div className="font-poppins h-8 py-1 px-4 rounded-md text-[#0F0F0F] bg-[#F8F8F8]">Contact Us</div> : null}
                            <button onClick={
                                () => {
                                    setItemClicked(true)
                                    setShowSuggestion(false)
                                    setShowFeedback(false)
                                    setShowReport(false)
                                    setShowContact(!showContact)

                                }
                            }>
                                <div className={showContact ? "border-[3px] rounded-full" : ''}>
                                    <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_2461_3514)">
                                            <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8" />
                                            <g clip-path="url(#clip0_2461_3514)">
                                                <path d="M25.9789 23.0396C25.6973 23.0829 25.1285 23.2888 24.8144 23.4513C24.3864 23.6788 23.6769 24.3883 23.4494 24.8163C23.3573 24.995 23.2219 25.3092 23.1514 25.5204L23.0269 25.8996V30.4767C23.0269 35.4329 23.0214 35.2975 23.3248 35.98C23.7202 36.8575 24.6302 37.67 25.4752 37.8921L25.7027 37.9517L25.7189 39.0783C25.7352 40.3296 25.7677 40.4433 26.1035 40.6546C26.3202 40.79 26.6777 40.8062 26.8889 40.6925C26.9702 40.6492 27.6094 40.0371 28.3081 39.3383L29.581 38.06H29.8302H30.0848L30.1119 36.7979C30.1335 35.7092 30.1498 35.4871 30.2527 35.1404C30.7781 33.3583 32.0998 32.0367 33.8873 31.495C34.2881 31.3758 34.326 31.3758 38.1556 31.3542L42.0123 31.3379V28.7C42.0123 25.8075 42.0014 25.6883 41.6819 25.0221C41.346 24.3179 40.7664 23.7383 40.0352 23.3754C39.2498 22.9854 39.5748 23.0017 32.4789 23.0125C28.9798 23.0125 26.0548 23.0288 25.9789 23.0396Z" fill="black" />
                                                <path d="M34.3314 33.0772C33.1072 33.3967 32.1431 34.3772 31.8235 35.6121C31.726 35.9967 31.7206 36.2459 31.7206 40.4438C31.7206 43.3309 31.7422 44.9776 31.7802 45.1888C31.8072 45.3621 31.9481 45.7413 32.0835 46.023C32.506 46.895 33.2643 47.545 34.2393 47.8755L34.6185 48L39.3852 48.0163L44.1518 48.0325L45.4789 49.3488C46.8927 50.7571 46.9522 50.8005 47.3693 50.7084C47.5589 50.6705 47.8297 50.4592 47.9327 50.2805C47.976 50.2046 48.0085 49.7821 48.0247 49.0346L48.0518 47.9025L48.2685 47.8375C48.6314 47.7292 49.1352 47.4475 49.4818 47.1605C50.0939 46.6513 50.5597 45.8117 50.6789 45.0155C50.7114 44.7934 50.7331 42.9138 50.7331 40.3896C50.7331 35.6338 50.7385 35.7096 50.3593 34.9459C49.9964 34.2147 49.4168 33.6351 48.7127 33.2992C47.9977 32.958 48.3064 32.9688 41.1997 32.9742C35.0031 32.9742 34.7106 32.9797 34.3314 33.0772Z" fill="black" />
                                                <path d="M41.6363 41.1736C41.5906 41.1829 41.5496 41.2077 41.5201 41.2438C41.4906 41.2799 41.4745 41.3251 41.4745 41.3717V41.8067C41.4745 41.8872 41.4426 41.9643 41.3857 42.0212C41.3288 42.0781 41.2516 42.11 41.1712 42.11C41.0907 42.11 41.0136 42.0781 40.9567 42.0212C40.8998 41.9643 40.8679 41.8872 40.8679 41.8067V40.9327C40.8679 40.856 40.897 40.7821 40.9493 40.7259C41.0017 40.6698 41.0734 40.6356 41.1499 40.6302C41.5095 40.6051 42.0383 40.4826 42.4674 40.209C42.8862 39.9416 43.1934 39.5447 43.1934 38.9443C43.1934 38.3659 42.9788 37.9649 42.6672 37.699C42.3481 37.4266 41.904 37.2774 41.4272 37.2588C40.4402 37.2202 39.5203 37.7259 39.3439 38.5134C39.3264 38.5919 39.2783 38.6602 39.2104 38.7033C39.1424 38.7464 39.0602 38.7607 38.9816 38.7432C38.9031 38.7256 38.8348 38.6776 38.7917 38.6096C38.7486 38.5417 38.7343 38.4594 38.7518 38.3809C38.8865 37.7795 39.275 37.3393 39.7779 37.0511C40.2834 36.7613 40.8964 36.6309 41.4511 36.6527C42.031 36.6754 42.6158 36.8576 43.0611 37.2376C43.5141 37.6242 43.8 38.1969 43.8 38.9443C43.8 39.8013 43.341 40.3712 42.7938 40.7204C42.4233 40.9568 42.0049 41.0987 41.6363 41.1736ZM40.6656 43.6267C40.6656 43.4658 40.7295 43.3115 40.8433 43.1977C40.9571 43.0839 41.1114 43.02 41.2723 43.02C41.4332 43.02 41.5875 43.0839 41.7013 43.1977C41.815 43.3115 41.8789 43.4658 41.8789 43.6267C41.8789 43.7876 41.815 43.9419 41.7013 44.0557C41.5875 44.1694 41.4332 44.2333 41.2723 44.2333C41.1114 44.2333 40.9571 44.1694 40.8433 44.0557C40.7295 43.9419 40.6656 43.7876 40.6656 43.6267Z" fill="#F8F8F8" stroke="#F8F8F8" stroke-width="0.404439" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_2461_3514" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dx="1" dy="1" />
                                                <feGaussianBlur stdDeviation="4" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2461_3514" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2461_3514" result="shape" />
                                            </filter>
                                            <clipPath id="clip0_2461_3514">
                                                <rect width="27.7333" height="27.7333" fill="white" transform="translate(23 23)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </Transition>
                    <button onClick={() => {
                        setIsExpanded(!isExpanded)
                        setShowContact(false)
                        setShowFeedback(false)
                        setShowSuggestion(false)
                        setShowReport(false)
                        setTimeout(() => {
                            setItemClicked(false)
                        }, 800)

                    }}>
                        {!isExpanded && !isMobile ?
                            <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1_2421)">
                                    <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8" />
                                    <g clip-path="url(#clip0_1_2421)">
                                        <path d="M44.7452 22H27.323C26.04 22 25 23.04 25 24.323V49.8755C25 51.1584 26.04 52.1984 27.323 52.1984H44.7452C46.0281 52.1984 47.0682 51.1584 47.0682 49.8755V24.323C47.0682 23.04 46.0281 22 44.7452 22Z" fill="#0F0F0F" />
                                        <path d="M28.4844 28.9692L42.4222 28.9692" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round" />
                                        <path d="M28.4844 33.6147H42.4222" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round" />
                                        <path d="M28.4844 38.2607H42.4222" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round" />
                                        <path d="M28.4844 42.9067H35.4533" stroke="#F8F8F8" stroke-width="1.74222" stroke-linecap="round" />
                                        <path d="M50.2995 35.6118L41.5793 50.7155L41.9482 55.0538C42.0167 55.8594 42.8669 56.3503 43.5989 56.0068L47.5404 54.1571L56.2606 39.0535C56.902 37.9424 56.5214 36.5217 55.4103 35.8803L53.4727 34.7616C52.3616 34.1201 50.9409 34.5008 50.2995 35.6118Z" fill="#0F0F0F" stroke="#F8F8F8" stroke-width="1.16148" stroke-linecap="round" />
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_d_1_2421" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="1" dy="1" />
                                        <feGaussianBlur stdDeviation="4" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2421" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2421" result="shape" />
                                    </filter>
                                    <clipPath id="clip0_1_2421">
                                        <rect width="32" height="34" fill="white" transform="translate(25 22)" />
                                    </clipPath>
                                </defs>
                            </svg> : isMobile && !isExpanded ?
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#0F0F0F" />
                                    <path d="M23.6604 11.2786C23.4754 11.3736 23.3904 11.4936 22.8254 12.4236C22.6104 12.7786 22.4054 13.1086 22.3704 13.1436C22.3304 13.1836 21.8654 13.3236 21.3254 13.4536C20.7904 13.5786 20.2954 13.7236 20.2254 13.7686C20.0254 13.8986 19.9004 14.1436 19.9004 14.4036C19.9004 14.6736 19.9354 14.7236 20.7454 15.6736C21.3854 16.4286 21.3454 16.2586 21.2304 17.5986C21.1604 18.4336 21.1804 18.6386 21.3654 18.8436C21.4954 18.9836 21.7454 19.0986 21.9304 19.0986C22.0004 19.0986 22.4954 18.9186 23.0304 18.6986L24.0004 18.2986L24.9704 18.6986C25.5054 18.9186 26.0004 19.0986 26.0704 19.0986C26.2554 19.0986 26.5054 18.9836 26.6354 18.8436C26.8204 18.6386 26.8404 18.4336 26.7704 17.5986C26.6554 16.2586 26.6154 16.4286 27.2554 15.6736C28.0654 14.7236 28.1004 14.6736 28.1004 14.4036C28.1004 14.1436 27.9754 13.8986 27.7754 13.7686C27.7004 13.7186 27.2104 13.5786 26.6854 13.4536C26.1554 13.3236 25.7004 13.2086 25.6704 13.1886C25.6454 13.1686 25.3854 12.7686 25.0954 12.2986C24.8104 11.8186 24.5104 11.3936 24.4304 11.3336C24.2404 11.1986 23.8704 11.1686 23.6604 11.2786Z" fill="#F8F8F8" />
                                    <path d="M14.9752 14.2388C14.7602 14.3738 14.7152 14.4338 14.1752 15.3238C13.9052 15.7638 13.6802 16.1338 13.6702 16.1388C13.6652 16.1488 13.1952 16.2688 12.6302 16.4088C12.0202 16.5538 11.5552 16.6938 11.4852 16.7488C11.3252 16.8738 11.2002 17.1438 11.2002 17.3588C11.2002 17.5838 11.3102 17.7488 11.9652 18.5188C12.2752 18.8788 12.5502 19.2088 12.5852 19.2488C12.6302 19.3088 12.6252 19.5188 12.5702 20.1488C12.4752 21.3238 12.4752 21.4988 12.6102 21.6988C12.7702 21.9288 13.0252 22.0588 13.2752 22.0338C13.3852 22.0188 13.8902 21.8388 14.4002 21.6288L15.3252 21.2438L16.2852 21.6488C16.8152 21.8688 17.3102 22.0488 17.3852 22.0488C17.6402 22.0488 17.9352 21.8588 18.0502 21.6238C18.1552 21.4088 18.1552 21.4088 18.0702 20.3588L17.9902 19.3088L18.6302 18.5488C18.9852 18.1338 19.3052 17.7338 19.3452 17.6588C19.4502 17.4588 19.4352 17.1188 19.3202 16.9638C19.1252 16.7038 18.9652 16.6388 17.9752 16.3988C17.4352 16.2688 16.9802 16.1438 16.9602 16.1238C16.9402 16.1088 16.6902 15.7088 16.4002 15.2388C16.1102 14.7688 15.8152 14.3388 15.7402 14.2838C15.5502 14.1388 15.1652 14.1188 14.9752 14.2388Z" fill="#F8F8F8" />
                                    <path d="M32.3706 14.2188C32.1756 14.3038 32.0806 14.4338 31.5056 15.3838C31.0806 16.0838 31.0256 16.1488 30.8606 16.1938C30.7556 16.2238 30.3056 16.3338 29.8556 16.4438C29.0356 16.6388 28.8706 16.7138 28.6806 16.9638C28.5656 17.1188 28.5506 17.4588 28.6556 17.6588C28.6956 17.7338 29.0156 18.1338 29.3706 18.5488L30.0106 19.3088L29.9256 20.3538L29.8406 21.3988L29.9506 21.6238C30.0656 21.8638 30.3606 22.0488 30.6206 22.0488C30.6956 22.0488 31.1906 21.8688 31.7206 21.6488L32.6856 21.2438L33.6056 21.6288C34.1106 21.8388 34.6156 22.0188 34.7256 22.0338C34.9756 22.0588 35.2306 21.9288 35.3906 21.6988C35.5256 21.4988 35.5256 21.3238 35.4306 20.1488C35.3756 19.5188 35.3706 19.3088 35.4156 19.2488C35.4506 19.2088 35.7406 18.8638 36.0656 18.4838C36.3856 18.1038 36.6906 17.7188 36.7306 17.6388C36.9056 17.2988 36.6906 16.7688 36.3256 16.6488C36.2306 16.6188 35.7456 16.4938 35.2506 16.3738C34.7506 16.2538 34.3356 16.1488 34.3306 16.1388C34.3206 16.1288 34.0956 15.7638 33.8256 15.3238C33.5606 14.8838 33.2906 14.4688 33.2306 14.4088C33.0006 14.1538 32.6806 14.0838 32.3706 14.2188Z" fill="#F8F8F8" />
                                    <path d="M24.2418 21.8729C23.7537 22.0012 23.5878 22.3986 23.5377 23.5815C23.5158 24.0228 23.4908 24.2856 23.4438 24.4734C23.3594 24.8208 23.0965 25.3527 22.8274 25.7095C22.4518 26.2102 21.7133 26.8924 21.1375 27.2742L21.0029 27.3618V31.4988V35.6389L21.3503 35.786C22.2766 36.1772 23.4814 36.4933 24.7425 36.6748C25.672 36.8093 26.2728 36.8437 27.6842 36.8469C28.9922 36.85 29.0361 36.8469 29.2739 36.778C30.1971 36.512 30.873 35.8674 31.139 35.0037C31.1765 34.8848 31.3862 33.7645 31.6053 32.5158C31.9839 30.3409 31.9996 30.2283 31.9996 29.8246C31.9964 29.4585 31.9839 29.3646 31.912 29.1205C31.6679 28.3131 31.1014 27.6841 30.341 27.3806C29.8998 27.2022 29.7996 27.1959 27.9189 27.1959H26.204L26.3135 26.8893C26.567 26.1789 26.6796 25.4873 26.6796 24.6299C26.6796 23.9664 26.6452 23.7443 26.4887 23.3531C26.351 23.0057 26.2008 22.7804 25.9192 22.5019C25.6407 22.2234 25.3809 22.0607 25.0179 21.9355C24.8208 21.8666 24.392 21.8322 24.2418 21.8729Z" fill="#F8F8F8" />
                                    <path d="M16.8069 26.7447C16.4658 26.8479 16.1654 27.1546 16.059 27.5082C15.9964 27.7085 15.9964 27.7899 16.0026 31.7641L16.012 35.8167L16.1153 36.0263C16.2405 36.2829 16.4877 36.5176 16.7412 36.6209C16.9164 36.6929 16.9415 36.6929 17.9992 36.6929C19.0569 36.6929 19.082 36.6929 19.2572 36.6209C19.5107 36.5176 19.7579 36.2829 19.8831 36.0263L19.9863 35.8167L19.9957 31.7641C20.002 27.7899 20.002 27.7085 19.9394 27.5082C19.8299 27.1452 19.5326 26.8479 19.179 26.7415C18.9537 26.6758 17.0228 26.6758 16.8069 26.7447Z" fill="#F8F8F8" />
                                </svg>
                                :
                                <svg width="52" height="52" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_1_2665)">
                                        <rect x="7" y="7" width="60" height="60" rx="30" fill="#F8F8F8" />
                                        <path d="M26.9998 27.0015L46.9998 47.0009M26.9998 47.0009L46.9998 27.0015" stroke="#0F0F0F" stroke-width="3.99994" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1_2665" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dx="1" dy="1" />
                                            <feGaussianBlur stdDeviation="4" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2665" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2665" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>}
                    </button>
                </div>
            </div >       </div >
    )
}