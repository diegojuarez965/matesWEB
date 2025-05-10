import express from 'express'
import cors from 'cors'
import path from 'path'
import mateRouter from './routes/mate.route'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/mates', mateRouter)

export default app

/*Test obtener mate por nombre
fetch('http://localhost:4000/mates?nombre=amarillo&calidad=plastico')  
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error(error));
*/

/*
type Mate = {
  id: string
  producto: string
  calidad: string
  nombre: string  
  imagen: string      
}
*/

/*Test crear mate
const nuevoMate : Mate = {
  id: '',
  producto: 'mate',
  calidad: 'acero',
  nombre: 'mate de acero multicolor',
  imagen: ''
}

fetch('http://localhost:4000/mates', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(nuevoMate)
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error(error));
*/

/*Test actualizar mate
const actualizarMate : Mate = {
  id: '0',
  producto: 'mate',
  calidad: 'premium',
  nombre: 'mate premium amarillo',
  imagen: '/images/mates/acero/m_p_amarillo.png'
}

fetch('http://localhost:4000/mates', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(actualizarMate)
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error(error));

/*Test eliminar mate
fetch(`http://localhost:4000/mates/5`, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error(error));
*/

