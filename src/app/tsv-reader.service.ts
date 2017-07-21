import {Injectable} from '@angular/core';
import {CardObj} from './card-obj';
import {Http} from '@angular/http';

@Injectable()
export class TsvReaderService {

  constructor(private http: Http) {
  }

  readTsvData(url) {
    return this.http.get(url)
      .map(
        data => this.extractDataFromTsv(data),
        err => this.handleError(err)
      );
  }

  private extractDataFromTsv(res: any) {
    const csvData = res['_body'] || '';
    const allTextLines = csvData.split(/\r\n|\n/);
    const headers = allTextLines[0].split('\t');
    const lines = [];
    const cards: CardObj[] = [];
    allTextLines.forEach((line, index) => {
      if (index > 0) {
        const data = allTextLines[index].split('\t');
        const myCard = new CardObj();
        data.forEach((cell, idx) => {
          myCard[headers[idx]] = cell;
        });
        cards.push(myCard);
      }
    });
    return cards;
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return errMsg;
  }

}
