import RevoLogo from '../../../../assets/revo-logo.png'

function AboutUsHero() {
    return (
        <>
            <div className='pt-48 text-center px-12 md:px-24 lg:px-48 bg-gradient-to-b from-cyan-100 text-gray-600'>
                <img className='h-64 inline-block' src={RevoLogo} alt="" />
                <h3 className='text-3xl mt-10'>
                    About Us
                </h3>
                <p className='mt-6 px-12 lg:px-48'>
                    We are a team of passionate developers, designers, and marketers who are dedicated to creating the best possible products and services for our clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit lacinia dolor, sit amet bibendum felis facilisis sed.
                </p>
            </div>
        </>
    )
}

export default AboutUsHero