import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../api/axiosClient'
import Wrapper from '../assets/wrappers/MyCourses'
import Wrapper1 from '../assets/wrappers/CourseList'
import { Link } from 'react-router-dom'

import CourseCard from '../components/CourseCard'
import { useUserContext } from '../context/userContext/Usercontext'
import { useReactToPrint } from 'react-to-print'
import { Button, Modal, Table } from 'antd'

const MyCourses = () => {
  const { user } = useUserContext()
  const facturaRef = useRef()
  const [selectedBill, setselectedBill] = useState(null)

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

  useEffect(() => {
    getCursoEstudiante()
  }, [])
  const handlePrint = useReactToPrint({
    content: () => facturaRef.current,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const columns = [
    {
      title: 'Nombre de Curso',
      dataIndex: 'nombre_curso',
      key: 'nombre_curso',
    },

    {
      title: 'Categoria',
      dataIndex: 'categoria',
      key: 'categoria',
    },
    {
      title: 'Numero de Horas',
      dataIndex: 'nro_horas',
      key: 'nro_horas',
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
      render: (id, record) => (
        <div className='text-center'>
          <p>$/{record.precio}</p>
        </div>
      ),
    },
  ]

  const cartTotal = () => {
    let total_price = 0
    const data = myCourses.map((x) => {
      total_price += Number(x.precio)
    })
    return total_price
    console.log('TOTAL', total_price)
  }

  return (
    <Wrapper className='container'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Mis Cursos</h3>

        {Array.isArray(myCourses) && (
          <Button onClick={showModal}> Mis Reportes</Button>
        )}
      </div>

      <div className='grid-cards'>
        <Wrapper1>
          {Array.isArray(myCourses) &&
            myCourses.map((course) => {
              return (
                <div>
                  <Link to={`/estudiante/curso/${course.id_curso}`}>
                    <div className='container-img'>
                      <img className='course-card' src={course.img} alt='' />
                    </div>
                    <div>{course.nombre_curso}</div>
                  </Link>
                </div>
              )
            })}
          <Modal
            title='Reporte Curso Comprados'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Button onClick={handlePrint}>Imprimir</Button>
            <div ref={facturaRef}>
              <Table
                dataSource={myCourses}
                columns={columns}
                pagination={false}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: '5rem',
                }}
              >
                <p>Total $/ {cartTotal()} </p>
              </div>
            </div>
          </Modal>
        </Wrapper1>
      </div>
    </Wrapper>
  )
}

export default MyCourses
