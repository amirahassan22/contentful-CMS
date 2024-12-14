import {createClient} from 'contentful'
import { useEffect, useState } from 'react';

const client = createClient({
    space: '5ymprz1w7ud0',
    environment: 'master', 
    accessToken: import.meta.env.VITE_API_KEY
});

const useFetchProjects = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async()=>{
        try {
            const response = await client.getEntries({content_type:'projects'});
            // setProjects(response.items);
            console.log(response);
            const projectsArr =  response.items.map(item=>{
                const {title,url,image} = item.fields; 
                const {file} = image.fields ;
                return {title,url,image:file.url}
            });
            setProjects(projectsArr);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
        
    }

    useEffect(() => {
        getData()
        
    }, [])
    return {isLoading,projects};
}

export default useFetchProjects