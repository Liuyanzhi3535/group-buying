import { ClonerService } from './../../core/services/cloner.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MerchantsService {
  merchants$ = new BehaviorSubject([
    {
      id: '1',
      name: 'Coco',
      adress: '300 新竹市東區關新二街90號',
      phone: '03 668 7226',
      website: 'https://www.facebook.com/cocofreshtea.tw/',
      logo:
        'https://tryworks.jp/wp/wp-content/uploads/2020/03/7875d2b8042b9311ba2065016a1afe67.jpg',
    },
    {
      adress: '300新竹市東區建功一路68-1號',
      id: '2',
      logo: 'https://www.easycard.com.tw/_upload/images/1902111035520.jpg',
      name: '茶湯會',
      phone: '+88635165252',
      website: 'https://ice-cream-and-drink-shop-2406.business.site/',
    },
    {
      id: '3',
      adress: '30068新竹市東區學府路327號',
      logo:
        'https://lh3.googleusercontent.com/-PHoPgw2qr40sDRrQjFSA6_A8aZRyCcCZcL2yW6nIS58-FX2Aebx5iwHe7BHdt4rAsMHKMBP=w1080-h608-p-no-v0',
      name: '清心福全',
      phone: '+88635165200',
      website: 'http://www.chingshin.tw/product.php',
    },
    {
      adress: '300新竹市東區金山街20號1樓',
      id: '4',
      logo:
        'https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.0-9/13901439_305238769829161_6570966861957118815_n.jpg?_nc_cat=106&_nc_sid=e3f864&_nc_ohc=j6zCxDQfxhEAX9NvRlA&_nc_ht=scontent.ftpe8-3.fna&oh=4b342aece0d9e469a800aa0998c40b9b&oe=5F7D7AD6',
      name: '可不可熟成紅茶',
      phone: '+88635630303',
      website: 'http://www.kebuke.com/#shop',
    },
    {
      id: '5',
      name: 'Coco',
      adress: '300 新竹市東區關新二街90號',
      phone: '03 668 7226',
      website: 'https://www.facebook.com/cocofreshtea.tw/',
      logo:
        'https://tryworks.jp/wp/wp-content/uploads/2020/03/7875d2b8042b9311ba2065016a1afe67.jpg',
    },
    {
      id: '6',
      name: 'Coco',
      adress: '300 新竹市東區關新二街90號',
      phone: '03 668 7226',
      website: 'https://www.facebook.com/cocofreshtea.tw/',
      logo:
        'https://tryworks.jp/wp/wp-content/uploads/2020/03/7875d2b8042b9311ba2065016a1afe67.jpg',
    },
    {
      id: '7',
      name: 'Coco',
      adress: '300 新竹市東區關新二街90號',
      phone: '03 668 7226',
      website: 'https://www.facebook.com/cocofreshtea.tw/',
      logo:
        'https://tryworks.jp/wp/wp-content/uploads/2020/03/7875d2b8042b9311ba2065016a1afe67.jpg',
    },
  ]);

  constructor(private http: HttpClient, private clonerService: ClonerService) {}

  fetchMerchant() {}

  getMerchants() {
    return this.merchants$.asObservable();
  }

  getMerchantById(id) {
    return this.merchants$.pipe(
      map((val) => val.find((merchant) => merchant.id === id))
    );
  }
  createMerchant(merchant) {
    let updatedMerchants = this.clonerService.deepClone(
      this.merchants$.getValue()
    );
    updatedMerchants = [
      ...updatedMerchants,
      { ...merchant, id: (+new Date() + Math.random()).toString() },
    ];
    this.merchants$.next(updatedMerchants);
  }

  updateMerchant(merchant) {
    const updatedMerchants = this.clonerService.deepClone(
      this.merchants$.getValue()
    );
    const merchantIndex = updatedMerchants.findIndex(
      (merchantData) => merchantData.id === merchant.id
    );
    updatedMerchants[merchantIndex] = merchant;
    this.merchants$.next(updatedMerchants);
  }

  deleteMerchant(merchantId) {
    let updatedMerchants = this.clonerService.deepClone(
      this.merchants$.getValue()
    );
    updatedMerchants = updatedMerchants.filter(
      (merchantData) => merchantData.id !== merchantId
    );
    this.merchants$.next(updatedMerchants);
  }
}
