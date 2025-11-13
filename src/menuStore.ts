import { Dish, Course } from './types';

// Initial menu items (array) - chef can add/remove more
let menuItems: Dish[] = [
  {
    id: 'soup1',
    name: 'Roasted Tomato Soup',
    description: 'Slow-roasted tomatoes with basil oil and toasted ciabatta.',
    course: 'Starter',
    price: 65,
  },
  {
    id: 'salad1',
    name: 'Goat\'s Cheese Salad',
    description: 'Mixed greens, caramelised nuts, beetroot and soft goat\'s cheese.',
    course: 'Starter',
    price: 80,
  },
  {
    id: 'steak1',
    name: 'Fillet Steak Diane',
    description: 'Grilled beef fillet with brandy-mushroom Diane sauce.',
    course: 'Main',
    price: 260,
  },
  {
    id: 'fish1',
    name: 'Lemon Butter Kingklip',
    description: 'Pan-seared kingklip with lemon butter and herb mash.',
    course: 'Main',
    price: 230,
  },
  {
    id: 'dessert1',
    name: 'Chocolate Fondant',
    description: 'Warm chocolate cake with molten centre and vanilla ice cream.',
    course: 'Dessert',
    price: 95,
  },
  {
    id: 'dessert2',
    name: 'Lemon Panna Cotta',
    description: 'Silky lemon panna cotta with berry coulis.',
    course: 'Dessert',
    price: 75,
  },
];

// Helper: generate unique id
function generateId(): string {
  return Math.random().toString(36).slice(2);
}

// Add dish with validation + duplicate + unrealistic price guard
export function addDish(
  name: string,
  description: string,
  course: Course,
  priceInput: string
): { ok: boolean; error?: string } {
  const trimmedName = name.trim();
  const numeric = Number(priceInput);

  if (!trimmedName) return { ok: false, error: 'Dish name is required.' };
  if (!priceInput.trim() || Number.isNaN(numeric) || numeric <= 0)
    return { ok: false, error: 'Enter a valid price greater than 0.' };
  if (numeric > 9999)
    return { ok: false, error: 'Price is unrealistically high.' };

  // Duplicate: same name + course
  for (const dish of menuItems) {
    if (
      dish.course === course &&
      dish.name.toLowerCase() === trimmedName.toLowerCase()
    ) {
      return {
        ok: false,
        error: 'This dish already exists for this course.',
      };
    }
  }

  const newDish: Dish = {
    id: generateId(),
    name: trimmedName,
    description: description.trim(),
    course,
    price: parseFloat(numeric.toFixed(2)),
  };

  menuItems = [newDish, ...menuItems];
  return { ok: true };
}

// Remove dish by id
export function removeDish(id: string): void {
  const next: Dish[] = [];
  for (const dish of menuItems) {
    if (dish.id !== id) next.push(dish);
  }
  menuItems = next;
}

// Get full menu
export function getMenu(): Dish[] {
  return menuItems;
}

// Filter by course (guest screen)
export function getByCourse(course: Course): Dish[] {
  const result: Dish[] = [];
  for (const dish of menuItems) {
    if (dish.course === course) result.push(dish);
  }
  return result;
}

// Average prices per course (uses loops)
export function getAveragePrices() {
  const courses: Course[] = ['Starter', 'Main', 'Dessert'];
  const averages: Record<Course, number> = {
    Starter: 0,
    Main: 0,
    Dessert: 0,
  };

  for (const course of courses) {
    let sum = 0;
    let count = 0;
    let i = 0;

    // while loop to satisfy learning outcome
    while (i < menuItems.length) {
      const dish = menuItems[i];
      if (dish.course === course) {
        sum += dish.price;
        count++;
      }
      i++;
    }

    averages[course] =
      count > 0 ? parseFloat((sum / count).toFixed(2)) : 0;
  }

  return averages;
}
