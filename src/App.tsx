import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'

function HomePlaceholder() {
  return <main><h1>Catálogo de filmes</h1><p>A tela inicial será adicionada na branch da Eulyna.</p></main>
}

function FilmPlaceholder() {
  return <main><h1>Detalhes do filme</h1><p>Esta tela será adicionada na branch do Silas.</p></main>
}

function AboutPlaceholder() {
  return <main><h1>Sobre</h1><p>Esta tela será adicionada na branch do Silas.</p></main>
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePlaceholder />} />
        <Route path="filme/:id" element={<FilmPlaceholder />} />
        <Route path="sobre" element={<AboutPlaceholder />} />
        <Route path="*" element={<HomePlaceholder />} />
      </Route>
    </Routes>
  )
}
