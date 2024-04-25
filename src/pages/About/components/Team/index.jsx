import PersonIcon from '@mui/icons-material/Person';

function AboutUsTeam() {
    return (
        <>
            <div className="mx-12 md:mx-24 lg:mx-48 pt-12 md:pt-24 lg:pt-36">
                <h3 className='text-3xl mt-10 text-center'>
                    Our Team
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4'>
                    <div className='flex items-center bg-slate-100'>
                        <PersonIcon sx={{ fontSize: 96 }}/>
                        <div className='ml-4'>
                            <h4 className='text-xl'>
                                John Rambo
                            </h4>
                            <p>
                                CEO
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center bg-slate-100'>
                        <PersonIcon sx={{ fontSize: 96 }}/>
                        <div className='ml-4'>
                            <h4 className='text-xl'>
                                John Rambo
                            </h4>
                            <p>
                                CTO
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center bg-slate-100'>
                        <PersonIcon sx={{ fontSize: 96 }}/>
                        <div className='ml-4'>
                            <h4 className='text-xl'>
                                John Rambo
                            </h4>
                            <p>
                                HR
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center bg-slate-100'>
                        <PersonIcon sx={{ fontSize: 96 }}/>
                        <div className='ml-4'>
                            <h4 className='text-xl'>
                                John Rambo
                            </h4>
                            <p>
                                PM
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center bg-slate-100'>
                        <PersonIcon sx={{ fontSize: 96 }}/>
                        <div className='ml-4'>
                            <h4 className='text-xl'>
                                John Rambo
                            </h4>
                            <p>
                                QA
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center bg-slate-100'>
                        <PersonIcon sx={{ fontSize: 96 }}/>
                        <div className='ml-4'>
                            <h4 className='text-xl'>
                                John Rambo
                            </h4>
                            <p>
                                Web Developer
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center bg-slate-100'>
                        <PersonIcon sx={{ fontSize: 96 }}/>
                        <div className='ml-4'>
                            <h4 className='text-xl'>
                                John Rambo
                            </h4>
                            <p>
                                Web Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsTeam