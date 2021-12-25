class Questions {
  constructor(text,options,answer,points,category) {
    this.text = text;
    this.options = options;
    this.answer = answer;
    this.points = points;
    this.category = category;

  }
}


const questions = [
  new Questions("What is true ?",["5+5=11","5^5=125","5x5=25","5-5=5"],"5x5=25",5,"math"),
  new Questions("What is false ?",["3^3=27","3=3+3","36=3+33","333=333"],"3=3+3",5,"math"),
  new Questions("What is true ?",["4=4+4","4^4=44","4x4=44","44-4=40"],"44-4=40",5,"math"),
  new Questions("What is false ?",["6+6=36","6x6=36","6-6=0","11=66:6"],"6+6=36",5,"math"),
  new Questions("What is true ?",["2+2=22","22=22+2","2^2=6","2x2x2=8"],"2x2x2=8",5,"math")
];
