import { Field, PrimaryKey, TigrisCollection, TigrisCollectionType, TigrisDataTypes } from '@tigrisdata/core';

@TigrisCollection('cardItems')
export class CardItem implements TigrisCollectionType {
	@PrimaryKey(TigrisDataTypes.INT32, { order: 1, autoGenerate: true })
	id!: number;

	@PrimaryKey({ order: 2})
	text!: string;

	@Field()
	completed!: boolean;

	@Field()
	art!: boolean;

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
}
