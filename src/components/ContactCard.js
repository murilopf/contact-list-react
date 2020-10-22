import React from 'react'

export default function ContactCard({ data, deleteContact, editContact }) {
  let { id, name, email, empresa, cargo } = { ...data }
  return (
    <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-full">
      <span className="block text-2xl font-semibold">{name}</span>
      <span className="block text-base text-gray-500">{email}</span>
      <span className="block text-base text-gray-500">{empresa}</span>
      <span className="block text-base text-gray-500">{cargo}</span>
      <div class="mt-3 bg-gray-200">
        <label className="inline bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-4 rounded" onClick={() => editContact(id)}>Editar</label>
        <label className="inline bg-red-700 hover:bg-red-800 text-white py-1 px-4 rounded ml-3" onClick={() => deleteContact(id)}>Excluir</label>
      </div>
    </div>
  )
}

