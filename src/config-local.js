const CURRENT_YEAR = (new Date()).getFullYear();
//const API_BASE_DEFAULT = 'http://192.168.1.16/api';
const API_BASE = 'http://tms.loc/api';



Date.prototype.getMonthName = function() {
    var monthNames = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ];
    return monthNames[this.getMonth()];
}

Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

export {
    CURRENT_YEAR, API_BASE
}
