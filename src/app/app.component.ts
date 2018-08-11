import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this amazing blog';
  posts = [
    {title: 'mon premier post',
     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam euismod justo vitae vehicula. Aliquam varius ligula vitae tempor mattis. Etiam at ex nulla. ',
     loveIts: 0,
    created_at: new Date()},
    {title: 'mon deuxieme post',
     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam euismod justo vitae vehicula. Aliquam varius ligula vitae tempor mattis. Etiam at ex nulla. ',
     loveIts: -3,
    created_at: new Date()},
    {title: 'Encore un post',
     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam euismod justo vitae vehicula. Aliquam varius ligula vitae tempor mattis. Etiam at ex nulla. ',
     loveIts: 10,
    created_at: new Date()}
  ]
}
