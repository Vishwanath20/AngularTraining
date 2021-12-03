import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
//import { FileUploader } from 'ng2-file-upload';
// import { ToastrService } from 'ngx-toastr';

const URL = 'http://localhost:8080/api/upload';

@Component({
  selector: 'app-fileuploaddownload',
  templateUrl: './fileuploaddownload.component.html',
  styleUrls: ['./fileuploaddownload.component.sass']
})
export class FileuploaddownloadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({
        url: URL,
        itemAlias: 'image'
      });
    
     constructor() { }
    
    
      ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => {
          file.withCredentials = false;
        };
        this.uploader.onCompleteItem = (item: any, status: any) => {
          console.log('Uploaded File Details:', item);
          alert('File successfully uploaded!');
        };
      }

      imageSrc: string;
      onFileChange($event: Event): void{
        const input = event.target as HTMLInputElement;

        const reader = new FileReader();
        if((event.target as HTMLInputElement).files && (event.target as HTMLInputElement).files.length) {
          const file = input.files[0];

          console.log('##### file is:::'+file);
          
          reader.readAsDataURL(file);
        
          reader.onload = () => {
       
            this.imageSrc = reader.result as string;
         
            
       
          };
      }

}
}
