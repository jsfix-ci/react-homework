import { AllPosts } from "../mockData/AllPosts";
import styles from './posts.css'

export const Posts = function({}) {
return (
    <ul className="posts">
    {AllPosts.map((item) =>{
    let {id, image, text, date} = item

    return(
     <li className="posts__item" key={id}>
        <img className="posts__img" src={image} alt="image" />
        <p className="posts__date">{date}</p>
        <p className="posts__text">{text}</p>
     </li>
    )  
})}
</ul>
)
    }
