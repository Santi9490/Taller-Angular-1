import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { series } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> | undefined;
  averageSeasons: number | undefined;
  

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  calculateAverageSeasons() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.averageSeasons = 0;
      if (this.series) {
        this.averageSeasons = this.serieService.getAverageSeasons(this.series);
      }
    });
    
  }
  ngOnInit() {
    this.getSeries();
    this.calculateAverageSeasons();
  }

}
