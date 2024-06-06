import profile from '../../assets/sohan.jpg'
import { FaGithub } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
const About = () => {


    return (

        <div className='lg:mx-20 lg:mt-6 lg:rounded-2xl text-white bg-gray-900 min-h-full lg:p-32'>
            {/* <div className="bg-gray-100">
                <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                    <img className=" h-72 ml-32  my-10 bg-white rounded-full shadow-md p-5" src={profile} alt="" />
                    <h2 className="text-center text-2xl font-semibold work mt-3">Sohanur Rahman</h2>
                    <p className="text-center text-gray-600 mt-1 work">Web Devoloper</p>
                    <div className="flex justify-center mt-5">
                        <a href="https://www.facebook.com/profile.php?id=100030882757526" target='_blank' className="text-blue-500 hover:text-blue-700 mx-3">FaceBook</a>
                   
                        <a href="https://github.com/Sohanur20" target='_blank' className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold">Bio</h3>
                        <p className="text-gray-600 mt-2 work">Student of Ph hero and will be soon became a web devoloper</p>
                    </div>
                </div>


            </div> */}

            <div className=" relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">
                <div className="p-3 space-y-1">
                    <h3 className="text-4xl font-semibold text-green-300 work">Sohanur <span className='ml-20 text-purple-500'> Rahman</span></h3>
                    <p className="text-sm dark:text-gray-600">Student of Ph hero and will be  became a web devoloper</p>
                </div>
                <div className="flex items-center gap-3 p-3 lg:ml-20">
                    <img alt="" src={profile} className="object-cover w-16 h-12 dark:bg-gray-500 rounded-full shadow" />
                    <div className="space-y-1 ">
                        <span className="text-xs">March 03, 2023</span>
                        <div className="flex flex-wrap gap-3 text-fuchsia-500">
                            <a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">javascript</a>
                            <a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">React</a>
                            <a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">MongoDB</a>
                            <a href="https://github.com/Sohanur20" target='_blank' className=" text-fuchsia-500 font-bold text-xl hover:text-blue-700 "><FaGithub /></a>
                            <a href="https://www.facebook.com/profile.php?id=100030882757526" target='_blank' className="text-fuchsia-500 font-bold text-2xl hover:text-blue-700 "><TiSocialFacebookCircular /></a>

                        </div>

                    </div>
                </div>
            </div>


        </div>

    );
};

export default About;