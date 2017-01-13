import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SoundtouchService} from './soundtouch.service'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'soundtouch',
  templateUrl: './soundtouch.component.html',
  styleUrls: ['./soundtouch.component.scss']
})
export class SoundtouchComponent implements OnInit {

  constructor(public soundtouchService : SoundtouchService) { }

  ngOnInit() {
    
    this.soundtouchService.getNowPlaying().subscribe( data => {
      console.log(data);
    });
    
  }

}