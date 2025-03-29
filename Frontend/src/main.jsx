import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router'
import MainLayout from './Routes/Layouts/mainLayout.jsx'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react';  

const Homepage = React.lazy(() => import('./Routes/HomePage/homePage.jsx'));
const CreatePage = React.lazy(() => import('./Routes/CreatePage/createPage.jsx'));
const PostPage = React.lazy(() => import('./Routes/PostPage/postPage.jsx'));
const AuthPage = React.lazy(() => import('./Routes/AuthPage/authPage.jsx'));
const SearchPage = React.lazy(() => import('./Routes/SearchPage/searchPage.jsx'));
const ProfilePage = React.lazy(() => import('./Routes/ProfilePage/profilePage.jsx'));

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
