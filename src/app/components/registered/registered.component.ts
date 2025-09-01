import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-registered',
  standalone: true,
  imports: [AgGridAngular, MatToolbarModule, NgIf, MatButtonModule],
  templateUrl: './registered.component.html',
  styleUrl: './registered.component.css'
})
export class RegisteredComponent {
  constructor (public router: Router) { }

  rowRegistered = [
    { firstName: 'מימי', lastName: 'בראון', phone: '054-1111111', identity: '123456789', lesson: 'פילאטיס', price: 500, isPaid: false },
    { firstName: 'חיה', lastName: 'לוי', phone: '054-2222222', identity: '987654321', lesson: 'יוגה', price: 600, isPaid: true },
    { firstName: 'רבקי', lastName: 'שטרן', phone: '058-3333333', identity: '345678901', lesson: 'אקרובטיקה', price: 850, isPaid: false },
    { firstName: 'אסתי', lastName: 'גולדברג', phone: '054-4444444', identity: '567890123', lesson: 'עיצוב דינאמי', price: 400, isPaid: false },
    { firstName: 'תמר', lastName: 'ברק', phone: '053-5555555', identity: '789012345', lesson: 'TRX', price: 700, isPaid: false },
    { firstName: 'חסי', lastName: 'פישר', phone: '054-6666666', identity: '234567890', lesson: 'אירובי', price: 550, isPaid: true },
    { firstName: 'נעמי', lastName: 'רוזן', phone: '052-7777777', identity: '876543210', lesson: 'TRX + עיצוב', price: 450, isPaid: true },
    { firstName: 'מיכל', lastName: 'כהן', phone: '054-8888888', identity: '345678901', lesson: 'יוגה', price: 600, isPaid: false },
    { firstName: 'תמי', lastName: 'שניידר', phone: '054-9999999', identity: '654321098', lesson: 'פילאטיס', price: 500, isPaid: true },
    { firstName: 'שיפי', lastName: 'מאור', phone: '058-1010101', identity: '456789013', lesson: 'עיצוב', price: 600, isPaid: false },
    { firstName: 'רונית', lastName: 'שמש', phone: '054-2020202', identity: '567890124', lesson: 'יוגה', price: 600, isPaid: true },
    { firstName: 'עדי', lastName: 'שחר', phone: '054-3030303', identity: '678901235', lesson: 'אקרובטיקה', price: 850, isPaid: true },
    { firstName: 'תמר', lastName: 'לוי', phone: '052-4040404', identity: '789012346', lesson: 'TRX', price: 700, isPaid: true },
    { firstName: 'דינה', lastName: 'ברק', phone: '052-5050505', identity: '890123457', lesson: 'עיצוב דינאמי', price: 400, isPaid: false },
    { firstName: 'ריקי', lastName: 'וינר', phone: '053-6060606', identity: '901234568', lesson: 'יוגה', price: 600, isPaid: true },
    { firstName: 'אורית', lastName: 'שטרן', phone: '054-7070707', identity: '012345679', lesson: 'פילאטיס', price: 500, isPaid: false },
    { firstName: 'שני', lastName: 'הדר', phone: '054-8080808', identity: '123456780', lesson: 'אירובי', price: 550, isPaid: false },
    { firstName: 'רינה', lastName: 'כהן', phone: '054-9090909', identity: '234567891', lesson: 'TRX + עיצוב', price: 450, isPaid: true },
    { firstName: 'אביגיל', lastName: 'פרידמן', phone: '055-1111112', identity: '345678902', lesson: 'אקרובטיקה', price: 850, isPaid: true },
    { firstName: 'הדס', lastName: 'סגל', phone: '054-2222223', identity: '456789013', lesson: 'יוגה', price: 600, isPaid: false },
  ];

  colDefs: ColDef[] = [
    { 
      headerName: 'פרטים',
      width: 188,
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'לפרטים';
        button.style.border = '2px solid rgb(210 26 60)';
        button.style.backgroundColor = 'white'; 
        button.style.color = 'black';
        button.style.padding = '5px 10px'; 
        button.style.cursor = 'pointer';
        button.addEventListener('click', () => this.showDetails(params.data));
        return button;
      }
    },
    { 
      field: 'isPaid', 
      headerName: '?האם שולם', 
      cellEditor: 'agCheckboxCellEditor',
      width: 188,
      editable: true,
      cellStyle: (params) => {
        return params.value ? null : { backgroundColor: 'rgb(210 26 60)' };
      }
    },
    { 
      field: 'price', 
      headerName: 'מחיר', 
      filter: 'agNumberColumnFilter',
      width: 188
    },
    { 
      field: 'lesson', 
      headerName: 'שיעור', 
      filter: 'agSetColumnFilter',
      width: 188
    },
    { 
      field: 'identity', 
      headerName: 'מספר זהות', 
      filter: 'agSetColumnFilter',
      width: 188
    },
    { 
      field: 'phone', 
      headerName: 'טלפון', 
      filter: 'agSetColumnFilter',
      width: 188
    },
    { 
      field: 'lastName', 
      headerName: 'שם משפחה', 
      filter: 'agSetColumnFilter',
      width: 188
    },
    { 
      field: 'firstName', 
      headerName: 'שם פרטי', 
      filter: 'agSetColumnFilter',
      width: 188
    }
  ];

  showDetails (data: any) {
    const details = `
      שם פרטי: ${data.firstName}
      שם משפחה: ${data.lastName}
      טלפון: ${data.phone}
      תעודת זהות: ${data.identity}
      שיעור: ${data.lesson}
      מחיר: ${data.price}
      שולם: ${data.isPaid ? 'כן' : 'לא'}
    `;
    alert (details);
  }

  enterLogin(){
    this.router.navigate(['']);
  }
}
