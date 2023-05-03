
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import  ptBR from 'date-fns/locale/pt-BR'

import './Post.css'


export function Post({ author, publishedAt, content }){

  // Armazena e cria os nossos comentários
  const [comments, setComments] = useState([
   'Post muito bacana, hein?',
  ])

  //Armazena em tempo real tudo que é digitado na TextArea
  const [newCommentText, setNewCommentText] = useState('')


  // API de formatação de hora
  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true,
  })

// Função de onSubmit do form para setar um novo comentário, usando a variavel NewCommentText
  function handleCreateNewComment(e){
    e.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  // Função de onChange que usa a função setNewCommentText 
  function handleNewCommentChange(e){
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  function handleNewCommentInvalid(e){
   e.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete){

    const commentsWithoutDeletedOne = comments.filter(comment =>{
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

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
         onInvalid={handleNewCommentInvalid}
         required
         />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className='commentList'>
        {comments.map(element =>{
          return (
            <Comment
               key={element}
               content={element}
               onDeleteComment={deleteComment}
            />
          )
        })}
      </div>



    </article>
  )
}