//http://www.codewars.com/kata/get-the-middle-character/train/javascript

function getMiddle(s)
{
    return (s.length % 2 === 0) ? s.substring(s.length/2-1, s.length/2+1) : s.charAt(s.length/2);
}