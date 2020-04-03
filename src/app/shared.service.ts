import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedSerive{
    private message =  new BehaviorSubject('First Message');
    sharedMessage = this.message.asObservable();

    nextMessage(message : string){
        this.message.next(message);
    }
}