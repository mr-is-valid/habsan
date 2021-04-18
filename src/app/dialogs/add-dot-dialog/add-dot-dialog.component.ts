import { Component, OnInit , Inject , HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { HabsanApiService } from '../../services/habsan-api.service';

@Component({
    selector: 'app-add-dot-dialog',
    templateUrl: './add-dot-dialog.component.html',
    styleUrls: ['./add-dot-dialog.component.scss']
})
export class AddDotDialogComponent implements OnInit {
    
    data: any;
    switchData: any;
    systemData: any;
    switchTypeData: any;
    floorData: any;

    constructor(private habsanApiService:HabsanApiService, private dialogRef: MatDialogRef<AddDotDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data) {

        this.data = data;
        console.log(data);

        this.habsanApiService.getFloorData().subscribe(res => {
            this.floorData = res;
        });

        this.habsanApiService.getSwitchData().subscribe(res => {
            this.switchData = res;
        });

        this.habsanApiService.getSwitchTypeData().subscribe(res => {
            this.switchTypeData = res;
        });

        this.habsanApiService.getSystemData().subscribe(res => {
            this.systemData = res;
        });
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
