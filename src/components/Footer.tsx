import LocationIcon from '../assets/icons/location.svg'
import PhoneIcon from '../assets/icons/phone.svg'

export const Footer = () => {
    return (
        <div className='flex justify-center px-8 py-4 border-t-2'>
            <div className='flex flex-col items-center gap-2 md:flex-row justify-between w-[1400px]'>
                <div className='flex items-center'>
                    <img
                        src={LocationIcon}
                        className='w-4 mr-1'
                    />
                    <h2 className=''>Vancouver, BC</h2>
                </div>
                <div className='flex items-center'>
                    <img src={PhoneIcon} className='w-8' />
                    <a
                        href="tel:+16047254935"
                        className="py-2 px-2">604 725 4935</a>
                </div>
                <div className="flex items-center">
                    <p className="text-sm text-[#636363] leading-none"> Check Driving School &copy; 2024</p>
                </div>
            </div>
        </div>
    )
}
