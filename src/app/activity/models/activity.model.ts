import { OrderInfo } from './orderInfo.model';

export class Activity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public status: 'planning'|'inProgress'|'finished',
    public initTime: number,
    public endTime: number,
    public merchantsInfo: {
      name: string;
      logo: string;
    }[],
    public orders?: OrderInfo[]
  ) {}
}
