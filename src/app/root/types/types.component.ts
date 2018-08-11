import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '../../app.store';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypesComponent implements OnInit {
  constructor(public store: Store) {}

  spendingTypeToAdd: string;

  ngOnInit() {
    this.store.addSpendingType('Food');
    this.store.addSpendingType('Education');
    this.store.addSpendingType('Transport');
  }

  addType() {
    this.store.addSpendingType(this.spendingTypeToAdd);
    this.spendingTypeToAdd = '';
  }
}
