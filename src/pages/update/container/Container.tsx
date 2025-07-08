import { useEffect, useState, type ChangeEvent } from "react";
import WriteForm from "../../../common/WriteForm";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../../../types";

const Container: React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  
  useEffect(() => {
    const posts:Post[] = JSON.parse(localStorage.getItem('posts') ?? '[]');
    const target = posts.find(p => p.id === Number(id));

    if(!target){
      alert("해당 글을 찾을 수 없습니다.");
      navigate('/');
      return
    }

    setTitle(target.title);
    setContent(target.content);

  }, [id, navigate]);

  const handleUpdate = (newTitle: string, newContent: string) => {
    const list: Post[] = JSON.parse(localStorage.getItem('posts') ?? '[]');
    const updated      = list.map(p =>
      p.id === Number(id) ? { ...p, title: newTitle , content: newContent } : p
    );
    localStorage.setItem('posts', JSON.stringify(updated));
    navigate(`/detail/${id}`);
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  return (
    <div className="update-page">
      <WriteForm 
        title={title}
        content={content}
        onTitleChange={handleTitle}
        onContentChange={handleContent}
        onSubmit={handleUpdate}
        submitLabel="수정"
      />
    </div>
  )
}

export default Container;