import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import type { Post } from "../../../types";

const Container: React.FC = () => {
  const {id} = useParams<string>();
  const [post, setPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  // const handleUpdate = () => {
  //   navigate('/detail/')
  // }

  useEffect(() => {
    const saved = localStorage.getItem('posts');
    
    const posts: Post[] = JSON.parse(saved ?? '[]');
    const found = posts.find(p => p.id === Number(id));
    setPost(found ?? null);
  }, [])

  if(!post)
    return (
      <div>
        <p>글을 찾을 수 없습니다 🤔</p>
        <Link to="/">⬅</Link>
      </div>
    )
  
  return (
    <>
    <div className="detail-page">
      <div>
        <h2>{post.title}</h2>
        <span>
          {post.createdAt.slice(0,10)}
        </span>
      </div>
      <p>{post.content}</p>
      <button onClick={() => navigate('/')}>
        ⬅
      </button>
      <button onClick={() => navigate(`/update/${post.id}`)}>
        수정
      </button>
    </div>
    </>
  )
}

export default Container;