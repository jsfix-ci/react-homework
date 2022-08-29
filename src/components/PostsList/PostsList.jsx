import { AllPosts } from "../mockData/AllPosts";
import styles from './postsList.css'

export const PostsList = function ({ value }) {

const FavoritePosts = AllPosts.filter(item => item.isFavorite)

    return <ul className="posts">
        {value === 'all' ? <>
            {AllPosts.map(({ id, image, text, date }) => {
                return (
                    <li className="posts__item" key={id}>
                        <img className="posts__img" src={image} alt="image" />
                        <p className="posts__date">{date}</p>
                        <p className="posts__text">{text}</p>
                    </li>
                )
            })} </> : <>
            {FavoritePosts.map(({ id, image, text, date }) => {
                return (
                    <li className="posts__item" key={id}>
                        <img className="posts__img" src={image} alt="image" />
                        <p className="posts__date">{date}</p>
                        <p className="posts__text">{text}</p>
                    </li>
                )
            })}
        </>
        }
    </ul>
}

