import { Component, ViewChild, ElementRef } from '@angular/core';
import { BurgerComponent } from '../burger/burger.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SearchDetailsComponent } from '../search-details/search-details.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BurgerComponent, MatIconModule, MatMenuModule,MatSidenavModule,SearchDetailsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public show = false;
  public showDesktopSearch = false;
  public menuList = [
    {title: 'Ссылки', img: 'link'},
    {title: 'Контакты', img: 'group'},
    {title: 'Теги', img: 'tag'},
    {title: 'Изранное', img: 'star'},
    {title: 'Посещения', img: 'history'},
  ];
  @ViewChild('searchMobileWrapper') searchMobileWrapper!: ElementRef;
  @ViewChild('searchDesktopWrapper') searchDesktopWrapper!: ElementRef;
  public history: string[];

  constructor() {
    this.history = ['закрепить теги','кнопка','приложение','форма','выпадающий список'] //fetch history
  }
  toggleMenu(key:string, isShown: boolean) {
    switch (key) {
      case 'desktop':
        this.showDesktopSearch = isShown;
        this.searchDesktopWrapper.nativeElement.className = isShown ? 'animation-desktop' : 'reverse-desktop';
        break;
      default:
        this.searchMobileWrapper.nativeElement.className = isShown ? 'animation-mobile' : 'reverse-mobile';
    }
    if (!isShown) {
      this.show = false;
    }
  }
}
