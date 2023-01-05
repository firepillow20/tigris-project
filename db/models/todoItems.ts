import { Field, PrimaryKey, TigrisCollection, TigrisCollectionType, TigrisDataTypes } from '@tigrisdata/core';

@TigrisCollection('todoItems')
export class TodoItem implements TigrisCollectionType {
  @PrimaryKey(TigrisDataTypes.INT32, { order: 1, autoGenerate: true })
  id!: number;

  @Field()
  text!: string;

<<<<<<< HEAD
  /*@Field()
  art!: boolean;*

  @Field()
    completed!: boolean;

=======
>>>>>>> parent of 82cf3c4 (Update todoItems.ts)
  /*@Field()
  art!: boolean;*/

  @Field()
  completed!: boolean;
}
