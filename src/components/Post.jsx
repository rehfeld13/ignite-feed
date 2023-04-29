
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { format, formatDistanceToNow } from 'date-fns'
import  ptBR from 'date-fns/locale/pt-BR'

import './Post.css'

export function Post({ author, publishedAt, content }){
  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true,
  })

  return(
    <article className='post'>

      <header>
        <div className='author'>
          <Avatar src={author.avatarUrl}/>
          <div className='authorInfo'>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="content">
        {content.map(element =>{
          if(element.type === 'paragraph'){
            return <p>{element.content}</p>
          } else if(element.type === 'link'){
            return <p><a href="#">{element.content}</a></p>
          }
        })}
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