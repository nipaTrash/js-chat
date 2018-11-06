import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//quitar
import { ReactiveFormsModule } from '@angular/forms';//quitar

import { ChatsListModule } from '../chats-list/chats-list.module';
import { ChatUsersSelectorModule } from '../chat-users-selector/chat-users-selector.module';

import { ChatInteractionsModule } from '../chat-interaction/chat-interactions.module';

import { JsInbox } from './js-inbox';
import { InboxChat } from './inbox-chat/inbox-chat';


@NgModule({
    imports:[ CommonModule, ReactiveFormsModule, ChatsListModule, ChatUsersSelectorModule, ChatInteractionsModule ],
    declarations:[ 
        JsInbox,
        InboxChat
    ],
    exports:[ JsInbox ]
})
export class JsInboxModule{}