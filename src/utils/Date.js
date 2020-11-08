/* eslint-disable default-case */

class Data {
  constructor () {
    this.today = new Date();
  }
  // Преобразуем месяца
  _changerData = () => {
    this.dataArr = this.dataString.split('-');
    this.year = this.dataArr[0];
    this.month = this.dataArr[1];
    this.day = this.dataArr[2];

    switch (+this.month) {
      case 1: this.fMonth = "января";
        break;
      case 2: this.fMonth = "февраля";
        break;
      case 3: this.fMonth = "марта";
        break;
      case 4: this.fMonth = "апреля";
        break;
      case 5: this.fMonth = "мая";
        break;
      case 6: this.fMonth = "июня";
        break;
      case 7: this.fMonth = "июля";
        break;
      case 8: this.fMonth = "августа";
        break;
      case 9: this.fMonth = "сентября";
        break;
      case 10: this.fMonth = "октября";
        break;
      case 11: this.fMonth = "ноября";
        break;
      case 12: this.fMonth = "декабря";
        break;
    }
    return this.fMonth;
  }
// iso формат режет на дату xxxx-xx-xx
  toResults = (dataString) => {
    return dataString.substring(0, 10);
  }

  getLastWeek = () => {
    const previousDate = new Date(this.today.getTime() - 604800000);
    return this.toResults(new Date(previousDate).toISOString());
  }

  getToday = () => {
    return this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
  }
// формат даты для отображения карточек
  toAtticle = (dataString) => {
    this.dataString = dataString;
    this._changerData();
    return `${this.day} ${this.fMonth}, ${this.year}`;
  }
}

export const myData = new Data();