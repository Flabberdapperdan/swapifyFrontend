import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';

const ELEMENT_DATA: User[] = [
  { firstName: 'Hydrogen', houseNumber: 1.0079, postalCode: 'H' },
  { firstName: 'Helium', houseNumber: 4.0026, postalCode: 'He' },
  { firstName: 'Lithium', houseNumber: 6.941, postalCode: 'Li' },
  { firstName: 'Boron', houseNumber: 10.811, postalCode: 'B' },
  { firstName: 'Nitrogen', houseNumber: 14.0067, postalCode: 'N' },
  { firstName: 'Oxygen', houseNumber: 15.9994, postalCode: 'O' },
  { firstName: 'Fluorine', houseNumber: 18.9984, postalCode: 'F' },
  { firstName: 'Neon', houseNumber: 20.1797, postalCode: 'Ne' },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'houseNumber', 'postalCode'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
