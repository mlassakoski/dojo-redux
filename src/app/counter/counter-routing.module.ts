import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CounterComponent,
    },
  ])],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
