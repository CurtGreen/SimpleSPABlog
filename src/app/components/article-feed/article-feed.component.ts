import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Observable } from 'rxjs';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
  styleUrls: ['./article-feed.component.css']
})
export class ArticleFeedComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private articleList: ArticlesService) {
    this.articles = articleList.getArticles();
   }

  ngOnInit() {
    console.log(this.articles);
  }

}
