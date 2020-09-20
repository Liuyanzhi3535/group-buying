export class Product {
  constructor(
    public id: string,
    public name: string,
    public unitPrice: number,
    public description?: string,
    public category?: string,
    public image?: string,
    public customization?: any
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
