import { HeroProps } from '../types/props'

export const Pricing: React.FC<HeroProps> = ({ priceRef }) => {
    return (
        <div ref={priceRef} className='flex justify-center mx-8 mb-20'>
            <div className='w-[1400px]'>
                <h2 className='header-main uppercase'>Packages and Pricing</h2>
                <div className='flex flex-col gap-8 md:flex lg:flex-row lg:justify-between md:gap-4 mb-8'>
                    <ul className='flex-1 shadow-md rounded-lg border-gray-300 border-[0.5px] p-2 hover:shadow-[#0A746D]'>
                        <h2 className='sm:h-32 md:h-28 lg:h-20 text-xl text-center'>Regular Single Lessons</h2>
                        <li className='flex justify-between items-center mt-4 mb-8'>
                            <div className=''>
                                <p className='uppercase'>1 hour</p>
                                <p className='text-[#636363] text-sm'>Anywhere in the Lower Mainland.</p>
                            </div>
                            <p className='text-lg'>$80</p>
                        </li>
                        <li className='flex justify-between items-center mb-8'>
                            <div className=''>
                                <p className='uppercase'>1.5 hours</p>
                                <p className='text-[#636363] text-sm'>Anywhere in the Lower Mainland.</p>
                            </div>
                            <p className='text-lg'>$100</p>
                        </li>
                        <li className='flex justify-between items-center mb-8'>
                            <div className=''>
                                <p className='uppercase'>1 hour</p>
                                <p className='text-[#636363] text-sm'>*Lansdowne Skytrain Station pick-up and drop-off only* </p>
                            </div>
                            <p className='text-lg'>$65</p>
                        </li>
                    </ul>
                    <ul className='flex-1 shadow-md rounded-lg border-gray-300 border-[0.5px] p-2 hover:shadow-[#0A746D]'>
                        <div className='sm:h-26 md:h-26 lg:h-20 text-center'>
                            <h2 className='text-xl mt-2'>Prepaid Packages of Lessons</h2>
                            <h3 className='text-base'>Each Lesson is 1 Hour</h3>
                            <h4 className='text-sm text-[#636363] font-bold'>Note: Pick Up & Drop Off at Lansdowne Skytrain Station</h4>
                        </div>
                        <li className='flex justify-between items-center mt-4 mb-8'>
                            <div className=''>
                                <p className=''>10 Lessons <span className='capitalize'>- (You save </span><span className='border-b-[1px]'>$200</span>)</p>
                                <p className='text-[#636363] text-sm'>1 Hour each X $60</p>
                            </div>
                            <p className='text-lg'>$600</p>
                        </li>
                        <li className='flex justify-between items-center mb-8'>
                            <div className=''>
                                <p className=''>20 Lessons <span className='capitalize'>- (You save </span><span className='border-b-[1px]'>$500</span>)</p>
                                <p className='text-[#636363] text-sm'>1 Hour each X $55</p>
                            </div>
                            <p className='text-lg'>$1100</p>
                        </li>
                        <li className='flex justify-between items-center mb-8'>
                            <div className=''>
                                <p className=''>30 Lessons <span className='capitalize'>- (You save </span><span className='border-b-[1px]'>$900</span>)</p>
                                <p className='text-[#636363] text-sm'>1 Hour each X $50</p>
                            </div>
                            <p className='text-lg'>$1500</p>
                        </li>
                    </ul>
                    <ul className='flex-1 shadow-md rounded-lg border-gray-300 border-[0.5px] p-2 hover:shadow-[#0A746D]'>
                        <div className='sm:h-26 md:h-28 lg:h-20 text-center'>
                            <h2 className='text-xl mt-2'>ICBC Road Test Package</h2>
                        </div>
                        <li className='flex justify-between items-center mt-4 mb-8'>
                            <div className=''>
                                <p className=''>ICBC road test preparation</p>
                                <p className='text-[#636363] text-sm'>2 Hours</p>
                            </div>
                            <p className='text-lg'>$150</p>
                        </li>
                        <li className='flex justify-between items-center mb-8'>
                            <div className=''>
                                <p className=''>Car rental for ICBC Road Test</p>
                                <p className='text-[#636363] text-sm'>(1 Hour warm-up lesson included)</p>
                            </div>
                            <p className='text-lg'>$1100</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
