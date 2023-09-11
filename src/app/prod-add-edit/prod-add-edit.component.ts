import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-prod-add-edit',
  templateUrl: './prod-add-edit.component.html',
  styleUrls: ['./prod-add-edit.component.scss'],
})
export class ProdAddEditComponent implements OnInit {
  prodForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _prodService: ProductService,
    private _dialogRef: MatDialogRef<ProdAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.prodForm = this._fb.group({
      Name: '',
      Description: '',
      Price: '',
    });
  }

  ngOnInit(): void {
    this.prodForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.prodForm.valid) {
      if (this.data) {
        this._prodService
          .updateProduct(this.data.id, this.prodForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Product detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._prodService.addProduct(this.prodForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Product added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
