export class OrderInfo {
  constructor(
    public participant: { id: string; name: string },
    public items: {
      itemId: string;
      name: string;
      unitPrice: number;
      description?: string;
      category?: string;
      image?: string;
      customization?: any;
      count: number;
    }[],
    public isPaid: boolean,
    public totalPrice: number
  ) {}
}
