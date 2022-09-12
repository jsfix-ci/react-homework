import { useState } from "react";
import { Posts } from "./Posts";
import { PostList } from "./PostList";
import "./posts.css";

function App() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <h1 className="title">Blog</h1>
      <button className="btn btn_all" onClick={() => setIsFavorite(false)}>
        All
      </button>
      <button className="btn btn_fav" onClick={() => setIsFavorite(true)}>
        Favorites
      </button>
      <PostList className="postList" />
      <Posts className="posts" isFavorite={isFavorite} />
    </>
  );
}

export default App;
