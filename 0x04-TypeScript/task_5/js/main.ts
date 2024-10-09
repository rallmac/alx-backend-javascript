interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}

const math: MajorCredits = { credits: 4, brand: 'MajorCredits' };
const physics: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const history: MinorCredits = { credits: 2, brand: 'MinorCredits' };
const literature: MinorCredits = { credits: 1, brand: 'MinorCredits' };

const totalMajorCredits = sumMajorCredits(math, physics);
const totalMinorCredits = sumMinorCredits(history, literature);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`);  
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);

