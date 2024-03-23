import { GlobalService } from '../../auth/service/global.service';
import { NotificationModel } from '../../core/models/notification-model';

export class RootComponent {
    constructor(
        public globalService: GlobalService
    ) { }
    alertMessage(data: NotificationModel = {
        type: 'info',
        title: 'نوتیفیکیشن',
        value: 'این یک پیام آزمایشی است.'
    }) {
        this.globalService.dataBusChanged({ ev: 'notification', value: data });
    }
}