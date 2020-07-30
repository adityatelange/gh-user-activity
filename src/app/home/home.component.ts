import { SetGhPatKeyService } from './../services/set-gh-pat-key.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  key: string = this.SetGhPatKeyService.get_pat();
  constructor(public dialog: MatDialog, public SetGhPatKeyService: SetGhPatKeyService) { }

  ngOnInit(): void {
  }

  openDialog() {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(KeyDialogComponent, {
        width: '250px',
        data: { key: this.key }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.key = result
          this.SetGhPatKeyService.set_pat(this.key);
        }
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
