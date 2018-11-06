import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JsChatbox } from './js-chatbox';
import { JsChatboxContainer } from './js-chatbox-container';

import { ChatUsersSelectorModule } from '../chat-users-selector/chat-users-selector.module';
import { ChatInteractionsModule } from '../chat-interaction/chat-interactions.module';
import { ChatsListModule } from '../chats-list/chats-list.module';

import { JsNgPopupModule } from '../../@js-lib/index';

@NgModule({
    declarations:[ 
        JsChatbox, 
        JsChatboxContainer
    ],
    entryComponents:[JsChatbox],
    imports:[ 
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule, 
        JsNgPopupModule, 
        ChatsListModule, 
        ChatUsersSelectorModule, 
        ChatInteractionsModule 
    ],
    exports:[ JsChatboxContainer ]
})
export class JsChatboxModule{}