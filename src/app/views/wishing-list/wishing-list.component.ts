import { Component, OnInit } from '@angular/core';
import {WishingListService} from '../../shared/service/wishing-list.service';
import {WishingList} from '../../shared/model/wishing-list/wishing-list';
import {MatDialog} from '@angular/material/dialog';
import {CreateWishingListModalComponent} from './create-wishing-list-modal/create-wishing-list-modal.component';

@Component({
  selector: 'app-wishing-list',
  templateUrl: './wishing-list.component.html',
  styleUrls: ['./wishing-list.component.scss']
})
export class WishingListComponent implements OnInit {

  public lists: WishingList[];

  constructor(private wishingListService: WishingListService,
              private dialog: MatDialog) {
    this.lists = [];
  }

  ngOnInit(): void {
    this.fetchMyLists();
  }

  public fetchMyLists(): void {
    this.wishingListService.getAllMyLists()
      .then(lists => this.lists = lists);
  }

  public openCreateListModal(): void {
    this.dialog.open(CreateWishingListModalComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  public clickLink(item: any): void {
    window.location.href = item.link;
  }
}
