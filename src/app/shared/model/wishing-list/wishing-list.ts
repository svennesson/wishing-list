import {Item} from './item';

export class WishingList {

  public id: string;
  public name: string;
  public imageUrl: string;

  public created: Date;
  public updated: Date;

  public items: Item[] = [];
}
