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

interface Numbers {
  value: Number;
  color: String;
}
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

export class MainpagePage  implements OnInit {
  formData!: FormGroup;
  allNumbers: Numbers[];


  constructor(private fb: FormBuilder) {
   this.allNumbers= new Array<Numbers>;
  
  }

  ngOnInit() {
    this.formData = this.fb.group({
      num: [0, [Validators.required]],
    });
  }

  getAllNumbers() {
    this.allNumbers=[];
    for (
      let index = 0;
      index <= this.formData.controls['num'].value;
      index++
    ) {
      this.allNumbers.push({
        value: index,
        color: 'negro',
      });
    }

    this.validateNumbers();
  }

  validateNumbers() {
    for (let i = 0; i <= this.allNumbers.length; i++) {
      if (i % 3 == 0) {
        this.allNumbers[i].color = 'verde';
      } else if (i % 5 == 0) {
        this.allNumbers[i].color = 'rojo';
      } else if (i % 7 == 0) {
        this.allNumbers[i].color = 'azul';
      }
    }
  }

  cleanData() {
    this.allNumbers=[];
    this.formData.reset();
  }
}
