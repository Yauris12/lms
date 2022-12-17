import React, { useState, useEffect, createElement } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import {
  AiFillPlayCircle,
  AiOutlineMinusCircle,
  AiFillCheckCircle,
} from 'react-icons/ai'
import { Button, Menu, Avatar } from 'antd'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { BiMinusCircle } from 'react-icons/bi'
import axiosClient from '../api/axiosClient'
const { Item } = Menu

const CouseLesson = () => {
  const { id_curso } = useParams()
  const [clicked, setClicked] = useState(-1)
  const [collapsed, setCollapsed] = useState(false)
  const [loading, setLoading] = useState(false)

  const [details, setdetails] = useState([])
  const [detailsAlt, setdetailsAlt] = useState([])
  const [completedLessons, setCompletedLessons] = useState([])
  // force state update
  const [updateState, setUpdateState] = useState(false)
  console.log(clicked)

  console.log('dd', detailsAlt)
  const getListContent = async () => {
    try {
      const data = await axiosClient.post('/curso/detalle', {
        id_curso,
      })
      console.log('details', data)

      setdetails(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getListContentAlt = async () => {
    try {
      const data = await axiosClient.post('/curso/detalle_curso', {
        id_curso,
      })

      const result = data.find((el) => el.id_curso_detalle === clicked)
      // setdetailsAlt(data)
      setdetailsAlt(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getListContent()
  }, [])
  useEffect(() => {
    getListContentAlt()
  }, [clicked])
  const markCompleted = async () => {
    // const { data } = await axios.post(`/api/mark-completed`, {
    //   courseId: course._id,
    //   lessonId: course.lessons[clicked]._id,
    // })
    // console.log(data)
    // setCompletedLessons([...completedLessons, course.lessons[clicked]._id])
  }

  const markIncompleted = async () => {
    // try {
    //   const { data } = await axios.post(`/api/mark-incomplete`, {
    //     courseId: course._id,
    //     lessonId: course.lessons[clicked]._id,
    //   })
    //   console.log(data)
    //   const all = completedLessons
    //   console.log('ALL => ', all)
    //   const index = all.indexOf(course.lessons[clicked]._id)
    //   if (index > -1) {
    //     all.splice(index, 1)
    //     console.log('ALL WITHOUT REMOVED => ', all)
    //     setCompletedLessons(all)
    //     setUpdateState(!updateState)
    //   }
    // } catch (err) {
    //   console.log(err)
    // }
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 320 }}>
        <Button
          onClick={() => setCollapsed(!collapsed)}
          className='text-primary mt-1 btn-block mb-2'
        >
          {createElement(collapsed ? AiOutlineMinusCircle : BiMinusCircle)}{' '}
          {!collapsed && 'Lessons'}
        </Button>
        <Menu
          defaultSelectedKeys={[clicked]}
          inlineCollapsed={collapsed}
          style={{ height: '80vh', overflow: 'scroll' }}
        >
          <div className='lessons'>
            <div className='lession-container'>
              {details.map((detail, index) => {
                return (
                  <>
                    <li
                      className='header-lession'
                      style={{ marginTop: '20px' }}
                      key={index}
                    >
                      {detail[0].nombre_curso}
                    </li>

                    <ul className='content-lession'>
                      {detail.slice(1).map((content, i) => {
                        return (
                          <div
                            className='flex-lession'
                            style={{ marginTop: '20px' }}
                            onClick={() => setClicked(content.id_curso_detalle)}
                          >
                            <li className='flex-title'>
                              <p>{content.nombre_seccion}</p>
                            </li>
                          </div>
                        )
                      })}
                    </ul>
                  </>
                )
              })}
            </div>
          </div>
        </Menu>
      </div>

      <div className='col' style={{ width: '100%' }}>
        {clicked !== -1 ? (
          <>
            {/* <div className='col alert alert-primary square'>
              <b>{details[clicked].nombre_curso}</b>
              {completedLessons.includes(details[clicked]._id) ? (
                <span className='float-right pointer' onClick={markIncompleted}>
                  Mark as incomplete
                </span>
              ) : (
                <span className='float-right pointer' onClick={markCompleted}>
                  Mark as completed
                </span>
              )}
            </div>


            <ReactMarkdown
              source={details[clicked].content}
              className='single-post'
            /> */}

            <>
              <div className='wrapper'>
                <ReactPlayer
                  className='player'
                  url={detailsAlt?.url_video}
                  width='100%'
                  height='85vh'
                  controls
                  onEnded={() => markCompleted()}
                />
              </div>
            </>
          </>
        ) : (
          <div className='d-flex justify-content-center p-5'>
            <div className='text-center p-5'>
              <AiFillPlayCircle className='text-primary display-1 p-5' />
              <p className='lead'>Clcik on the lessons to start learning</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CouseLesson
