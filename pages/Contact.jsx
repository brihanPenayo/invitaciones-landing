import React, { useState } from 'react'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'

const Contact = () => {
    const initialValues = {
        name: "",
        mail: "",
        text: ""
    }
    const [data, setData] = useState(initialValues)

    const handleEdit = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API}/send-mail`, data)
            res.status == 201 && setData(initialValues), toast.success("Muchas gracias, el correo se envió correctamente!", {
                style: {
                    border: '1px solid #3C09D0',
                    padding: '16px',
                    color: '#3C09D0',
                },
                iconTheme: {
                    primary: '#F99406',
                    secondary: '#3C09D0',
                },
            });
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <section id='contact' className='bg-amber-200 flex font-body flex-col gap-4 p-4 place-items-center'>
            <Toaster />
            <h1>Contactame:</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[50%]'>
                <input className='p-2' type="text" autoComplete='off' value={data.name}
                    onChange={handleEdit} placeholder='Ingrese su nombre' name="name" required />
                <input className='p-2' type="email" autoComplete='off' value={data.mail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={handleEdit} placeholder='Ingrese su E-mail' name="mail" required />
                <textarea className='p-2' name="text" minLength={3} rows={5} value={data.text}
                    onChange={handleEdit} placeholder="Cuentame!" />
                <button className='p-4 bg-amber-300' type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact;