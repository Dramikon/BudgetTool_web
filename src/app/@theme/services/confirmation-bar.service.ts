import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Injectable()
export class ConfirmationBarService {
  constructor(private snackBar: MatSnackBar) {}

  openForSave(): MatSnackBarRef<any> {
    return this.open('Saved', 'Close');
  }

  openForUpload(): MatSnackBarRef<any> {
    return this.open('Uploaded', 'Close');
  }

  openForDelete(): MatSnackBarRef<any> {
    return this.open('Deleted', 'Close');
  }

  openForPermissions(): MatSnackBarRef<any> {
    return this.open('You don\'t have enough permission for this operation', 'Close');
  }

  openForEmptyFiles(): MatSnackBarRef<any> {
    return this.open('Please first select files to upload', 'Close');
  }

  open(message: string, action: string): MatSnackBarRef<any> {
    return this.snackBar.open(message, action, { duration: 2500 });
  }
}
