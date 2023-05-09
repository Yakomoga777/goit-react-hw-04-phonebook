import { ContactItem } from 'components/ContactList/ContactItem';
import React from 'react';
// import { nanoid } from 'nanoid';

export const ContactList = ({ items, handleDelete }) => {
  console.log(items);
  return (
    <ul>
      {items.map(item => {
        const { id } = item;
        return (
          <ContactItem
            key={id}
            id={item.id}
            name={item.name}
            number={item.number}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};
