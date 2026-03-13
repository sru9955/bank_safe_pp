import { Component } from '@angular/core';
import { CustomerTS } from '../../types/tstypes/Customerts'; // <-- fixed path

@Component({
  selector: 'app-customerarray',
  templateUrl: './customerarray.component.html',
  styleUrls: ['./customerarray.component.scss'] // change to .css if your project uses CSS
})
export class CustomerarrayComponent {

  customers: CustomerTS[] = [];

  constructor() {
    const customer1 = new CustomerTS(
      'Srujan',
      'srujan@gmail.com',
      'srujan123',
      'Password123',
      'USER',
      '1'
    );

    const customer2 = new CustomerTS(
      'Iswarya',
      'iswarya@gmail.com',
      'iswarya01',
      'Password456',
      'ADMIN',
      '2'
    );

    this.customers = [customer1, customer2];
  }
}