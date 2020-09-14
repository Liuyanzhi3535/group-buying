export class Dish {
  id: string;
  name: string;
  description: string;
  unitPrice: number;
  category: string;
  image: string;
  customization?: any;
  constructor(
    id: string,
    name: string,
    unitPrice: number,
    description?: string,
    category?: string,
    image?: string,
    customization?: any
  ) {
    this.id = id;
    this.name = name;
    this.unitPrice = unitPrice;
    this.description = description;
    this.category = category;
    this.image = image;
    this.customization = customization;
  }
}
