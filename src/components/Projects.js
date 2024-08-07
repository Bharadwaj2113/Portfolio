import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects(){
    const config ={
        projects:[
            {
                image:websiteImg1,
                description:'An Ecommerce Website. Built with MERN Stack.',
                link:''
            },
            {
                image:websiteImg2,
                description:'Food Ecommerce website like Swiggy, Built with AngularJS.',
                link:''
            },
            {
                image:websiteImg3,
                description:'Basic blog website built with Next.js and MongoDB.',
                link:''
            }
        ]
    }
    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">Projects</h1>
                    <p>These are some of my projects. I have built them with React, MERN and vanilla CSS. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-20 gap-2'>
                    {config.projects.map((project, index) => (  
                        <div key={index} className='relative'>
                            <img className='h-[200px] w-full md:w-[400px] object-cover' src={project.image} alt='Project' />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' rel='noopener noreferrer' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
