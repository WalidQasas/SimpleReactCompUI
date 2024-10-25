//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Container } from './components/container';
import { Header } from './components/header';
import { UserList } from './components/userlist';
import { Footer } from './components/footer';
function App() {
  
  return (
  <Container>
    <Header />
    <UserList />
    <Footer />
  </Container>
  )
}

// Rules of react

//component life-cycle
// useEffect hook
//mounting
// change /rerender
// unmounting
export default App
