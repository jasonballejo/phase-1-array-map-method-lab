const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  const array = tutorials.map(function(str) {
    const name = str.split(' ')
    console.log(name)
    const string2 = name.map(function (str2) {
        return str2[0].toUpperCase() + str2.slice(1)
    }) 
    return string2.join(' ')
  }) 
  return array
}
titleCased()