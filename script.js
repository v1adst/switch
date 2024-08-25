console.log('*');
let tips=275;
switch(true){
  case tips > 0 && tips < 50:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.2} \nTotal spre plată:${tips+(tips*0.2)}`);
    break;
  case tips>=50 && tips<=300:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.15} \nTotal spre plată:${tips+(tips*0.15)}`);
    break;
  case tips>300:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.2} \nTotal spre plată:${tips+(tips*0.2)}`);
    break;
  default:
    console.warn('Nu ați consumat nimic.');
}
console.log('*');

tips=40;
switch(true){
  case tips > 0 && tips < 50:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.2} \nTotal spre plată:${tips+(tips*0.2)}`);
    break;
  case tips>=50 && tips<=300:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.15} \nTotal spre plată:${tips+(tips*0.15)}`);
    break;
  case tips>300:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.2} \nTotal spre plată:${tips+(tips*0.2)}`);
    break;
  default:
    console.warn('Nu ați consumat nimic.');
}
console.log('*');

tips=430;
switch(true){
  case tips > 0 && tips < 50:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.2} \nTotal spre plată:${tips+(tips*0.2)}`);
    break;
  case tips>=50 && tips<=300:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.15} \nTotal spre plată:${tips+(tips*0.15)}`);
    break;
  case tips>300:
    console.log(`Nota:${tips} \nBacșișul:${tips*0.2} \nTotal spre plată:${tips+(tips*0.2)}`);
    break;
  default:
    console.warn('Nu ați consumat nimic.');
}
console.log('*');