const questions = [
  // Q1: p=2,q=3 => x^2+5x+6=0
  {
    equation: "x^2 + 5x = -6",
    step1options: [
      {option:"x^2 + 5x + 6 = 0", correct:true},
      {option:"x^2 + 5x - 6 = 0", correct:false},
      {option:"x^2 + 5x = 6", correct:false},
      {option:"x^2 - 5x + 6 = 0", correct:false},
      {option:"x^2 + 6x + 5 = 0", correct:false}
    ],
    step2options: [
      {option:"(x + 2)(x + 3) = 0", correct:true},
      {option:"(x + 6)(x - 1) = 0", correct:false},
      {option:"(x + 1)(x + 5) = 0", correct:false},
      {option:"(x - 2)(x - 3) = 0", correct:false},
      {option:"(x + 3)(x + 3) = 0", correct:false}
    ],
    step3options: [
      {option:"x = -2, x = -3", correct:true},
      {option:"x = 2, x = 3", correct:false},
      {option:"x = -3, x = -1", correct:false},
      {option:"x = -6, x = 1", correct:false},
      {option:"x = 3, x = -2", correct:false}
    ]
  },

  // Q2: p=-1,q=4 => x^2+3x+(-4)=0
  {
    equation: "x^2 + 3x = -4",
    step1options: [
      {option:"x^2 + 3x + 4 = 0", correct:true},
      {option:"x^2 + 3x - 4 = 0", correct:false},
      {option:"x^2 + 3x = 4", correct:false},
      {option:"x^2 - 3x + 4 = 0", correct:false},
      {option:"x^2 + 4x + 3 = 0", correct:false}
    ],
    step2options: [
      {option:"(x - 1)(x + 4) = 0", correct:true},
      {option:"(x + 1)(x - 4) = 0", correct:false},
      {option:"(x + 2)(x + 2) = 0", correct:false},
      {option:"(x - 2)(x + 6) = 0", correct:false},
      {option:"(x + 4)(x + 1) = 0", correct:false}
    ],
    step3options: [
      {option:"x = 1, x = -4", correct:true},
      {option:"x = -1, x = 4", correct:false},
      {option:"x = -4, x = -1", correct:false},
      {option:"x = 4, x = 1", correct:false},
      {option:"x = 2, x = -2", correct:false}
    ]
  },

  // Q3: p=-5,q=-2 => x^2-(5+2)x+( -5*-2)=x^2-7x+10=0
  {
    equation: "x^2 - 7x = -10",
    step1options: [
      {option:"x^2 - 7x + 10 = 0", correct:true},
      {option:"x^2 - 7x - 10 = 0", correct:false},
      {option:"x^2 - 7x = 10", correct:false},
      {option:"x^2 + 7x + 10 = 0", correct:false},
      {option:"x^2 - 10x + 7 = 0", correct:false}
    ],
    step2options: [
      {option:"(x - 5)(x - 2) = 0", correct:true},
      {option:"(x + 5)(x + 2) = 0", correct:false},
      {option:"(x - 10)(x + 1) = 0", correct:false},
      {option:"(x - 1)(x - 10) = 0", correct:false},
      {option:"(x - 2)(x - 5) = 0", correct:false} // reversed correct order as distractor
    ],
    step3options: [
      {option:"x = 5, x = 2", correct:true},
      {option:"x = -5, x = -2", correct:false},
      {option:"x = 2, x = -5", correct:false},
      {option:"x = -2, x = 5", correct:false},
      {option:"x = 10, x = 1", correct:false}
    ]
  },

  // Q4: p=1,q=-3 => x^2+(1-3)x+1*(-3)= x^2 -2x -3=0
  {
    equation:"x^2 - 2x = 3",
    step1options:[
      {option:"x^2 - 2x - 3 = 0", correct:true},
      {option:"x^2 - 2x + 3 = 0", correct:false},
      {option:"x^2 - 2x = -3", correct:false},
      {option:"x^2 + 2x - 3 = 0", correct:false},
      {option:"x^2 -3x -2=0", correct:false}
    ],
    step2options:[
      {option:"(x + 1)(x - 3) = 0", correct:true},
      {option:"(x -1)(x +3)=0", correct:false},
      {option:"(x -3)(x -1)=0", correct:false},
      {option:"(x +3)(x +1)=0", correct:false},
      {option:"(x +2)(x -6)=0", correct:false}
    ],
    step3options:[
      {option:"x = -1, x = 3", correct:true},
      {option:"x = 1, x = -3", correct:false},
      {option:"x = 3, x = 1", correct:false},
      {option:"x = -3, x = -1", correct:false},
      {option:"x = 2, x = -1", correct:false}
    ]
  },

  // Q5: p=5,q=-2 => x^2+(5-2)x+5*(-2)=x^2+3x-10=0
  {
    equation:"x^2 + 3x = 10",
    step1options:[
      {option:"x^2 + 3x - 10 = 0", correct:true},
      {option:"x^2 + 3x + 10 = 0", correct:false},
      {option:"x^2 + 3x = -10", correct:false},
      {option:"x^2 -3x -10=0", correct:false},
      {option:"2x^2+3x-10=0", correct:false}
    ],
    step2options:[
      {option:"(x + 5)(x - 2) = 0", correct:true},
      {option:"(x -5)(x +2)=0", correct:false},
      {option:"(x +2)(x -5)=0", correct:false},
      {option:"(x +10)(x -1)=0", correct:false},
      {option:"(x +1)(x -10)=0", correct:false}
    ],
    step3options:[
      {option:"x = -5, x = 2", correct:true},
      {option:"x = 5, x = -2", correct:false},
      {option:"x = 2, x = -5", correct:false},
      {option:"x = -2, x = -5", correct:false},
      {option:"x = -10, x = 1", correct:false}
    ]
  },

  // Q6: p=-4,q=-4 => x^2 + (-8)x +16=0
  {
    equation:"x^2 - 8x = -16",
    step1options:[
      {option:"x^2 - 8x + 16 = 0", correct:true},
      {option:"x^2 -8x -16=0", correct:false},
      {option:"x^2 -8x=16", correct:false},
      {option:"x^2 +8x +16=0", correct:false},
      {option:"x^2 -4x+4=0", correct:false}
    ],
    step2options:[
      {option:"(x - 4)(x - 4) = 0", correct:true},
      {option:"(x +4)(x +4)=0", correct:false},
      {option:"(x -2)(x -8)=0", correct:false},
      {option:"(x -1)(x -16)=0", correct:false},
      {option:"(x +1)(x -4)=0", correct:false}
    ],
    step3options:[
      {option:"x = 4", correct:true},
      {option:"x = -4", correct:false},
      {option:"x = 0", correct:false},
      {option:"x = 2", correct:false},
      {option:"x = -2", correct:false}
    ]
  },

  // Q7: p=9,q=1 => x^2+10x+9=0
  {
    equation:"x^2 + 10x = -9",
    step1options:[
      {option:"x^2 + 10x + 9 = 0", correct:true},
      {option:"x^2 +10x -9=0", correct:false},
      {option:"x^2 +10x=9", correct:false},
      {option:"x^2 -10x +9=0", correct:false},
      {option:"x^2 +9x +10=0", correct:false}
    ],
    step2options:[
      {option:"(x + 9)(x + 1) = 0", correct:true},
      {option:"(x -9)(x -1)=0", correct:false},
      {option:"(x +3)(x +6)=0", correct:false},
      {option:"(x +1)(x +10)=0", correct:false},
      {option:"(x +2)(x +8)=0", correct:false}
    ],
    step3options:[
      {option:"x = -9, x = -1", correct:true},
      {option:"x = 9, x = 1", correct:false},
      {option:"x = -1, x = 1", correct:false},
      {option:"x = -3, x = -6", correct:false},
      {option:"x = -10, x = -9", correct:false}
    ]
  },

  // Q8: p=-2,q=-3 => x^2-5x+6=0
  {
    equation:"x^2 - 5x = -6",
    step1options:[
      {option:"x^2 - 5x + 6 = 0", correct:true},
      {option:"x^2 -5x -6=0", correct:false},
      {option:"x^2 -5x=6", correct:false},
      {option:"x^2 +5x +6=0", correct:false},
      {option:"2x^2 -5x +6=0", correct:false}
    ],
    step2options:[
      {option:"(x - 2)(x - 3) = 0", correct:true},
      {option:"(x +2)(x +3)=0", correct:false},
      {option:"(x -1)(x -6)=0", correct:false},
      {option:"(x -3)(x -2)=0", correct:false},
      {option:"(x +1)(x -6)=0", correct:false}
    ],
    step3options:[
      {option:"x = 2, x = 3", correct:true},
      {option:"x = -2, x = -3", correct:false},
      {option:"x = 3, x = -2", correct:false},
      {option:"x = -3, x = 1", correct:false},
      {option:"x = 6, x = -1", correct:false}
    ]
  },

  // Q9: p=6,q=-1 => x^2+5x-6=0
  {
    equation:"x^2 + 5x = 6",
    step1options:[
      {option:"x^2 + 5x - 6 = 0", correct:true},
      {option:"x^2 +5x +6=0", correct:false},
      {option:"x^2 +5x= -6", correct:false},
      {option:"x^2 -5x -6=0", correct:false},
      {option:"x^2 +6x -5=0", correct:false}
    ],
    step2options:[
      {option:"(x + 6)(x - 1) = 0", correct:true},
      {option:"(x -6)(x +1)=0", correct:false},
      {option:"(x +2)(x +3)=0", correct:false},
      {option:"(x -3)(x -2)=0", correct:false},
      {option:"(x +1)(x -6)=0", correct:false}
    ],
    step3options:[
      {option:"x = -6, x = 1", correct:true},
      {option:"x = 6, x = -1", correct:false},
      {option:"x = 1, x = 6", correct:false},
      {option:"x = -1, x = -6", correct:false},
      {option:"x = 2, x = -3", correct:false}
    ]
  },

  // Q10: p=-7,q=2 => x^2 -5x-14=0
  {
    equation:"x^2 - 5x = 14",
    step1options:[
      {option:"x^2 - 5x - 14 = 0", correct:true},
      {option:"x^2 -5x +14=0", correct:false},
      {option:"x^2 -5x= -14", correct:false},
      {option:"x^2 +5x -14=0", correct:false},
      {option:"x^2 -10x +5=0", correct:false}
    ],
    step2options:[
      {option:"(x - 7)(x + 2) = 0", correct:true},
      {option:"(x +7)(x -2)=0", correct:false},
      {option:"(x -1)(x -14)=0", correct:false},
      {option:"(x +1)(x +14)=0", correct:false},
      {option:"(x +2)(x -6)=0", correct:false}
    ],
    step3options:[
      {option:"x = 7, x = -2", correct:true},
      {option:"x = -7, x = 2", correct:false},
      {option:"x = -2, x = -7", correct:false},
      {option:"x = 2, x = -7", correct:false},
      {option:"x = 10, x = 1", correct:false}
    ]
  }
];
