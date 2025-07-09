
import './App.css'
import { Toolbar } from './organisms/Toolbar'
import Home from './page/Home'
import { Route, Routes, useLocation  } from 'react-router-dom'
import { SignInPage } from './page/SignInPage'
import { SignUpPage } from './page/SignupPage'
import ProtectedComponent from './page/Protected'
function App() {
  const location = useLocation();
  const isSignInPage = location.pathname === '/sign-in';
  const isSignUp = location.pathname === '/sign-up';
  return (
    <>
    {!isSignInPage && !isSignUp && <Toolbar />}
     <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignInPage />} />
             <Route path="/sign-up" element={<SignUpPage />} />
             <Route path="/protected" element={<ProtectedComponent />} />
          </Routes>
        </main>
    </>
  )
}

export default App
