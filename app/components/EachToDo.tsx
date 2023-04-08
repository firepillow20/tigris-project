'use client';

import Image from 'next/image';
import React from 'react';
import { TodoItem } from '../../db/models/todoItems';

type Props = {
  TodoItem: TodoItem;
  deleteHandler: (id?: number) => void;
  updateHandler: (item: TodoItem) => void;
    artUpdateHandler: (item: TodoItem) => void;
    archetypeHandler: (item: TodoItem) => void;
    healthHandler: (item: TodoItem) => void;
    attackHandler: (item: TodoItem) => void;
    urlHandler: (item: TodoItem) => void;
    costHandler: (item: TodoItem) => void;
    effectsHandler: (item: TodoItem) => void;
};
const EachTodo = ({ TodoItem, deleteHandler, updateHandler, archetypeHandler, healthHandler, attackHandler, urlHandler, costHandler, effectsHandler, artUpdateHandler }: Props) => {
  return (
    <>
      <li className="each">
        <button
          className="eachButton"
          onClick={() => {

          }}
        >
          <span>{TodoItem.text}</span>
        </button>
        <Image
            src={TodoItem.url}
            width={112}
            height={156}
            alt="Card Image"
        />
        <button
          className="deleteBtn"
          onClick={() => {
              if (confirm("Are you sure you want to delete this card?") == true) {
                  deleteHandler(TodoItem.id);
              } else {
              }
          }}
        >
        <Image src="/delete.svg" width={24} height={24} alt="" />
        </button>
      </li>
    </>
  );
};

export default EachTodo;
