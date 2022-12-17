import React, { useEffect, useState } from 'react'
import axiosClient from '../api/axiosClient'
import { useUserContext } from '../context/userContext/Usercontext'

const ReporteCursos = ({ facturaRef }) => {
  const { user } = useUserContext()

  const [myCourses, setMyCourses] = useState([])

  const getCursoEstudiante = async () => {
    try {
      const data = await axiosClient.post('/curso/estudiante', {
        id_usuario: user.id_usuario,
      })
      setMyCourses(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {}, [])

  return <div ref={facturaRef}>ReporteCursos11</div>
}

export default ReporteCursos
