import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bids';
  BidsConstants = BidsConstants;
  dropDownValues: string[] = [BidsConstants.HARDWARE, BidsConstants.SOFTWARE];

  bidsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.bidsForm = this.intializeBidsFormGroup();
  }


  public onSubmit(): void {
    if (this.bidsType.invalid) {
      return;
    }
    switch (this.bidsType.value) {
      case BidsConstants.HARDWARE: {
        if (this.hardWare.valid) {
          console.log(this.hardWare.value);
        }
        break;
      }
      case BidsConstants.SOFTWARE: {
        if (this.software.valid) {
          console.log(this.software.value);
        }
        break;
      }
      default:
        break;
    }
  }


  public intializeBidsFormGroup(): FormGroup {
    return this.formBuilder.group({
      bidsType: ['--Select--', Validators.required],
      hardWare: this.formBuilder.group({
        name: [null, Validators.required],
        countryName: [null, Validators.required],
        processor: [null, Validators.required]
      }),
      software: this.formBuilder.group({
        name: [null, Validators.required],
        countryName: [null, Validators.required],
        version: [null, Validators.required]
      }),
    });
  }


  get bidsType() { return this.bidsForm.get('bidsType'); }
  get hardWare() { return this.bidsForm.get('hardWare'); }
  get software() { return this.bidsForm.get('software'); }

}

export class BidsConstants {
  public static HARDWARE = 'Hardware';
  public static SOFTWARE = 'Software';
}
