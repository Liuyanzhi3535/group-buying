import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { ClonerService } from 'src/app/core/services/cloner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from '../../models/activity.model';
import { Merchant } from 'src/app/merchant';
import { MerchantsService } from 'src/app/merchant/services/merchants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss'],
})
export class ActivityEditComponent implements OnInit {
  merchantList$: Observable<Merchant[]>;

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ActivityEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private merchantsService: MerchantsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.merchantList$ = this.merchantsService.getMerchants();
    if (this.data.activity) {
      this.createForm(this.data.activity);
    } else {
      this.createForm();
    }
  }

  createForm(activity?: Activity): void {
    this.form = this.fb.group({
      name: [activity?.name ?? '', Validators.required],
      description: [activity?.description ?? ''],
      status: [activity?.status ?? '', Validators.required],
      merchantsInfo: [activity?.merchantsInfo ?? '', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
