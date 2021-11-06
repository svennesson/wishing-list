import { Component, OnInit } from '@angular/core';
import {WishItem} from '../../../shared/model/wish-item';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-wishing-list-detail',
  templateUrl: './wishing-list-detail.component.html',
  styleUrls: ['./wishing-list-detail.component.scss']
})
export class WishingListDetailComponent implements OnInit {

  public cols: number;
  public height: number;
  public items: WishItem[];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = 1;
          this.height = 750;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = 1;
          this.height = 750;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = 2;
          this.height = 750;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = 3;
          this.height = 750;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = 4;
          this.height = 780;
        }
      }
    });

    this.items = [
      {
        title: 'Sonos Beam',
        category: 'Ljud & bild > Soundbars',
        description: [
          'Nu kan du enkelt berika din underhållningsupplevelse med den senaste generationen av vår kompakta smarta soundboard, utrustad med Dolby Atmos.',
          'Njut av panoramaljud för serier, filmer och spel när TV:n är på och strömma musik, radio med mera när den är avstängd. Styr enkelt med Sonos-appen, din fjärrkontroll, din röst och Apple AirPlay 2.'
        ],
        imageName: 'sonos-beam.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5855366'
      },
      {
        title: 'Yamaha SR-B20A',
        category: 'Ljud & bild > Soundbars',
        description: [
          'En lite billigare variant som är bättre för plånboken.',
          'Sätt på filmen och upplev ljud från vänster, höger, framför och bakom dig – till och med ovanför dig! Med virtuellt 3D-surroundljud och DTS Virtual:X-teknik får du en omslutande ljudupplevelse.'
        ],
        imageName: 'yamaha.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5495721'
      },
      {
        title: 'Lenovo Smart Clock 2 med trådlös laddningsplatta',
        category: 'Smart Hem > Röstassistenter',
        description: [
          'Lenovo Smart Clock 2 med Google Assistant är en smart enhet som kan driva ditt smarta hem, spela din favoritmusik och mer.',
          'Den kommer med en praktisk Qi trådlös laddningsplatta som kan ladda din telefon och andra kompatibla enheter.'
        ],
        imageName: 'smart-clock.jpg',
        link: 'https://www.elgiganten.se/product/smart-hem/alla-smarta-produkter/327208/lenovo-smart-clock-2-med-qi-tradlos-laddningsplatta-gra'
      },
      {
        title: 'Uppspel',
        category: 'Gamingstolar & gamingbord > Gaming tillbehör',
        description: [
          'Det här stället med hjul gör det enkelt att flytta din dator till TV:n i vardagsrummet eller när det är dags att städa och du vill komma åt överallt.'
        ],
        imageName: 'cpu-stall.jpg',
        link: 'https://www.ikea.com/se/sv/p/uppspel-cpu-staell-med-hjul-moerkgra-40507785/'
      },
      {
        title: 'Sjömärke',
        category: 'Hemelektronik > Sladdar & laddare > Trådlös laddning & tillbehör',
        description: [
          'Gör ett magiskt trick och ladda telefonen direkt på bordsskivan eller hyllplanet. Hemligheten är denna trådlösa laddare som monteras dolt på möbeln – enkel laddning med teknik som smälter in i inredningen!'
        ],
        imageName: 'sjomarke.jpg',
        link: 'https://www.ikea.com/se/sv/p/sjoemaerke-tradloes-laddare-50492482/'
      },
      {
        title: 'Lånespelare',
        category: 'Gamingstolar & gamingbord > Gaming tillbehör',
        description: [
          'Den här mugghållaren spänner du enkelt fast i ditt skrivbord för att ha något läskande att dricka inom räckhåll när du spelar – på säkert avstånd från både tangentbord och datormus.'
        ],
        imageName: 'lanespelare.jpg',
        link: 'https://www.ikea.com/se/sv/p/lanespelare-mugghallare-svart-90507844/'
      },
      {
        title: 'Lånespelare',
        category: 'Gamingstolar & gamingbord > Gaming tillbehör',
        description: [
          'Den här breda spelmusmattan passar dig som vill ha både mus och tangentbord på samma stadiga, släta underlag. Här kan du röra musen fort och utan ansträngning för att vinna även den tuffaste fighten.'
        ],
        imageName: 'musmatta.jpg',
        link: 'https://www.ikea.com/se/sv/p/lanespelare-spelmusmatta-moenstrad-70507816/'
      },
      {
        title: 'Mulig',
        category: 'Tvätt & städ > Torkställningar',
        description: [
          'Perfekt för sänglinne och stora handdukar eftersom torkställningen är extra bred.',
          'Enkel att fälla ihop och ställa undan.'
        ],
        imageName: 'mulig.jpg',
        link: 'https://www.ikea.com/se/sv/p/mulig-torkstaellning-3-plan-inom-utomhus-vit-20219658/'
      },
      {
        title: 'Tvättkorg, 3 fack',
        category: 'Tvätt & städ > Tvättkorg',
        description: [
          'Organisera din smutsiga tvätt på ett effektivt och smidigt sätt. Minimera tiden i tvättstugan.',
          'Den stora påsen med tre olika fack är löstagbar med handtag som gör att du enkelt kan förflytta din smutsiga tvätt mellan badrummet och tvättstugan.'
        ],
        imageName: 'tvattkorg.png',
        link: 'https://www.amazon.se/Imagine-orange-hopf%C3%A4llbar-tv%C3%A4ttkorg-smutsiga/dp/B07VPGBS88/ref=sr_1_2?crid=K9SOOQT7NB17&dchild=1&keywords=tv%C3%A4ttkorg+3+fack&qid=1634738725&sprefix=tv%C3%A4ttkorg%2Caps%2C200&sr=8-2'
      },
      {
        title: 'Förvaringspåsar RECYCLE, 39x17xH44',
        category: 'Hem & inredning > Organisera > Förvaring',
        description: [
          'Förvaringspåsar i bomullscanvas för källsortering.',
          'Kommer i trepack och har handtag upptill.'
        ],
        imageName: 'forvaring.jpg',
        link: 'https://www.ahlens.se/Inredning/organisera/forvaring-15071/ahlens-forvaringspasar-recycle-39x17xh44-green-61006069/?gclid=CjwKCAjw_L6LBhBbEiwA4c46utvJs4mVGcpKD54CeUAI2R6mYb9Qp1jyB4zzyETPQRAhnw1tfsMvWRoCZtsQAvD_BwE'
      }
    ];
  }

  ngOnInit(): void {
  }

  public clickLink(item: WishItem): void {
    window.location.href = item.link;
  }
}
