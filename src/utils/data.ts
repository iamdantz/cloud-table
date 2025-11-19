import { getCollection } from 'astro:content';

export async function getCategories() {
  const categories = await getCollection('categories');
  return categories.sort((a, b) => {
    // Maintain original order if possible (categories.json order)
    return 0; 
  });
}

export async function getServicesByCategory(categoryId: string) {
  const services = await getCollection('services');
  const categoryServices = services.find(s => s.data.category.id === categoryId);
  return categoryServices ? categoryServices.data.items : [];
}

export async function getAllServices() {
  const services = await getCollection('services');
  // Flatten all items from all category files
  return services.flatMap(s => s.data.items.map(item => ({
    ...item,
    category: s.data.category.id // Add category ID back for UI filtering
  })));
}
