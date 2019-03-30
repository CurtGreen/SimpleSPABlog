import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article';
import {ArticlesService} from '../../services/articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

 
  newImage: ImageData;

  newDocument = {
    title: '',
    description: '',
    content: '',
    published: new Date()
  }



  constructor(public articles: ArticlesService) { }

  ngOnInit() {

  }

  store() {
    var lowerSlug = this.newDocument.title.toLowerCase().replace(/\W+/g, '-');
    console.log(lowerSlug);
    var x = this.articles.addArticle(this.newDocument, lowerSlug);
    console.log(x);
    var ref = x.then((newDoc) => {
      console.log(newDoc);
      return newDoc;
    });
    alert("New Article Created!");
  }
}
