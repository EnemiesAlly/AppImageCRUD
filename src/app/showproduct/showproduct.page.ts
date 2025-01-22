import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem , IonThumbnail,IonCard, IonCardContent, IonList, IonCardSubtitle, IonCardTitle, IonCardHeader } from '@ionic/angular/standalone';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.page.html',
  styleUrls: ['./showproduct.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonThumbnail,IonCard, IonList],
})
export class ShowproductPage implements OnInit {

  products: any = [];

  constructor(
    private dataApiService: DataapiService,
  ) { }

  ngOnInit() {
  }

  gotoaddproduct(){
    window.location.href = '/addproduct';
  }

  showpro(){
    this.dataApiService.showproduct().subscribe((data: any) => {
      this.products = data;
    });
  }

}
