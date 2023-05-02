
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import  ptBR from 'date-fns/locale/pt-BR'

import './Post.css'


export function Post({ author, publishedAt, content }){

  const [comments, setComments] = useState([
   'Post muito bacana, hein?',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(e){
    e.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange(e){
    setNewCommentText(e.target.value)
  }

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
            return <p key={element.content}>{element.content}</p>
          } else if(element.type === 'link'){
            return <p key={element.content}><a href="#">{element.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className='commentForm'>
        <strong>Deixe seu feedback</strong>

        <textarea
         placeholder='Deixe um comentário'
         value={newCommentText}
         onChange={handleNewCommentChange}
         />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className='commentList'>
        {comments.map(element =>{
          return <Comment key={element} content={element} />
        })}
      </div>



    </article>
  )
}