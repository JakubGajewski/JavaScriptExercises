/*Codewars: Money, money, money
http://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'
*/


function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (desired > principal) {
        principal *= 1 + (interest * (1 - tax));
        years++;
    }
    return years;
}