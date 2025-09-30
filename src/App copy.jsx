import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [profile, setProfile] = useState({
    namaku : 'Joko',
    umurku : 20,
    alamatku : 'Jakarta'
  })

  const [hobi, setHobi] = useState(['Membaca', 'Menulis', 'Coding'])  
  const [form,setForm] = useState({
    nama : '',
    umur : '',
    alamat : ''
  })

  function handleChange(e){
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  } 

  const [todo, setTodo] = useState([])
  const [input, setInput] = useState('')

  function addTodo(){
    if (input.trim() !== ''){
      setTodo([...todo, input])
      setInput('')
    }
  }

  return (
    <>
      <div>
        <p>nama : {profile.namaku}</p>
        <p> umur : {profile.umurku}</p>
        <p> alamat : {profile.alamatku}</p> 
        <ul>
          {hobi.map((h,i) =>(
            <li key={i}>{h}</li>
          ))}
        </ul>

      <button onClick={() => setProfile ({ ...profile, namaku:"Ronald"})}>Ubah Nama</button>
      <button onClick={() => setProfile ({ ...profile, umurku:24})}>Ubah umur</button>
      <button onClick={() => setProfile ({ ...profile, alamatku:"Bandung"})}>Ubah Alamat</button>
      <button onClick={() => setProfile ({ ...profile, namaku:"Budi", umurku:25, alamatku:"Surabaya"})}>Ubah Semua</button>
      <button onClick={() => setHobi([...hobi, 'Berenang'])}>Tambah Hobi</button>
      <button onClick={() => setHobi(hobi.filter((h) => h !== 'Menulis'))}>Hapus Hobi</button>

      <input
      type='text'
      name='nama'
      placeholder='nama'
      value={form.nama}
      onChange={handleChange}/>
      <input
      type='text'
      name='umur'
      placeholder='umur'
      value={form.umur}
      onChange={handleChange}/>
      <input
      type='text'
      name='alamat'
      placeholder='alamat'
      value={form.alamat}
      onChange={handleChange}/>
      <p>nama : {form.nama}</p>
      <p>umur : {form.umur}</p>
      <p>alamat : {form.alamat}</p>
      <button onClick={() => setForm({nama:'', umur:'', alamat:''})}>Reset</button>

        <h1>Daftar Todo</h1>

        <input 
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Tambah Todo'/>

        <button onClick={addTodo}>Tambah</button>

          <ul>
            {todo.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
      </div>

    </>
  )
}

export default App
