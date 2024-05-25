import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajeroComponent {
  isHandset$: Observable<boolean>;
  opened = false;
  suggestions: any;
  query: any;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  onSelect(arg0: any) {
    throw new Error('Method not implemented.');
  }

  onFocus() {
    throw new Error('Method not implemented.');
  }
}
