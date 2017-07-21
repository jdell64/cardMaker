import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cm-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss']
})
export class PlayingCardComponent implements OnInit {

  @Input() color;
  @Input() backgroundColor;
  @Input() title;
  @Input() subtitle;
  @Input() imageSrc;
  @Input() midbarContent;
  @Input() mainContent;
  @Input() quantity;
  @Input() cardHtmlClass;
  @Input() splitSubOnHyphen;

  subtitleLeft;
  subtitleRight;

  constructor() {
    this.imageSrc = this.imageSrc ? this.imageSrc : '/assets/question_mark.png';
  }

  ngOnInit() {

    // TODO:lab partners specific
    // console.log(this.cardHtmlClass);
    if (this.splitSubOnHyphen) {
      const newSubtitle = this.subtitle.split(' - ');
      this.subtitleLeft = newSubtitle[0];
      this.subtitleRight = newSubtitle[1];
      this.subtitle = '';
    }
  }

}
