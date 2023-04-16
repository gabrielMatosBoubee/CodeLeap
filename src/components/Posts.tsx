import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IPost, IPosts } from '../interfaces/posts';

function Posts() {
    const [posts, setPosts] = useState([] as Array<IPost>)

    const componentDidMount = async () => {
        const result = axios.create({baseURL: "https://dev.codeleap.co.uk/"})
        const { data } = await result.get("/careers") as IPosts
        setPosts(data.results)
    }

    useEffect(() => {
        componentDidMount()
    }, [])

    const convertTime = (createTime: Date) => {
        try {
            const dateNow = new Date() as any;
            const date = new Date(createTime) as any;
            const array = [{type: "year", methode: "getFullYear"}, 
            {type: "mouth", methode: "getMonth"}, {type: "day", methode: "getDay"}, 
            {type: "hour", methode: "getHours"}, {type: "minutes", methode: "getMinutes"},
            {type: "second", methode: "getSeconds"}
            ]
            const methodes = array
            .find(({methode}) => Number(date[methode]()) < Number(dateNow[methode]())) as any
            const time = Number(dateNow[methodes.methode]()) - Number(date[methodes.methode]())
            const result = `${time} ${methodes?.type} ago`
            return result
        } catch (error) {
            return "0 second ago"
        }
    } 

    return (
        <div>
            {posts.map(({id, username, created_datetime, title, content}: IPost) =>
            (

               <div key={id}>
                <h2>{title}</h2>
                <div>
                  <p>{`@${username}`}</p>
                  <p>{convertTime(created_datetime)}</p>
                  <p>{content}</p>     
                </div>
               </div> 
            ) 
            )}
        </div>
    );
}

export default Posts;