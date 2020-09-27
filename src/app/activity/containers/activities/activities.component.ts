import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityEditComponent } from '../activity-edit/activity-edit.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openEditModal(mode, merchantId?) {
    let dialogRef;
    const modalComponent = ActivityEditComponent;
    const modalWith = '500px';
    // if (merchantId) {
    //   this.merchantsService
    //     .getMerchantById(merchantId)
    //     .pipe(take(1))
    //     .subscribe((merchant) => {
    //       dialogRef = this.dialog.open(modalComponent, {
    //         width: modalWith,
    //         data: { mode, merchant },
    //       });
    //     });
    // } else {
    dialogRef = this.dialog.open(modalComponent, {
      width: modalWith,
      data: { mode },
    });
    // }

    // dialogRef.afterClosed().subscribe((merchant) => {
    //   if (!merchant) return;
    //   switch (mode) {
    //     case 'create':
    //       this.createMerchant(merchant);
    //       break;
    //     case 'edit':
    //       this.updateMerchant(merchant);
    //       break;
    //   }
    // });
  }
}
