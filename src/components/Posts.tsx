import React from 'react';
import { IPost } from '../interfaces/posts';
import usePost from './usePost';
import { useSelector } from 'react-redux';
import DeleteAndUpdate from './DeleteAndUpdate';
import Pagination from './Pagination';
import style from '../styles/Posts.module.css'
import Loading from './Loading';

function Posts() {
    const { nickname } = useSelector((globalState: any) => globalState.nickname)

    const { data, isLoading, error } = usePost() as any

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

    if(isLoading) {
        return (<Loading />)
    }

    if(error) {
        return <p>error</p>
    }

    return (
        <div>
            {data?.results.map(({id, username, created_datetime, title, content}: IPost) =>
            (
            <div key={id} className={style.postBorder}>
                <div className={style.post}>
                    <header className={style.header}>
                        <span className={style.headerContent}>
                        <h2 className={style.title}>{title}</h2>
                        {username === nickname ? <>
                        <DeleteAndUpdate id={id} />
                        </> : <></>}
                        </span>
                    </header>
                    <div className={style.message}>
                        <span className={style.info}>
                            <p className={style.username}>{`@${username}`}</p>
                            <p className={style.time}>{convertTime(created_datetime)}</p>
                        </span>
                        <p className={style.content}>{content}</p>     
                    </div>
                </div>
            </div> 
            ) 
            )}
            { data?.count ? <Pagination count={data?.count}/> : <></>}
        </div>
    );
}

export default Posts;