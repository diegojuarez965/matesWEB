type Mate = {
  id: string
  color: string
  material: string
  precio: number
  nombre: string  
  imagen: string      
}
const imageDir ='http://localhost:4000/images/'

const mates: Mate[] = [
  { id: '0', color: 'amarillo', material: 'acero', precio: 30000, nombre: 'mate de acero amarillo', imagen: imageDir + 'mates/acero/m_a_amarillo.png' },
  { id: '1', color: 'blanco', material: 'acero', precio: 30000, nombre: 'mate de acero blanco', imagen: imageDir + 'mates/acero/m_a_blanco.png' },
  { id: '3', color: 'marron', material: 'acero', precio: 30000, nombre: 'mate de acero marron', imagen: imageDir + 'mates/acero/m_a_marron.png' },
  { id: '4', color: 'violeta', material: 'acero', precio: 30000, nombre: 'mate de acero violeta', imagen: imageDir + 'mates/acero/m_a_violeta.png' },
  { id: '5', color: 'naranja', material: 'acero', precio: 30000, nombre: 'mate de acero naranja', imagen: imageDir + 'mates/acero/m_a_naranja.png' },
  { id: '6', color: 'negro', material: 'acero', precio: 30000, nombre: 'mate de acero negro', imagen: imageDir + 'mates/acero/m_a_negro.png' },
  { id: '7', color: 'rojo', material: 'acero', precio: 30000, nombre: 'mate de acero rojo', imagen: imageDir + 'mates/acero/m_a_rojo.png' },  
  { id: '8', color: 'rosa', material: 'acero', precio: 30000, nombre: 'mate de acero rosa', imagen: imageDir + 'mates/acero/m_a_rosa.png' },  
  { id: '9', color: 'verde', material: 'acero', precio: 30000, nombre: 'mate de acero verde', imagen: imageDir + 'mates/acero/m_a_verde.png' },
  { id: '10', color: 'amarillo', material: 'plastico', precio: 10000, nombre: 'mate de plastico amarillo', imagen: imageDir + 'mates/plastico/m_p_amarillo.png' },
  { id: '11', color: 'azul', material: 'plastico', precio: 10000, nombre: 'mate de plastico azul', imagen: imageDir + 'mates/plastico/m_p_azul.png' },
  { id: '12', color: 'beige', material: 'plastico', precio: 10000, nombre: 'mate de plastico beige', imagen: imageDir + 'mates/plastico/m_p_beige.png' },
  { id: '13', color: 'celeste', material: 'plastico', precio: 10000, nombre: 'mate de plastico celeste', imagen: imageDir + 'mates/plastico/m_p_celeste.png' },
  { id: '14', color: 'marron', material: 'plastico', precio: 10000, nombre: 'mate de plastico marron', imagen: imageDir + 'mates/plastico/m_p_marron.png' },
  { id: '15', color: 'naranja', material: 'plastico', precio: 10000, nombre: 'mate de plastico naranja', imagen: imageDir + 'mates/plastico/m_p_naranja.png' },
  { id: '16', color: 'negro', material: 'plastico', precio: 10000, nombre: 'mate de plastico negro', imagen: imageDir + 'mates/plastico/m_p_negro.png' },
  { id: '17', color: 'rojo', material: 'plastico', precio: 10000, nombre: 'mate de plastico rojo', imagen: imageDir + 'mates/plastico/m_p_rojo.png' },
  { id: '18', color: 'verde', material: 'plastico', precio: 10000, nombre: 'mate de plastico verde', imagen: imageDir + 'mates/plastico/m_p_verde.png' },
  { id: '19', color: 'viooleta', material: 'plastico', precio: 10000, nombre: 'mate de plastico violeta', imagen: imageDir + 'mates/plastico/m_p_violeta.png' },
  { id: '20', color: 'marron', material: 'madera', precio: 25000, nombre: 'mate de madera simple', imagen: imageDir + 'mates/madera/m_m_simple.png' },
  { id: '21', color: 'marron', material: 'madera', precio: 25000, nombre: 'mate de madera decorado', imagen: imageDir + 'mates/madera/m_m_decorado.png' },
  { id: '22', color: 'beige', material: 'ceramica', precio: 35000, nombre: 'mate de ceramica simple', imagen: imageDir + 'mates/ceramica/m_c_simple.png' },
  { id: '23', color: 'beige', material: 'ceramica', precio: 35000, nombre: 'mate de ceramica decorado', imagen: imageDir + 'mates/ceramica/m_c_decorado.png' },
  { id: '24', color: 'naranja', material: 'calabaza', precio: 50000, nombre: 'mate de calabaza simple', imagen: imageDir + 'mates/calabaza/m_ca_simple.png' },
  { id: '25', color: 'naranja', material: 'calabaza', precio: 50000, nombre: 'mate de calabaza decorado', imagen: imageDir + 'mates/calabaza/m_ca_decorado.png' },

]

export default mates
