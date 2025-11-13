export type Course = 'Starter' | 'Main' | 'Dessert';

export type Dish = {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number;
};
