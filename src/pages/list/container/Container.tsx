import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Post = {
  id: number,
  title: string,
  content: string,
  createdAt: string,
}

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
    <div className="max-w-xl mx-auto space-y-4">
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">작성된 글이 없습니다.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`/detail/${post.id}`)}>
            <p className="text-xl font-semibold text-blue-700"><strong>{post.title}</strong></p>
            <p className="text-gray-800 mt-2 line-clamp-2">{post.content}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Container;