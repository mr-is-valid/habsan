import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { SwitchDialogComponent } from '../../dialogs/switch-dialog/switch-dialog.component'

@Component({
    selector: 'app-switches-component',
    templateUrl: './switches.component.html',
    styleUrls: ['./switches.component.scss']
})
export class SwitchComponent implements OnInit {
    
    public searchFilter = "";

    data = [
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
            },
            "floor": {
                "floorId": 2,
                "floorName": "1 צפוני"
            },
            "system": {
                "systemId": 1,
                "systemName": "שביל החלב"
            }
        },
        {
            "switchId": 2,
            "switchName": "switch2",
            "ipAddress": "1.1.1.2",
            "ports": 24,
            "numOfSwitch": 1,
            "floorId": 2,
            "switchTypeId": 2,
            "systemId": 2,
            "switchType": {
                "Id": 2,
                "type": "C2960X",
                "portType": "Gi"
            },
            "floor": {
                "floorId": 2,
                "floorName": "3 צפוני"
            },
            "system": {
                "systemId": 2,
                "systemName": "שביל החלב"
            }
        },
        {
            "switchId": 3,
            "switchName": "switch3",
            "ipAddress": "1.1.1.3",
            "ports": 48,
            "numOfSwitch": 1,
            "floorId": 3,
            "switchTypeId": 3,
            "systemId": 3,
            "switchType": {
                "Id": 3,
                "type": "C2960XR",
                "portType": "Gi"
            },
            "floor": {
                "floorId": 3,
                "floorName": "3 צפוני"
            },
            "system": {
                "systemId": 3,
                "systemName": "שביל החלב"
            }
        },
        {
            "switchId": 2,
            "switchName": "switch4",
            "ipAddress": "1.1.1.2",
            "ports": 24,
            "numOfSwitch": 1,
            "floorId": 2,
            "switchTypeId": 2,
            "systemId": 2,
            "switchType": {
                "Id": 2,
                "type": "C2960X",
                "portType": "Gi"
            },
            "floor": {
                "floorId": 2,
                "floorName": "3 צפוני"
            },
            "system": {
                "systemId": 2,
                "systemName": "שביל החלב"
            }
        },
        {
            "switchId": 2,
            "switchName": "switch5",
            "ipAddress": "1.1.1.2",
            "ports": 24,
            "numOfSwitch": 1,
            "floorId": 2,
            "switchTypeId": 2,
            "systemId": 2,
            "switchType": {
                "Id": 2,
                "type": "C2960X",
                "portType": "Gi"
            },
            "floor": {
                "floorId": 2,
                "floorName": "3 צפוני"
            },
            "system": {
                "systemId": 2,
                "systemName": "שביל החלב"
            }
        }
    ]

    tempData = [];

    constructor(public dialog: MatDialog) {
        Object.assign(this.tempData,[...this.data]);
    }

    ngOnInit() {
    }

    valuechange(event){
        if(event == '')
            Object.assign(this.tempData,[...this.data]);
        else 
            this.tempData = this.data.filter(item => item.switchName == event);
    }

    addDialog() {
        this.dialog.open(SwitchDialogComponent);
    }


    editSwitch(switchItem){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
            data : switchItem
        };
        const dialogRef = this.dialog.open(SwitchDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe( data =>{
            console.log(data);
        })
    }

    deleteSwitch(switchID){
        if(confirm("Are you sure you want to delete this switch ?")) {
            console.log("Implement delete functionality here");
        }
    }

}
