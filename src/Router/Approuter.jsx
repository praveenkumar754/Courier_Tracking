import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Components/home/Home"
import Blog from "../Components/home/Blog/Blog"
import Main from "../Core/main/Main"
import About from "../shared/components/home/About"
import ContactForm from "../Components/contact/Contactforn"
import TrackingForm from "../Components/contact/Contactforn"

export default function Approuter() {
  return (
<BrowserRouter>
<Routes>
    <Route element={<Main/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/Services" element={</>} /> */}
        <Route path="/tracking" element={<TrackingForm/>} />
    </Route>
</Routes>
</BrowserRouter>
  )
}
