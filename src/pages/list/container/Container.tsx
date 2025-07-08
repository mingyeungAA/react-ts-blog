import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Post } from "../../../types";

const Container: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  //페이지 로딩시, localStorage에서 글 목록 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('posts');
    if(saved){
      setPosts(JSON.parse(saved));
    }
  }, []);

  return(
    <div className="list-page">
      {posts.length === 0 ? (
        <p>작성된 글이 없습니다.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id} onClick={() => navigate(`/detail/${post.id}`)}>
              <p><strong>{post.title}</strong></p>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Container;