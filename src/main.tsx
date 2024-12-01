import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from "./App";
import { RouterProvider } from "react-router-dom";

import {register} from "swiper/element/bundle"
register()
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/zoom'; 

import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Toaster position="top-right" reverseOrder={false}   />
     <RouterProvider router={router} />
  </StrictMode>,
)
