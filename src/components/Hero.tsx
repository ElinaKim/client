import DriverImg from '../assets/images/personDriving.jpg'
import { HeroProps } from '../types/props'
import PriceListIcon from '../assets/icons/priceList.svg'
import PhoneIcon from '../assets/icons/phoneWhite.svg'

export const Hero: React.FC<HeroProps> = ({ priceRef }) => {

    const scrollToPriceSection = () => {
        priceRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <div className="flex justify-center items-center mx-8 my-8">
            <div className='w-[1400px] flex justify-between items-center'>
                <div className="flex flex-col md:items-start">
                    <div className="header-main text-center uppercase md:text-left">
                        <h2>Drive Smart,</h2>
                        <h2>Drive Safe</h2>
                    </div>
                    <h3 className='text-center md:text-left md:mr-8 mb-4'>Welcome to Check Driving School! Master the road with confidence and care with us.</h3>
                    <div className="flex items-center md:items-start flex-col">
                        <div className="flex">
                            <button
                                onClick={scrollToPriceSection}
                                className="bg-[#0D9488] hover:bg-[#0A746D] text-white py-2 px-2 mr-2 flex items-center rounded">
                                <img
                                    src={PriceListIcon}
                                    className='w-6 mr-2'
                                />
                                Pricing
                            </button>
                            <a
                                href="tel:+16047254935"
                                className="bg-[#0D9488] hover:bg-[#0A746D] text-white py-2 px-2 flex items-center rounded">
                                <img
                                    src={PhoneIcon}
                                    className='w-6 mr-2'
                                />
                                604 725 4935
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center md:self-start mt-12">
                    <img src={DriverImg} className="hidden md:block w-[600px] h-[550px] object-cover rounded-xl" />
                </div>
            </div>
        </div>
    )
}
