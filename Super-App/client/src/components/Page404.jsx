import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Page404 = () => {
    const { error } = useParams();
    return (
        <>
            <section className="page_404 font-DM text-2xl"  >
                <div className="container"  >
                    <div className="row"   >
                        <div className="col-sm-12 w-[100vw]" >
                            <div className="col-sm-10 col-sm-offset-1  text-center"  >
                                <div className="four_zero_four_bg"  >
                                    <h1 className="text-center " style={{ background: 'transparent', color: 'black', zIndex: '0' }}>404</h1>

                                </div>

                                <div className="contant_box_404" style={{ background: 'white', color: 'black' }}>
                                    <h3 className="h2" style={{ background: 'white', color: 'black' }}>
                                        Look like you're lost
                                    </h3>

                                    <p className=' flex justify-center items-center' style={{ background: 'white', color: 'black' }}> <span className=' text-[#148A08] bg-transparent text-3xl'>{error}</span> - this page you are looking for not avaible!</p>

                                    <Link to={'/'} className="link_404">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page404