import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsNgItemsSelectorModule } from '../../@js-lib';
import { ChatUsersSelector } from './chat-users-selector';

@NgModule({
    imports:[ CommonModule, JsNgItemsSelectorModule ],
    declarations:[ ChatUsersSelector ],
    exports:[ ChatUsersSelector ]
})
export class ChatUsersSelectorModule{}