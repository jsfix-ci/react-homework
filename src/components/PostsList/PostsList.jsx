import { useEffect, useState } from "react";
import { PostsListItem } from "./PostListItem";
import styles from './postsList.css'

export const PostsList = function () {
    const [activeTab, setActiveTab] = useState('all')
    const [postsList, setPostList] = useState([])

    useEffect(() => {
        fetch("https://60f699f318254c00176e0362.mockapi.io/posts")
        .then((response) => response.json())
        .then((data) => setPostList(data))
    }, [])

    console.log(postsList)

    return <div>
        <h1 className='page__name'>Blog</h1>
        <div className='buttons__block'>
            <p className={activeTab === 'all' ? 'button__all underline' : 'button__all'} onClick={() => setActiveTab('all')}>All</p>
            <p className={activeTab === 'fav' ? 'button__fav underline' : 'button__fav'} onClick={() => setActiveTab('fav')}>Favorite</p>
        </div>
        <ul className="posts">
            {activeTab === 'all' ? <>
                {postsList.map(({id,image, text, date }) => {
                    return <PostsListItem key={id} id={id} image={image} text={text} date={date} />
                })} </> : <div>Favorite</div>
            }
        </ul>
    </div>

}

