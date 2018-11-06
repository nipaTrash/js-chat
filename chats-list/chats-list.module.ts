import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ChatsList } from './chats-list';
import { ChatsListItem } from './chats-list-item';

import { ChatsFilterPipe } from './chats-filter.pipe';

import { ChatsFilters } from './filters/chats-filters';
import { ChatsLabels } from './filters/chats-labels';
import { ChatsSearch } from './filters/chats-search';

import { JsNgFormModule, JsNgMenuModule } from '../../@js-lib/index';

@NgModule({
    declarations:[ 
        ChatsList, 
        ChatsListItem, 
        ChatsFilterPipe,
        ChatsFilters,
        ChatsLabels,
        ChatsSearch
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        JsNgFormModule,
        JsNgMenuModule
    ],
    exports:[ ChatsList, ChatsFilterPipe, ChatsFilters, ChatsLabels, ChatsSearch ]
})
export class ChatsListModule{}