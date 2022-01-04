import _d, { getTimestamp } from 'datedash';

console.log(getTimestamp('Apr 4, 2017'));
// => 1491285600000

let any_date = 'Jan 7, 2019';

_d.date(any_date, '/');
// => 01/07/2019

_d.date(any_date, '-');
// => 01-07-2019

_d.date(any_date, '.');
// => 01.07.2019

_d.date(any_date, 'MMM DD YYYY');
// => Jan 07 2019

_d.date(any_date, 'england');
// => 07 Jan 2019

_d.date(any_date, 'uk');
// => 07 Jan 2019

_d.date(any_date, 'full');
// => Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)

_d.date('3/6/19');
// => 03/06/2019

_d.date('3-6-19');
// => 03/06/2019

_d.date('3.6.19');
// => 03/06/2019

_d.date('Mar 6 19');
// => 03/06/2019

_d.date('Mar 6, 19');
// => 03/06/2019

_d.date('Mar 6 2019');
// => 03/06/2019

_d.date('Mar 6, 2019');
// => 03/06/2019

_d.date('March 6 19');
// => 03/06/2019

_d.date('March 6, 2019');
// => 03/06/2019

_d.date('6 Mar 2019');
// => 03/06/2019

_d.date('6 March 2019');
// => 03/06/2019
