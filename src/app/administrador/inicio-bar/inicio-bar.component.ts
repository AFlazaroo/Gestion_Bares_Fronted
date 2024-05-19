import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio-bar',
  templateUrl: './inicio-bar.component.html',
  styleUrls: ['./inicio-bar.component.css']
})
export class InicioBarComponent {

  private baseUrl = 'http://localhost:8081/bares-app/controller'; // URL del backend

  constructor(private http: HttpClient) { }


  }



