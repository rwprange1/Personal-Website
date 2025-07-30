
interface jsonObject{
    title: string,
    desc: string,
    link: string,
    img: string,
}


interface ProjectElementProps{
    data: jsonObject
};


function ProjectElement(props: ProjectElementProps){

    return(
        <div className="items-center w-full xl:w-1/3   h-[500px] flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll">
                
                   
                <img className="rounded-t-lg h-[225px] w-full object-cover" src={props.data.img} alt="" />
            
                    
                    
            
                <div className="p-2 md:p-5 flex-1 flex flex-col justify-between">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {props.data.title} 
                        </h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                         {props.data.desc}      
                        </p>
                    </div>
                    <a href={props.data.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-400 rounded-lg hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-400">
                        Read more
                        &rarr;
                    </a>
                </div>
            </div>
    )


}


export default ProjectElement;