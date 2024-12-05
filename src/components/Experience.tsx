import CheckmarkIcon from '../assets/icons/checkmark.svg';

export const Experience = () => {
    return (
        <section className='flex justify-center mx-8 my-20'>
            <div className="w-[1400px]">
                <div className=''>
                    <h2 className="text-3xl font-extrabold uppercase text-[#636363] mb-4">
                        Program Experience
                    </h2>
                    <h3 className="text-xl text-gray-700 mb-4">
                        We offer top-notch driving education with a focus on your comfort and success.
                    </h3>
                    <h3 className="text-lg text-gray-600 mb-12">Our driving school features:</h3>
                </div>
                <div className="grid grid-cols-2 justify-self-center md:gap-14">
                    {/* First Row */}
                    <div className="flex items-start gap-2 mb-6">
                        <img src={CheckmarkIcon} alt="Checkmark Icon" className="w-8" />
                        <div>
                            <h4 className="text-xl font-bold">Dual-Pedal Automatic Car</h4>
                            <p className="text-gray-500 mt-1">Master driving in a secure environment</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src={CheckmarkIcon} alt="Checkmark Icon" className="w-8" />
                        <div>
                            <h4 className="text-xl font-bold">Bilingual Instruction</h4>
                            <p className="text-gray-500 mt-1">Russian, English</p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="flex items-start gap-2 mb-6">
                        <img src={CheckmarkIcon} alt="Checkmark Icon" className="w-8" />
                        <div>
                            <h4 className="text-xl font-bold">Flexible Schedule</h4>
                            <p className="text-gray-500 mt-1">Day or night, weekends, holidays-year-round</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src={CheckmarkIcon} alt="Checkmark Icon" className="w-8" />
                        <div>
                            <h4 className="text-xl font-bold">Door-to-Door</h4>
                            <p className="text-gray-500 mt-1">Instructor picks up and drops off at your convenience</p>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="flex items-start gap-2">
                        <img src={CheckmarkIcon} alt="Checkmark Icon" className="w-8" />
                        <div>
                            <h4 className="text-xl font-bold">Effective Homework</h4>
                            <p className="text-gray-500 mt-1">Custom assignments for rapid improvement</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src={CheckmarkIcon} alt="Checkmark Icon" className="w-8" />
                        <div>
                            <h4 className="text-xl font-bold">Positive Environment</h4>
                            <p className="text-gray-500 mt-1">Learn in a friendly, encouraging environment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
