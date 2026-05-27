const defaultMenu = [
  { id: 1, name: "Jollof Rice Combo", price: 2500, category: "Meals", available: true },
  { id: 2, name: "Fried Rice & Chicken", price: 3000, category: "Meals", available: true },
  { id: 3, name: "Asun (Spicy Goat Meat)", price: 2000, category: "Sides", available: true },
  { id: 4, name: "Chilled Soft Drink", price: 500, category: "Drinks", available: true }
];

const getMenu = () => {
  const menu = localStorage.getItem("king_arthur_menu");
  if (!menu) {
    localStorage.setItem("king_arthur_menu", JSON.stringify(defaultMenu));
    return defaultMenu;
  }
  return JSON.parse(menu);
};

const addMenuItem = (item) => {
  const currentMenu = getMenu();
  const newItem = { id: Date.now(), available: true, ...item };
  const updatedMenu = [...currentMenu, newItem];
  localStorage.setItem("king_arthur_menu", JSON.stringify(updatedMenu));
  return updatedMenu;
};

const deleteMenuItem = (id) => {
  const currentMenu = getMenu();
  const updatedMenu = currentMenu.filter(item => item.id !== id);
  localStorage.setItem("king_arthur_menu", JSON.stringify(updatedMenu));
  return updatedMenu;
};

const toggleAvailability = (id) => {
  const currentMenu = getMenu();
  const updatedMenu = currentMenu.map(item => 
    item.id === id ? { ...item, available: !item.available } : item
  );
  localStorage.setItem("king_arthur_menu", JSON.stringify(updatedMenu));
  return updatedMenu;
};

// One clean default export. No mixed syntax.
export default {
  getMenu,
  addMenuItem,
  deleteMenuItem,
  toggleAvailability
};
