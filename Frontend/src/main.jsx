import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router'
import Homepage from './Routes/HomePage/homePage.jsx'
import CreatePage from './Routes/CreatePage/createPage.jsx'
import PostPage from './Routes/PostPage/postPage.jsx'
import AuthPage from './Routes/AuthPage/authPage.jsx'
import SearchPage from './Routes/SearchPage/searchPage.jsx'
import ProfilePage from './Routes/ProfilePage/profilePage.jsx'
import MainLayout from './Routes/Layouts/mainLayout.jsx'
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/pin/:id" element={<PostPage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
