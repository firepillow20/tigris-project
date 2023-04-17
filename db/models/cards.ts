import { Field, PrimaryKey, SearchField, TigrisCollection, TigrisSearchIndex, TigrisCollectionType, TigrisDataTypes } from '@tigrisdata/core';

@TigrisSearchIndex("cards")
export class Card implements TigrisSearchIndex{
	@PrimaryKey(TigrisDataTypes.INT32, { order: 1, autoGenerate: true })
	id!: number;

	@SearchField({ sort: true })
	@PrimaryKey({ order: 2 })
	text!: string;

	@Field()
	completed!: boolean;

	@Field()
	art!: boolean;

	@SearchField({ sort: true })
	@Field()
	archetype!: string;

	@Field()
	status!: string;

	@Field()
	url!: string;

	@Field()
	health!: number;

	@Field()
	attack!: number;

	@Field()
	cost!: string;

	@Field()
	effects!: string;
}