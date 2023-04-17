import { NextApiRequest, NextApiResponse } from 'next';
import { CardItem } from '../../../db/models/cardItems';
import tigrisDb from '../../../lib/tigris';

type Data = {
    result?: Array<CardItem>;
    error?: string;
};

// GET /api/items/search?q=searchQ -- searches for items matching text `searchQ`
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const query = req.query['q'];
    if (query === undefined) {
        res.status(400).json({ error: 'No search query found in request' });
        return;
    }
    try {
        const itemsCollection = tigrisDb.getCollection<CardItem>(CardItem);
        const searchResult = await itemsCollection.search({ q: query as string });
        const items = new Array<CardItem>();
        for (const res of searchResult) {
            res.hits.forEach(hit => items.push(hit.document));
        }
        res.status(200).json({ result: items });
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
}
