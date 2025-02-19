import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AssesmentProblem02';
  form: FormGroup;
  controlsList: string[]=[];


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      question: this.fb.array([])
    });
  }

  display() {
    console.log(this.form.value);
  }

  get question() {    
    return this.form.controls['question'] as FormArray;
  }

  get ques() {
    return this.form.controls["question"].value;
  }
  addQuestion(question: string, controlName: string) {
    this.controlsList.push(controlName)
    const que = this.fb.group({
      [controlName]: [question, Validators.required]
    });
    this.question.push(que);
    console.log(this.ques);
  }

  // getControlNames(controlsArray:any): string {
  //   // debugger;
  //   if (!controlsArray) {
  //     return '';
  //   }
  //   return Object.keys(controlsArray)[0];
  // }
}