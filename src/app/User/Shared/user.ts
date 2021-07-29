import { FileUpload, FileUploadModule } from 'primeng/fileupload';
// export class User {
//   constructor(public UserName?:string ,public Email?:string ,public Password?:string ,public FullName?:string ){}

// }
export class User {

  constructor(public PersonFirstName?:string ,public PersonEmailName?:string ,public PersonLastName?:string ,public PersonPassword?:string,public PersonPhone?:number,
    public ProfilePicture?:File ){}

}

