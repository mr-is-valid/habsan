import { Component, OnInit , Inject , HostListener } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-add-dot-dialog',
    templateUrl: './add-dot-dialog.component.html',
    styleUrls: ['./add-dot-dialog.component.scss']
})
export class AddDotDialogComponent implements OnInit {
    
    data: any;

    constructor( private dialogRef: MatDialogRef<AddDotDialogComponent>,@Inject(MAT_DIALOG_DATA) data) {
        this.data = data;
        console.log(data);
    }

    @HostListener('window:keyup.esc') onKeyUp() {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

    save() {
        this.dialogRef.close(this.data);
    }

    close() {
        this.dialogRef.close();
    }

}
