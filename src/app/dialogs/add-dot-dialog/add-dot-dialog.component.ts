import { Component, OnInit , Inject , HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { HabsanApiService } from '../../services/habsan-api.service';

@Component({
    selector: 'app-add-dot-dialog',
    templateUrl: './add-dot-dialog.component.html',
    styleUrls: ['./add-dot-dialog.component.scss']
})
export class AddDotDialogComponent implements OnInit {
    
    dotDetails: any;

    switchTypeData = [
        {
            "Id": 1,
            "type": "C2960",
            "portType": "Fa"
        },
        {
            "Id": 2,
            "type": "C2960X",
            "portType": "Gi"
        },
        {
            "Id": 3,
            "type": "C2960XR",
            "portType": "Gi"
        }
    ]

    switchData = [
        {
            "switchId": 1,
            "switchName": "switch1",
            "ipAddress": "1.1.1.1",
            "ports": 24,
            "numOfSwitch": 1,
            "floorId": 1,
            "switchTypeId": 1,
            "systemId": 1,
            "switchType": {
                "Id": 1,
                "type": "C2960",
                "portType": "Fa"
            }
        },
        {
            "switchId": 2,
            "switchName": "switch2",
            "ipAddress": "2.2.2.2",
            "ports": 24,
            "numOfSwitch": 1,
            "floorId": 1,
            "switchTypeId": 1,
            "systemId": 1,
            "switchType": {
                "Id": 1,
                "type": "C2960",
                "portType": "Fa"
            }
        },
        {
            "switchId": 3,
            "switchName": "switch3",
            "ipAddress": "3.3.3.3",
            "ports": 24,
            "numOfSwitch": 1,
            "floorId": 1,
            "switchTypeId": 1,
            "systemId": 1,
            "switchType": {
                "Id": 1,
                "type": "C2960",
                "portType": "Fa"
            }
        },
    ]

    systemData = [
        {
            "systemId": 1,
            "systemName": "שביל החלב"
        },
        {
            "systemId": 2,
            "systemName": "קרן אור"
        },
        {
            "systemId": 3,
            "systemName": "נתיב רקיע"
        }
    ];

    floorData = [
        {
            "floorId": 1,
            "floorName": "test1"
        },
        {
            "floorId": 2,
            "floorName": "test2"
        },
        {
            "floorId": 3,
            "floorName": "test3"
        },
    ]

    dotModel = {
        "dotWallName": "",
        "room": "",
        "connectedToPort": "",
        "isConnected": true,
        "vlan": "",
        "switchId": 0,
        "floorId": 0,
        "systemId": 0
    }


    constructor(private habsanApiService:HabsanApiService, private dialogRef: MatDialogRef<AddDotDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data) {

        this.dotDetails = data;
        console.log(this.dotDetails);

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
        this.dialogRef.close(this.dotDetails);
    }

    changeValue(value , field){
        switch(field){
            case "floorId" : 
                            this.dotDetails?Object.assign(this.dotDetails.floor,value):this.dotModel.floorId = value; 
                            break;
            case "systemId": 
                            this.dotDetails?Object.assign(this.dotDetails.system,value):this.dotModel.systemId = value; 
                            break;
            case "switchId": 
                            this.dotDetails?Object.assign(this.dotDetails.switch,value):this.dotModel.switchId = value; 
                            break;
        }
    }


}
