import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

interface menuList {
  title: string,
  img: string,
}
@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [MatIconModule,MatMenuModule],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.css'
})
export class BurgerComponent {
  @Input() menuList!: menuList[];

  
}
