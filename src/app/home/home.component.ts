import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  key: string
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(KeyDialogComponent, {
        width: '250px',
        data: { key: this.key }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.key = result
        console.log(this.key);
      });
    }
  }
}

@Component({
  selector: 'key-dialog',
  templateUrl: './key-dialog.component.html',
})
export class KeyDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
