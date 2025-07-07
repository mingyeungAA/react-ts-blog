import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const Container: React.FC = () => {
  const {id} = useParams<string>();
  const [post, setPost] = useState<Post | null>(null);

  const handleUpdate = () => {

  }

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
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">{post.title}</h2>
        <span className="text-sm text-gray-500">
          {post.createdAt.slice(0,10)}
        </span>
      </div>
      <p className="whitespace-pre-wrap leading-relaxed">{post.content}</p>
      <button onClick={handleUpdate} className="text-blue-700">
        수정하기
      </button>
    </div>
    </>
  )
}

export default Container;