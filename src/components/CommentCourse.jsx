import React from 'react'
import Starts from './Starts'

const CommentCourse = () => {
  return (
    <div className='container comment-course'>
      <h3>Comentarios de los estudiantes</h3>

      <div className='flex-comment'>
        <div>
          <div className='wrapper-perfil'>R</div>
        </div>
        <div className=''>
          <p>ruben</p>
          <div className='container-start'>
            <Starts stars={4} /> HACE 5 MESES
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a eum
            delectus alias sint perspiciatis suscipit ad unde, magnam, enim
            dolorem ipsam tempora quibusdam consequuntur reprehenderit corrupti
            totam harum eaque.
          </p>
        </div>
      </div>
      <div className='flex-comment'>
        <div>
          <div className='wrapper-perfil'>R</div>
        </div>
        <div className=''>
          <p>ruben</p>
          <div className='container-start'>
            <Starts stars={4} /> HACE 5 MESES
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a eum
            delectus alias sint perspiciatis suscipit ad unde, magnam, enim
            dolorem ipsam tempora quibusdam consequuntur reprehenderit corrupti
            totam harum eaque.
          </p>
        </div>
      </div>
      <div className='flex-comment'>
        <div>
          <div className='wrapper-perfil'>R</div>
        </div>
        <div className=''>
          <p>ruben</p>
          <div className='container-start'>
            <Starts stars={4} /> HACE 5 MESES
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a eum
            delectus alias sint perspiciatis suscipit ad unde, magnam, enim
            dolorem ipsam tempora quibusdam consequuntur reprehenderit corrupti
            totam harum eaque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommentCourse
