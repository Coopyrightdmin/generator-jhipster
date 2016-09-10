import { NgModule } from '@angular/core';

import { TruncateCharactersPipe } from './pipe/truncate-characters.pipe';
import { TruncateWordsPipe } from './pipe/truncate-words.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { OrderByPipe } from './pipe/order-by.pipe';
import { TranslatePipe } from './pipe/translate.pipe';

import { JhiItemCount } from './component/jhi-item-count.component';
import { MaxbytesValidator } from './directive/maxbytes.directive';
import { MinbytesValidator } from './directive/minbytes.directive';
import { ShowValidation } from './directive/show-validation.directive';

@NgModule({
    imports: [],
    declarations: [
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        TranslatePipe,
        CapitalizePipe,
        JhiItemCount,
        MaxbytesValidator,
        MinbytesValidator,
        ShowValidation
    ],
    providers: [
    ],
    exports: [
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        TranslatePipe,
        CapitalizePipe,
        JhiItemCount,
        MaxbytesValidator,
        MinbytesValidator,
        ShowValidation
    ]
})
export class <%=angular2AppName%>SharedModule {}
