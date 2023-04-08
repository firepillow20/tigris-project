'use client';

import Image from 'next/image';
import React from 'react';
import { CardItem } from '../../db/models/cardItems';

type Props = {
  CardItem: CardItem;
  deleteHandler: (id?: number) => void;
  updateHandler: (item: CardItem) => void;
    artUpdateHandler: (item: CardItem) => void;
    archetypeHandler: (item: CardItem) => void;
    healthHandler: (item: CardItem) => void;
    attackHandler: (item: CardItem) => void;
    urlHandler: (item: CardItem) => void;
    costHandler: (item: CardItem) => void;
    effectsHandler: (item: CardItem) => void;
};
const EachTodo = ({ CardItem, deleteHandler, updateHandler, archetypeHandler, healthHandler, attackHandler, urlHandler, costHandler, effectsHandler, artUpdateHandler }: Props) => {
  return (
    <>
      <li className="each">
        <button
          className="eachButton"
          onClick={() => {
              deleteHandler(CardItem.id);
          }}
        >
          <Image src="/delete.svg" width={24} height={24} alt="" />
          <span>{CardItem.text}</span>
        </button>
        <Image
            src={CardItem.url}
            width={112}
            height={156}
            alt="Card Image"
        />
      </li>
    </>
  );
};

export default EachTodo;
