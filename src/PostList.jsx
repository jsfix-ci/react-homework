import { useEffect, useState } from "react";

export const PostList = () => {
    const [postList, setPostList] = useState([]);
    useEffect(()=>{
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
        .then(response=>response.json())
        .then((data)=> setPostList(data))
    }, [])
    return (
        <>
        {postList.map((item)=>{
            return (
                <ul className="postList">
                    <li className="postList__item" key={item.id}>
                        <img className="item__img" src={item.image} />
                        <p className="item__date">{item.date}</p>
                        <p className="item__title">{item.title}</p>
                        <p className="item__text">{item.text}</p>
                    </li>
                </ul>
            )
        })}
        </>
    )
}