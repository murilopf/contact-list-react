import React, { useState } from 'react'
import ContactCreate from './ContactCreate'
import ContactCard from './ContactCard'
import { getContacts } from './data'

export default function ContactList() {
  const [list, setList] = useState(getContacts())
  const [isCreate, setIsCreate] = useState(true)
  const [positionEdit, setPositionEdit] = useState(null)

  const getIndexRemove = (id) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return i
      }
    }
  }

  const addItem = (item) => setList([...list, item])

  const removeItem = (id) => {
    const newList = [...list]
    newList.splice(getIndexRemove(id), 1);
    setList(newList);
  }

  const showEdit = (id) => {
    window.scrollTo(0, 0)
    setPositionEdit(getIndexRemove(id));
    setIsCreate(false);
  }

  const saveEditedContact = (item) => {
    const newList = [...list];
    getIndexRemove(item.id);
    newList[getIndexRemove(item.id)] = item;
    setList(newList);
    setIsCreate(true);
  }

  const cards = list.map(contact => (
    <ContactCard
      key={contact.id}
      data={contact}
      deleteContact={removeItem}
      editContact={showEdit}
    />
  ))

  return (
    <div className="w-6/12">
      <ContactCreate
        save={isCreate ? addItem : saveEditedContact}
        isCreate={isCreate}
        list={list[positionEdit]}
      />
      {
        cards.length > 0 ?
          <div className="mt-4">
            <h1 className="bold"> Lista de contatos </h1>
            <div className="mt-2">
              {cards}
            </div>
          </div>
          : <h1 className="mt-2">Não há contatos</h1>
      }
    </div>
  )
}