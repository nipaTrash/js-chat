import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ChatHistoryComponent } from './chat-history.component';
import { ChatReplyComponent } from './chat-reply.component';

@NgModule({
    imports:[ CommonModule, ReactiveFormsModule ],
    declarations:[ ChatHistoryComponent, ChatReplyComponent ],
    exports:[ ChatHistoryComponent, ChatReplyComponent ]
})
export class ChatInteractionsModule{
    
}