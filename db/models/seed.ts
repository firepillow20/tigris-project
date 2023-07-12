import { CardItem } from '../../db/models/cardItems';
import tigrisDb from '../../lib/tigris';
import { z } from 'zod';
import { Tigris } from '@tigrisdata/core';
import cards from '../../db/data/cards.json';

const tigrisClient = new Tigris();
const db = tigrisClient.getDatabase();
const collection = tigrisDb.getCollection<CardItem>(CardItem);

const ArtistSchema = z.object({
	id: z.number(),
	completed: z.boolean(),
	art: z.boolean(),
	status: z.string(),
	effects: z.string(),
	text: z.string(),
	archetype: z.string(),
	url: z.string(),
	attack: z.number(),
	health: z.number(),
	cost: z.string()
});

async function insertArtists() {
	const parsed: Array<CardItem> = cards.map((CardItem) => {
		return ArtistSchema.parse({
			text: CardItem.text,
			archetype: CardItem.archetype,
			url: CardItem.url,
			health: CardItem.health,
			attack: CardItem.attack,
			cost: CardItem.cost

		});
	});

	const inserted = await collection.insertMany(parsed);

	console.log(inserted);
}

insertArtists();