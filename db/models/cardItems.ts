import {
  Field,
  PrimaryKey,
  SearchField,
  TigrisCollection,
  TigrisCollectionType,
  TigrisDataTypes
} from '@tigrisdata/core';

@TigrisCollection('cardItems')
export class CardItem implements TigrisCollectionType {
  @PrimaryKey(TigrisDataTypes.INT32, { order: 1, autoGenerate: true })
  id!: number;

  @SearchField()
  @PrimaryKey({ order: 2 })
  text!: string;

  @Field()
  completed!: boolean;

  @Field()
  art!: boolean;

  @SearchField({ sort: true, facet: true })
  @Field()
  archetype!: string;

  @SearchField({ sort: true, facet: true })
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

  @SearchField({ sort: true, facet: true })
  @Field()
  effects!: string;
}
