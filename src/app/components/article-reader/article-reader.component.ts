import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-reader',
  templateUrl: './article-reader.component.html',
  styleUrls: ['./article-reader.component.css']
})
export class ArticleReaderComponent implements OnInit {

  articleDoc: Observable<Article[]>;
  article: Observable<Article>;

  constructor(private route: ActivatedRoute, private router: Router, private articleList: ArticlesService) {
    // this.articles = articleList.getArticles();
   }

   ngOnInit() {
     let id = this.route.snapshot.paramMap.get('id');
     console.log(id)
     this.article = this.articleList.getArticle(id);
     console.log(this.article.forEach)
     
   }

}
