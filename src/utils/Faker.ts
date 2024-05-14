import { faker } from '@faker-js/faker';

interface PetData {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: string[];
  tags: Array<{
    id: number;
    name: string;
  }>;
  status: 'available'|'pending'|'sold';
  [key: string]: any; 
}


export function generatePetData(): PetData {
  return {
    id: faker.number.int(),
    category: {
      id: faker.number.int(),
      name: faker.commerce.productName(),
    },
    name: faker.string.uuid(),
    photoUrls: [faker.image.url()],
    tags: [
      {
        id: faker.number.int(),
        name: faker.commerce.productAdjective(),
      },
    ],
    status: faker.helpers.arrayElement(['available', 'pending', 'sold']),
  };
}
