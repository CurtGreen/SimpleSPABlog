import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Article } from '../models/Article';
import { FirebaseFirestore } from '@firebase/firestore-types';


@Injectable()
export class ArticlesService {
  user: Observable<firebase.User>;
  articles: Observable<Article[]>;
  currentDocument: AngularFirestoreDocument<Article>;
  readonly path = 'articles';
  afs: AngularFirestore;

  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
    this.afAuth.auth.signInAnonymously();
    this.user = this.afAuth.authState;
    this.afs = db;
    // This mapping was the most complicated part of understanding how to use
    // Firestore, it is necessary to extract the data values of documents apart
    // from their id's and return them together as one object map
    this.articles = db.collection<Article>('articles').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Article;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
     });
    }

  getArticles(): Observable<Article[]> {
     return this.articles;
   }

   getArticle(id: any) {
    // Isolate the document in question
    // Then return an observable of its values
     this.currentDocument = this.afs.doc(this.path+'/'+id);
     return this.currentDocument.valueChanges();
   }

   addArticle(doc: Article, id: string) {
     return this.afs.doc('articles/' + id).set(doc);
   }

}
