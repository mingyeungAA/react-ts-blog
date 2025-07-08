import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

type WriteFormProps = {
  title: string;
  content: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (title: string, content: string) => void;
  submitLabel: string;
}

const WriteForm = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
  submitLabel
}: WriteFormProps) => {

  const navigate = useNavigate();

  return (
    <div className="write-page">
      <input 
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="제목..."
      />
      <textarea 
        value={content}
        onChange={onContentChange}
        placeholder="내용을 입력하세요..."
      />
      <button onClick={() => navigate('/')}>⬅</button>
      <button onClick={() => onSubmit(title, content)}>{submitLabel}</button>
    </div>
  )
}

export default WriteForm;