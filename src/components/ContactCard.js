import React from 'react'

export default function ContactCard({ data, deleteContact, editContact }) {
  let { id, name, email, empresa, cargo } = { ...data }
  return (
    <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-full">
      <span className="block text-2xl font-semibold">{name}</span>
      <span className="block text-base text-gray-500">{email}</span>
      <span className="block text-base text-gray-500">{empresa}</span>
      <span className="block text-base text-gray-500">{cargo}</span>
      <label className="block text-2xl font-semibold" onClick={() => deleteContact(id)}>Excluir</label>
      <label className="block text-2xl font-semibold" onClick={() => editContact(id)}>Editar</label>
    </div>
  )
}