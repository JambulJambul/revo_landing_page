import FreshIdea from '../../../../assets/undraw_lightbulb_moment_re_ulyo.svg'
import CuttingEdge from '../../../../assets/undraw_programmer_re_owql.svg'
import SeriousGroup from '../../../../assets/undraw_solution_mindset_re_57bf.svg'
import CustomerReview from '../../../../assets/undraw_reviews_lp8w.svg'
import DreamerPerson from '../../../../assets/undraw_dreamer_re_9tua.svg'
import SaveMoney from '../../../../assets/undraw_savings_re_eq4w.svg'

function HomeWhyUs() {
    return (
        <>
            <div className='max-w-[1440px] mx-auto py-10'>
                <h2 className="text-center text-4xl text-indigo-950 pt-12">Why Choose Us</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/3 p-4 my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-48 mb-16" src={DreamerPerson} alt="Fresh Perspectives Icon" />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent mb-10">Fresh Perspectives</h3>
                            <p className="text-base text-center text-gray-600">Our team brings innovative ideas and fresh perspectives from the latest industry trends and technologies.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-48 mb-16" src={CuttingEdge} alt="Cutting-Edge Knowledge Icon" />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent mb-10">Cutting-Edge Knowledge</h3>
                            <p className="text-base text-center text-gray-600">We are equipped with the latest knowledge and skills from our recent academic backgrounds and certifications.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-48 mb-16" src={SeriousGroup} alt="Enthusiasm and Dedication Icon" />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent mb-10">Enthusiasm and Dedication</h3>
                            <p className="text-base text-center text-gray-600">We are passionate and dedicated to delivering the best solutions tailored to your needs.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-48 mb-16" src={CustomerReview} alt="Commitment to Customer Satisfaction Icon" />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent mb-10">Customer Satisfaction</h3>
                            <p className="text-base text-center text-gray-600">We prioritize your satisfaction and work closely with you to ensure all your requirements are met.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-48 mb-16" src={FreshIdea} alt="Innovative Solutions Icon" />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent mb-10">Innovative Solutions</h3>
                            <p className="text-base text-center text-gray-600">We leverage the latest technologies to provide innovative and efficient solutions to your challenges.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 my-12">
                        <div className="flex flex-col items-center">
                            <img className="h-48 mb-16" src={SaveMoney} alt="Cost-Effective Services Icon" />
                            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent mb-10">Cost-Effective</h3>
                            <p className="text-base text-center text-gray-600">We offer competitive pricing to ensure you get the best value for your investment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWhyUs