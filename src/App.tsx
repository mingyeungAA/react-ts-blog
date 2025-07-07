import './App.scss';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ListPage from './pages/list'
import WritePage from './pages/write'
import DetailPage from './pages/detail'


function App() {
  
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className="font-bold">목록</Link>
        <Link to="/write" className="text-blud-600">글쓰기</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/detail/:id" element={<DetailPage />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
