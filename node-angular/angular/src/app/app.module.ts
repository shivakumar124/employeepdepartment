import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addemployee/addemployee.component';
import { GetproductComponent } from './getemployee/getemployee.component';
import { EditproductComponent } from './editemployee/editemployee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    GetproductComponent,
    EditproductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
