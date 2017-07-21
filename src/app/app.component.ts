import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';
import {CardObj} from './card-obj';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TsvReaderService} from './tsv-reader.service';
import {MdSnackBar, MdSnackBarRef, SimpleSnackBar} from '@angular/material';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cards: BehaviorSubject<CardObj[]> = new BehaviorSubject([]);
  readonly foldername = '/assets/card-lists/';
  cardError;
  filename = localStorage.getItem('savedFileName') || 'example.tsv'; // TODO: LOCALSTORAGE FOR DEFAULT

  constructor(private http: Http, private tsvReaderService: TsvReaderService) {
    this.updateCards();
  }

  getArrayFromNumber(maxNumber: number) {
    const arr = [];
    for (let i = 0; i < maxNumber; i++) {
      arr.push(i);
    }
    return arr;
  }

  updateCards() {
    localStorage.setItem('savedFileName', this.filename);
    this.tsvReaderService.readTsvData(this.foldername + this.filename).subscribe(content => {
      this.cards.next(content);
      this.cardError = '';
    }, (err) => {
      if (err) {
        this.cardError = `${err.status}: ${err.statusText}`;
        this.cards.next([]);
      }
    });
  }
}
