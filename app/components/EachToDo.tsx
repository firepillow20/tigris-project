'use client';

import Image from 'next/image';
import React from 'react';
import { TodoItem } from '../../db/models/todoItems';

type Props = {
  toDoItem: TodoItem;
  deleteHandler: (id?: number) => void;
  updateHandler: (item: TodoItem) => void;
  artUpdateHandler: (item: TodoItem) => void;
  archetypeHandler: (item: TodoItem) => void;
  healthHandler: (item: TodoItem) => void;
  attackHandler: (item: TodoItem) => void;
  urlHandler: (item: TodoItem) => void;
};
const EachTodo = ({ toDoItem, deleteHandler, updateHandler, archetypeHandler, healthHandler, attackHandler, urlHandler, artUpdateHandler }: Props) => {
  return (
    <>
      <li className="each">
        <button
          className="eachButton"
          onClick={() => {
            updateHandler(toDoItem);
          }}
        >
          <Image
            src={toDoItem.completed ? '/circle-checked.svg' : '/circle.svg'}
            width={20}
            height={20}
            alt="Check Image"
          />
          <span style={toDoItem.completed ? { textDecoration: 'line-through' } : {}}>{toDoItem.text}</span>
        </button>
        <button
          className="artButton"
          onClick={() => {
            artUpdateHandler(toDoItem);
          }}
        >
          <Image
            src={toDoItem.art ? '/circle-checked.svg' : '/circle.svg'}
            width={20}
            height={20}
            alt="Check Image"
          />
        </button>
        <button
          className="deleteBtn"
          onClick={() => {
            deleteHandler(toDoItem.id);
          }}
        >
          <Image src="/delete.svg" width={24} height={24} alt="Check Image" />
        </button>
        <Image
            src={toDoItem.url}
            width={112}
            height={156}
        />
      </li>
    </>
  );
};

export default EachTodo;
