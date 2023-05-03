import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import ('./Comment.css')

export function Comment({ content, onDeleteComment }){

function handleDeleteComment(){
  onDeleteComment(content)
}


  return(
    <div className='comment'>
      <Avatar hasBorder={false} src="https://github.com/rehfeld13.png" />

      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className='authorAndTime'>
              <strong>Rafael Rehfeld</strong>
              <time title='8 de maio as 00:13' dateTime='2022-05-11 00:13:30'>Publicado há 1h</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}