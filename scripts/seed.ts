import { CardItem } from '../db/models/cardItems';
import tigrisDb from '../lib/tigris';
import cards from './data/cards.json';

async function main() {
  const parsed = cards.map(item => {
    return item as CardItem;
  });

  const collection = tigrisDb.getCollection<CardItem>('cardItems');
  const inserted = await collection.insertMany(parsed);

  console.log(inserted);
}

main()
  .then(async () => {
    process.exit(0);
  })
  .catch(async e => {
    console.error(e);
    process.exit(1);
  });
