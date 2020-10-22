import React, { useState, useEffect } from 'react'


export default function ContactForm({ save, isCreate, saveEditedContact, list }) {
  const initialState = { name: '', email: '', empresa: '', cargo: '' }
  const [data, setData] = useState(initialState)

  useEffect(() => {
    if (list && !isCreate)
      setData({ id: list.id, name: list.name, email: list.email, empresa: list.empresa, cargo: list.cargo })
  }, [isCreate])

  function getId() {
    return (5999 - Math.round(Math.random() * 392))
  }

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateContact(data) {
    if (data.name === '') {
      alert('Preencha o campo "Nome".')
      return false
    }

    if (data.empresa === '') {
      alert('Preencha o campo "Empresa".')
      return false
    }

    if (data.email !== '') {
      if (!validateEmail(data.email)) {
        alert('Informe um email valido')
        return false
      }
    }

    return true
  }

  const changeField = (field) => {
    const change = (evt) => setData({ ...data, [field]: evt.target.value })
    return change
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (validateContact(data, setData)) {
      if (data.id)
        save({ ...data })
      else
        save({ ...data, id: getId() })

      setData({ name: '', email: '', empresa: '', cargo: '' })
    }
  }

  return (
    <div className={"p-4 border-b-2 border-gray-600"}>
      <h1 className={"bold"}> {
        isCreate ?
          "Adicionar novo contato"
          : "Editar contado"
      }</h1>

      <form onSubmit={handleSubmit} className="mt-3 p-2 flex flex-col">
        <div className="flex flex-row items-stretch mb-2 justify-between">
          <label className="text-lg">Nome*</label>
          <input type="text" className="p-2 rounded text-gray-600 text-lg"
            maxLength={35} onChange={changeField('name')} value={data.name} />
        </div>

        <div className="flex flex-row mb-2 items-stretch justify-between">
          <label className="text-lg">E-mail</label>
          <input type="text" className="p-2 rounded text-gray-600 text-lg "
            maxLength={50} onChange={changeField('email')} value={data.email} />
        </div>

        <div className="flex flex-row items-stretch mb-2 justify-between">
          <label className="text-lg">Empresa*</label>
          <input type="text" className="p-2 rounded text-gray-600 text-lg"
            maxLength={35} onChange={changeField('empresa')} value={data.empresa} />
        </div>

        <div className="flex flex-row items-stretch mb-2 justify-between">
          <label className="text-lg">Cargo</label>
          <input type="text" className="p-2 rounded text-gray-600 text-lg"
            maxLength={35} onChange={changeField('cargo')} value={data.cargo} />
        </div>

        <div>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" type="submit">
            {
              isCreate ?
                "Criar contato"
                : "Salvar edição"
            }
          </button>
        </div>
      </form>
    </div>
  )
}