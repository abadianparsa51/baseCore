import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class GlobalService {
    dataSource: DataSourceClass = new DataSourceClass();
    globalData = new BehaviorSubject(this.dataSource);
    dataBusChanged(val: DataSourceClass) {
        this.dataSource = val;
        this.globalData.next(this.dataSource);
    }
    //////////
    filterData = new BehaviorSubject(this.dataSource);
    filterItems(val: DataSourceClass) {
        this.dataSource = val;
        this.filterData.next(this.dataSource);
    }
    //////////
    pagingValue: scrollPagingClass = new scrollPagingClass();
    scrollData = new BehaviorSubject(this.pagingValue);
    scrollingDetect(val: scrollPagingClass) {
        this.pagingValue = val;
        this.scrollData.next(this.pagingValue);
    }

}
export class scrollPagingClass {
    paging: boolean | undefined;
}
/////////
export class DataSourceClass {
    ev: string | undefined;
    value: any
}