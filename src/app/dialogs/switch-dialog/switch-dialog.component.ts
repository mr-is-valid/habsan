import { Component, OnInit , Inject , HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { HabsanApiService } from '../../services/habsan-api.service';

@Component({
    selector: 'app-switch-dialog',
    templateUrl: './switch-dialog.component.html',
    styleUrls: ['./switch-dialog.component.scss']
})
export class SwitchDialogComponent implements OnInit {
    
    switchItem: any;
    switchData: any;
    systemData: any;
    switchTypeData: any;
    floorData: any;

    constructor(private habsanApiService:HabsanApiService, private dialogRef: MatDialogRef<SwitchDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data) {
        this.switchItem = data;
        console.log(this.switchItem);

        // this.habsanApiService.getFloorData().subscribe(res => {
        //     this.floorData = res;
        // });

        // this.habsanApiService.getSwitchData().subscribe(res => {
        //     this.switchData = res;
        // });

        // this.habsanApiService.getSwitchTypeData().subscribe(res => {
        //     this.switchTypeData = res;
        // });

        // this.habsanApiService.getSystemData().subscribe(res => {
        //     this.systemData = res;
        // });
    }

    @HostListener('window:keyup.esc') onKeyUp() {
        this.dialogRef.close();
    }

    ngOnInit() {
    }

    save() {
        this.dialogRef.close(this.switchItem);
    }

    close() {
        this.dialogRef.close();
    }

}
