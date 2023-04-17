'use client';

import Image from 'next/image';
import React from 'react';
import { Card } from '../../db/models/cards';

type Props = {
  Card: Card;
  deleteHandler: (id?: number) => void;
  updateHandler: (item: Card) => void;
    artUpdateHandler: (item: Card) => void;
    archetypeHandler: (item: Card) => void;
    healthHandler: (item: Card) => void;
    attackHandler: (item: Card) => void;
    urlHandler: (item: Card) => void;
    costHandler: (item: Card) => void;
    effectsHandler: (item: Card) => void;
};
const EachTodo = ({ Card, deleteHandler, updateHandler, archetypeHandler, healthHandler, attackHandler, urlHandler, costHandler, effectsHandler, artUpdateHandler }: Props) => {
  return (
    <>
      <li className="each">
        <button
          className="eachButton"
          onClick={() => {

          }}
        >
          <span>{Card.text}</span>
        </button>
        <Image
            src={Card.url}
            width={112}
            height={156}
            alt="Card Image"
        />
        <button
          className="deleteBtn"
          onClick={() => {
              if (confirm("Are you sure you want to delete this card?") == true) {
                  deleteHandler(Card.id);
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
