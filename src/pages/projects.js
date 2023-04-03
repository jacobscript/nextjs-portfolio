import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../components/Icons'
import project1 from '../../public/images/projects/capture5.png'
import project2 from '../../public/images/projects/capture20.png'
import project3 from '../../public/images/projects/capture8.png'
import project4 from '../../public/images/projects/capture14.png'
import project5 from '../../public/images/projects/capture11.png'
import project6 from '../../public/images/projects/capture12.png'
import { motion } from 'framer-motion'
import TransitionEffect from '../components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[100.7%] h-[103%] rounded-[2.5rem] bg-dark/75 dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

            <Link
                href={link}
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage
                    src={img}
                    alt={title}
                    placeholder='blur'
                    className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link
                    href={link}
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
                    {summary}
                </p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark/75 rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

            <Link
                href={link}
                target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage
                    src={img}
                    alt={title}
                    placeholder='blur'
                    className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link
                    href={link}
                    target='_blank'
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>
                        {title}
                    </h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link
                        href={link}
                        target='_blank'
                        className='text-lg font-semibold underline underline-offset-2 md:text-base'
                    >
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Just-Lovely | Projects page</title>
                <meta
                    name='description'
                    content='This page showcases projects built with JavaScript and React. From simple web applications to complex full-stack projects, explore the possibilities of these powerful technologies.'
                />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text='Imagination Trumps Knowledge!'
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title='Dashboard Application'
                                img={project1}
                                summary='A feature-rich powerful and intuitive web application that allows users to quickly and easily create interactive dashboards. It provides an easy-to-use interface for creating, managing, and sharing data visualizations. '
                                link='https://github.com/'
                                github='https://github.com/'
                                type='Featured Project'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Tea Station website'
                                img={project2}
                                summary='Tea Station is an online tea shop that offers a wide selection of premium teas from around the world. Our mission is to provide our customers with the highest quality teas at the best prices'
                                link='https://github.com/'
                                github='https://github.com/'
                                type='Prominent Project'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Spotify Clone App'
                                img={project3}
                                summary='This is an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more, this is the best music application you can currently find on YouTube.'
                                link='https://github.com/'
                                github='https://github.com/'
                                type='Highlighted Project'
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title='Crypto Screener Application'
                                img={project4}
                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='https://github.com/'
                                github='https://github.com/'
                                type='Featured Project'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='Currency Converter'
                                img={project5}
                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='https://github.com/'
                                github='https://github.com/'
                                type='Promoted Project'
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='SpaceX Webflow'
                                img={project6}
                                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                                link='https://github.com/'
                                github='https://github.com/'
                                type='Promoted Project'
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
