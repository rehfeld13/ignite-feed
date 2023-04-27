import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css'
import './App.css'

export function App(){
  return(
    <div>
      <Header />

      <div className="wrapper">
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
