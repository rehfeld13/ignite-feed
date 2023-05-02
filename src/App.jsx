import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css'
import './App.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rehfeld13.png',
      name: 'Rafael Rehfeld',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-29 07:30:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/andressavianab.png',
      name: 'Andressa Viana',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-28 20:00:00'),
  },
]

export function App(){
  return(
    <div>
      <Header />

      <div className="wrapper">
        <Sidebar />

        <main>
          {posts.map(element =>{
            return(
             <Post
             key={element.id}
             author={element.author}
             content={element.content}
             publishedAt={element.publishedAt}
             />
            )
          })}
        </main>
      </div>
    </div>
  )
}
