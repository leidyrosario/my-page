import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {trigger, animate, style, group, animateChild, query, stagger, transition, sequence} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('1 => 2, 1 => 3, 1 => 4, 1 => 5, 2 => 3, 2 => 4, 2 => 5, 3 => 4, 3 => 5, 4 => 5', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
          query(':enter', [
              style({ transform: 'translateY(100%)' }),
              animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
          ], { optional: true }),
          query(':leave', [
              style({ transform: 'translateY(0%)' }),
              animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
          ], { optional: true }),
      ])
  ]),
   transition('5 => 4, 5 => 3, 5 => 2, 5 => 1, 4=> 3, 4 => 2, 4 => 1, 3 => 2, 3 => 1, 2 => 1', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ], { optional: true }),
    ])
]),
    ]);
