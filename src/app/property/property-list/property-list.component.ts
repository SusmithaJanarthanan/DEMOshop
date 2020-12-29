import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/service/shopping.service';
import { IProperty } from '../IProperty.interface';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties:Array<IProperty>;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.getAllProperties().subscribe(
      data=>{
          this.Properties=data;
           console.log(data);
         },error=>{console.log('httperror:');
           console.log(error);
        });
  }

}
