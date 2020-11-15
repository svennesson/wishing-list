import { Component, OnInit } from '@angular/core';
import {WishItem} from '../../shared/model/wish-item';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

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
        title: 'Scanpan CTX Stekpanna Set',
        category: 'Kokkärl & Stekpannor > Stekpannor',
        description: [
          'Ett utmärkt val för den som enkelt vill bli ett proffs i köket och få ut det bästa av sin stekpanna.',
          'CTX eller ”Ceramic Titanium Extreme”- är ett teknologiskt genombrott som kombinerar högklassig beläggning med rostfritt stål och skapar en produkt helt i en klass för sig.'
        ],
        imageName: 'ctx.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=2395779'
      },
      {
        title: 'Playstation 5',
        category: 'Spel > PlayStation 5 > Konsol',
        description: [
          'Playstation 5 är Sonys kommande konsol och med tanke på hur imponerande Playstation 4 har varit under så lång tid så är hypen stor!',
          'Dessutom har Sony flertalet exklusiva titlar som enligt rykten kan komma att släppas i samband med den nya konsolen.'
        ],
        imageName: 'ps5.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5113846'
      },
      {
        title: 'Kupévärmare',
        category: 'Bil > Byffan > Värmare',
        description: [
          'Liten, smidig och effektiv kupévärmare som monteras enkelt och diskret i bilen. Effekt 1200W, passar bilar med lite mindre kupé. Med vanlig stickkontakt (schuko).',
          'Passar perfekt till Byffan.'
        ],
        imageName: 'kupe.png',
        link: ''
      },
      {
        title: 'Philips Premium Airfryer',
        category: 'Hem & Hushåll > Köksmaskiner > Airfryer',
        description: [
          'En Airfryer som både kan tänka och laga din mat.',
          'Nya Philips Airfryer XXL HD9867 kan med sin Smart Sensing-teknik automatiskt anpassa tid och temperatur under tillagningen av din mat för att ge dig perfekt tillagade maträtter.'
        ],
        imageName: 'airfryer.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5357198'
      },
      {
        title: 'Playstation 5 - Charging Station',
        category: 'Spel > PlayStation 5 > Konsol',
        description: [
          'The PS5 DualSence Dual Charger is capable of charging 2 wireless controllers simultaneously, all in one sleek unit.',
          'The PS5 DualSence Dual Charger will recharge your wireless DualSence controller\'s batteries simply by docking the controllers into the Charger stand. Its LED lights indicate when charging is complete.'
        ],
        imageName: 'charging.jpg',
        link: 'https://www.prisjakt.nu/search?search=ps5%20charging%20station'
      },
      {
        title: 'Playstation 5 - DualSense handkontroll',
        category: 'Spel > PlayStation 5 > Handkontroller',
        description: [
          'Playstation Sony tar ett hopp i generationsutvecklingen med sin DualSense handkontroll, som kommer vara kontrollen som hör till PS5 när den släpps i november 2020.',
          'Kontrollen tar ett avsteg i design från de tidigare Dualshock – kontrollerna, med en mycket mer slät design.'
        ],
        imageName: 'controll.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5334714'
      },
      {
        title: 'Demon’s Souls',
        category: 'Spel > PlayStation 5 > Spel',
        description: [
          'From Bluepoint Games comes a remake of the PlayStation classic, Demon’s Souls™.',
          'Entirely rebuilt from the ground up and masterfully enhanced, this remake introduces the horrors of a fog-laden, dark fantasy land to a whole new generation of gamers.'
        ],
        imageName: 'demon-souls.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5405333'
      },
      {
        title: 'Marvel’s Spider-Man: Miles Morales',
        category: 'Spel > PlayStation 5 > Spel',
        description: [
          'Discover the complete web-slinging story with the Marvel’s Spider-Man: Miles Morales.'
        ],
        imageName: 'miles-morales.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5405328'
      },
      {
        title: 'Assassins Creed Valhalla',
        category: 'Spel > PlayStation 4(5) > Spel',
        description: [
          'Det eviga krigandet och tynande resurser driver vikingen Eivor att leda en klan över den iskalla Nordsjön till den bördiga marken i Englands ansträngda kungadömen.',
          'Målet är att etablera ett nytt permanent hem, kosta vad det kosta vill.'
        ],
        imageName: 'valhalla.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5356342'
      },
      {
        title: 'Philips Hue White Filament',
        category: 'Nätverk & Smarta Hem > Smarta Hem > Belysning',
        description: [
          'Philips Hue White är den mest grundläggande smarta belysning som ger dig fantastiskt ljus och komfort i form av fri kontroll av belysning när du är hemma och ute.',
          'Skapa rotationsscheman, kontrollera ljuset från andra sidan världen eller skapa dig bara en mer bekväm vardag med hjälp av belysning i behagligt vitt som du kan dimma, tända och släcka när du vill.'
        ],
        imageName: 'hue-filament.jpg',
        link: 'https://www.prisjakt.nu/search?search=Philips%20Hue%20White%20Filament'
      },
      {
        title: 'Google Nest Audio',
        category: 'Nätverk & Smarta Hem > Smarta Hem > Wi-Fi',
        description: [
          'Röstaktiverade Google Nest Audio är en smart assistent med tydligt ljud och bas som fyller hela rummet.',
          'Du kan styra smarta enheter i ditt hushåll, få meddelanden och nyheter via Google Assistant eller få hjälp att installera ditt ljud-system.'
        ],
        imageName: 'nest-audio.jpg',
        link: 'https://www.prisjakt.nu/produkt.php?p=5549885'
      },
      {
        title: 'Tommy Hilfiger Strumpor',
        category: 'Män > Underkläder > Strumpor',
        description: [
          'Långa strumpor från Tommy Hilfiger som man kan ha i vinterskorna.',
          'Passar perfekt på Marcus fötter.'
        ],
        imageName: 'socks.png',
        link: 'https://www.boozt.com/se/sv/tommy-hilfiger-socks/th-men-sock-5p-fine-stripe-tin-gift_27303924/212485798?navId=67924&group=listing&position=1000000'
      }
    ];
  }

  ngOnInit(): void {
  }

  public clickLink(item: WishItem): void {
    window.location.href = item.link;
  }
}
