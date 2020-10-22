import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  //age: number;
  mail:string;
  customers: Customer[];

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    //this.age = 0;
    this.mail ="";
  }

  private searchCustomers() {

    /*
    this.dataService.getCustomersByAge(this.age)
      .subscribe(customers => this.customers = customers);*/

    this.dataService.getCustomersBymail(this.mail)
      .subscribe(customers => this.customers = customers);


  }

  onSubmit() {
    this.searchCustomers();
  }
}
