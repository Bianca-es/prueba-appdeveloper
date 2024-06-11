import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonContent,
  IonFooter,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonItem,
  IonList,IonTitle,IonToolbar,IonInput
} from '@ionic/angular/standalone';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonHeader,
    IonContent,
    IonFooter,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonItem,IonList,IonTitle,IonToolbar,IonInput
  ],
})
export class MainpagePage implements OnInit {
  formData!: FormGroup;
  arrayNumbers: any[] = [];


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  
    this.formData = this.fb.group({
      num: [0, [Validators.required]],
    });
  }

  getAllNumbers() {
    this.arrayNumbers=[];
    for (
      let index = 0;
      index <= this.formData.controls['num'].value;
      index++
    ) {
      this.arrayNumbers.push({
        val: index,
        color: 'negro',
      });
    }

    this.validateNumbers();
  }

  validateNumbers() {
    for (let i = 0; i <= this.arrayNumbers.length; i++) {
      if (i % 3 == 0) {
        this.arrayNumbers[i].color = 'verde';
      } else if (i % 5 == 0) {
        this.arrayNumbers[i].color = 'rojo';
      } else if (i % 7 == 0) {
        this.arrayNumbers[i].color = 'azul';
      }
    }
  }

  cleanData() {
    this.arrayNumbers=[];
    this.formData.reset();
  }
}
