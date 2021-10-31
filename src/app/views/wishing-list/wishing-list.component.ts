import { Component, OnInit } from '@angular/core';
import {WishingListService} from '../../shared/service/wishing-list.service';
import {WishingList} from '../../shared/model/wishing-list/wishing-list';

@Component({
  selector: 'app-wishing-list',
  templateUrl: './wishing-list.component.html',
  styleUrls: ['./wishing-list.component.scss']
})
export class WishingListComponent implements OnInit {

  public lists: WishingList[];

  constructor(private wishingListService: WishingListService) {
    this.lists = [];
  }

  ngOnInit(): void {
    this.fetchMyLists();
  }

  public fetchMyLists(): void {
    this.wishingListService.getAllMyLists()
      .then(lists => this.lists = lists);
  }

  public clickLink(item: any): void {
    window.location.href = item.link;
  }
}
