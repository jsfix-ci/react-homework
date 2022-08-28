import { AllPosts } from "../mockData/AllPosts";
import styles from '../Posts'

export const FavPosts = function() {
return (
    <ul className="posts">
    {AllPosts.filter(item => item.isFavorite).map((item) =>{
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