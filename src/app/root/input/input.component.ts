import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../app.store';
import { ConfirmationBarService } from '../../@theme/services/confirmation-bar.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  constructor(public store: Store,
              private confirmation: ConfirmationBarService) {}

  spendingToAdd: any = {
    type: '',
    comment: '',
    sum: 0,
  };

  addSum() {
    this.store.addSpendingSum(this.spendingToAdd);
    this.confirmation.openForSave();
  }
}
