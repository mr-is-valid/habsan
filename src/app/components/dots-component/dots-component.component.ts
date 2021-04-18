import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddDotDialogComponent } from '../../dialogs/add-dot-dialog/add-dot-dialog.component'

@Component({
    selector: 'app-dots-component',
    templateUrl: './dots-component.component.html',
    styleUrls: ['./dots-component.component.scss']
})
export class DotsComponentComponent implements OnInit {
    
    public searchFilter = "";

    data = [
        {
            "dotId": 1,
            "dotWallName": "a1",
            "room": "111",
            "connectedToPort": "1",
            "vlan": 100,
            "isConnected": true,
            "switch": {
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
            "floor": {
                "floorId": 1,
                "floorName": "test1"
            },
            "system": {
                "systemId": 1,
                "systemName": "שביל החלב"
            }
        },
        {
            "dotId": 2,
            "dotWallName": "a2",
            "room": "222",
            "connectedToPort": "2",
            "vlan": 100,
            "isConnected": true,
            "switch": {
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
                }
            },
            "floor": {
                "floorId": 2,
                "floorName": "test2"
            },
            "system": {
                "systemId": 2,
                "systemName": "צהלנט"
            }
        },
        {
            "dotId": 3,
            "dotWallName": "a3",
            "room": "333",
            "connectedToPort": "3",
            "vlan": 100,
            "isConnected": true,
            "switch": {
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
                }
            },
            "floor": {
                "floorId": 3,
                "floorName": "test3"
            },
            "system": {
                "systemId": 3,
                "systemName": "system"
            }
        },
        {
            "dotId": 4,
            "dotWallName": "a4",
            "room": "444",
            "connectedToPort": "4",
            "isConnected": false,
            "vlan": 100,
            "switch": {
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
                }
            },
            "floor": {
                "floorId": 1,
                "floorName": "test1"
            },
            "system": {
                "systemId": 1,
                "systemName": "שביל החלב"
            }
        },
        {
            "dotId": 5,
            "dotWallName": "test",
            "room": "230",
            "isConnected": false,
            "connectedToPort": "4",
            "vlan": 100,
            "switch": {
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
                }
            },
            "floor": {
                "floorId": 1,
                "floorName": "test1"
            },
            "system": {
                "systemId": 1,
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
            this.tempData = this.data.filter(item => item.dotWallName == event);
    }

    openDialog() {
        this.dialog.open(AddDotDialogComponent);
    }

    editDot(dot){
        const dialogConfig = new MatDialogConfig();
        
        dialogConfig.data = {
            dot : dot
        };
        const dialogRef = this.dialog.open(AddDotDialogComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
            data => console.log("Dialog output:", data)
        ); 
    }

    deleteDot(dotID){
        if(confirm("Are you sure you want to delete this dot ?")) {
            console.log("Implement delete functionality here");
        }
    }

}
