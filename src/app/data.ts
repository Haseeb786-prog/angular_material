export interface FoodNode {
  id: number; // Assuming id is of type number
  name: string;
  children?: FoodNode[];
  editing?: boolean;
  expanded?: boolean;
}
export const TREE_DATA: FoodNode[] = [
  {
    id: 1,
    name: 'Fruit',
    children: [{ id: 2, name: 'Apple' }, { id: 3, name: 'Banana' }, { id: 4, name: 'Fruit loops' }],
  },
  {
    id: 5,
    name: 'Vegetables',
    children: [
      {
        id: 6,
        name: 'Green',
        children: [{ id: 7, name: 'Broccoli' }, { id: 8, name: 'Brussels sprouts' }],
      },
      {
        id: 9,
        name: 'Orange',
        children: [{ id: 10, name: 'Pumpkins' }, { id: 11, name: 'Carrots' }],
      },
    ],
  },
];
