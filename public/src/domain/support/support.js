import moment from 'moment';

export const canSupport = (date) =>  {
    if(!date) {
        return true;
    }
    const todayDate = moment();
    return moment(date).isBefore(todayDate, 'day');
}
