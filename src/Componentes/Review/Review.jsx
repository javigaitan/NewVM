import React from 'react'

const Review = () => {
    return (
        <>
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
                    <div className="mb-14 xl:mb-0">
                        <h1 className="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">Felices de ser parte de sus experiencias</h1>
                        <p className="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">Los protagonistas de esta aventura nos cuentan y dejan mensajes de como fue su experiencia con nosotres</p>
                        <a href='https://g.co/kgs/xtNziW5' className="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Leer mas referencias</a>
                    </div>
                    <div role="list" aria-label="Testimonials" className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start">

                        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">Excelente agencia me la recomendó una amiga.
                                        hasta el momento fueron muy acogedores y apoyaron todo  mi proceso para realizar los documentos y todo lo necesario para vivir esta experiencia de estudio y trabajo en irlanda.
                                        100% recomendados.</p>
                                    <p className="mt-4 text-base font-semibold leading-none text-gray-800">Diana Jimenez</p>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png" alt="Display avatar of Dany John" role="img" />
                            </div>
                        </div>
                        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                            <div className="pl-4 pt-4 flex items-start justify-between">
                                <div className="mr-6">
                                    <p className="xl:text-xl xl:leading-loose text-gray-600">Excelente la inducción de Pau, súper clara y con toda la información para vivir esta gran experiencia!
                                        También el asesoramiento de todxs lxs chicxs de vagamundo en especial de mi asesora Majo! Que tiene una paciencia increíble!! Genixs todxs!</p>
                                    <p className="mt-4 text-base font-semibold leading-none text-gray-800">Luciana Alfaya</p>
                                </div>
                                <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png" alt="Display Avatar of Mike Blake" role="img" />
                            </div>
                        </div>
                        <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 flex items-start justify-center sm:justify-start px-8 py-4 bg-purple-600 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Read success stories</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Review