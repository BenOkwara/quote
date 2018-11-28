import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

    transform(value: any, args?: any): any {
      let today:Date = new Date(); //get current date and time
      let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      var dateDifference = Math.abs(todayWithNoTime -value) // It returns value in millisec.
      const secondsInADay=86400; // 60 seconds*60 minutes in an hour * 24hours

      var dateDifferenceSeconds= dateDifference * 0.001; // It converts times to seconds

      var dateCounter = dateDifferenceSeconds / secondsInADay;

      if (dateCounter >= 1) {
        return dateCounter;
      }else{
        return 0;
      }
    }
}
