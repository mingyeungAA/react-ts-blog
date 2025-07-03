import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

type Post = {
  id: number,
  title: string,
  content: string,
  createdAt: string
}

const Container: React.FC = () => {

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const navigate = useNavigate();

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const handleSubmit = () => {
    if( !title.trim() || !content.trim() ){
      alert("제목과 내용을 모두 입력하세요.");
      return
    }

    //localStorage로 저장
    const posts: Post[] = JSON.parse(localStorage.getItem('posts') ?? '[]');
    const newPost: Post = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
    navigate('/');
  }

  return(
    <div className="max-w-xl mx-auto space-y-4">
      <input 
        type="text" 
        value={title} 
        onChange={handleTitle} 
        placeholder="제목.." 
        className="w-full border border-gray-300 p-2 rounded" 
      />
      <textarea 
        value={content} 
        onChange={handleContent} 
        placeholder='내용을 입력하세요...'
        className="w-full border border-gray-300 p-2 h-40 rounded resize-none"
      />
      <button onClick={handleSubmit} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>저장</button>
    </div>
  )
}

export default Container;