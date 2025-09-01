import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, LessonDetailsComponent],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css'
})
export class LessonListComponent {
  constructor (public router: Router) { }

  lessons: any[] = [
    {lessonName: 'פילאטיס', teacherName: 'נחמי', numMeetings: 10, startDate: new Date(2025, 4, 20), price: 500, day: 'ראשון', hour: '17:30'},
    {lessonName: 'עיצוב דינאמי', teacherName: 'רחל', numMeetings: 6, startDate: new Date(2025, 4, 25), price: 400, day: 'שני', hour: '20:00'},
    {lessonName: 'TRX', teacherName: 'שרה', numMeetings: 15, startDate: new Date(2025, 4, 1), price: 700, day: 'ראשון', hour: '21:30'},
    {lessonName: 'עיצוב', teacherName: 'נועה', numMeetings: 10, startDate: new Date(2025, 5, 27), price: 600, day: 'חמישי', hour: '16:45'},
    {lessonName: 'אקרובטיקה', teacherName: 'לאה', numMeetings: 9, startDate: new Date(2025, 6, 3), price: 850, day: 'רביעי', hour: '18:00'},
    {lessonName: 'אירובי', teacherName: 'הדס', numMeetings: 12, startDate: new Date(2025, 4, 10), price: 550, day: 'שלישי', hour: '19:15'},
    {lessonName: 'TRX + עיצוב', teacherName: 'נחמי', numMeetings: 8, startDate: new Date(2025, 5, 20), price: 450, day: 'ראשון', hour: '18:30'},
    {lessonName: 'יוגה', teacherName: 'נועה', numMeetings: 10, startDate: new Date(2025, 5, 27), price: 600, day: 'חמישי', hour: '18:00'}
  ];

  detailLesson: any;
  getDetails (lesson: any) {
    this.detailLesson = lesson;
  }

  started(startDate: Date): boolean {
    const currentDate = new Date();
    return startDate <= currentDate;
  }

  enterLogin(){
    this.router.navigate(['']);
  }
}
