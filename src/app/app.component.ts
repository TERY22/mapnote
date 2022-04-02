import { AfterViewInit, Component } from '@angular/core';
import { LatLng, TileLayer } from 'leaflet';
import { LeafletMap } from './lib';

@Component({
  selector: 'mn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    const map = new LeafletMap('map-container', {
      layers: [
        new TileLayer('', {
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }) 
      ],
      center: new LatLng(55.7522, 37.6156),
      zoom: 13
    })
  }
}
