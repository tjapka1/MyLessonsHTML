import React, {useState, useEffect} from "react";
import List from "../List/List";
import styles from "./Post.module.css";

interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Post():JSX.Element{


  const [posts, setPosts] = useState<string[]>([]);
  

  async function loadPosts(): Promise<string[]> {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const obj:Post[] = await response.json() as Post[];
    const Posts:string[] = obj.map((post)=>{return post.body});
    return Posts;
  }

  useEffect(()=>{
    loadPosts().then(posts => setPosts(posts));
  },[]);

  return(
    <div>
      <List names={posts} heading="Посты Пользователей"/>
    </div>
  );
  
}

export default Post;