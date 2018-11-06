import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';


import { JsChatRoutingModule } from './js-chat-routing.module';
import { JsChatComponent } from './js-chat.component';
import { ChatsController } from './controllers/chats.controller';
import { ChatController } from './controllers/chat.controller';
import { MsgController } from './controllers/msg.controller';
import { ChatCssController } from './controllers/chat-css.controller';

import { ChatPopupsController } from './controllers/chat-popups.controller';
import { ChatLabelsEditor } from './chat-labels-editor/chat-labels-editor';


import { JsChatboxModule } from './js-chatbox/js-chatbox.module';
import { JsInboxModule } from './js-inbox/js-inbox.module';

import { 
    JsNgLabelsEditorModule,
    JsNgPopupModule
} from '../@js-lib/index';


@NgModule({
    imports:[ 
        CommonModule, 
        JsChatRoutingModule,
        JsChatboxModule, 
        JsInboxModule, 
        JsNgLabelsEditorModule, 
        JsNgPopupModule, 
        BrowserAnimationsModule, 
        MatInputModule
    ],
    declarations:[ JsChatComponent, ChatLabelsEditor ],
    exports:[ JsChatComponent ],
    providers:[ ChatsController, ChatController, MsgController, ChatPopupsController, ChatCssController ]
})
export class JsChatModule{}