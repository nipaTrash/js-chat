import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from'@angular/forms';

import { MsgController } from '../controllers/msg.controller';
import { Chat } from '../chat';
import { Msg } from '../msg';

@Component({
    selector:'chat-reply',
    templateUrl:'./chat-reply.component.html'
})
export class ChatReplyComponent{
    
    @Input() chatMsgs: Msg[];
    @Input() chat: Chat;
    
    private _msgController:MsgController;
    private _fb:FormBuilder;
    replayForm: FormGroup;
    
    constructor(msgController:MsgController, fb:FormBuilder){
        this._msgController = msgController;
        this._fb = fb;
    }
    
    ngOnInit(){
        this.replayForm = this._fb.group({
            replayInput:['',Validators.required]
        });
    }
    
    onSend(): void{
        const msg = this.replayForm.get('replayInput').value;
        this._msgController.sendMsg(this.chat,msg);
        this.cleanReplayInput();
    }
    cleanReplayInput(): void{
        this.replayForm.get('replayInput').setValue('');
    }
}

