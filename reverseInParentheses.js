let inputString = "(bar)baz";
inputString = "foo(bar)bazz";
inputString = "foo(bar)baz(blim)"
inputString = "foo(bar(baz))blim"; 
//inputString = "";
//inputString = "()";
//inputString = "foo";

function reverseInParentheses(s) {
  while (true) {
      let c = s.indexOf(")");
      
      if (c === -1) {
          break;
      }
      
      let o = s.substring(0, c).lastIndexOf("(");
      let start = s.substring(0, o);
      let middle = s.substring(o + 1, c).split("").reverse().join("");
      let end = s.substring(c + 1, s.length);
          
      s = start + middle + end;
  }
  
  return s;
}

console.log(reverseInParentheses(inputString));
