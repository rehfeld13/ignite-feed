
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import './Post.css'

export function Post(){
  return(
    <article className='post'>

      <header>
        <div className='author'>
          <Avatar src="https://github.com/andressavianab.png"/>
          <div className='authorInfo'>
            <strong>Andressa Viana</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='8 de maio as 00:13' dateTime='2022-05-11 00:13:30'>Publicado há 1h</time>
      </header>

      <div className="content">
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p> <a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className='commentForm'>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'/>

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className='commentList'>
        <Comment />
        <Comment />
        <Comment />
      </div>



    </article>
  )
}