import { Component, OnInit } from '@angular/core';

import { MerchantsService } from './../../services/merchants.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditMerchantComponent } from '../../components/edit-merchant/edit-merchant.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss'],
})
export class MerchantListComponent implements OnInit {
  merchants$: Observable<any>;

  constructor(
    private merchantsService: MerchantsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.merchants$ = this.merchantsService.getMerchants();
  }

  openEditModal(mode, merchantId?) {
    let dialogRef;
    const modalComponent = EditMerchantComponent;
    const modalWith = '500px';
    if (merchantId) {
      this.merchantsService
        .getMerchantById(merchantId)
        .pipe(take(1))
        .subscribe((merchant) => {
          dialogRef = this.dialog.open(modalComponent, {
            width: modalWith,
            data: { mode, merchant },
          });
        });
    } else {
      dialogRef = this.dialog.open(modalComponent, {
        width: modalWith,
        data: { mode },
      });
    }

    dialogRef.afterClosed().subscribe((merchant) => {
      if (!merchant) return;
      switch (mode) {
        case 'create':
          this.createMerchant(merchant);
          break;
        case 'edit':
          this.updateMerchant(merchant);
          break;
      }
    });
  }

  createMerchant(merchant) {
    this.merchantsService.createMerchant(merchant);
  }

  updateMerchant(merchant) {
    this.merchantsService.updateMerchant(merchant);
  }

  deleteMerchant(merchantId) {
    this.merchantsService.deleteMerchant(merchantId);
  }
}
