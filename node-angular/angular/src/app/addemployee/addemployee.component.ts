import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService}  from '../product.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddproductComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private bs: ProductService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      productname: ['', Validators.required ],
      lastname:['',Validators.required],
      price: ['', Validators.required ],
      email:['',Validators.required],
      description: ['', Validators.required ]
    });
  }
  addProduct(productname,lastname, price,email, description) { 
    this.bs.addProduct(productname, price, description);
  }
  ngOnInit() {
  }

}
