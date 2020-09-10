import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClonerService } from './../../../core/services/cloner.service';
import { Merchant } from '../../models/merchant.model';
@Component({
  selector: 'app-edit-merchant',
  templateUrl: './edit-merchant.component.html',
  styleUrls: ['./edit-merchant.component.scss'],
})
export class EditMerchantComponent implements OnInit {
  model = new Merchant('', '', '', '', '', '');

  constructor(
    public dialogRef: MatDialogRef<EditMerchantComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private clonerSevice: ClonerService
  ) {}

  ngOnInit() {
    if (this.data.merchant) {
      this.model = this.clonerSevice.deepClone(this.data.merchant);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
