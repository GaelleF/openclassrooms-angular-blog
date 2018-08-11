import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string
  @Input() content: string
  @Input() loveIts: number
  @Input() createdAt: Date

  constructor() { }

  ngOnInit() {
  }

  onAddLove () {
    console.log('Love : ', this.loveIts)
    this.loveIts += 1
  }

  onRemoveLove () {
    console.log('Remove Love : ', this.loveIts)
    this.loveIts -= 1
  }

}
