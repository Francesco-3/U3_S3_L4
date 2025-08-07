import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import Favourites from './pages/Favourites'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="md" className="mb-3">
        <Container>
          <Navbar.Brand as={Link} to="/">Remote Jobs</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/favourites">Preferiti</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App