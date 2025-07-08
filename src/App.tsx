import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ListPage from './pages/list'
import WritePage from './pages/write'
import DetailPage from './pages/detail'
import UpdatePage from './pages/update'


function App() {
  
  return (
    <BrowserRouter>
      <header>
        <Link to="/write" className="text-blud-600">글쓰기</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/detail/:id" element={<DetailPage />}/>
          <Route path="/update/:id" element={<UpdatePage />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
