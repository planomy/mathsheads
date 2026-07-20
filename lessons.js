/* Maths Heads · Year 5 · Term 3 · Teacher presentation lessons
   ready: true = full 6-slide deck
*/
const LESSONS = [
  {
    id:'w1-l1', week:1, lesson:1, code:'19.3', ready:true,
    title:'Comparing and ordering fractions',
    subtitle:'Fractions strand',
    focus:'compare fractions and put them in order — and say how we know.',
    hot:'Mia says <b>3/8</b> is bigger than <b>3/6</b> because 8 is bigger than 6. Is she right? Draw or explain to prove it.',
    hero:{ src:'images/w1-l1-pizza-night.jpg', alt:'Two pizzas cut into different numbers of slices', caption:'Pizza night — who ate more?' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Which is larger: <b>1/4</b> or <b>1/2</b>?", answer:"1/2" },
        { prompt:"Larger: 2/5 or 4/5?", answer:"4/5" },
        { prompt:"Larger: 1/8 or 5/8?", answer:"5/8" },
        { prompt:"Order: 1/4, 3/4, 2/4", answer:"1/4, 2/4, 3/4" },
        { prompt:"Larger: 1/2 or 3/8?", answer:"1/2" }
      ],
      2:[
        { prompt:"Order smallest → largest: <b>1/2, 1/3, 2/3</b>", answer:"1/3, 1/2, 2/3" },
        { prompt:"Larger: 1/3 or 1/4?", answer:"1/3" },
        { prompt:"Order: 1/5, 1/2, 3/5", answer:"1/5, 1/2, 3/5" },
        { prompt:"Larger: 2/3 or 1/2?", answer:"2/3" },
        { prompt:"Larger: 3/8 or 1/2?", answer:"1/2" }
      ],
      3:[
        { prompt:"Which is larger: <b>2/3</b> or <b>3/4</b>?", answer:"3/4" },
        { prompt:"Larger: 3/5 or 2/3?", answer:"2/3" },
        { prompt:"Larger: 5/6 or 3/4?", answer:"5/6" },
        { prompt:"Order: 2/5, 1/2, 3/4", answer:"2/5, 1/2, 3/4" },
        { prompt:"Larger: 7/8 or 4/5?", answer:"7/8" }
      ],
    },
    hook:{
      title:'Pizza night!',
      problem:'Two pizzas, same size. <b>Pizza A</b> is cut into <b>8</b> slices. <b>Pizza B</b> is cut into <b>6</b> slices. Jake eats <b>3</b> from A. Mia eats <b>3</b> from B.<br><b>Who ate more?</b> How do you know?',
      context:'Let students draw both pizzas. No calculators — convince a partner.'
    },
    hookSolution:{
      heading:'Who ate more?',
      steps:[
        'Jake ate <b>3/8</b> of his pizza. Mia ate <b>3/6</b> of hers.',
        'Same number of slices — but sixths are <b>bigger pieces</b> than eighths.',
        '3/6 = <b>1/2</b> — Mia ate half the pizza. 3/8 is <b>less than</b> half.',
        'So Mia ate more. We compared fractions with the <b>same numerator</b> but different denominators.'
      ],
      answer:'Mia ate more (3/6 > 3/8)'
    },
    concept:{
      heading:'Comparing & ordering fractions',
      body:[
        '<b>Same denominator?</b> Compare numerators — bigger top = bigger fraction.',
        'Use <b>1/2</b> as a benchmark: is the fraction less than, equal to, or more than half?',
        'Different denominators? Use <b>equivalent fractions</b> or a number line to order.'
      ],
      notice:'Always say <b>why</b> one fraction is larger — show your thinking.',
      example:'2/3 vs 3/4 → 8/12 vs 9/12 → 3/4 is larger'
    },
    practice:{
      1:[
        { prompt:'Larger: 2/5 or 4/5?', answer:'4/5' },
        { prompt:'Larger: 1/8 or 5/8?', answer:'5/8' },
        { prompt:'Order: 1/4, 3/4, 2/4', answer:'1/4, 2/4, 3/4' },
        { prompt:'Larger: 1/2 or 3/8?', answer:'1/2' }
      ],
      2:[
        { prompt:'Larger: 1/3 or 1/4?', answer:'1/3' },
        { prompt:'Order: 1/5, 1/2, 3/5', answer:'1/5, 1/2, 3/5' },
        { prompt:'Larger: 2/3 or 1/2?', answer:'2/3' },
        { prompt:'Larger: 3/8 or 1/2?', answer:'1/2' }
      ],
      3:[
        { prompt:'Larger: 3/5 or 2/3?', answer:'2/3' },
        { prompt:'Larger: 5/6 or 3/4?', answer:'5/6' },
        { prompt:'Order: 2/5, 1/2, 3/4', answer:'2/5, 1/2, 3/4' },
        { prompt:'Larger: 7/8 or 4/5?', answer:'7/8' }
      ]
    },
    wordProblems:[
      { prompt:'A rope is 1/2 m long. Another is 3/8 m long. Which rope is longer? How much longer (as a fraction)?', answer:'1/2 is longer by 1/8 m' },
      { prompt:'In a survey, 2/5 of students chose soccer and 1/3 chose basketball. Which sport was more popular?', answer:'Soccer (2/5 > 1/3)' },
      { prompt:'You eat 1/4 of a chocolate block. Your sister eats 1/3 of the same block. Who ate more?', answer:'Sister (1/3 > 1/4)' }
    ],
    notes:{
      title:'<p>~45 min after homework/routines. Have fraction strips or paper pizzas ready.</p>',
      diagnostic:'<p>Circulate only — no marking. <b>5 problems per tier column</b> (~8 min). Place at the <b>highest tier where a student scores 3+</b>. Tier 1 column shaky → Tier 1 practice.</p>',
      placement:'<ul><li><b>Tier 1</b> — fewer than 3 correct in Tier 1 column → same-denominator work</li><li><b>Tier 2</b> — 3+ in Tier 1, struggles with Tier 2 → mixed denominators</li><li><b>Tier 3</b> — 3+ in Tier 2, attempts Tier 3 → unlike denominators</li></ul>',
      hook:'<p>Let pairs debate 2–3 min before solution slide. Draw out “same slices, different slice sizes.”</p>',
      solution:'<p>Connect to diagnostic #1 (1/4 vs 1/2). This is the conceptual “aha” for the lesson.</p>',
      concept:'<p>Number line on board. Add benchmark 1/2 tick.</p>',
      practice:'<p>~10 min tier work + ~8 min word problems in books. Word problems are for everyone.</p>'
    }
  },
  {
    id:'w1-l2', week:1, lesson:2, code:'20.1', ready:true,
    title:'Adding and subtracting fractions',
    subtitle:'Same and related denominators',
    focus:'add and subtract fractions that have the same (or matching) bottom numbers.',
    hot:'Can you invent two fractions that add to <b>1</b> but have different denominators? Show your working.',
    hero:{ src:'images/w1-l2-pancake-stack.jpg', alt:'Stack of pancakes with measuring cups of batter', caption:'The pancake stack' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>1/5 + 2/5 = ?</b>", answer:"3/5" },
        { prompt:"2/7 + 3/7 = ?", answer:"5/7" },
        { prompt:"5/8 − 2/8 = ?", answer:"3/8" },
        { prompt:"1/6 + 4/6 = ?", answer:"5/6" },
        { prompt:"4/5 − 1/5 = ?", answer:"3/5" }
      ],
      2:[
        { prompt:"<b>1/3 + 1/6 = ?</b>", answer:"1/2" },
        { prompt:"1/4 + 1/2 = ?", answer:"3/4" },
        { prompt:"2/3 − 1/6 = ?", answer:"1/2" },
        { prompt:"1/3 + 1/3 = ?", answer:"2/3" },
        { prompt:"3/4 − 1/2 = ?", answer:"1/4" }
      ],
      3:[
        { prompt:"<b>5/6 − 1/4 = ?</b>", answer:"7/12" },
        { prompt:"2/3 + 1/4 = ?", answer:"11/12" },
        { prompt:"5/6 − 1/3 = ?", answer:"1/2" },
        { prompt:"3/5 + 1/10 = ?", answer:"7/10" },
        { prompt:"7/8 − 1/2 = ?", answer:"3/8" }
      ],
    },
    hook:{
      title:'The pancake stack',
      problem:'You pour <b>1/4</b> cup of batter for the first pancake, then <b>1/2</b> cup for a bigger one. How much batter have you used <b>altogether</b>?',
      context:'Kitchen maths — draw a cup diagram if needed.'
    },
    hookSolution:{
      heading:'Altogether means add',
      steps:[
        '“Altogether” tells us to <b>add</b>: 1/4 + 1/2.',
        '1/2 = <b>2/4</b> — same denominator.',
        '1/4 + 2/4 = <b>3/4</b> cup of batter.',
        'Check: 3/4 is less than 1 whole cup — sensible!'
      ],
      answer:'3/4 cup'
    },
    concept:{
      heading:'Adding & subtracting fractions',
      body:[
        '<b>Same denominator:</b> add or subtract numerators; denominator stays.',
        '<b>Related denominators:</b> convert to equivalent fractions first.',
        'For subtraction: same idea — find common denominator, then subtract tops.'
      ],
      notice:'Never add denominators! (1/2 + 1/2 is NOT 2/4.)',
      example:'3/4 − 1/2 = 3/4 − 2/4 = 1/4'
    },
    practice:{
      1:[
        { prompt:'2/7 + 3/7 = ?', answer:'5/7' },
        { prompt:'5/8 − 2/8 = ?', answer:'3/8' },
        { prompt:'1/6 + 4/6 = ?', answer:'5/6' },
        { prompt:'4/5 − 1/5 = ?', answer:'3/5' }
      ],
      2:[
        { prompt:'1/4 + 1/2 = ?', answer:'3/4' },
        { prompt:'2/3 − 1/6 = ?', answer:'1/2' },
        { prompt:'1/3 + 1/3 = ?', answer:'2/3' },
        { prompt:'3/4 − 1/2 = ?', answer:'1/4' }
      ],
      3:[
        { prompt:'2/3 + 1/4 = ?', answer:'11/12' },
        { prompt:'5/6 − 1/3 = ?', answer:'1/2' },
        { prompt:'3/5 + 1/10 = ?', answer:'7/10' },
        { prompt:'7/8 − 1/2 = ?', answer:'3/8' }
      ]
    },
    wordProblems:[
      { prompt:'A recipe needs 1/3 cup oats and 1/6 cup honey. How much dry+wet mix is that altogether?', answer:'1/2 cup' },
      { prompt:'You had 5/6 of a water bottle full. You drank 1/4 of the bottle. What fraction is left?', answer:'7/12' },
      { prompt:'On Monday you read 2/5 of your book. On Tuesday you read 1/10. What fraction have you read in total?', answer:'1/2' }
    ],
    notes:{
      diagnostic:'<p>Watch for adding numerators AND denominators (classic error).</p>',
      hook:'<p>Emphasise keyword <b>altogether</b> = add.</p>',
      solution:'<p>Bar model: fourths + halves converted to fourths.</p>',
      concept:'<p>Quick choral response: “Do denominators add?” (No!)</p>',
      practice:'<p>Pair Tier 2/3 students for word problems.</p>'
    }
  },
  {
    id:'w1-l3', week:1, lesson:3, code:'20.3', ready:true,
    title:'Adding and subtracting fractions',
    subtitle:'Practice & application',
    focus:'use fraction add and subtract in real stories.',
    hot:'Change one number in today’s story so the answer gets bigger. What did you change, and why did it work?',
    hero:{ src:'images/w1-l3-fun-run.jpg', alt:'Students running a school fun run on a track', caption:'The fun-run fractions' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>3/10 + 4/10 = ?</b>", answer:"7/10" },
        { prompt:"1/12 + 5/12 = ?", answer:"6/12 or 1/2" },
        { prompt:"8/9 − 3/9 = ?", answer:"5/9" },
        { prompt:"2/11 + 6/11 = ?", answer:"8/11" },
        { prompt:"9/10 − 4/10 = ?", answer:"5/10 or 1/2" }
      ],
      2:[
        { prompt:"Mia ate <b>1/4</b> of a pizza. Sam ate <b>1/2</b>. What fraction eaten altogether?", answer:"3/4" },
        { prompt:"1/5 + 2/5 = ?", answer:"3/5" },
        { prompt:"1/2 + 1/8 = ?", answer:"5/8" },
        { prompt:"Ben ran 2/5 km + 1/5 km. Total?", answer:"3/5 km" },
        { prompt:"7/8 − 1/4 = ?", answer:"5/8" }
      ],
      3:[
        { prompt:"A jug is <b>7/8</b> full. <b>1/3</b> is poured out. How full now?", answer:"17/24" },
        { prompt:"2/5 + 1/3 = ?", answer:"11/15" },
        { prompt:"4/5 − 1/2 = ?", answer:"3/10" },
        { prompt:"3/4 cup flour minus 1/3 cup sugar — how much more flour?", answer:"5/12 cup" },
        { prompt:"5/6 − 3/8 = ?", answer:"11/24" }
      ],
    },
    hook:{
      title:'The fun-run fractions',
      problem:'The school fun run is <b>1</b> km. Ava runs <b>2/5</b> km, rests, then runs another <b>1/5</b> km. How far has she run in total? How much of the course is left?',
      context:'Two-part question — discuss whether you add or subtract for each part.'
    },
    hookSolution:{
      heading:'Add the running, subtract for what’s left',
      steps:[
        'Total distance run: 2/5 + 1/5 = <b>3/5</b> km (same denominator).',
        'Whole course = 1 km = <b>5/5</b>.',
        'Left to run: 5/5 − 3/5 = <b>2/5</b> km.',
        'Two operations in one story — read carefully!'
      ],
      answer:'3/5 km run · 2/5 km left'
    },
    concept:{
      heading:'Fractions in real stories',
      body:[
        '<b>Altogether / total / combined</b> → add.',
        '<b>Left / remainder / difference</b> → subtract.',
        'Sketch a bar or number line. Convert denominators before calculating.'
      ],
      notice:'Underline the maths words in the question before choosing an operation.',
      example:'7/8 − 1/3 = 21/24 − 8/24 = 13/24'
    },
    practice:{
      1:[
        { prompt:'1/12 + 5/12 = ?', answer:'6/12 or 1/2' },
        { prompt:'8/9 − 3/9 = ?', answer:'5/9' },
        { prompt:'2/11 + 6/11 = ?', answer:'8/11' },
        { prompt:'9/10 − 4/10 = ?', answer:'5/10 or 1/2' }
      ],
      2:[
        { prompt:'1/5 + 2/5 = ?', answer:'3/5' },
        { prompt:'1/2 + 1/8 = ?', answer:'5/8' },
        { prompt:'Ben ran 2/5 km + 1/5 km. Total?', answer:'3/5 km' },
        { prompt:'7/8 − 1/4 = ?', answer:'5/8' }
      ],
      3:[
        { prompt:'2/5 + 1/3 = ?', answer:'11/15' },
        { prompt:'4/5 − 1/2 = ?', answer:'3/10' },
        { prompt:'3/4 cup flour minus 1/3 cup sugar — how much more flour?', answer:'5/12 cup' },
        { prompt:'5/6 − 3/8 = ?', answer:'11/24' }
      ]
    },
    wordProblems:[
      { prompt:'A tank was 7/8 full. After watering the garden, 1/4 of the tank was used. What fraction remains?', answer:'5/8' },
      { prompt:'Lunch: you eat 1/3 of a sandwich. Later you eat 1/6 more. What fraction of the whole sandwich have you eaten?', answer:'1/2' },
      { prompt:'A ribbon is 5/6 m. You cut off 1/4 m for a craft project. How much ribbon is left?', answer:'7/12 m' }
    ],
    notes:{
      diagnostic:'<p>Tier 2 diagnostic is the pizza problem — links to L2.</p>',
      hook:'<p>Act out on a 1-metre strip if you have one.</p>',
      practice:'<p>Heavier on word problems today — books open.</p>'
    }
  },
  {
    id:'w1-l4', week:1, lesson:4, code:'—', ready:true,
    title:'Revision and catch-up',
    subtitle:'Week 1 consolidation',
    focus:'practise comparing, ordering, adding and subtracting fractions.',
    hot:'Which is harder: comparing fractions or adding them? Give one example that shows your idea.',
    hero:{ src:'images/w1-l4-brownie-bakeoff.jpg', alt:'Brownies cut into equal pieces on a baking tray', caption:'Brownie bake-off' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Larger: <b>1/5</b> or <b>3/5</b>?", answer:"3/5" },
        { prompt:"4/9 + 2/9 = ?", answer:"6/9 or 2/3" },
        { prompt:"Larger: 2/7 or 5/7?", answer:"5/7" },
        { prompt:"7/10 − 3/10 = ?", answer:"4/10 or 2/5" },
        { prompt:"Order: 1/6, 5/6, 2/6", answer:"1/6, 2/6, 5/6" }
      ],
      2:[
        { prompt:"<b>1/2 + 1/4 = ?</b>", answer:"3/4" },
        { prompt:"1/3 + 1/6 = ?", answer:"1/2" },
        { prompt:"Larger: 3/4 or 2/3?", answer:"3/4" },
        { prompt:"5/8 − 1/4 = ?", answer:"3/8" },
        { prompt:"2/5 + 1/10 = ?", answer:"1/2" }
      ],
      3:[
        { prompt:"Order: <b>2/3, 1/2, 5/6</b> (smallest first)", answer:"1/2, 2/3, 5/6" },
        { prompt:"3/4 − 2/3 = ?", answer:"1/12" },
        { prompt:"1/2 + 2/5 = ?", answer:"9/10" },
        { prompt:"Larger: 4/5 or 7/8?", answer:"7/8" },
        { prompt:"2/3 + 1/4 = ?", answer:"11/12" }
      ],
    },
    hook:{
      title:'Brownie bake-off',
      problem:'A brownie tray is divided into <b>12</b> equal pieces. You eat <b>2</b> pieces. Your friend eats <b>1/4</b> of the tray. Who ate more? What fraction of the tray is left?',
      context:'Combines compare, add and subtract in one delicious context.'
    },
    hookSolution:{
      heading:'Convert, compare, then find what’s left',
      steps:[
        'You ate 2/12 = <b>1/6</b>. Friend ate <b>1/4</b> = 3/12.',
        'Compare: 1/4 (3/12) > 2/12 — friend ate more.',
        'Together: 2/12 + 3/12 = 5/12 eaten.',
        'Left: 12/12 − 5/12 = <b>7/12</b> of the tray.'
      ],
      answer:'Friend ate more · 7/12 left'
    },
    concept:{
      heading:'Week 1 wrap-up',
      body:[
        '<b>Compare/order</b> — benchmarks, common denominators, number lines.',
        '<b>Add/subtract</b> — same denominator first; convert when needed.',
        'Next week: <b>equivalent fractions</b> and mixed numerals.'
      ],
      notice:'Use this lesson to regroup students for Week 2 support or extension.',
      example:'1/2 + 1/4 = 2/4 + 1/4 = 3/4'
    },
    practice:{
      1:[
        { prompt:'4/9 + 2/9 = ?', answer:'6/9 or 2/3' },
        { prompt:'Larger: 2/7 or 5/7?', answer:'5/7' },
        { prompt:'7/10 − 3/10 = ?', answer:'4/10 or 2/5' },
        { prompt:'Order: 1/6, 5/6, 2/6', answer:'1/6, 2/6, 5/6' }
      ],
      2:[
        { prompt:'1/3 + 1/6 = ?', answer:'1/2' },
        { prompt:'Larger: 3/4 or 2/3?', answer:'3/4' },
        { prompt:'5/8 − 1/4 = ?', answer:'3/8' },
        { prompt:'2/5 + 1/10 = ?', answer:'1/2' }
      ],
      3:[
        { prompt:'3/4 − 2/3 = ?', answer:'1/12' },
        { prompt:'1/2 + 2/5 = ?', answer:'9/10' },
        { prompt:'Larger: 4/5 or 7/8?', answer:'7/8' },
        { prompt:'2/3 + 1/4 = ?', answer:'11/12' }
      ]
    },
    wordProblems:[
      { prompt:'A class voted: 2/5 for dodgeball, 1/4 for capture the flag. Which activity won?', answer:'Dodgeball' },
      { prompt:'You had 3/4 of your pocket money left. You spent 1/3 of your total money. What fraction do you have now?', answer:'1/2' },
      { prompt:'Two bottles: Bottle A is 5/6 full, Bottle B is 2/3 full. Which has more water?', answer:'Bottle A' }
    ],
    notes:{
      diagnostic:'<p>Use results to finalise Week 2 groupings.</p>',
      hook:'<p>Optional: bring a brownie diagram or draw 3×4 grid.</p>',
      concept:'<p>Celebrate Week 1 progress. Preview equivalents with 1/2 = 2/4.</p>',
      practice:'<p>Flexible — shorten if time lost to homework check.</p>'
    }
  },

  /* ========== WEEK 2 ========== */
  {
    id:'w2-l1', week:2, lesson:1, code:'20.2', ready:true,
    title:'Equivalent fractions',
    subtitle:'Same amount, different names',
    focus:'find matching fractions (same amount, different look) and use them to compare or simplify.',
    hot:'Find three different fractions equal to <b>1/2</b>. How do you know they’re the same amount?',
    hero:{ src:'images/w2-l1-equivalent-fractions.jpg', alt:'Fraction wall or pizza slices showing equivalent fractions', caption:'Same amount, different names' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Shade the same amount: is <b>1/2</b> the same as <b>2/4</b>?", answer:"Yes" },
        { prompt:"1/2 = ?/4", answer:"2/4" },
        { prompt:"1/3 = ?/6", answer:"2/6" },
        { prompt:"2/5 = ?/10", answer:"4/10" },
        { prompt:"Are 3/6 and 1/2 equal?", answer:"Yes" }
      ],
      2:[
        { prompt:"Write an equivalent fraction for <b>2/3</b> with denominator <b>12</b>.", answer:"8/12" },
        { prompt:"2/3 = ?/12", answer:"8/12" },
        { prompt:"3/4 = ?/8", answer:"6/8" },
        { prompt:"5/6 = ?/12", answer:"10/12" },
        { prompt:"1/5 = ?/20", answer:"4/20" }
      ],
      3:[
        { prompt:"Simplify <b>15/20</b> to lowest terms.", answer:"3/4" },
        { prompt:"Simplify 6/8", answer:"3/4" },
        { prompt:"Simplify 10/15", answer:"2/3" },
        { prompt:"Simplify 12/18", answer:"2/3" },
        { prompt:"Write 4/5 as twentieths", answer:"16/20" }
      ],
    },
    hook:{
      title:'The fraction wall',
      problem:'Two friends order the <b>same size</b> pizza. Alex’s slice is labelled <b>1/2</b>. Blake’s slice is labelled <b>4/8</b>. They argue about who got more. Who is right?',
      context:'Draw a fraction wall or pizza cut into eighths. No measuring — convince with a diagram.'
    },
    hookSolution:{
      heading:'Same amount, different name',
      steps:[
        'Cut the pizza into <b>8</b> equal slices. Half the pizza = <b>4</b> slices.',
        'So <b>1/2 = 4/8</b> — they ate the <b>same amount</b>.',
        'Equivalent fractions name the <b>same part of a whole</b>.',
        'Multiply or divide <b>top and bottom by the same number</b> to find equivalents.'
      ],
      answer:'Neither — 1/2 = 4/8 (equal amounts)'
    },
    concept:{
      heading:'Equivalent fractions',
      body:[
        'Multiply or divide numerator and denominator by the <b>same number</b>.',
        'Use equivalents to get a <b>common denominator</b> for comparing or adding.',
        '<b>Simplify</b> by dividing top and bottom by their highest common factor.'
      ],
      notice:'1/2, 2/4, 3/6, 4/8 … all name the same amount.',
      example:'2/3 = 8/12 (×4 top and bottom) · 15/20 = 3/4 (÷5 top and bottom)'
    },
    practice:{
      1:[
        { prompt:'1/2 = ?/4', answer:'2/4' },
        { prompt:'1/3 = ?/6', answer:'2/6' },
        { prompt:'2/5 = ?/10', answer:'4/10' },
        { prompt:'Are 3/6 and 1/2 equal?', answer:'Yes' }
      ],
      2:[
        { prompt:'2/3 = ?/12', answer:'8/12' },
        { prompt:'3/4 = ?/8', answer:'6/8' },
        { prompt:'5/6 = ?/12', answer:'10/12' },
        { prompt:'1/5 = ?/20', answer:'4/20' }
      ],
      3:[
        { prompt:'Simplify 6/8', answer:'3/4' },
        { prompt:'Simplify 10/15', answer:'2/3' },
        { prompt:'Simplify 12/18', answer:'2/3' },
        { prompt:'Write 4/5 as twentieths', answer:'16/20' }
      ]
    },
    wordProblems:[
      { prompt:'A recipe uses 1/2 cup flour. Another version uses 6/12 cup. Are the amounts the same?', answer:'Yes (equivalent)' },
      { prompt:'You walk 2/5 km. Your friend walks 8/20 km. Who walked farther?', answer:'Same distance' },
      { prompt:'A banner is 3/4 coloured. What equivalent fraction uses 12 as the denominator?', answer:'9/12' }
    ],
    notes:{
      title:'<p>Fraction wall or paper strips on desks. Link back to Week 1 common denominators.</p>',
      diagnostic:'<p>Tier 1: yes/no on 1/2 vs 2/4. Tier 3: simplify — watch for dividing only top.</p>',
      hook:'<p>Let pairs argue 2 min before reveal. “Same pizza, same size” is the key phrase.</p>',
      solution:'<p>Draw 8-slice pizza; shade 4. Connect to diagnostic #1.</p>',
      concept:'<p>Build a fraction wall on the board: 1/2 = 2/4 = 3/6 = 4/8.</p>',
      practice:'<p>Tier 1 uses doubling only. Tier 3 includes simplification.</p>'
    }
  },
  {
    id:'w2-l2', week:2, lesson:2, code:'21.1', ready:true,
    title:'Mixed numerals and improper fractions',
    subtitle:'Wholes and parts',
    focus:'swap between mixed numbers (like 2 1/2) and top-heavy fractions (like 5/2).',
    hot:'A friend writes <b>9/4</b> as <b>1 5/4</b>. Spot the mistake and fix it. Explain the fix.',
    hero:{ src:'images/w2-l2-mixed-numerals.jpg', alt:'Measuring cups showing whole cups plus a part cup', caption:'Wholes and parts' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"How many wholes in <b>2 1/4</b>?", answer:"2 wholes, 1/4 left" },
        { prompt:"1 1/2 as improper fraction", answer:"3/2" },
        { prompt:"2 1/4 as improper fraction", answer:"9/4" },
        { prompt:"How many thirds in 1 1/3?", answer:"4/3" },
        { prompt:"3/2 as mixed numeral", answer:"1 1/2" }
      ],
      2:[
        { prompt:"Write <b>1 1/2</b> as an improper fraction.", answer:"3/2" },
        { prompt:"3 1/4 as improper fraction", answer:"13/4" },
        { prompt:"2 2/3 as improper fraction", answer:"8/3" },
        { prompt:"11/3 as mixed numeral", answer:"3 2/3" },
        { prompt:"9/4 as mixed numeral", answer:"2 1/4" }
      ],
      3:[
        { prompt:"Write <b>11/4</b> as a mixed numeral.", answer:"2 3/4" },
        { prompt:"4 2/5 as improper fraction", answer:"22/5" },
        { prompt:"17/6 as mixed numeral", answer:"2 5/6" },
        { prompt:"5 3/8 as improper fraction", answer:"43/8" },
        { prompt:"23/8 as mixed numeral", answer:"2 7/8" }
      ],
    },
    hook:{
      title:'Measuring cup maths',
      problem:'A recipe needs <b>2 3/4</b> cups of milk. You only have a <b>1/4-cup</b> measure.<br>How many quarter-cups do you need? How can you write that as <b>one</b> fraction?',
      context:'Kitchen context — count the quarters including the full cups.'
    },
    hookSolution:{
      heading:'Count all the parts',
      steps:[
        '2 wholes = <b>8</b> quarter-cups (2 × 4).',
        'Plus 3 more quarters = <b>11</b> quarter-cups in total.',
        'As one fraction: <b>11/4</b> cups.',
        'So <b>2 3/4 = 11/4</b> — mixed numeral ↔ improper fraction.'
      ],
      answer:'11 quarter-cups = 11/4 cups'
    },
    concept:{
      heading:'Mixed ↔ improper',
      body:[
        '<b>Mixed → improper:</b> (whole × denominator) + numerator, keep denominator.',
        '<b>Improper → mixed:</b> divide numerator by denominator; quotient = whole, remainder = new numerator.',
        'Improper fractions are <b>≥ 1 whole</b>; mixed numerals show wholes and a proper fraction.'
      ],
      notice:'The denominator tells you the size of each part (quarters, thirds …).',
      example:'3 1/5 → (3×5)+1 = 16/5 · 17/6 → 2 remainder 5 → 2 5/6'
    },
    practice:{
      1:[
        { prompt:'1 1/2 as improper fraction', answer:'3/2' },
        { prompt:'2 1/4 as improper fraction', answer:'9/4' },
        { prompt:'How many thirds in 1 1/3?', answer:'4/3' },
        { prompt:'3/2 as mixed numeral', answer:'1 1/2' }
      ],
      2:[
        { prompt:'3 1/4 as improper fraction', answer:'13/4' },
        { prompt:'2 2/3 as improper fraction', answer:'8/3' },
        { prompt:'11/3 as mixed numeral', answer:'3 2/3' },
        { prompt:'9/4 as mixed numeral', answer:'2 1/4' }
      ],
      3:[
        { prompt:'4 2/5 as improper fraction', answer:'22/5' },
        { prompt:'17/6 as mixed numeral', answer:'2 5/6' },
        { prompt:'5 3/8 as improper fraction', answer:'43/8' },
        { prompt:'23/8 as mixed numeral', answer:'2 7/8' }
      ]
    },
    wordProblems:[
      { prompt:'You need 1 1/2 m of ribbon. How many half-metres is that?', answer:'3/2 m or 3 half-metres' },
      { prompt:'A cake recipe uses 2 1/3 cups sugar. Write as sixths.', answer:'7/3 or 14/6 cups' },
      { prompt:'You ran 7/4 km. Write as a mixed distance.', answer:'1 3/4 km' }
    ],
    notes:{
      diagnostic:'<p>Tier 1 checks understanding of “wholes + parts”. Tier 3: watch remainder as numerator.</p>',
      hook:'<p>Act out with cups or draw four circles divided into quarters.</p>',
      solution:'<p>Emphasise “count ALL the parts” including whole cups converted to parts.</p>',
      concept:'<p>Choral: whole × denom + top, over denom.</p>',
      practice:'<p>Pair convert one way, partner checks the reverse.</p>'
    }
  },
  {
    id:'w2-l3', week:2, lesson:3, code:'7.2', ready:true,
    title:'Place value to thousandths',
    subtitle:'Decimals strand',
    focus:'read and write decimals out to thousandths (the third digit after the point).',
    hot:'Why can <b>0.40</b> and <b>0.4</b> be the same value? Prove it with a place-value chart.',
    hero:{ src:'images/w2-l3-place-value-thousandths.jpg', alt:'Digital stopwatch showing precise time to hundredths of a second', caption:'Olympic finish — every digit counts', diagram:false },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"What digit is in the <b>tenths</b> place in <b>3.7</b>?", answer:"7" },
        { prompt:"Tenths digit in 4.2?", answer:"2" },
        { prompt:"Write 3 tenths as decimal", answer:"0.3" },
        { prompt:"Hundredths digit in 0.56?", answer:"6" },
        { prompt:"0.1 + 0.2 = ?", answer:"0.3" }
      ],
      2:[
        { prompt:"Write in words: <b>0.045</b>", answer:"forty-five thousandths" },
        { prompt:"Write 45 hundredths", answer:"0.45" },
        { prompt:"Thousandths digit in 2.037?", answer:"7" },
        { prompt:"Write 8 and 6 hundredths", answer:"8.06" },
        { prompt:"0.5 + 0.05 = ?", answer:"0.55" }
      ],
      3:[
        { prompt:"Write as a decimal: <b>6 and 308 thousandths</b>", answer:"6.308" },
        { prompt:"Write 308 thousandths", answer:"0.308" },
        { prompt:"Write 5 and 42 thousandths", answer:"5.042" },
        { prompt:"0.025 + 0.003 = ?", answer:"0.028" },
        { prompt:"Which is larger: 0.409 or 0.490?", answer:"0.490" }
      ],
    },
    hook:{
      title:'Olympic finish!',
      problem:'Three swimmers finish a race. Their times (in seconds) are <b>28.450</b>, <b>28.405</b> and <b>28.540</b>. The <b>smallest</b> time wins. Who won? Which digit in the thousandths place made the difference?',
      context:'Compare place by place from left to right. Thousandths are tiny — but they matter!'
    },
    hookSolution:{
      heading:'Every place has a value',
      steps:[
        'Compare tenths first: all have <b>28.4…</b> except 28.540 (28.5 — slower).',
        '28.450 vs 28.405: hundredths are <b>5</b> vs <b>0</b> — 28.405 is faster so far.',
        'Check thousandths: 28.405 has <b>5</b> thousandths; 28.450 has <b>0</b>.',
        '<b>28.405 s</b> wins — thousandths broke the tie between close times.'
      ],
      answer:'28.405 s (smallest time wins)'
    },
    concept:{
      heading:'Decimal place value',
      body:[
        'Places after the decimal: <b>tenths, hundredths, thousandths</b> (÷10 each step).',
        '1 thousandth = 0.001 — one part of a thousand equal pieces.',
        'Use a <b>place value chart</b> or grid to read and write decimals accurately.'
      ],
      notice:'Zeros hold places — 0.045 is not the same as 0.45.',
      example:'6.308 → 6 ones, 3 tenths, 0 hundredths, 8 thousandths'
    },
    practice:{
      1:[
        { prompt:'Tenths digit in 4.2?', answer:'2' },
        { prompt:'Write 3 tenths as decimal', answer:'0.3' },
        { prompt:'Hundredths digit in 0.56?', answer:'6' },
        { prompt:'0.1 + 0.2 = ?', answer:'0.3' }
      ],
      2:[
        { prompt:'Write 45 hundredths', answer:'0.45' },
        { prompt:'Thousandths digit in 2.037?', answer:'7' },
        { prompt:'Write 8 and 6 hundredths', answer:'8.06' },
        { prompt:'0.5 + 0.05 = ?', answer:'0.55' }
      ],
      3:[
        { prompt:'Write 308 thousandths', answer:'0.308' },
        { prompt:'Write 5 and 42 thousandths', answer:'5.042' },
        { prompt:'0.025 + 0.003 = ?', answer:'0.028' },
        { prompt:'Which is larger: 0.409 or 0.490?', answer:'0.490' }
      ]
    },
    wordProblems:[
      { prompt:'A gold bar weighs 1.250 kg. What digit is in the thousandths place?', answer:'0' },
      { prompt:'You ran 0.375 km. Write the distance in words (tenths/hundredths/thousandths).', answer:'375 thousandths of a km' },
      { prompt:'Three lengths: 0.6 m, 0.60 m, 0.600 m. Are they equal?', answer:'Yes (same value)' }
    ],
    notes:{
      title:'<p>Place value chart on board. Thousandths grid handout if available.</p>',
      diagnostic:'<p>Tier 2: “forty-five thousandths” not “forty-five point oh”. Tier 3: leading zeros.</p>',
      hook:'<p>Line up the three times vertically by place value before comparing.</p>',
      solution:'<p>Preview tomorrow’s compare-decimals lesson — same strategy.</p>',
      concept:'<p>Link 1/1000 = 0.001. Shade a 10×10×10 cube if you have one.</p>',
      practice:'<p>Calculator-free. Emphasise zero as placeholder in 8.06 vs 8.6.</p>'
    }
  },
  {
    id:'w2-l4', week:2, lesson:4, code:'21.2', ready:true,
    title:'Comparing decimals',
    subtitle:'Which is larger?',
    focus:'compare decimals by looking carefully at each place value.',
    hot:'Make up two petrol prices that look close. Which is cheaper — and which digit decided it?',
    hero:{ src:'images/w2-l4-comparing-decimals.jpg', alt:'Swimming race times or petrol price signs with decimals', caption:'Which is larger?' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Larger: <b>0.4</b> or <b>0.7</b>?", answer:"0.7" },
        { prompt:"Larger: 0.3 or 0.8?", answer:"0.8" },
        { prompt:"Larger: 0.6 or 0.59?", answer:"0.6" },
        { prompt:"Order: 0.2, 0.5, 0.1", answer:"0.1, 0.2, 0.5" },
        { prompt:"Larger: 0.9 or 0.89?", answer:"0.9" }
      ],
      2:[
        { prompt:"Larger: <b>0.35</b> or <b>0.4</b>?", answer:"0.4" },
        { prompt:"Larger: 0.45 or 0.5?", answer:"0.5" },
        { prompt:"Larger: 0.308 or 0.38?", answer:"0.38" },
        { prompt:"Order: 0.6, 0.06, 0.66", answer:"0.06, 0.6, 0.66" },
        { prompt:"Larger: 1.02 or 1.2?", answer:"1.2" }
      ],
      3:[
        { prompt:"Order smallest → largest: <b>0.408, 0.48, 0.4</b>", answer:"0.4, 0.408, 0.48" },
        { prompt:"Order: 0.408, 0.48, 0.4", answer:"0.4, 0.408, 0.48" },
        { prompt:"Larger: 2.405 or 2.450?", answer:"2.450" },
        { prompt:"Larger: 0.099 or 0.1?", answer:"0.1" },
        { prompt:"Order: 1.5, 1.05, 1.15", answer:"1.05, 1.15, 1.5" }
      ],
    },
    hook:{
      title:'Petrol price puzzle',
      problem:'Two petrol stations on the same road. Station A: <b>$1.459</b> per litre. Station B: <b>$1.495</b> per litre. Which is cheaper? How much difference per litre (in cents)?',
      context:'Real money — compare digit by digit. Trailing zeros don’t change value (1.40 = 1.4).'
    },
    hookSolution:{
      heading:'Compare place by place',
      steps:[
        'Ones and tenths: both <b>$1.4…</b> — still tied.',
        'Hundredths: A has <b>5</b>, B has <b>9</b> — A is cheaper so far.',
        'Thousandths: A = 9, B = 5 — doesn’t change the hundredths decision.',
        'Difference: 1.495 − 1.459 = <b>0.036</b> → <b>3.6 cents</b> cheaper at A.'
      ],
      answer:'Station A ($1.459) — 3.6 cents/L cheaper'
    },
    concept:{
      heading:'Comparing decimals',
      body:[
        'Line up the <b>decimal points</b>. Compare from <b>left to right</b>.',
        'Add trailing zeros if helpful: 0.4 = 0.40 = 0.400.',
        'On a <b>number line</b>, further right = larger.'
      ],
      notice:'More digits does not always mean larger (0.408 < 0.48).',
      example:'0.35 vs 0.4 → 0.35 vs 0.40 → 0.40 is larger'
    },
    practice:{
      1:[
        { prompt:'Larger: 0.3 or 0.8?', answer:'0.8' },
        { prompt:'Larger: 0.6 or 0.59?', answer:'0.6' },
        { prompt:'Order: 0.2, 0.5, 0.1', answer:'0.1, 0.2, 0.5' },
        { prompt:'Larger: 0.9 or 0.89?', answer:'0.9' }
      ],
      2:[
        { prompt:'Larger: 0.45 or 0.5?', answer:'0.5' },
        { prompt:'Larger: 0.308 or 0.38?', answer:'0.38' },
        { prompt:'Order: 0.6, 0.06, 0.66', answer:'0.06, 0.6, 0.66' },
        { prompt:'Larger: 1.02 or 1.2?', answer:'1.2' }
      ],
      3:[
        { prompt:'Order: 0.408, 0.48, 0.4', answer:'0.4, 0.408, 0.48' },
        { prompt:'Larger: 2.405 or 2.450?', answer:'2.450' },
        { prompt:'Larger: 0.099 or 0.1?', answer:'0.1' },
        { prompt:'Order: 1.5, 1.05, 1.15', answer:'1.05, 1.15, 1.5' }
      ]
    },
    wordProblems:[
      { prompt:'Swim times: 32.45 s and 32.405 s. Which is faster?', answer:'32.405 s' },
      { prompt:'Item A costs $4.50. Item B costs $4.05. How much more is A?', answer:'$0.45' },
      { prompt:'Order these heights: 1.45 m, 1.405 m, 1.5 m (shortest first).', answer:'1.405, 1.45, 1.5 m' }
    ],
    notes:{
      diagnostic:'<p>Classic trap: 0.408 vs 0.48 — students pick “more digits”. Address in hook.</p>',
      hook:'<p>Money makes it real. Optional: show on number line 1.45–1.50.</p>',
      concept:'<p>Week 2 wrap — equivalents (L1), mixed (L2), place value (L3), compare (L4).</p>',
      practice:'<p>Use Week 2 diagnostic results to finalise SA5 readiness groups.</p>'
    }
  },

  /* ========== WEEK 3 (pre-assessment) ========== */
  {
    id:'w3-l1', week:3, lesson:1, code:'—', ready:true,
    title:'Decimals (include percentages)',
    subtitle:'Fractions, decimals and %',
    focus:'link fractions, decimals and percentages, and find easy percentages of amounts.',
    hot:'Is <b>50% off</b> always a good deal? Invent a price example where it might not be.',
    hero:{ src:'images/w3-l1-decimals-percentages.jpg', alt:'Shop sale sign showing 50 percent off', caption:'Decimals in the real world' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Write <b>50%</b> as a decimal.", answer:"0.5" },
        { prompt:"50% as decimal", answer:"0.5" },
        { prompt:"0.25 as percentage", answer:"25%" },
        { prompt:"1/2 as percentage", answer:"50%" },
        { prompt:"10% as decimal", answer:"0.1" }
      ],
      2:[
        { prompt:"Write <b>1/4</b> as a decimal and a percentage.", answer:"0.25 · 25%" },
        { prompt:"1/5 as decimal", answer:"0.2" },
        { prompt:"1/5 as percentage", answer:"20%" },
        { prompt:"75% as decimal", answer:"0.75" },
        { prompt:"10% of $60", answer:"$6" }
      ],
      3:[
        { prompt:"What is <b>10%</b> of <b>$80</b>?", answer:"$8" },
        { prompt:"3/4 as decimal and %", answer:"0.75 · 75%" },
        { prompt:"20% of $45", answer:"$9" },
        { prompt:"5% of $200", answer:"$10" },
        { prompt:"Which is larger: 0.3 or 30%?", answer:"Equal" }
      ],
    },
    hook:{
      title:'50% off sale!',
      problem:'A $60 hoodie is <b>50% off</b>. A $40 cap is <b>25% off</b>. Which discount saves more money? How much do you pay for each item after the sale?',
      context:'Percent means “out of 100”. Connect % → decimal → money.'
    },
    hookSolution:{
      heading:'Percent → decimal → calculate',
      steps:[
        '<b>50%</b> = 50/100 = <b>0.5</b>. Hoodie discount: 0.5 × $60 = <b>$30 off</b>. Pay <b>$30</b>.',
        '<b>25%</b> = 25/100 = <b>0.25</b>. Cap discount: 0.25 × $40 = <b>$10 off</b>. Pay <b>$30</b>.',
        'Same sale price — but the hoodie discount is <b>more dollars</b> ($30 vs $10).',
        'Always check: % of <b>which whole</b>? Bigger original price → bigger discount at same %.'
      ],
      answer:'Hoodie saves more ($30 off) · both cost $30 after sale'
    },
    concept:{
      heading:'Fractions, decimals & percentages',
      body:[
        '<b>Percent</b> = parts per hundred. 25% = 25/100 = 0.25 = 1/4.',
        'Friendly %: 50% = 1/2, 25% = 1/4, 10% = 1/10, 1% = 1/100.',
        'To find x% of an amount: convert to decimal, then <b>multiply</b>.'
      ],
      notice:'10% is easy — move the decimal one place left (10% of $80 = $8).',
      example:'20% of $50 → 0.20 × 50 = $10'
    },
    practice:{
      1:[
        { prompt:'50% as decimal', answer:'0.5' },
        { prompt:'0.25 as percentage', answer:'25%' },
        { prompt:'1/2 as percentage', answer:'50%' },
        { prompt:'10% as decimal', answer:'0.1' }
      ],
      2:[
        { prompt:'1/5 as decimal', answer:'0.2' },
        { prompt:'1/5 as percentage', answer:'20%' },
        { prompt:'75% as decimal', answer:'0.75' },
        { prompt:'10% of $60', answer:'$6' }
      ],
      3:[
        { prompt:'3/4 as decimal and %', answer:'0.75 · 75%' },
        { prompt:'20% of $45', answer:'$9' },
        { prompt:'5% of $200', answer:'$10' },
        { prompt:'Which is larger: 0.3 or 30%?', answer:'Equal' }
      ]
    },
    wordProblems:[
      { prompt:'A $120 bike is 25% off. What is the discount in dollars?', answer:'$30' },
      { prompt:'In a class of 30, 20% ride bikes to school. How many students?', answer:'6 students' },
      { prompt:'You score 8/10 on a quiz. What percentage? (as a whole %)', answer:'80%' }
    ],
    notes:{
      title:'<p>SA5 in two lessons — this builds fraction/decimal/% links assessed in SA5.</p>',
      diagnostic:'<p>Quick %↔decimal check. Tier 3: 10% of 80 without calculator.</p>',
      hook:'<p>Discuss “same final price, different discount” — common misconception.</p>',
      concept:'<p>Anchor chart: 1/2 ↔ 0.5 ↔ 50%. Add 1/4 and 1/10.</p>',
      practice:'<p>Money contexts only today — keeps it concrete for Year 5.</p>'
    }
  },
  {
    id:'w3-l2', week:3, lesson:2, code:'—', ready:true,
    title:'Revision on decimals and fractions',
    subtitle:'SA5 readiness',
    focus:'practise showing, comparing and ordering fractions and decimals.',
    hot:'Put <b>3/5</b>, <b>0.55</b> and <b>60%</b> in order. Explain your method without a calculator.',
    hero:{ src:'images/w3-l2-decimals-fractions-revision.jpg', alt:'Teacher explaining maths on a chalkboard with numbers', caption:'Fractions & decimals revision', diagram:false },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Larger: <b>0.6</b> or <b>0.59</b>?", answer:"0.6" },
        { prompt:"0.5 as a fraction", answer:"1/2" },
        { prompt:"Larger: 0.3 or 1/4?", answer:"0.3" },
        { prompt:"0.25 as a fraction", answer:"1/4" },
        { prompt:"Shade 3/10 on a ten-strip → decimal?", answer:"0.3" }
      ],
      2:[
        { prompt:"Write <b>3/4</b> as a decimal.", answer:"0.75" },
        { prompt:"2/5 as decimal", answer:"0.4" },
        { prompt:"0.8 as a fraction (simplest)", answer:"4/5" },
        { prompt:"Order: 0.5, 0.05, 0.55", answer:"0.05, 0.5, 0.55" },
        { prompt:"Larger: 3/4 or 0.7?", answer:"3/4 (0.75)" }
      ],
      3:[
        { prompt:"Order smallest → largest: <b>1/2, 0.45, 2/5</b>", answer:"2/5, 0.45, 1/2" },
        { prompt:"Order: 1/2, 0.45, 2/5", answer:"2/5, 0.45, 1/2" },
        { prompt:"3/8 as decimal", answer:"0.375" },
        { prompt:"Place 0.625 on a line between 0.5 and 0.75", answer:"5/8" },
        { prompt:"Larger: 0.909 or 9/10?", answer:"0.909" }
      ],
    },
    hook:{
      title:'Number line showdown',
      problem:'Place these on a 0–1 number line: <b>1/2</b>, <b>0.45</b>, <b>2/5</b>, <b>0.6</b>. Which two are closest together? Which is exactly in the middle of 0 and 1?',
      context:'Convert everything to decimals OR common fractions — then plot. SA5-style reasoning.'
    },
    hookSolution:{
      heading:'Convert, then compare',
      steps:[
        'Convert: 1/2 = <b>0.5</b>, 2/5 = <b>0.4</b>. Already have 0.45 and 0.6.',
        'Order on line: <b>0.4, 0.45, 0.5, 0.6</b> (i.e. 2/5, 0.45, 1/2, 0.6).',
        'Closest pair: <b>2/5 (0.4) and 0.45</b> — only 0.05 apart.',
        '<b>1/2 = 0.5</b> is exactly halfway between 0 and 1.'
      ],
      answer:'Order: 2/5, 0.45, 1/2, 0.6 · closest: 2/5 & 0.45 · middle: 1/2'
    },
    concept:{
      heading:'SA5 readiness checklist',
      body:[
        '<b>Represent</b> fractions on number lines; write equivalents.',
        '<b>Convert</b> between common fractions and decimals (halves, quarters, fifths, tenths).',
        '<b>Compare & order</b> a mixed set — convert to one form first.'
      ],
      notice:'Tomorrow: SA5 Session 1 — no teaching slides; session plan + official task.',
      example:'3/5 = 0.6 · 0.75 = 3/4 · order by converting all to hundredths'
    },
    practice:{
      1:[
        { prompt:'0.5 as a fraction', answer:'1/2' },
        { prompt:'Larger: 0.3 or 1/4?', answer:'0.3' },
        { prompt:'0.25 as a fraction', answer:'1/4' },
        { prompt:'Shade 3/10 on a ten-strip → decimal?', answer:'0.3' }
      ],
      2:[
        { prompt:'2/5 as decimal', answer:'0.4' },
        { prompt:'0.8 as a fraction (simplest)', answer:'4/5' },
        { prompt:'Order: 0.5, 0.05, 0.55', answer:'0.05, 0.5, 0.55' },
        { prompt:'Larger: 3/4 or 0.7?', answer:'3/4 (0.75)' }
      ],
      3:[
        { prompt:'Order: 1/2, 0.45, 2/5', answer:'2/5, 0.45, 1/2' },
        { prompt:'3/8 as decimal', answer:'0.375' },
        { prompt:'Place 0.625 on a line between 0.5 and 0.75', answer:'5/8' },
        { prompt:'Larger: 0.909 or 9/10?', answer:'0.909' }
      ]
    },
    wordProblems:[
      { prompt:'Runner A: 0.75 km. Runner B: 3/4 km. Who ran farther?', answer:'Same distance' },
      { prompt:'Prices: $2.50, $2.05, $2.45. Order cheapest to dearest.', answer:'$2.05, $2.45, $2.50' },
      { prompt:'A tank is 3/5 full. Write as a decimal. Is it more or less than half?', answer:'0.6 · more than half' }
    ],
    notes:{
      title:'<p>Last teach lesson before SA5. Keep energy high; reassure about assessment format.</p>',
      diagnostic:'<p>Tier 3 mirrors hook — use results to flag students for support during SA5.</p>',
      hook:'<p>Draw 0–1 line on board. Students plot on mini-lines in books.</p>',
      concept:'<p>Run through SA5 session plan briefly (assessments.js). Materials check.</p>',
      practice:'<p>Shorter concept if time tight — maximise mixed practice. Preview L3 task pages.</p>'
    }
  },

  { id:'w3-l3', week:3, lesson:3, code:'SA 5', ready:true, title:'SA 5 — Representing and ordering decimals and fractions', subtitle:'Assessment · Session 1', type:'assessment', assessmentId:'sa5',
    hero:{ src:'images/w3-l3-sa5-assessment.jpg', alt:'Student desk with maths book and pencil ready for assessment', caption:'SA 5 · Session 1' } },
  { id:'w3-l4', week:3, lesson:4, code:'SA 5', ready:true, title:'SA 5 — Representing and ordering decimals and fractions', subtitle:'Assessment · Session 2', type:'assessment', assessmentId:'sa5',
    hero:{ src:'images/w3-l4-sa5-assessment.jpg', alt:'Quiet classroom during maths assessment', caption:'SA 5 · Session 2' } },

  /* ========== WEEK 4 ========== */
  {
    id:'w4-l1', week:4, lesson:1, code:'7.1', ready:true,
    title:'Multiplication using split',
    subtitle:'Term 2 review · Mental strategies',
    focus:'multiply in our heads by splitting numbers into friendly parts.',
    hot:'Show <b>24 × 15</b> two different ways (split / other). Which way felt clearer — and why?',
    hero:{ src:'images/w4-l1-multiplication-split.jpg', alt:'Mental maths split strategy shown with numbers broken apart', caption:'Split and multiply', diagram:true },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>4 × 6 = ?</b>", answer:"24" },
        { prompt:"5 × 11 (split 11)", answer:"55" },
        { prompt:"3 × 14 (split 14)", answer:"42" },
        { prompt:"4 × 12", answer:"48" },
        { prompt:"6 × 11", answer:"66" }
      ],
      2:[
        { prompt:"<b>6 × 12 = ?</b> (use doubles)", answer:"72" },
        { prompt:"7 × 13", answer:"91" },
        { prompt:"5 × 16", answer:"80" },
        { prompt:"9 × 12", answer:"108" },
        { prompt:"6 × 15", answer:"90" }
      ],
      3:[
        { prompt:"<b>4 × 25 = ?</b>", answer:"100" },
        { prompt:"8 × 25", answer:"200" },
        { prompt:"12 × 15", answer:"180" },
        { prompt:"7 × 19 (split 19)", answer:"133" },
        { prompt:"15 × 6", answer:"90" }
      ],
    },
    hook:{
      title:'Concert ticket rush',
      problem:'Tickets cost <b>$15</b> each. A group wants <b>6</b> tickets. How could you split <b>15</b> to multiply in your head? What is the total cost?',
      context:'No written method yet — talk through a mental strategy.'
    },
    hookSolution:{
      heading:'Split 15, multiply, add back',
      steps:[
        'Split <b>15</b> into <b>10 + 5</b> — friendly parts.',
        '6 × 10 = <b>60</b>. 6 × 5 = <b>30</b>.',
        'Add: 60 + 30 = <b>90</b>.',
        'Six tickets cost <b>$90</b>. Split makes hard facts easier!'
      ],
      answer:'$90'
    },
    concept:{
      heading:'The split strategy',
      body:[
        'Break one factor into <b>parts you know</b> (tens and ones, or friendly numbers).',
        'Multiply <b>each part</b>, then <b>add</b> the partial products.',
        'Works for mental maths and checks written methods.'
      ],
      notice:'Choose splits that give easy facts — 10s, 5s, doubles.',
      example:'8 × 13 → 8×10 + 8×3 = 80 + 24 = 104'
    },
    practice:{
      1:[
        { prompt:'5 × 11 (split 11)', answer:'55' },
        { prompt:'3 × 14 (split 14)', answer:'42' },
        { prompt:'4 × 12', answer:'48' },
        { prompt:'6 × 11', answer:'66' }
      ],
      2:[
        { prompt:'7 × 13', answer:'91' },
        { prompt:'5 × 16', answer:'80' },
        { prompt:'9 × 12', answer:'108' },
        { prompt:'6 × 15', answer:'90' }
      ],
      3:[
        { prompt:'8 × 25', answer:'200' },
        { prompt:'12 × 15', answer:'180' },
        { prompt:'7 × 19 (split 19)', answer:'133' },
        { prompt:'15 × 6', answer:'90' }
      ]
    },
    wordProblems:[
      { prompt:'8 packs of stickers, 12 in each pack. How many stickers?', answer:'96' },
      { prompt:'A book costs $14. You buy 5 copies for the class library. Total?', answer:'$70' },
      { prompt:'A bus holds 48 students. How many students on 3 full buses?', answer:'144' }
    ],
    notes:{
      title:'<p>Term 2 review — refresh before written multiplication. Calculators off for diagnostic.</p>',
      diagnostic:'<p>Watch for skip-counting on Tier 2. Tier 3: 4×25 as quarters of 100.</p>',
      hook:'<p>Record splits on board: 15 → 10+5. Let students suggest other splits (e.g. 9+6).</p>',
      concept:'<p>Connect to distributive property — same idea as area model later this week.</p>',
      practice:'<p>Mental maths focus. Tier 3 can use jottings in margin.</p>'
    }
  },
  {
    id:'w4-l2', week:4, lesson:2, code:'24.2', ready:true,
    title:'Multiplication 4 digit × 1 digit',
    subtitle:'Written method',
    focus:'multiply a big number by a single digit using a clear written method.',
    hot:'What mistake happens if you forget to regroup when multiplying? Invent a wrong working and fix it.',
    hero:{ src:'images/w4-l2-4x1-multiplication.jpg', alt:'Rows of stadium seats or ticket stacks showing large groups', caption:'Big numbers, one-digit multiplier' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>23 × 4 = ?</b>", answer:"92" },
        { prompt:"132 × 3", answer:"396" },
        { prompt:"214 × 4", answer:"856" },
        { prompt:"305 × 2", answer:"610" },
        { prompt:"121 × 5", answer:"605" }
      ],
      2:[
        { prompt:"<b>156 × 3 = ?</b>", answer:"468" },
        { prompt:"1,234 × 3", answer:"3,702" },
        { prompt:"2,015 × 4", answer:"8,060" },
        { prompt:"1,406 × 5", answer:"7,030" },
        { prompt:"3,102 × 6", answer:"18,612" }
      ],
      3:[
        { prompt:"<b>2,045 × 6 = ?</b>", answer:"12,270" },
        { prompt:"2,348 × 4", answer:"9,392" },
        { prompt:"4,507 × 8", answer:"36,056" },
        { prompt:"1,999 × 5", answer:"9,995" },
        { prompt:"6,004 × 7", answer:"42,028" }
      ],
    },
    hook:{
      title:'Stadium seats',
      problem:'A stadium section has <b>2,348</b> seats in each row. There are <b>4</b> identical rows in the block. How many seats altogether? Set up the multiplication — don’t rush the carrying.',
      context:'Real context for big numbers. Emphasise place value and regrouping.'
    },
    hookSolution:{
      heading:'Multiply by ones, regroup as needed',
      steps:[
        'Set up: <b>2,348 × 4</b>.',
        'Ones: 8×4 = 32 → write <b>2</b>, carry <b>3</b>.',
        'Tens: 4×4 + 3 = 19 → write <b>9</b>, carry <b>1</b>. Hundreds: 3×4 + 1 = 13 → write <b>3</b>, carry <b>1</b>.',
        'Thousands: 2×4 + 1 = <b>9</b>. Total: <b>9,392</b> seats.'
      ],
      answer:'9,392 seats'
    },
    concept:{
      heading:'4-digit × 1-digit',
      body:[
        'Start from the <b>ones</b> place; multiply each digit by the single digit.',
        '<b>Regroup</b> (carry) when a partial product is 10 or more.',
        'Estimate first: 2,348×4 ≈ 2,000×4 = 8,000 — answer should be close.'
      ],
      notice:'Line up digits by place value. Zero in a number still gets multiplied.',
      example:'1,206 × 5 → 6,030 (0×5=0, but keep place)'
    },
    practice:{
      1:[
        { prompt:'132 × 3', answer:'396' },
        { prompt:'214 × 4', answer:'856' },
        { prompt:'305 × 2', answer:'610' },
        { prompt:'121 × 5', answer:'605' }
      ],
      2:[
        { prompt:'1,234 × 3', answer:'3,702' },
        { prompt:'2,015 × 4', answer:'8,060' },
        { prompt:'1,406 × 5', answer:'7,030' },
        { prompt:'3,102 × 6', answer:'18,612' }
      ],
      3:[
        { prompt:'2,348 × 4', answer:'9,392' },
        { prompt:'4,507 × 8', answer:'36,056' },
        { prompt:'1,999 × 5', answer:'9,995' },
        { prompt:'6,004 × 7', answer:'42,028' }
      ]
    },
    wordProblems:[
      { prompt:'A factory makes 1,856 toys per day. How many in 5 days?', answer:'9,280 toys' },
      { prompt:'Each lap is 1,250 m. A runner completes 6 laps. Total distance?', answer:'7,500 m' },
      { prompt:'Tickets are $3,240 per table. 9 tables booked. Total cost?', answer:'$29,160' }
    ],
    notes:{
      diagnostic:'<p>Tier 3 includes zero in middle (2,045). Check carrying across zeros.</p>',
      hook:'<p>Work on board step by step. Students copy setup only, then solve.</p>',
      concept:'<p>Compare to split: 2,348×4 = 2,000×4 + 300×4 + 40×4 + 8×4.</p>',
      practice:'<p>Grid paper optional. Tier 1 stays 3-digit before 4-digit.</p>'
    }
  },
  {
    id:'w4-l3', week:4, lesson:3, code:'24.3', ready:true,
    title:'Multiplication by tens and hundreds',
    subtitle:'Place-value patterns',
    focus:'multiply by 10 and 100 by shifting digits on the place-value chart.',
    hot:'If digits shift for ×10 and ×100, what happens for ×1000? Predict, then check with an example.',
    hero:{ src:'images/w4-l3-multiply-tens-hundreds.jpg', alt:'Bundles of ten or hundred items like pencils or coins', caption:'×10 and ×100' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>6 × 10 = ?</b>", answer:"60" },
        { prompt:"7 × 10", answer:"70" },
        { prompt:"12 × 10", answer:"120" },
        { prompt:"5 × 100", answer:"500" },
        { prompt:"9 × 100", answer:"900" }
      ],
      2:[
        { prompt:"<b>45 × 10 = ?</b>", answer:"450" },
        { prompt:"45 × 10", answer:"450" },
        { prompt:"36 × 100", answer:"3,600" },
        { prompt:"15 × 20", answer:"300" },
        { prompt:"11 × 50", answer:"550" }
      ],
      3:[
        { prompt:"<b>23 × 30 = ?</b>", answer:"690" },
        { prompt:"23 × 30", answer:"690" },
        { prompt:"14 × 500", answer:"7,000" },
        { prompt:"250 × 40", answer:"10,000" },
        { prompt:"120 × 30", answer:"3,600" }
      ],
    },
    hook:{
      title:'Pencil order',
      problem:'A school orders <b>24</b> boxes of <b>10</b> pencils, then <b>24</b> boxes of <b>100</b> coloured pencils.<br>How many of each? What pattern do you notice when you multiply by 10 or 100?',
      context:'Bundles of 10 and 100 — digits shift on the place value chart.'
    },
    hookSolution:{
      heading:'×10 and ×100 shift digits',
      steps:[
        '24 × 10 = <b>240</b> pencils (digit shifts one place left).',
        '24 × 100 = <b>2,400</b> coloured pencils (shifts two places left).',
        '×10 append one zero (or shift); ×100 append two zeros.',
        '23 × 30 = 23 × 3 × 10 = 69 × 10 = <b>690</b> — multiply non-zero parts, then ×10.'
      ],
      answer:'240 regular · 2,400 coloured'
    },
    concept:{
      heading:'Multiplying by tens & hundreds',
      body:[
        '× <b>10</b>: digits move one place left (value ten times larger).',
        '× <b>100</b>: digits move two places left.',
        'For <b>30, 40, 700</b>: multiply the non-zero digits, then apply the ×10 or ×100.'
      ],
      notice:'23 × 30 is NOT 23 × 3 — remember the extra zero!',
      example:'45 × 20 = 45 × 2 × 10 = 90 × 10 = 900'
    },
    practice:{
      1:[
        { prompt:'7 × 10', answer:'70' },
        { prompt:'12 × 10', answer:'120' },
        { prompt:'5 × 100', answer:'500' },
        { prompt:'9 × 100', answer:'900' }
      ],
      2:[
        { prompt:'45 × 10', answer:'450' },
        { prompt:'36 × 100', answer:'3,600' },
        { prompt:'15 × 20', answer:'300' },
        { prompt:'11 × 50', answer:'550' }
      ],
      3:[
        { prompt:'23 × 30', answer:'690' },
        { prompt:'14 × 500', answer:'7,000' },
        { prompt:'250 × 40', answer:'10,000' },
        { prompt:'120 × 30', answer:'3,600' }
      ]
    },
    wordProblems:[
      { prompt:'A crate holds 40 books. The library receives 30 crates. How many books?', answer:'1,200 books' },
      { prompt:'Each student earns 50 points. 24 students reach the goal. Total points?', answer:'1,200 points' },
      { prompt:'A factory runs 12 hours/day for 100 days. Total hours?', answer:'1,200 hours' }
    ],
    notes:{
      diagnostic:'<p>Tier 3: 23×30 — common error 69 instead of 690.</p>',
      hook:'<p>Place value chart with counters shifting left for ×10.</p>',
      concept:'<p>Link to tomorrow’s area model: 23×30 as 23 rows of 30.</p>',
      practice:'<p>Quick-fire ×10/×100 warm-up before tier sheets.</p>'
    }
  },
  {
    id:'w4-l4', week:4, lesson:4, code:'25.1', ready:true,
    title:'Multiplication using the area model',
    subtitle:'Visual partial products',
    focus:'show multiplication as a rectangle (area model) and use it to solve.',
    hot:'Draw an area model for <b>23 × 14</b>. What do the four small rectangles mean?',
    hero:{ src:'images/w4-l4-area-model.jpg', alt:'Rectangular garden bed divided into a multiplication array grid', caption:'Area model', diagram:true },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"A rectangle is <b>4</b> by <b>6</b>. Area?", answer:"24" },
        { prompt:"Draw 6×8 grid. Area?", answer:"48" },
        { prompt:"13×4: 10×4 + 3×4", answer:"52" },
        { prompt:"14×5: 10×5 + 4×5", answer:"70" },
        { prompt:"12×6", answer:"72" }
      ],
      2:[
        { prompt:"<b>13 × 4</b> using split: 10×4 + 3×4 = ?", answer:"52" },
        { prompt:"21×4 (20×4 + 1×4)", answer:"84" },
        { prompt:"15×6 (10×6 + 5×6)", answer:"90" },
        { prompt:"22×3", answer:"66" },
        { prompt:"31×5", answer:"155" }
      ],
      3:[
        { prompt:"Draw: <b>23 × 12</b> split into 20×12 and 3×12. Total?", answer:"276" },
        { prompt:"23×12 (use area model)", answer:"276" },
        { prompt:"34×11", answer:"374" },
        { prompt:"25×14", answer:"350" },
        { prompt:"18×15", answer:"270" }
      ],
    },
    hook:{
      title:'Garden bed plan',
      problem:'A rectangular garden bed is <b>23 m</b> long and <b>14 m</b> wide. Find the area. Split the rectangle into easier parts on a grid — what four smaller areas can you find?',
      context:'Draw on board: 20+3 by 10+4. Area model = split strategy made visible.'
    },
    hookSolution:{
      heading:'Split the rectangle',
      steps:[
        'Split 23 → <b>20 + 3</b>. Split 14 → <b>10 + 4</b>.',
        'Four parts: 20×10=<b>200</b>, 20×4=<b>80</b>, 3×10=<b>30</b>, 3×4=<b>12</b>.',
        'Add partial areas: 200+80+30+12 = <b>322</b> m².',
        'Same as 23×14 — the grid shows <b>why</b> split works.'
      ],
      answer:'322 m²'
    },
    concept:{
      heading:'Area model for multiplication',
      body:[
        'Draw a rectangle labelled with both factors.',
        '<b>Split</b> each side into tens and ones (or friendly parts).',
        'Find each smaller area; <b>add</b> partial products for the total.'
      ],
      notice:'This leads to 2-digit × 2-digit next week — same grid, bigger numbers.',
      example:'15 × 12 → 10×10 + 10×2 + 5×10 + 5×2 = 100+20+50+10 = 180'
    },
    practice:{
      1:[
        { prompt:'Draw 6×8 grid. Area?', answer:'48' },
        { prompt:'13×4: 10×4 + 3×4', answer:'52' },
        { prompt:'14×5: 10×5 + 4×5', answer:'70' },
        { prompt:'12×6', answer:'72' }
      ],
      2:[
        { prompt:'21×4 (20×4 + 1×4)', answer:'84' },
        { prompt:'15×6 (10×6 + 5×6)', answer:'90' },
        { prompt:'22×3', answer:'66' },
        { prompt:'31×5', answer:'155' }
      ],
      3:[
        { prompt:'23×12 (use area model)', answer:'276' },
        { prompt:'34×11', answer:'374' },
        { prompt:'25×14', answer:'350' },
        { prompt:'18×15', answer:'270' }
      ]
    },
    wordProblems:[
      { prompt:'A poster is 24 cm by 16 cm. What is its area?', answer:'384 cm²' },
      { prompt:'A vegetable patch 12 m by 15 m. Area to cover with mulch?', answer:'180 m²' },
      { prompt:'Tiles are laid in 18 rows of 25. How many tiles?', answer:'450 tiles' }
    ],
    notes:{
      diagnostic:'<p>Tier 3 previews Week 5 content — gauge readiness for 2-digit × 2-digit.</p>',
      hook:'<p>Colour the four regions different colours on the board grid.</p>',
      concept:'<p>Week 4 wrap: split → written method → ×10/100 → area model.</p>',
      practice:'<p>Encourage labelled diagrams for Tier 2/3 — not just final answers.</p>'
    }
  },

  /* ========== WEEK 5 ========== */
  {
    id:'w5-l1', week:5, lesson:1, code:'25.2', ready:true,
    title:'Multiplication 3 digit × 2 digit',
    subtitle:'Written & area methods',
    focus:'multiply a 3-digit number by a 2-digit number.',
    hot:'Would <b>203 × 45</b> be easier as an area model or a written method? Argue for one choice.',
    hero:{ src:'images/w5-l1-3x2-multiplication.jpg', alt:'Shipping boxes stacked in rows and columns', caption:'3-digit × 2-digit' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>23 × 4 = ?</b>", answer:"92" },
        { prompt:"12 × 15", answer:"180" },
        { prompt:"23 × 11", answer:"253" },
        { prompt:"31 × 14", answer:"434" },
        { prompt:"42 × 12", answer:"504" }
      ],
      2:[
        { prompt:"<b>45 × 12 = ?</b>", answer:"540" },
        { prompt:"125 × 12", answer:"1,500" },
        { prompt:"204 × 15", answer:"3,060" },
        { prompt:"156 × 11", answer:"1,716" },
        { prompt:"310 × 24", answer:"7,440" }
      ],
      3:[
        { prompt:"<b>234 × 15 = ?</b>", answer:"3,510" },
        { prompt:"234 × 15", answer:"3,510" },
        { prompt:"408 × 23", answer:"9,384" },
        { prompt:"175 × 16", answer:"2,800" },
        { prompt:"326 × 14", answer:"4,564" }
      ],
    },
    hook:{
      title:'Shipping crates',
      problem:'A warehouse stacks boxes <b>234</b> long (in a row) and <b>16</b> rows deep. How many boxes in the stack? Use an area model or written method — show partial products.',
      context:'Connect to Week 4 area model — now with 3-digit × 2-digit.'
    },
    hookSolution:{
      heading:'Two partial products',
      steps:[
        '234 × 16 = 234 × (<b>10 + 6</b>).',
        '234 × 10 = <b>2,340</b>. 234 × 6 = <b>1,404</b>.',
        'Add: 2,340 + 1,404 = <b>3,744</b> boxes.',
        'Written method: multiply by 6 (ones), then by 1 ten (shift left), then add.'
      ],
      answer:'3,744 boxes'
    },
    concept:{
      heading:'3-digit × 2-digit',
      body:[
        'Multiply by the <b>ones</b> digit of the 2-digit number first.',
        'Multiply by the <b>tens</b> digit; shift one place left (or write a zero).',
        '<b>Add</b> the two partial products. Estimate to check reasonableness.'
      ],
      notice:'Align partial products by place value — the tens row starts in the tens column.',
      example:'125 × 24 → 125×4=500, 125×20=2,500, total 3,000'
    },
    practice:{
      1:[
        { prompt:'12 × 15', answer:'180' },
        { prompt:'23 × 11', answer:'253' },
        { prompt:'31 × 14', answer:'434' },
        { prompt:'42 × 12', answer:'504' }
      ],
      2:[
        { prompt:'125 × 12', answer:'1,500' },
        { prompt:'204 × 15', answer:'3,060' },
        { prompt:'156 × 11', answer:'1,716' },
        { prompt:'310 × 24', answer:'7,440' }
      ],
      3:[
        { prompt:'234 × 15', answer:'3,510' },
        { prompt:'408 × 23', answer:'9,384' },
        { prompt:'175 × 16', answer:'2,800' },
        { prompt:'326 × 14', answer:'4,564' }
      ]
    },
    wordProblems:[
      { prompt:'A school orders 185 lunches at $12 each. Total cost?', answer:'$2,220' },
      { prompt:'A field has 156 rows of 25 plants. How many plants?', answer:'3,900' },
      { prompt:'144 boxes × 18 items per box. Total items?', answer:'2,592' }
    ],
    notes:{
      diagnostic:'<p>Tier 2 bridges from area model. Tier 3: watch alignment on tens row.</p>',
      hook:'<p>Side-by-side: area grid and written method for same problem.</p>',
      concept:'<p>Insist on partial products shown — not just final answer from calculator.</p>',
      practice:'<p>~8 min algorithm + ~10 min word problems.</p>'
    }
  },
  {
    id:'w5-l2', week:5, lesson:2, code:'—', ready:true,
    title:'Multiplication problems',
    subtitle:'Stories with more than one step',
    focus:'solve story problems that need more than one multiplication step.',
    hot:'In the market stall story, what if lemonade costs $1 more? How does the total change — explain without restarting from scratch.',
    hero:{ src:'images/w5-l2-multiplication-problems.jpg', alt:'School market stall with price tags and quantities', caption:'Multiplication in stories' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Each bag has 8 apples. 5 bags. Total apples?", answer:"40" },
        { prompt:"6 teams of 7 players", answer:"42 players" },
        { prompt:"$9 × 8 tickets", answer:"$72" },
        { prompt:"4 packs of 12 pencils", answer:"48 pencils" },
        { prompt:"10 rows of 11 chairs", answer:"110 chairs" }
      ],
      2:[
        { prompt:"Books cost $15 each. 12 sold. Total money?", answer:"$180" },
        { prompt:"15 cartons × 24 eggs", answer:"360 eggs" },
        { prompt:"$18 × 25 items", answer:"$450" },
        { prompt:"32 classes × 28 students (estimate first)", answer:"896 students" },
        { prompt:"A train has 14 carriages, 52 seats each. Total seats?", answer:"728 seats" }
      ],
      3:[
        { prompt:"24 boxes × 18 per box. How many items?", answer:"432" },
        { prompt:"24 × 18 items (market boxes)", answer:"432 items" },
        { prompt:"A farmer plants 45 rows of 36 seeds. Total seeds?", answer:"1,620" },
        { prompt:"3 crates × 48 bottles; each bottle $2. Total value?", answer:"$288" },
        { prompt:"School sells 125 T-shirts at $16. Profit if cost is $9 each? (Revenue − cost)", answer:"$875 profit" }
      ],
    },
    hook:{
      title:'School market stall',
      problem:'Market stall: <b>24</b> cupcakes at <b>$3</b> each and <b>18</b> lemonades at <b>$2</b> each.<br>How much altogether? If you donate <b>1/4</b> to charity, how much is that?',
      context:'Two multiplications, then add — optional fraction step for Tier 3 discussion.'
    },
    hookSolution:{
      heading:'Find each product, then combine',
      steps:[
        'Cupcakes: 24 × $3 = <b>$72</b>.',
        'Lemonades: 18 × $2 = <b>$36</b>.',
        'Total raised: 72 + 36 = <b>$108</b>.',
        'Donate 1/4: 108 ÷ 4 = <b>$27</b> to charity (optional extension).'
      ],
      answer:'$108 raised · $27 donated if 1/4 given'
    },
    concept:{
      heading:'Multiplication in stories',
      body:[
        'Keywords: <b>each, per, every, rows of, times as many</b> → often multiply.',
        'Multi-step: solve one part, then use the result in the next step.',
        'Draw a picture or bar model. Write the number sentence before calculating.'
      ],
      notice:'Ask: “What are we finding — equal groups, area, or total cost?”',
      example:'3 shelves × 24 books = 72 books'
    },
    practice:{
      1:[
        { prompt:'6 teams of 7 players', answer:'42 players' },
        { prompt:'$9 × 8 tickets', answer:'$72' },
        { prompt:'4 packs of 12 pencils', answer:'48 pencils' },
        { prompt:'10 rows of 11 chairs', answer:'110 chairs' }
      ],
      2:[
        { prompt:'15 cartons × 24 eggs', answer:'360 eggs' },
        { prompt:'$18 × 25 items', answer:'$450' },
        { prompt:'32 classes × 28 students (estimate first)', answer:'896 students' },
        { prompt:'A train has 14 carriages, 52 seats each. Total seats?', answer:'728 seats' }
      ],
      3:[
        { prompt:'24 × 18 items (market boxes)', answer:'432 items' },
        { prompt:'A farmer plants 45 rows of 36 seeds. Total seeds?', answer:'1,620' },
        { prompt:'3 crates × 48 bottles; each bottle $2. Total value?', answer:'$288' },
        { prompt:'School sells 125 T-shirts at $16. Profit if cost is $9 each? (Revenue − cost)', answer:'$875 profit' }
      ]
    },
    wordProblems:[
      { prompt:'A cinema has 28 rows of 32 seats. Capacity?', answer:'896 seats' },
      { prompt:'You read 35 pages per day for 14 days. Total pages?', answer:'490 pages' },
      { prompt:'A recipe for 1 batch needs 245 g flour. You make 12 batches. Flour needed?', answer:'2,940 g' }
    ],
    notes:{
      diagnostic:'<p>Stories only — no bare algorithms on screen.</p>',
      hook:'<p>Let students list the two operations before any calculating.</p>',
      practice:'<p>Heavy word-problem lesson — books open entire practice block.</p>'
    }
  },
  {
    id:'w5-l3', week:5, lesson:3, code:'25.3', ready:true,
    title:'Choosing units of measure',
    subtitle:'Term 2 review',
    focus:'choose sensible metric units for length, mass and capacity.',
    hot:'Name something better measured in mm, something in m, and something in km. Why those units?',
    hero:{ src:'images/w5-l3-units-of-measure.jpg', alt:'Ruler beside a road distance sign showing kilometres', caption:'Right unit for the job' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Best unit for a pencil length: <b>mm, m, km</b>?", answer:"cm or mm" },
        { prompt:"Unit for desk width: mm or km?", answer:"cm/mm" },
        { prompt:"Unit for elephant mass: g or kg?", answer:"kg" },
        { prompt:"1 m = ? cm", answer:"100 cm" },
        { prompt:"1 L = ? mL", answer:"1,000 mL" }
      ],
      2:[
        { prompt:"Best unit for water in a bath: <b>mL, L, kL</b>?", answer:"L" },
        { prompt:"2 km = ? m", answer:"2,000 m" },
        { prompt:"3.5 kg = ? g", answer:"3,500 g" },
        { prompt:"Best unit: swimming pool capacity", answer:"kL or L" },
        { prompt:"450 cm = ? m", answer:"4.5 m" }
      ],
      3:[
        { prompt:"Convert: <b>3.5 km = ? m</b>", answer:"3,500 m" },
        { prompt:"3.5 km = ? m", answer:"3,500 m" },
        { prompt:"2,400 mL = ? L", answer:"2.4 L" },
        { prompt:"Order: 2,500 m, 2.8 km, 240,000 cm", answer:"240,000 cm, 2,500 m, 2.8 km" },
        { prompt:"A bag is 750 g. How many kg?", answer:"0.75 kg" }
      ],
    },
    hook:{
      title:'Measurement mix-up',
      problem:'Three students measure the same trip to school. Alex says <b>1.2 km</b>. Blake says <b>1,200 m</b>. Casey says <b>120,000 cm</b>. Who is correct? Are they all describing the same distance?',
      context:'Same measure, different units — conversion and sensible choice.'
    },
    hookSolution:{
      heading:'Same distance, different units',
      steps:[
        '1 km = 1,000 m, so 1.2 km = <b>1,200 m</b>. Alex and Blake match.',
        '1 m = 100 cm, so 1,200 m = 120,000 cm. Casey also matches!',
        'All three describe the <b>same</b> trip — units must be converted to compare.',
        'For daily talk: <b>km</b> or <b>m</b> is most sensible for a school trip.'
      ],
      answer:'All equal · 1.2 km = 1,200 m = 120,000 cm'
    },
    concept:{
      heading:'Choosing & converting units',
      body:[
        '<b>Length:</b> mm, cm, m, km — match the size of the object.',
        '<b>Capacity:</b> mL, L · <b>Mass:</b> g, kg.',
        'Convert using <b>×10, ×100, ×1000</b> between metric steps.'
      ],
      notice:'A sensible unit makes the number easy to understand (1.2 km not 1,200,000 mm).',
      example:'2.5 L = 2,500 mL · 450 cm = 4.5 m'
    },
    practice:{
      1:[
        { prompt:'Unit for desk width: mm or km?', answer:'cm/mm' },
        { prompt:'Unit for elephant mass: g or kg?', answer:'kg' },
        { prompt:'1 m = ? cm', answer:'100 cm' },
        { prompt:'1 L = ? mL', answer:'1,000 mL' }
      ],
      2:[
        { prompt:'2 km = ? m', answer:'2,000 m' },
        { prompt:'3.5 kg = ? g', answer:'3,500 g' },
        { prompt:'Best unit: swimming pool capacity', answer:'kL or L' },
        { prompt:'450 cm = ? m', answer:'4.5 m' }
      ],
      3:[
        { prompt:'3.5 km = ? m', answer:'3,500 m' },
        { prompt:'2,400 mL = ? L', answer:'2.4 L' },
        { prompt:'Order: 2,500 m, 2.8 km, 240,000 cm', answer:'240,000 cm, 2,500 m, 2.8 km' },
        { prompt:'A bag is 750 g. How many kg?', answer:'0.75 kg' }
      ]
    },
    wordProblems:[
      { prompt:'A rope is 2.4 m. Best unit to tell a friend? Write in cm too.', answer:'metres · 240 cm' },
      { prompt:'A jug holds 1,500 mL. How many litres?', answer:'1.5 L' },
      { prompt:'You walk 850 m to school. Is 850 km reasonable? Explain.', answer:'No — km is too large' }
    ],
    notes:{
      title:'<p>Term 2 review — pairs well with tomorrow’s measuring length lesson.</p>',
      diagnostic:'<p>Accept cm or mm for pencil. Tier 3 conversion without calculator.</p>',
      hook:'<p>Three-column conversion table on board.</p>',
      concept:'<p>Display real objects with labels (mL bottle, metre ruler).</p>',
      practice:'<p>Mix “choose unit” and “convert” questions.</p>'
    }
  },
  {
    id:'w5-l4', week:5, lesson:4, code:'26.1', ready:true,
    title:'Measuring length',
    subtitle:'Term 2 review · Practical',
    focus:'measure length carefully and swap between centimetres and metres.',
    hot:'A student writes 3.45 m as 3 m 45 mm. What’s wrong? How would you help them fix it?',
    hero:{ src:'images/w5-l4-measuring-length.jpg', alt:'Tape measure on a desk or long jump pit', caption:'Measure it accurately' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"How many cm in <b>1 m</b>?", answer:"100 cm" },
        { prompt:"1 m = ? cm", answer:"100 cm" },
        { prompt:"50 cm = ? m", answer:"0.5 m" },
        { prompt:"200 cm = ? m", answer:"2 m" },
        { prompt:"Which is longer: 85 cm or 0.9 m?", answer:"0.9 m (90 cm)" }
      ],
      2:[
        { prompt:"Measure: line about <b>8 cm</b> (teacher checks). Write length.", answer:"~8 cm" },
        { prompt:"1.25 m = ? cm", answer:"125 cm" },
        { prompt:"340 cm = ? m", answer:"3.4 m" },
        { prompt:"2 m 15 cm = ? cm", answer:"215 cm" },
        { prompt:"Order: 1.8 m, 175 cm, 1.05 m", answer:"1.05 m, 175 cm, 1.8 m" }
      ],
      3:[
        { prompt:"A desk is <b>142 cm</b> long. Write in metres.", answer:"1.42 m" },
        { prompt:"3 m 45 cm in metres", answer:"3.45 m" },
        { prompt:"Perimeter of 1.2 m × 0.8 m rectangle", answer:"4 m" },
        { prompt:"A path is 2.75 km. How many metres?", answer:"2,750 m" },
        { prompt:"Difference: 4.2 m and 385 cm", answer:"35 cm (0.35 m)" }
      ],
    },
    hook:{
      title:'Long jump measure',
      problem:'Three students measure the same long jump: <b>3 m 45 cm</b>, <b>345 cm</b>, and <b>3.45 m</b>.<br>Are these the same? Which way would an official results sheet use?',
      context:'Sport context — accuracy, unit conversion, and recording matter.'
    },
    hookSolution:{
      heading:'Convert to compare',
      steps:[
        '3 m 45 cm = 300 cm + 45 cm = <b>345 cm</b>.',
        '345 cm = 345 ÷ 100 = <b>3.45 m</b>.',
        'All three recordings are <b>equal</b>.',
        'Official sheets often use <b>metres to 2 decimal places</b> (3.45 m).'
      ],
      answer:'All equal · 3.45 m is standard form'
    },
    concept:{
      heading:'Measuring length',
      body:[
        'Align the zero mark; read to the nearest <b>mm</b> if using a ruler.',
        'Record with <b>unit</b>: 142 cm or 1.42 m — never bare numbers.',
        'Convert: cm → m divide by 100; m → cm multiply by 100.'
      ],
      notice:'Measure twice — errors often come from starting at 1 cm instead of 0.',
      example:'2 m 35 cm = 235 cm = 2.35 m'
    },
    practice:{
      1:[
        { prompt:'1 m = ? cm', answer:'100 cm' },
        { prompt:'50 cm = ? m', answer:'0.5 m' },
        { prompt:'200 cm = ? m', answer:'2 m' },
        { prompt:'Which is longer: 85 cm or 0.9 m?', answer:'0.9 m (90 cm)' }
      ],
      2:[
        { prompt:'1.25 m = ? cm', answer:'125 cm' },
        { prompt:'340 cm = ? m', answer:'3.4 m' },
        { prompt:'2 m 15 cm = ? cm', answer:'215 cm' },
        { prompt:'Order: 1.8 m, 175 cm, 1.05 m', answer:'1.05 m, 175 cm, 1.8 m' }
      ],
      3:[
        { prompt:'3 m 45 cm in metres', answer:'3.45 m' },
        { prompt:'Perimeter of 1.2 m × 0.8 m rectangle', answer:'4 m' },
        { prompt:'A path is 2.75 km. How many metres?', answer:'2,750 m' },
        { prompt:'Difference: 4.2 m and 385 cm', answer:'35 cm (0.35 m)' }
      ]
    },
    wordProblems:[
      { prompt:'Your height is 142 cm. Write in metres.', answer:'1.42 m' },
      { prompt:'Ribbon: 2 m 40 cm + 1 m 85 cm. Total length in cm?', answer:'425 cm' },
      { prompt:'A fence is 12.5 m. Posts every 2.5 m. How many sections?', answer:'5 sections' }
    ],
    notes:{
      diagnostic:'<p>Have rulers ready for Tier 2 if doing live measure — or describe a line on worksheet.</p>',
      hook:'<p>Connect to athletics or playground if school has long jump.</p>',
      concept:'<p>Demo correct ruler technique with document camera.</p>',
      practice:'<p>Week 5 wrap — multiplication + measurement before division next week.</p>'
    }
  },

  /* ========== WEEK 6 ========== */
  {
    id:'w6-l1', week:6, lesson:1, code:'16.3', ready:true,
    title:'Division',
    subtitle:'Equal sharing & grouping',
    focus:'divide by sharing equally or making equal groups.',
    hot:'Same total, two divisions: grouping vs sharing. Draw both for <b>24 ÷ 6</b> and label which is which.',
    hero:{ src:'images/w6-l1-division-sharing.jpg', alt:'Party food shared equally onto plates', caption:'Fair shares' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Share <b>12</b> apples among <b>3</b> friends. Each gets?", answer:"4" },
        { prompt:"15 ÷ 3", answer:"5" },
        { prompt:"24 ÷ 6", answer:"4" },
        { prompt:"36 ÷ 4", answer:"9" },
        { prompt:"49 ÷ 7", answer:"7" }
      ],
      2:[
        { prompt:"<b>56 ÷ 7 = ?</b>", answer:"8" },
        { prompt:"56 ÷ 8", answer:"7" },
        { prompt:"72 ÷ 9", answer:"8" },
        { prompt:"84 ÷ 7", answer:"12" },
        { prompt:"96 ÷ 6", answer:"16" }
      ],
      3:[
        { prompt:"<b>144 ÷ 6 = ?</b>", answer:"24" },
        { prompt:"144 ÷ 6", answer:"24" },
        { prompt:"168 ÷ 7", answer:"24" },
        { prompt:"135 ÷ 5", answer:"27" },
        { prompt:"216 ÷ 9", answer:"24" }
      ],
    },
    hook:{
      title:'Party platters',
      problem:'You have <b>48</b> mini pies. Put <b>6</b> on each platter — how many platters?<br>Share <b>48</b> pies equally among <b>8</b> guests — how many each?',
      context:'Same total, two division meanings — grouping vs sharing.'
    },
    hookSolution:{
      heading:'Grouping vs sharing',
      steps:[
        '<b>Grouping:</b> 48 ÷ 6 = <b>8</b> platters (how many groups of 6?).',
        '<b>Sharing:</b> 48 ÷ 8 = <b>6</b> pies each (48 shared among 8).',
        'Both use division — read the story to choose what the answer means.',
        'Check: 8 platters × 6 pies = 48 ✓ · 8 guests × 6 pies = 48 ✓'
      ],
      answer:'8 platters · or 6 pies per guest'
    },
    concept:{
      heading:'Division strategies',
      body:[
        '<b>Sharing:</b> total ÷ number of groups = size of each share.',
        '<b>Grouping:</b> total ÷ size of each group = number of groups.',
        'Use <b>multiplication facts</b>, split strategy, or repeated subtraction.'
      ],
      notice:'Division is the inverse of multiplication — use known facts to check.',
      example:'72 ÷ 9 → “9 × ? = 72” → 8'
    },
    practice:{
      1:[
        { prompt:'15 ÷ 3', answer:'5' },
        { prompt:'24 ÷ 6', answer:'4' },
        { prompt:'36 ÷ 4', answer:'9' },
        { prompt:'49 ÷ 7', answer:'7' }
      ],
      2:[
        { prompt:'56 ÷ 8', answer:'7' },
        { prompt:'72 ÷ 9', answer:'8' },
        { prompt:'84 ÷ 7', answer:'12' },
        { prompt:'96 ÷ 6', answer:'16' }
      ],
      3:[
        { prompt:'144 ÷ 6', answer:'24' },
        { prompt:'168 ÷ 7', answer:'24' },
        { prompt:'135 ÷ 5', answer:'27' },
        { prompt:'216 ÷ 9', answer:'24' }
      ]
    },
    wordProblems:[
      { prompt:'72 students split into 8 teams. Students per team?', answer:'9' },
      { prompt:'156 stickers shared among 12 children. Each gets?', answer:'13' },
      { prompt:'A baker packs 240 muffins into boxes of 15. How many boxes?', answer:'16 boxes' }
    ],
    notes:{
      title:'<p>Start division block — link back to multiplication facts from Weeks 4–5.</p>',
      diagnostic:'<p>Fact fluency check. Tier 3 without written method if possible.</p>',
      hook:'<p>Act out with counters — two questions, same 48.</p>',
      concept:'<p>Fact family triangle on board: 6, 8, 48.</p>',
      practice:'<p>Emphasise answering with units (9 students, not just 9).</p>'
    }
  },
  {
    id:'w6-l2', week:6, lesson:2, code:'24.1', ready:true,
    title:'Division with remainders',
    subtitle:'What is left over?',
    focus:'solve division stories with leftovers — and decide what the leftover means.',
    hot:'You have 50 cupcakes and boxes of 8. Is “6 remainder 2” the same as “6.25 boxes”? When would each answer make sense?',
    hero:{ src:'images/w6-l2-division-remainders.jpg', alt:'Cupcakes with one left over after sharing', caption:'What is left over?' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>13 ÷ 4 = ?</b> (remainder form)", answer:"3 r 1" },
        { prompt:"11 ÷ 2", answer:"5 r 1" },
        { prompt:"19 ÷ 4", answer:"4 r 3" },
        { prompt:"25 ÷ 6", answer:"4 r 1" },
        { prompt:"17 ÷ 3", answer:"5 r 2" }
      ],
      2:[
        { prompt:"<b>47 ÷ 5 = ?</b>", answer:"9 r 2" },
        { prompt:"47 ÷ 5", answer:"9 r 2" },
        { prompt:"58 ÷ 7", answer:"8 r 2" },
        { prompt:"73 ÷ 8", answer:"9 r 1" },
        { prompt:"91 ÷ 9", answer:"10 r 1" }
      ],
      3:[
        { prompt:"<b>100 ÷ 6 = ?</b>", answer:"16 r 4" },
        { prompt:"100 ÷ 6", answer:"16 r 4" },
        { prompt:"250 ÷ 12", answer:"20 r 10" },
        { prompt:"500 ÷ 18", answer:"27 r 14" },
        { prompt:"999 ÷ 7", answer:"142 r 5" }
      ],
    },
    hook:{
      title:'Cupcake boxes',
      problem:'You bake <b>50</b> cupcakes. Each box holds <b>8</b>. How many <b>full</b> boxes? How many left over?<br>Can you sell a half-full box as a “full box”?',
      context:'Remainder must make sense in the story — leftover cupcakes, not “0.25 boxes”.'
    },
    hookSolution:{
      heading:'Quotient and remainder',
      steps:[
        '50 ÷ 8 → 8×6 = 48, so <b>6 full boxes</b>.',
        '50 − 48 = <b>2 cupcakes left over</b>.',
        'Write: <b>6 r 2</b> or “6 remainder 2”.',
        'You need a 7th box for the last 2 — or eat them! Context decides.'
      ],
      answer:'6 full boxes · 2 left over'
    },
    concept:{
      heading:'Division with remainders',
      body:[
        'Divide as far as possible — the <b>remainder</b> must be less than the divisor.',
        'What does the leftover mean: <b>left over</b>, <b>round up</b> for another group, or <b>ignore</b> — read the story.',
        'Check: (quotient × divisor) + remainder = original total.'
      ],
      notice:'Remainder 8 when dividing by 8 means you missed a whole group — check again!',
      example:'47 ÷ 5 = 9 r 2 because 9×5 + 2 = 47'
    },
    practice:{
      1:[
        { prompt:'11 ÷ 2', answer:'5 r 1' },
        { prompt:'19 ÷ 4', answer:'4 r 3' },
        { prompt:'25 ÷ 6', answer:'4 r 1' },
        { prompt:'17 ÷ 3', answer:'5 r 2' }
      ],
      2:[
        { prompt:'47 ÷ 5', answer:'9 r 2' },
        { prompt:'58 ÷ 7', answer:'8 r 2' },
        { prompt:'73 ÷ 8', answer:'9 r 1' },
        { prompt:'91 ÷ 9', answer:'10 r 1' }
      ],
      3:[
        { prompt:'100 ÷ 6', answer:'16 r 4' },
        { prompt:'250 ÷ 12', answer:'20 r 10' },
        { prompt:'500 ÷ 18', answer:'27 r 14' },
        { prompt:'999 ÷ 7', answer:'142 r 5' }
      ]
    },
    wordProblems:[
      { prompt:'43 children, 5 per minibus. Full minibuses? Children left waiting?', answer:'8 full · 3 waiting' },
      { prompt:'100 ÷ 6 pencils per pack. Full packs? Loose pencils?', answer:'16 packs · 4 loose' },
      { prompt:'Ribbon 200 cm, cut into 15 cm lengths. Full pieces? Leftover cm?', answer:'13 pieces · 5 cm left' }
    ],
    notes:{
      diagnostic:'<p>Accept “3 remainder 1” or “3 r 1”. Tier 3: interpret remainder in context.</p>',
      hook:'<p>Discuss “round up” — need 7 boxes total to pack all 50?</p>',
      concept:'<p>Three remainder stories: share leftover, discard, round up.</p>',
      practice:'<p>Always ask “What does the remainder mean here?”</p>'
    }
  },
  {
    id:'w6-l3', week:6, lesson:3, code:'—', ready:true,
    title:'Revision',
    subtitle:'Multiplication & division',
    focus:'practise multiplication and division strategies in story problems.',
    hot:'Design a one-step problem that needs division with a leftover that you must round up. Explain why.',
    hero:{ src:'images/w6-l3-multiplication-division-revision.jpg', alt:'Whiteboard with mixed multiplication and division problems', caption:'× and ÷ revision' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>8 × 7 = ?</b>", answer:"56" },
        { prompt:"9 × 6", answer:"54" },
        { prompt:"48 ÷ 8", answer:"6" },
        { prompt:"12 × 5", answer:"60" },
        { prompt:"35 ÷ 5", answer:"7" }
      ],
      2:[
        { prompt:"<b>156 ÷ 6 = ?</b>", answer:"26" },
        { prompt:"234 × 4", answer:"936" },
        { prompt:"156 ÷ 6", answer:"26" },
        { prompt:"45 × 12", answer:"540" },
        { prompt:"83 ÷ 7", answer:"11 r 6" }
      ],
      3:[
        { prompt:"<b>24 × 15 = ?</b>", answer:"360" },
        { prompt:"24 × 15", answer:"360" },
        { prompt:"408 × 23", answer:"9,384" },
        { prompt:"500 ÷ 18", answer:"27 r 14" },
        { prompt:"125 × 16", answer:"2,000" }
      ],
    },
    hook:{
      title:'Challenge relay',
      problem:'Team challenge: (1) <b>125 × 8</b>  (2) <b>432 ÷ 9</b>  (3) <b>35 × 12</b>  (4) <b>97 ÷ 6</b> with remainder. Which operation for each? What strategies speed you up?',
      context:'Mixed × and ÷ — choose strategy before calculating.'
    },
    hookSolution:{
      heading:'Strategy match-up',
      steps:[
        '(1) 125 × 8 = 125 × 8 = <b>1,000</b> (friendly ×8).',
        '(2) 432 ÷ 9 = <b>48</b> (fact: 9×48 = 432).',
        '(3) 35 × 12 = 35 × 10 + 35 × 2 = <b>420</b> (split).',
        '(4) 97 ÷ 6 = <b>16 r 1</b> (remainder).'
      ],
      answer:'1,000 · 48 · 420 · 16 r 1'
    },
    concept:{
      heading:'Weeks 4–6 revision',
      body:[
        '<b>×:</b> split, written method, area model, ×10/100.',
        '<b>÷:</b> sharing, grouping, remainders — decide what leftovers mean in the story.',
        'Fact families link × and ÷ — use one to check the other.'
      ],
      notice:'Next week’s investigation uses calculations with data — being quick helps, but clear thinking matters most.',
      example:'? × 15 = 360 → 360 ÷ 15 = 24'
    },
    practice:{
      1:[
        { prompt:'9 × 6', answer:'54' },
        { prompt:'48 ÷ 8', answer:'6' },
        { prompt:'12 × 5', answer:'60' },
        { prompt:'35 ÷ 5', answer:'7' }
      ],
      2:[
        { prompt:'234 × 4', answer:'936' },
        { prompt:'156 ÷ 6', answer:'26' },
        { prompt:'45 × 12', answer:'540' },
        { prompt:'83 ÷ 7', answer:'11 r 6' }
      ],
      3:[
        { prompt:'24 × 15', answer:'360' },
        { prompt:'408 × 23', answer:'9,384' },
        { prompt:'500 ÷ 18', answer:'27 r 14' },
        { prompt:'125 × 16', answer:'2,000' }
      ]
    },
    wordProblems:[
      { prompt:'18 boxes × 24 items. Total? If shared among 9 classes, each gets?', answer:'432 · 48 each' },
      { prompt:'960 stickers, 12 per sheet. How many sheets?', answer:'80 sheets' },
      { prompt:'A trip costs $45 per student. 28 students. Total? Buses hold 35 — enough seats?', answer:'$1,260 · yes' }
    ],
    notes:{
      diagnostic:'<p>Use for final grouping tweaks before SA6.</p>',
      hook:'<p>Team relay on board — one problem at a time.</p>',
      concept:'<p>Preview SA6: data collection + graphs + calculations.</p>',
      practice:'<p>Flexible timing — shorten concept if relay runs long.</p>'
    }
  },
  {
    id:'w6-l4', week:6, lesson:4, code:'—', ready:true,
    title:'Revision',
    subtitle:'Problem solving · SA6 prep',
    focus:'solve problems that need more than one step.',
    hot:'For the water story: which question was hardest — and what made it a multi-step problem?',
    hero:{ src:'images/w6-l4-problem-solving-revision.jpg', alt:'Students working together on a multi-step maths problem', caption:'Problem-solving revision' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>6 × 9 = ?</b>", answer:"54" },
        { prompt:"4 packs × 6 drinks", answer:"24 drinks" },
        { prompt:"20 shared among 5", answer:"4 each" },
        { prompt:"3 m = ? cm", answer:"300 cm" },
        { prompt:"10% of $50", answer:"$5" }
      ],
      2:[
        { prompt:"A book has 15 chapters of 24 pages. Total pages?", answer:"360" },
        { prompt:"15 chapters × 24 pages", answer:"360 pages" },
        { prompt:"360 pages ÷ 12 days reading", answer:"30 pages/day" },
        { prompt:"2.4 km = ? m", answer:"2,400 m" },
        { prompt:"84 ÷ 9", answer:"9 r 3" }
      ],
      3:[
        { prompt:"<b>2.5 m</b> of ribbon cut into <b>35 cm</b> pieces. How many full pieces?", answer:"7 (25 cm left)" },
        { prompt:"2.5 m ribbon → 35 cm pieces. Full pieces?", answer:"7 (25 cm left)" },
        { prompt:"180 L ÷ 6 days, then × 4 days at new rate if cut by 15 L/day", answer:"60 L (see hook)" },
        { prompt:"234 × 15", answer:"3,510" },
        { prompt:"Order: 0.45, 2/5, 1/2 as decimals", answer:"0.4, 0.45, 0.5" }
      ],
    },
    hook:{
      title:'Water saver challenge',
      problem:'A family uses <b>180 L</b> of shower water over <b>6</b> equal days.<br>(1) Litres per day? (2) If they save <b>15 L</b> per day, how much in <b>4</b> days? (3) Why might this matter?',
      context:'Multi-step + real context — mirrors SA6 investigation theme without giving answers away.'
    },
    hookSolution:{
      heading:'Step by step',
      steps:[
        '(1) 180 ÷ 6 = <b>30 L</b> per day (equal sharing).',
        '(2) New daily use: 30 − 15 = <b>15 L</b> per day. Over 4 days: 15 × 4 = <b>60 L</b>.',
        '(3) Less water saves money and helps the environment — SA6 explores this further!',
        'Plan: what do I know? What do I find first? What next?'
      ],
      answer:'30 L/day · 60 L over 4 days at new rate'
    },
    concept:{
      heading:'Problem-solving plan',
      body:[
        '<b>Read</b> — what is being asked? Underline key numbers and words.',
        '<b>Plan</b> — which operations? In what order?',
        '<b>Solve & check</b> — does the answer make sense? Correct units?'
      ],
      notice:'Next week: SA6 over 4 sessions — collect data, graph, calculate, reflect.',
      example:'Total ÷ days = daily rate → then multiply for new situations'
    },
    practice:{
      1:[
        { prompt:'4 packs × 6 drinks', answer:'24 drinks' },
        { prompt:'20 shared among 5', answer:'4 each' },
        { prompt:'3 m = ? cm', answer:'300 cm' },
        { prompt:'10% of $50', answer:'$5' }
      ],
      2:[
        { prompt:'15 chapters × 24 pages', answer:'360 pages' },
        { prompt:'360 pages ÷ 12 days reading', answer:'30 pages/day' },
        { prompt:'2.4 km = ? m', answer:'2,400 m' },
        { prompt:'84 ÷ 9', answer:'9 r 3' }
      ],
      3:[
        { prompt:'2.5 m ribbon → 35 cm pieces. Full pieces?', answer:'7 (25 cm left)' },
        { prompt:'180 L ÷ 6 days, then × 4 days at new rate if cut by 15 L/day', answer:'60 L (see hook)' },
        { prompt:'234 × 15', answer:'3,510' },
        { prompt:'Order: 0.45, 2/5, 1/2 as decimals', answer:'0.4, 0.45, 0.5' }
      ]
    },
    wordProblems:[
      { prompt:'Canteen sells 48 lunches/day for 5 days. Total lunches? Revenue at $6 each?', answer:'240 lunches · $1,440' },
      { prompt:'A tank holds 500 L. 75 L used each day. After 4 days, how much left?', answer:'200 L' },
      { prompt:'Class raises $720. 1/4 for charity, rest for excursion. Excursion money?', answer:'$540' }
    ],
    notes:{
      title:'<p>Last lesson before SA6. Light tone — students are ready for investigation format.</p>',
      diagnostic:'<p>Tier 3 mixes measurement + division remainder — SA6-style thinking.</p>',
      hook:'<p>Explicit SA6 preview without teaching the task. Build curiosity.</p>',
      concept:'<p>Show SA6 session overview from assessments.js. Check materials list.</p>',
      practice:'<p>Celebrate Weeks 4–6. Homework optional review sheet if you use one.</p>'
    }
  },

  /* ========== WEEK 7 · SA6 ========== */
  { id:'w7-l1', week:7, lesson:1, code:'SA 6', ready:true, title:'SA 6 — Down the drain', subtitle:'Part A · Collect data', type:'assessment', assessmentId:'sa6',
    hero:{ src:'images/w7-l1-sa6-water-tap.jpg', alt:'Running tap or shower head with water droplets', caption:'SA 6 · Down the drain' } },
  { id:'w7-l2', week:7, lesson:2, code:'SA 6', ready:true, title:'SA 6 — Down the drain', subtitle:'Part A · Graphs', type:'assessment', assessmentId:'sa6',
    hero:{ src:'images/w7-l2-sa6-water-usage.jpg', alt:'Water meter or bucket collecting shower water', caption:'SA 6 · Water usage' } },
  { id:'w7-l3', week:7, lesson:3, code:'SA 6', ready:true, title:'SA 6 — Down the drain', subtitle:'Part B · Calculations (1)', type:'assessment', assessmentId:'sa6',
    hero:{ src:'images/w7-l3-sa6-investigation.jpg', alt:'Student recording water data in a table', caption:'SA 6 · Investigation' } },
  { id:'w7-l4', week:7, lesson:4, code:'SA 6', ready:true, title:'SA 6 — Down the drain', subtitle:'Part B · Calculations (2)', type:'assessment', assessmentId:'sa6',
    hero:{ src:'images/w7-l4-sa6-reflection.jpg', alt:'Graph showing household water use over a week', caption:'SA 6 · Wrap-up', diagram:true } },

  /* ========== WEEK 8 ========== */
  {
    id:'w8-l1', week:8, lesson:1, code:'6.1', ready:true,
    title:'Line graphs',
    subtitle:'Change over time',
    focus:'read and draw line graphs that show how something changes over time.',
    hot:'Could you use a bar graph for the heatwave temperatures? Say yes or no — and give a reason.',
    hero:{ src:'images/w8-l1-line-graph.jpg', alt:'Line graph of daily temperature over a week', caption:'Change over time', diagram:true },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"On a line graph, what does the <b>horizontal axis</b> usually show?", answer:"Time (or categories)" },
        { prompt:"Line goes up left to right. Trend?", answer:"Increasing" },
        { prompt:"Point at (Day 3, 5). What does 5 mean?", answer:"Value at Day 3" },
        { prompt:"Two points: 2 and 7. Difference?", answer:"5" },
        { prompt:"Flat horizontal line means…", answer:"No change" }
      ],
      2:[
        { prompt:"Temperature Mon <b>18°C</b>, Tue <b>22°C</b>. Did it rise or fall?", answer:"Rose" },
        { prompt:"Mon 12, Tue 15, Wed 18. Rise Mon→Wed?", answer:"6" },
        { prompt:"Highest of 8, 11, 9, 14?", answer:"14" },
        { prompt:"Lowest of 25, 22, 28, 20?", answer:"20" },
        { prompt:"Steeper line = ? change", answer:"Faster" }
      ],
      3:[
        { prompt:"Highest temp Wed <b>26°C</b>, Thu <b>24°C</b>, Fri <b>20°C</b>. Total drop Wed→Fri?", answer:"6°C" },
        { prompt:"Temp 26→24→20 (Wed–Fri). Total drop?", answer:"6" },
        { prompt:"Plant 4 cm Week 1, 10 cm Week 4. Growth?", answer:"6 cm in 3 weeks" },
        { prompt:"Rainfall Mon 0, Tue 5, Wed 5, Thu 0 mm. Steady rain which days?", answer:"Tue & Wed" },
        { prompt:"Estimate value halfway between 8 and 14 on scale", answer:"11" }
      ],
    },
    hook:{
      title:'The heatwave week',
      problem:'Daily max temperatures: Mon <b>18°C</b>, Tue <b>22°C</b>, Wed <b>26°C</b>, Thu <b>24°C</b>, Fri <b>20°C</b>.<br>(1) Hottest day? (2) What happens from Wed to Fri? (3) What might cause that pattern?',
      context:'Builds on SA6 graph work — now with formal line graph language.'
    },
    hookSolution:{
      heading:'Read the line',
      steps:[
        '<b>Wednesday</b> was hottest at 26°C (highest point on the graph).',
        'Wed → Thu → Fri: the line <b>goes down</b> — cooling trend (26 → 24 → 20).',
        'Total drop Wed to Fri: 26 − 20 = <b>6°C</b>.',
        'Steeper line = faster change. Flat sections = little change.'
      ],
      answer:'Wed hottest · cooling 6°C by Fri'
    },
    concept:{
      heading:'Line graphs',
      body:[
        'Best for data that changes <b>over time</b> (temperature, height, distance).',
        'Plot points, join with straight segments. Read <b>between</b> points to estimate.',
        'Describe: <b>increasing, decreasing, steady</b> — steeper = faster rate of change.'
      ],
      notice:'Always label axes with units (°C, cm, days).',
      example:'Plant height: Week 1 = 4 cm, Week 4 = 10 cm → grew 6 cm in 3 weeks'
    },
    practice:{
      1:[
        { prompt:'Line goes up left to right. Trend?', answer:'Increasing' },
        { prompt:'Point at (Day 3, 5). What does 5 mean?', answer:'Value at Day 3' },
        { prompt:'Two points: 2 and 7. Difference?', answer:'5' },
        { prompt:'Flat horizontal line means…', answer:'No change' }
      ],
      2:[
        { prompt:'Mon 12, Tue 15, Wed 18. Rise Mon→Wed?', answer:'6' },
        { prompt:'Highest of 8, 11, 9, 14?', answer:'14' },
        { prompt:'Lowest of 25, 22, 28, 20?', answer:'20' },
        { prompt:'Steeper line = ? change', answer:'Faster' }
      ],
      3:[
        { prompt:'Temp 26→24→20 (Wed–Fri). Total drop?', answer:'6' },
        { prompt:'Plant 4 cm Week 1, 10 cm Week 4. Growth?', answer:'6 cm in 3 weeks' },
        { prompt:'Rainfall Mon 0, Tue 5, Wed 5, Thu 0 mm. Steady rain which days?', answer:'Tue & Wed' },
        { prompt:'Estimate value halfway between 8 and 14 on scale', answer:'11' }
      ]
    },
    wordProblems:[
      { prompt:'A puppy weighed 3 kg at 8 weeks and 9 kg at 16 weeks. Average gain per week?', answer:'0.75 kg/week' },
      { prompt:'Line graph shows books read: Jan 4, Feb 7, Mar 10. How many more Feb→Mar than Jan→Feb?', answer:'Same increase (3 each)' },
      { prompt:'Temperature fell from 28°C to 19°C over 3 hours. Average drop per hour?', answer:'3°C/hour' }
    ],
    notes:{
      title:'<p>After SA6 — students have graphed data. Formalise line graph vocabulary.</p>',
      diagnostic:'<p>Tier 1: axis purpose. Tier 3: multi-day change calculation.</p>',
      hook:'<p>Sketch quick line graph on board as you discuss.</p>',
      concept:'<p>Contrast with bar graph — line shows continuous change over time.</p>',
      practice:'<p>Optional: students plot hook data on grid paper.</p>'
    }
  },
  {
    id:'w8-l2', week:8, lesson:2, code:'6.2', ready:true,
    title:'Categorical and numerical data',
    subtitle:'Sort the data',
    focus:'tell the difference between label data and number data, and pick a good graph.',
    hot:'Sort these: shoe size, favourite colour, height in cm, number of pets. Which are label data? Which are number data?',
    hero:{ src:'images/w8-l2-categorical-data.jpg', alt:'Bar chart or pictograph of favourite sports survey', caption:'Sort the data', diagram:true },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Favourite colour: red, blue, green. <b>Categorical</b> or <b>numerical</b>?", answer:"Categorical" },
        { prompt:"Dog, cat, fish as pets — data type?", answer:"Categorical" },
        { prompt:"Ages in years — data type?", answer:"Numerical" },
        { prompt:"Most common value is called…", answer:"Mode" },
        { prompt:"Bar graph suits which data type?", answer:"Categorical" }
      ],
      2:[
        { prompt:"Heights of students in cm — categorical or numerical?", answer:"Numerical" },
        { prompt:"Fruit: apple 6, banana 4, pear 2. Mode?", answer:"Apple" },
        { prompt:"Temperatures daily — categorical or numerical?", answer:"Numerical" },
        { prompt:"Bus colour: red, blue, green — data type?", answer:"Categorical" },
        { prompt:"Line graph best for temperature over week?", answer:"Yes" }
      ],
      3:[
        { prompt:"Best graph for favourite sport survey: line or bar?", answer:"Bar (or pictograph)" },
        { prompt:"Survey: walk 14, bus 11, car 9. Mode? Total responses?", answer:"Walk · 34" },
        { prompt:"Why not a line graph for favourite fruit?", answer:"Categories, not time/continuous measure" },
        { prompt:"Numerical: scores 8, 12, 12, 15. Mode?", answer:"12" },
        { prompt:"Categorical data on line graph — problem?", answer:"No natural order / misleading line" }
      ],
    },
    hook:{
      title:'Class survey results',
      problem:'Your class surveys favourite sport: Soccer <b>12</b>, Basketball <b>8</b>, Swimming <b>5</b>, Tennis <b>3</b>. Is “sport” categorical or numerical? What graph type fits best? What is the <b>mode</b>?',
      context:'Connect to SA6 — same decisions about data type and display.'
    },
    hookSolution:{
      heading:'Categories, not numbers',
      steps:[
        'Sport names are <b>labels</b> — this is <b>categorical data</b>.',
        'Best display: <b>bar graph</b> or pictograph (compare categories).',
        'Line graphs suit <b>numerical data over time</b>, not favourite sport.',
        '<b>Mode</b> = most popular = Soccer (12 votes).'
      ],
      answer:'Categorical · bar graph · mode = Soccer'
    },
    concept:{
      heading:'Two types of data',
      body:[
        '<b>Categorical:</b> labels or groups (colour, sport, pet type) → bar graph, pictograph.',
        '<b>Numerical:</b> counts or measurements (height, score, temperature) → line graph, histogram.',
        '<b>Mode</b> = most frequent category or value.'
      ],
      notice:'Ask: “Can I measure it with a number line, or is it a name/group?”',
      example:'Shoe size (numerical) vs shoe brand (categorical)'
    },
    practice:{
      1:[
        { prompt:'Dog, cat, fish as pets — data type?', answer:'Categorical' },
        { prompt:'Ages in years — data type?', answer:'Numerical' },
        { prompt:'Most common value is called…', answer:'Mode' },
        { prompt:'Bar graph suits which data type?', answer:'Categorical' }
      ],
      2:[
        { prompt:'Fruit: apple 6, banana 4, pear 2. Mode?', answer:'Apple' },
        { prompt:'Temperatures daily — categorical or numerical?', answer:'Numerical' },
        { prompt:'Bus colour: red, blue, green — data type?', answer:'Categorical' },
        { prompt:'Line graph best for temperature over week?', answer:'Yes' }
      ],
      3:[
        { prompt:'Survey: walk 14, bus 11, car 9. Mode? Total responses?', answer:'Walk · 34' },
        { prompt:'Why not a line graph for favourite fruit?', answer:'Categories, not time/continuous measure' },
        { prompt:'Numerical: scores 8, 12, 12, 15. Mode?', answer:'12' },
        { prompt:'Categorical data on line graph — problem?', answer:'No natural order / misleading line' }
      ]
    },
    wordProblems:[
      { prompt:'24 students chose summer, 18 winter, 12 autumn as favourite season. Mode? Total?', answer:'Summer · 54' },
      { prompt:'You measure arm spans (cm). Graph type?', answer:'Bar or dot plot (numerical)' },
      { prompt:'Same survey as hook: how many more chose soccer than tennis?', answer:'9' }
    ],
    notes:{
      diagnostic:'<p>Tier 3: justify graph choice, not just name it.</p>',
      hook:'<p>Quick bar graph sketch with sport labels.</p>',
      concept:'<p>Two-column anchor: categorical | numerical with examples.</p>',
      practice:'<p>Students classify 6 data sets you call out orally.</p>'
    }
  },
  {
    id:'w8-l3', week:8, lesson:3, code:'—', ready:true,
    title:'Data',
    subtitle:'Collect, organise & make sense of data',
    focus:'collect data, put it in a table, and say what it shows.',
    hot:'What new survey question would give you more useful travel-to-school information? Why?',
    hero:{ src:'images/w8-l3-data-collection.jpg', alt:'Class survey clipboard with tally marks', caption:'Collect and represent' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Tally for 7: how many marks?", answer:"7 (four + three)" },
        { prompt:"Tally |||| | = ?", answer:"6" },
        { prompt:"Table: 4, 7, 9. Total?", answer:"20" },
        { prompt:"First step in data project?", answer:"Ask a question" },
        { prompt:"Graph helps us…", answer:"See patterns quickly" }
      ],
      2:[
        { prompt:"Table shows Mon 5, Tue 8, Wed 6 books read. Total?", answer:"19 books" },
        { prompt:"Mon 5, Tue 8, Wed 6. Total? Highest day?", answer:"19 · Tue" },
        { prompt:"30 students, 18 said yes. Fraction yes?", answer:"18/30 = 3/5" },
        { prompt:"Why use a table before a graph?", answer:"Organise raw data" },
        { prompt:"Difference Tue and Mon books (5, 8)?", answer:"3" }
      ],
      3:[
        { prompt:"Class size 28. 12 walk, 10 bus, rest by car. How many by car?", answer:"6" },
        { prompt:"Walk 12, bus 10, car 6. Fraction who walk?", answer:"12/28 = 3/7" },
        { prompt:"28 total, 12 walk. How many don’t walk?", answer:"16" },
        { prompt:"What extra data for “longest walk”?", answer:"Distance or time per student" },
        { prompt:"Mean of 4, 7, 9 books read", answer:"20 ÷ 3 ≈ 6.7" }
      ],
    },
    hook:{
      title:'How we get to school',
      problem:'Travel to school: Walk <b>12</b>, Bus <b>10</b>, Car <b>6</b>.<br>(1) How many surveyed? (2) What fraction walk? (3) What can’t this data tell you?',
      context:'Full data cycle — collect, table, interpret, spot limits.'
    },
    hookSolution:{
      heading:'From tally to conclusion',
      steps:[
        'Total: 12 + 10 + 6 = <b>28</b> students.',
        'Walk: 12/28 = <b>3/7</b> (simplify) or about <b>43%</b>.',
        'We know <b>counts</b> — not <b>why</b> they chose that travel or distance walked.',
        'Good data answers the question asked — note what is missing.'
      ],
      answer:'28 students · 12/28 walk · cannot explain reasons without more data'
    },
    concept:{
      heading:'The data cycle',
      body:[
        '<b>Question</b> → collect → <b>record</b> (tally/table) → display (graph) → <b>interpret</b>.',
        'Tables organise raw data; graphs show patterns quickly.',
        'State what the data shows — and what it <b>does not</b> prove.'
      ],
      notice:'Clear question first: “What do we want to find out?”',
      example:'Survey 30 students → table → bar graph → “Most prefer …”'
    },
    practice:{
      1:[
        { prompt:'Tally |||| | = ?', answer:'6' },
        { prompt:'Table: 4, 7, 9. Total?', answer:'20' },
        { prompt:'First step in data project?', answer:'Ask a question' },
        { prompt:'Graph helps us…', answer:'See patterns quickly' }
      ],
      2:[
        { prompt:'Mon 5, Tue 8, Wed 6. Total? Highest day?', answer:'19 · Tue' },
        { prompt:'30 students, 18 said yes. Fraction yes?', answer:'18/30 = 3/5' },
        { prompt:'Why use a table before a graph?', answer:'Organise raw data' },
        { prompt:'Difference Tue and Mon books (5, 8)?', answer:'3' }
      ],
      3:[
        { prompt:'Walk 12, bus 10, car 6. Fraction who walk?', answer:'12/28 = 3/7' },
        { prompt:'28 total, 12 walk. How many don’t walk?', answer:'16' },
        { prompt:'What extra data for “longest walk”?', answer:'Distance or time per student' },
        { prompt:'Mean of 4, 7, 9 books read', answer:'20 ÷ 3 ≈ 6.7' }
      ]
    },
    wordProblems:[
      { prompt:'Survey 24 students: 9 soccer, 6 netball, rest athletics. How many athletics?', answer:'9' },
      { prompt:'Rainfall Mon–Fri: 0, 3, 5, 2, 0 mm. Total? Wettest day?', answer:'10 mm · Wed' },
      { prompt:'Class fund: $45, $60, $55 raised by 3 classes. Total?', answer:'$160' }
    ],
    notes:{
      diagnostic:'<p>Tier 3 links to fractions from Term 3 — 12/28 simplify.</p>',
      hook:'<p>Could run live class survey if time — 2 min tally.</p>',
      concept:'<p>Display data cycle poster if school has one.</p>',
      practice:'<p>Week 8 data strand — ties L1–L2 together.</p>'
    }
  },
  {
    id:'w8-l4', week:8, lesson:4, code:'19.4', ready:true,
    title:'Finding smaller parts',
    subtitle:'Fraction of a group',
    focus:'find fractions of a group (like 1/4 or 3/5 of a set).',
    hot:'You find 1/4 of 36, then 1/3 of what’s left. Invent a real-life story that matches those steps.',
    hero:{ src:'images/w8-l4-fraction-of-group.jpg', alt:'Bag of lollies with a fraction highlighted', caption:'A fraction of a group' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>1/4</b> of <b>12</b> lollies = ?", answer:"3" },
        { prompt:"1/2 of 20", answer:"10" },
        { prompt:"1/4 of 16", answer:"4" },
        { prompt:"1/5 of 25", answer:"5" },
        { prompt:"1/3 of 15", answer:"5" }
      ],
      2:[
        { prompt:"<b>1/3</b> of <b>24</b> = ?", answer:"8" },
        { prompt:"1/3 of 24", answer:"8" },
        { prompt:"2/5 of 30", answer:"12" },
        { prompt:"3/4 of 20", answer:"15" },
        { prompt:"1/6 of 42", answer:"7" }
      ],
      3:[
        { prompt:"<b>3/5</b> of <b>40</b> = ?", answer:"24" },
        { prompt:"3/5 of 40", answer:"24" },
        { prompt:"2/3 of 36", answer:"24" },
        { prompt:"5/8 of 56", answer:"35" },
        { prompt:"1/4 of 36, then 1/3 of remainder (hook)", answer:"9, then 9 left 18" }
      ],
    },
    hook:{
      title:'Lolly bag fairness',
      problem:'A bag has <b>36</b> lollies. You give your friend <b>1/4</b> of the bag. Your sister gets <b>1/3</b> of what is <b>left</b>. How many does each get? How many lollies remain?',
      context:'Fraction of a group, then fraction of the remainder — two-step.'
    },
    hookSolution:{
      heading:'Find the part, then the next part',
      steps:[
        'Friend: 1/4 of 36 = 36 ÷ 4 = <b>9</b> lollies.',
        'Left: 36 − 9 = <b>27</b> lollies.',
        'Sister: 1/3 of 27 = 27 ÷ 3 = <b>9</b> lollies.',
        'Remain: 27 − 9 = <b>18</b> lollies (or 36 − 9 − 9 = 18).'
      ],
      answer:'Friend 9 · Sister 9 · 18 left'
    },
    concept:{
      heading:'Fraction of a group',
      body:[
        '<b>Unit fraction:</b> divide the total by the denominator (1/4 of 20 → 20 ÷ 4).',
        '<b>Non-unit fraction:</b> find 1 part, then multiply by numerator (3/5 of 40 → 8 × 3).',
        'Or: multiply total by fraction (3/5 × 40 = 120/5 = 24).'
      ],
      notice:'“Of” means multiply — 1/2 of 50 = half of 50 = 25.',
      example:'2/3 of 30 → 30 ÷ 3 = 10, × 2 = 20'
    },
    practice:{
      1:[
        { prompt:'1/2 of 20', answer:'10' },
        { prompt:'1/4 of 16', answer:'4' },
        { prompt:'1/5 of 25', answer:'5' },
        { prompt:'1/3 of 15', answer:'5' }
      ],
      2:[
        { prompt:'1/3 of 24', answer:'8' },
        { prompt:'2/5 of 30', answer:'12' },
        { prompt:'3/4 of 20', answer:'15' },
        { prompt:'1/6 of 42', answer:'7' }
      ],
      3:[
        { prompt:'3/5 of 40', answer:'24' },
        { prompt:'2/3 of 36', answer:'24' },
        { prompt:'5/8 of 56', answer:'35' },
        { prompt:'1/4 of 36, then 1/3 of remainder (hook)', answer:'9, then 9 left 18' }
      ]
    },
    wordProblems:[
      { prompt:'48 students, 1/4 play chess. How many play chess?', answer:'12' },
      { prompt:'$120 raised. 1/5 donated to charity. How much donated?', answer:'$24' },
      { prompt:'60 trees planted. 2/3 are native. How many native?', answer:'40' }
    ],
    notes:{
      diagnostic:'<p>Tier 3 non-unit fraction. Hook reinforces remainder idea.</p>',
      hook:'<p>Draw 36 grid. Shade quarters then thirds of remainder.</p>',
      concept:'<p>Week 8 wrap — data + fraction of group links to Week 1 fractions.</p>',
      practice:'<p>Bar model drawings encouraged for Tier 2/3.</p>'
    }
  },

  /* ========== WEEK 9 ========== */
  {
    id:'w9-l1', week:9, lesson:1, code:'32.2', ready:true,
    title:'Nets of objects',
    subtitle:'2D → 3D',
    focus:'spot and describe nets that fold into 3D shapes.',
    hot:'Can a net with only 5 faces fold into a closed box? Explain using faces.',
    hero:{ src:'images/w9-l1-nets.jpg', alt:'Cardboard box unfolded into a flat net', caption:'Fold it up!', diagram:true },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"A cube has how many <b>faces</b>?", answer:"6" },
        { prompt:"Cube faces?", answer:"6" },
        { prompt:"Net folds to make…", answer:"3D shape" },
        { prompt:"Square pyramid base shape?", answer:"Square" },
        { prompt:"How many faces on a triangular prism?", answer:"5" }
      ],
      2:[
        { prompt:"A net is the 2D pattern that folds to make a…", answer:"3D solid" },
        { prompt:"Cube net: how many squares?", answer:"6" },
        { prompt:"Rectangular prism: how many rectangular faces?", answer:"6" },
        { prompt:"Net with 5 squares — make a cube?", answer:"No (need 6)" },
        { prompt:"Name a 3D object with 1 square and 4 triangles", answer:"Square pyramid" }
      ],
      3:[
        { prompt:"How many squares in a cube net?", answer:"6" },
        { prompt:"Which fails: 4 squares in a row only — cube?", answer:"No — only 4 faces" },
        { prompt:"Triangular prism net: triangles + rectangles count", answer:"2 triangles, 3 rectangles" },
        { prompt:"Opposite faces on cube — touch on net?", answer:"Usually no" },
        { prompt:"Cylinder has a net with…", answer:"2 circles + 1 rectangle" }
      ],
    },
    hook:{
      title:'Unfold the box',
      problem:'You flatten a cardboard box. It has <b>6</b> rectangles.<br>What 3D shape will it fold into? If one face is missing from the net, can you still make a closed box?',
      context:'Hands-on if possible — one empty tissue box or template.'
    },
    hookSolution:{
      heading:'Net ↔ solid',
      steps:[
        '6 connected rectangles (or squares) that fold up → <b>rectangular prism</b> (or cube if all squares).',
        'A <b>net</b> shows every face laid flat — like opening a box completely.',
        'Missing face → cannot close the solid — all faces needed.',
        'Opposite faces on the solid are usually <b>not</b> touching on the net.'
      ],
      answer:'Rectangular prism (or cube) · need all 6 faces'
    },
    concept:{
      heading:'Nets of 3D objects',
      body:[
        'A <b>net</b> is a 2D shape that folds into a 3D object.',
        'Cube net: <b>6 squares</b> in connected arrangement (11 possible layouts).',
        'Prism net: <b>2 identical bases</b> + rectangles for the sides.'
      ],
      notice:'Imagine folding — do edges match? Do you get a closed solid?',
      example:'Triangular prism net: 2 triangles + 3 rectangles'
    },
    practice:{
      1:[
        { prompt:'Cube faces?', answer:'6' },
        { prompt:'Net folds to make…', answer:'3D shape' },
        { prompt:'Square pyramid base shape?', answer:'Square' },
        { prompt:'How many faces on a triangular prism?', answer:'5' }
      ],
      2:[
        { prompt:'Cube net: how many squares?', answer:'6' },
        { prompt:'Rectangular prism: how many rectangular faces?', answer:'6' },
        { prompt:'Net with 5 squares — make a cube?', answer:'No (need 6)' },
        { prompt:'Name a 3D object with 1 square and 4 triangles', answer:'Square pyramid' }
      ],
      3:[
        { prompt:'Which fails: 4 squares in a row only — cube?', answer:'No — only 4 faces' },
        { prompt:'Triangular prism net: triangles + rectangles count', answer:'2 triangles, 3 rectangles' },
        { prompt:'Opposite faces on cube — touch on net?', answer:'Usually no' },
        { prompt:'Cylinder has a net with…', answer:'2 circles + 1 rectangle' }
      ]
    },
    wordProblems:[
      { prompt:'You need to wrap a cube gift. Why is the net useful?', answer:'Shows all 6 face areas laid flat' },
      { prompt:'A tent is a triangular prism. Name its faces.', answer:'2 triangles, 3 rectangles' },
      { prompt:'4 squares in a T-shape — how many more for a cube net?', answer:'2 more squares' }
    ],
    notes:{
      title:'<p>Have pre-cut nets or digital diagram. Week 9 geometry focus.</p>',
      diagnostic:'<p>Tier 1: face count. Physical cube helps.</p>',
      hook:'<p>Actually fold if you have a net printout.</p>',
      concept:'<p>Show valid vs invalid nets side by side.</p>',
      practice:'<p>Matching activity: net → name of solid.</p>'
    }
  },
  {
    id:'w9-l2', week:9, lesson:2, code:'—', ready:true,
    title:'Nets (continued)',
    subtitle:'Prisms & pyramids',
    focus:'decide which nets will fold into a solid — and which won’t.',
    hot:'Design a net that looks right but will not fold. What did you deliberately get wrong?',
    hero:{ src:'images/w9-l2-nets-prisms.jpg', alt:'Nets of prisms and pyramids on a table', caption:'More nets', diagram:true },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Triangular prism: how many <b>triangular</b> faces?", answer:"2" },
        { prompt:"Square pyramid: triangular faces?", answer:"4" },
        { prompt:"Triangular prism: rectangular faces?", answer:"3" },
        { prompt:"Pyramid has one…", answer:"Apex" },
        { prompt:"Prism has two identical…", answer:"Bases" }
      ],
      2:[
        { prompt:"Square pyramid: how many <b>triangular</b> faces?", answer:"4" },
        { prompt:"Net: 2 triangles + 3 rectangles. Solid?", answer:"Triangular prism" },
        { prompt:"Net: 1 square + 4 triangles. Solid?", answer:"Square pyramid" },
        { prompt:"5 squares in a row — cube?", answer:"No" },
        { prompt:"Hexagonal prism: rectangle count?", answer:"6" }
      ],
      3:[
        { prompt:"A net has 2 hexagons and 6 rectangles. Name the solid.", answer:"Hexagonal prism" },
        { prompt:"2 hexagons + 6 rectangles →", answer:"Hexagonal prism" },
        { prompt:"Octagonal pyramid: triangle count?", answer:"8" },
        { prompt:"Why 4 squares in a row fail as cube net?", answer:"Only 4 faces; can’t close" },
        { prompt:"Edges on cube", answer:"12" }
      ],
    },
    hook:{
      title:'Will it fold?',
      problem:'Three nets: <b>A</b> cross of 6 squares. <b>B</b> 5 squares in a row. <b>C</b> 2 triangles on a strip of 3 rectangles.<br>Which make a closed solid? What 3D shape is Net C?',
      context:'Predict before folding — spatial reasoning.'
    },
    hookSolution:{
      heading:'Check faces and connections',
      steps:[
        'Net A: 6 squares in standard cross → folds to a <b>cube</b> ✓',
        'Net B: only 5 squares → <b>cannot</b> close (missing face) ✗',
        'Net C: 2 triangles + 3 rectangles → <b>triangular prism</b> ✓',
        'Count faces, check each edge has a partner when folded.'
      ],
      answer:'A cube ✓ · B fails ✓ · C triangular prism ✓'
    },
    concept:{
      heading:'Prisms & pyramids',
      body:[
        '<b>Prism:</b> 2 identical parallel bases + rectangular side faces.',
        '<b>Pyramid:</b> 1 base + triangular faces meeting at apex.',
        'Side count matches base edges: triangular prism → 3 rectangles.'
      ],
      notice:'Base shape names the solid: hexagonal prism, square pyramid.',
      example:'Pentagonal pyramid: 1 pentagon + 5 triangles'
    },
    practice:{
      1:[
        { prompt:'Square pyramid: triangular faces?', answer:'4' },
        { prompt:'Triangular prism: rectangular faces?', answer:'3' },
        { prompt:'Pyramid has one…', answer:'Apex' },
        { prompt:'Prism has two identical…', answer:'Bases' }
      ],
      2:[
        { prompt:'Net: 2 triangles + 3 rectangles. Solid?', answer:'Triangular prism' },
        { prompt:'Net: 1 square + 4 triangles. Solid?', answer:'Square pyramid' },
        { prompt:'5 squares in a row — cube?', answer:'No' },
        { prompt:'Hexagonal prism: rectangle count?', answer:'6' }
      ],
      3:[
        { prompt:'2 hexagons + 6 rectangles →', answer:'Hexagonal prism' },
        { prompt:'Octagonal pyramid: triangle count?', answer:'8' },
        { prompt:'Why 4 squares in a row fail as cube net?', answer:'Only 4 faces; can’t close' },
        { prompt:'Edges on cube', answer:'12' }
      ]
    },
    wordProblems:[
      { prompt:'A Toblerone box is a triangular prism. How many rectangular faces?', answer:'3' },
      { prompt:'Egyptian pyramid model — base square. How many triangles to cut?', answer:'4' },
      { prompt:'You draw 7 squares for a cube net. Problem?', answer:'One too many / wrong layout' }
    ],
    notes:{
      diagnostic:'<p>Tier 3 naming from net description — strong visual learners shine.</p>',
      hook:'<p>Vote A/B/C before revealing answers.</p>',
      concept:'<p>Table: prism vs pyramid properties.</p>',
      practice:'<p>Sketch one valid cube net from memory.</p>'
    }
  },
  {
    id:'w9-l3', week:9, lesson:3, code:'—', ready:true,
    title:'Nets (continued)',
    subtitle:'Build & verify',
    focus:'make a net, fold it, and check faces, edges and corners.',
    hot:'After folding, count faces, edges and corners. Does your prism match what you predicted from the net? Explain.',
    hero:{ src:'images/w9-l3-nets-craft.jpg', alt:'Student cutting and folding a 3D net', caption:'Build the shape' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Vertices on a cube?", answer:"8" },
        { prompt:"Cube vertices?", answer:"8" },
        { prompt:"Cube edges?", answer:"12" },
        { prompt:"Label net before folding — why?", answer:"Know which face is which" },
        { prompt:"Tabs on net are for…", answer:"Gluing/taping" }
      ],
      2:[
        { prompt:"Edges on a cube?", answer:"12" },
        { prompt:"4×3×5 prism: 4×3 rectangles how many?", answer:"2 (top & bottom)" },
        { prompt:"4×5 rectangles how many?", answer:"2" },
        { prompt:"3×5 rectangles how many?", answer:"2" },
        { prompt:"Triangular prism vertices?", answer:"6" }
      ],
      3:[
        { prompt:"Faces + vertices − edges = ? (Euler hint for cube)", answer:"2 (6+8−12=2)" },
        { prompt:"Cube: F+V−E", answer:"2" },
        { prompt:"Draw net for 2×2×2 cube — square size?", answer:"2 cm squares × 6" },
        { prompt:"Wrong measurement on one face — what happens?", answer:"Won’t fold cleanly / gap" },
        { prompt:"Rectangular prism same vertex count as cube?", answer:"Yes (8)" }
      ],
    },
    hook:{
      title:'Build the prism',
      problem:'Net of a rectangular prism: base <b>4 cm × 3 cm</b>, height <b>5 cm</b>.<br>(1) How many rectangles? (2) What sizes? (3) After folding, count faces, edges and corners.',
      context:'Practical lesson — measure, fold, tape, count.'
    },
    hookSolution:{
      heading:'Design matches solid',
      steps:[
        'Need <b>6</b> rectangles: top & bottom 4×3, front & back 4×5, sides 3×5.',
        'Pairs of opposite faces are <b>equal areas</b>.',
        'Fold and tape → rectangular prism.',
        'Count: <b>6</b> faces, <b>12</b> edges, <b>8</b> vertices (same as cube!).'
      ],
      answer:'6 rectangles · 4×3, 4×5, 3×5 pairs · 6-12-8'
    },
    concept:{
      heading:'Build to understand',
      body:[
        'Drawing a net needs <b>accurate measurements</b> — opposite faces match.',
        'After folding: <b>F + V − E = 2</b> (Euler) for many polyhedra — optional extension.',
        'Tab flaps for glue — not counted as faces of the solid.'
      ],
      notice:'Label faces on your net before folding (top, base, front…).',
      example:'4×3×5 prism: surface area = 2(12+20+15) = 94 cm² (extension)'
    },
    practice:{
      1:[
        { prompt:'Cube vertices?', answer:'8' },
        { prompt:'Cube edges?', answer:'12' },
        { prompt:'Label net before folding — why?', answer:'Know which face is which' },
        { prompt:'Tabs on net are for…', answer:'Gluing/taping' }
      ],
      2:[
        { prompt:'4×3×5 prism: 4×3 rectangles how many?', answer:'2 (top & bottom)' },
        { prompt:'4×5 rectangles how many?', answer:'2' },
        { prompt:'3×5 rectangles how many?', answer:'2' },
        { prompt:'Triangular prism vertices?', answer:'6' }
      ],
      3:[
        { prompt:'Cube: F+V−E', answer:'2' },
        { prompt:'Draw net for 2×2×2 cube — square size?', answer:'2 cm squares × 6' },
        { prompt:'Wrong measurement on one face — what happens?', answer:'Won’t fold cleanly / gap' },
        { prompt:'Rectangular prism same vertex count as cube?', answer:'Yes (8)' }
      ]
    },
    wordProblems:[
      { prompt:'Gift box 10×10×5 cm. Largest rectangle in net dimensions?', answer:'10×10 cm (top/base)' },
      { prompt:'You tape 5 faces but leave top open. Solid type?', answer:'Open box (not closed prism)' },
      { prompt:'After building, why count edges carefully?', answer:'Check net matched solid / find errors' }
    ],
    notes:{
      title:'<p>Craft lesson — pre-cut nets or template on worksheet. Scissors & tape.</p>',
      diagnostic:'<p>Euler optional for Tier 3 — don’t require formula if not taught.</p>',
      hook:'<p>Main activity IS the hook — allow 15 min build time in practice block.</p>',
      concept:'<p>Short concept if build runs long — learning is in the making.</p>',
      practice:'<p>Extension: compare two prisms’ edge counts.</p>'
    }
  },
  {
    id:'w9-l4', week:9, lesson:4, code:'6.4', ready:true,
    title:'Making a table or chart',
    subtitle:'Organise & present',
    focus:'make clear tables and charts from data we collect.',
    hot:'Same sports data: would a table or a bar chart be better for finding the mode quickly? Why?',
    hero:{ src:'images/w9-l4-table-chart.jpg', alt:'Organised table and chart in a student maths book', caption:'Tables and charts', diagram:true },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:12 },
      { phase:'practice', min:13 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Table needs a title and…", answer:"Column/row headings" },
        { prompt:"Table needs headings and…", answer:"Title" },
        { prompt:"Bar chart compares…", answer:"Categories or amounts" },
        { prompt:"8, 5, 7 — highest?", answer:"8" },
        { prompt:"Chart axis label example", answer:"Points / House names" }
      ],
      2:[
        { prompt:"Convert to bar chart: Red 8, Blue 5, Green 7. Tallest bar?", answer:"Red" },
        { prompt:"Red 8, Blue 5, Green 7. Mode category if colours?", answer:"Red (highest bar)" },
        { prompt:"Total of 8+5+7", answer:"20" },
        { prompt:"Why title your graph?", answer:"Says what data shows" },
        { prompt:"Scale 0, 10, 20… why start at 0?", answer:"Fair comparison of bar heights" }
      ],
      3:[
        { prompt:"24 students, table shows 8+6+?=24. Missing value?", answer:"10" },
        { prompt:"86, 72, 94, 68 — winner and margin over 2nd", answer:"94 Green, by 8" },
        { prompt:"Missing value: 8+6+x=24", answer:"10" },
        { prompt:"Table vs graph — when prefer table?", answer:"Exact values needed" },
        { prompt:"Mean of 86, 72, 94, 68", answer:"80" }
      ],
    },
    hook:{
      title:'Sports day results',
      problem:'House points: Red <b>86</b>, Blue <b>72</b>, Green <b>94</b>, Yellow <b>68</b>. (1) Make a table. (2) Draw a bar chart. (3) Which house won? (4) By how many points over second place?',
      context:'Table first, then graph — same data, two displays.'
    },
    hookSolution:{
      heading:'Table → chart → interpret',
      steps:[
        'Table: columns House | Points with four rows.',
        'Bar chart: houses on horizontal axis, scale 0–100, Green tallest.',
        '<b>Green</b> won with 94 points.',
        'Second: Red 86. Difference: 94 − 86 = <b>8 points</b>.'
      ],
      answer:'Green wins by 8 over Red'
    },
    concept:{
      heading:'Tables & charts',
      body:[
        '<b>Table:</b> exact values, easy lookup — title + labelled columns.',
        '<b>Chart:</b> visual comparison — consistent scale, labelled axes, title.',
        'Same data can appear both ways — choose what communicates best.'
      ],
      notice:'Scale must start at 0 for bar charts unless clearly marked otherwise.',
      example:'Survey table → bar graph → “Green house scored most”'
    },
    practice:{
      1:[
        { prompt:'Table needs headings and…', answer:'Title' },
        { prompt:'Bar chart compares…', answer:'Categories or amounts' },
        { prompt:'8, 5, 7 — highest?', answer:'8' },
        { prompt:'Chart axis label example', answer:'Points / House names' }
      ],
      2:[
        { prompt:'Red 8, Blue 5, Green 7. Mode category if colours?', answer:'Red (highest bar)' },
        { prompt:'Total of 8+5+7', answer:'20' },
        { prompt:'Why title your graph?', answer:'Says what data shows' },
        { prompt:'Scale 0, 10, 20… why start at 0?', answer:'Fair comparison of bar heights' }
      ],
      3:[
        { prompt:'86, 72, 94, 68 — winner and margin over 2nd', answer:'94 Green, by 8' },
        { prompt:'Missing value: 8+6+x=24', answer:'10' },
        { prompt:'Table vs graph — when prefer table?', answer:'Exact values needed' },
        { prompt:'Mean of 86, 72, 94, 68', answer:'80' }
      ]
    },
    wordProblems:[
      { prompt:'Books read: Ali 12, Bo 9, Chen 15. Bar chart — who tallest? Difference Chen & Bo?', answer:'Chen · 6 books' },
      { prompt:'Temperature table Mon–Fri. When use line graph instead of bar?', answer:'To show change over time' },
      { prompt:'30 votes split 12, 10, 8. Verify total. Smallest group?', answer:'30 ✓ · 8 smallest' }
    ],
    notes:{
      diagnostic:'<p>Tier 3 mean of house points — optional stretch.</p>',
      hook:'<p>Students draw table + chart in books from hook data.</p>',
      concept:'<p>Week 9 wrap — nets + data display. Link to Week 8 graphs.</p>',
      practice:'<p>Peer check: can partner read your chart without asking?</p>'
    }
  },

  /* ========== WEEK 10 ========== */
  {
    id:'w10-l1', week:10, lesson:1, code:'—', ready:true,
    title:'Revision and problem solving',
    subtitle:'Term 3 revision (1)',
    focus:'practise fractions, decimals and comparing from this term.',
    hot:'Create a fraction/decimal trap for a classmate (something that looks bigger but isn’t). Explain the trick.',
    hero:{ src:'images/w10-l1-term-revision.jpg', alt:'Lightbulb moment with maths puzzle pieces', caption:'Term 3 revision' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Larger: <b>1/3</b> or <b>1/4</b>?", answer:"1/3" },
        { prompt:"1/2 + 1/4", answer:"3/4" },
        { prompt:"0.5 as fraction", answer:"1/2" },
        { prompt:"Larger: 0.7 or 0.69", answer:"0.7" },
        { prompt:"1/4 of 20", answer:"5" }
      ],
      2:[
        { prompt:"Write <b>3/4</b> as a decimal.", answer:"0.75" },
        { prompt:"3/4 as decimal", answer:"0.75" },
        { prompt:"2/5 as decimal", answer:"0.4" },
        { prompt:"1/3 + 1/6", answer:"1/2" },
        { prompt:"10% of $40", answer:"$4" }
      ],
      3:[
        { prompt:"Order: <b>0.4, 2/5, 0.45</b>", answer:"0.4 (=2/5), 0.45" },
        { prompt:"3/5 of 60", answer:"36" },
        { prompt:"2 1/4 as improper fraction", answer:"9/4" },
        { prompt:"0.909 vs 9/10", answer:"0.909 larger" },
        { prompt:"<b>Tier 3</b> · extra 5", answer:"—" }
      ],
    },
    hook:{
      title:'Mixed-up menu',
      problem:'Canteen prices: Pizza <b>3/4</b> of $8, Juice <b>0.6</b> of $5, Muffin <b>2/5</b> of $10. Rank items by actual price from cheapest to dearest. Which strategies did you use?',
      context:'Fractions and decimals in one problem — Term 3 core.'
    },
    hookSolution:{
      heading:'Convert, calculate, compare',
      steps:[
        'Pizza: 3/4 × 8 = <b>$6</b>. Juice: 0.6 × 5 = <b>$3</b>. Muffin: 2/5 × 10 = <b>$4</b>.',
        'Order cheapest → dearest: <b>Juice $3, Muffin $4, Pizza $6</b>.',
        'Strategies: fraction of amount, decimal multiply, compare dollars.',
        'Always convert to same form when ordering fractions and decimals.'
      ],
      answer:'Juice $3 · Muffin $4 · Pizza $6'
    },
    concept:{
      heading:'Term 3 number revision',
      body:[
        '<b>Fractions:</b> compare, equivalent, add/subtract, fraction of group.',
        '<b>Decimals:</b> place value, compare, link to fractions and %.',
        'More than one step: change units → calculate → check the units make sense.'
      ],
      notice:'Week 10 spirals the term — use diagnostics to target re-teach in practice.',
      example:'2/5 = 0.4 · 75% = 0.75 = 3/4'
    },
    practice:{
      1:[
        { prompt:'1/2 + 1/4', answer:'3/4' },
        { prompt:'0.5 as fraction', answer:'1/2' },
        { prompt:'Larger: 0.7 or 0.69', answer:'0.7' },
        { prompt:'1/4 of 20', answer:'5' }
      ],
      2:[
        { prompt:'3/4 as decimal', answer:'0.75' },
        { prompt:'2/5 as decimal', answer:'0.4' },
        { prompt:'1/3 + 1/6', answer:'1/2' },
        { prompt:'10% of $40', answer:'$4' }
      ],
      3:[
        { prompt:'Order: 0.4, 2/5, 0.45', answer:'0.4, 0.45 (2/5=0.4)' },
        { prompt:'3/5 of 60', answer:'36' },
        { prompt:'2 1/4 as improper fraction', answer:'9/4' },
        { prompt:'0.909 vs 9/10', answer:'0.909 larger' }
      ]
    },
    wordProblems:[
      { prompt:'You eat 1/3 of a cake. Friend eats 1/4. Who ate more?', answer:'You (1/3 > 1/4)' },
      { prompt:'Sale: 25% off $48. Sale price?', answer:'$36' },
      { prompt:'Rope 0.75 m and 3/4 m. Total length?', answer:'1.5 m' }
    ],
    notes:{
      title:'<p>Week 10 revision arc — lighter new content, heavier practice.</p>',
      diagnostic:'<p>Use to form revision groups for remaining week.</p>',
      hook:'<p>Menu on board — students work before solution slide.</p>',
      practice:'<p>Target weak areas from diagnostic in tier groups.</p>'
    }
  },
  {
    id:'w10-l2', week:10, lesson:2, code:'—', ready:true,
    title:'Revision and problem solving',
    subtitle:'Term 3 revision (2)',
    focus:'practise multiplication, division and multi-step story problems.',
    hot:'Write a two-step money problem for a partner. Swap and solve — then mark each other’s reasoning.',
    hero:{ src:'images/w10-l2-multi-step-problems.jpg', alt:'Team of students solving a challenge on a whiteboard', caption:'Multi-step problems' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>7 × 8 = ?</b>", answer:"56" },
        { prompt:"8 × 9", answer:"72" },
        { prompt:"56 ÷ 7", answer:"8" },
        { prompt:"12 × 5", answer:"60" },
        { prompt:"36 ÷ 6", answer:"6" }
      ],
      2:[
        { prompt:"<b>144 ÷ 12 = ?</b>", answer:"12" },
        { prompt:"234 × 4", answer:"936" },
        { prompt:"156 ÷ 6", answer:"26" },
        { prompt:"45 × 12", answer:"540" },
        { prompt:"97 ÷ 6", answer:"16 r 1" }
      ],
      3:[
        { prompt:"<b>234 × 15 = ?</b>", answer:"3,510" },
        { prompt:"234 × 15", answer:"3,510" },
        { prompt:"28 × $45 excursion full cost", answer:"$1,260" },
        { prompt:"500 ÷ 18", answer:"27 r 14" },
        { prompt:"125 × 16", answer:"2,000" }
      ],
    },
    hook:{
      title:'Excursion budget',
      problem:'Excursion costs <b>$45</b> per student. Your class has <b>28</b> students. The school subsidises <b>$15</b> per student. (1) Full cost before subsidy? (2) What each family pays? (3) Total family payments altogether?',
      context:'× then subtract — multi-step money problem.'
    },
    hookSolution:{
      heading:'Plan the steps',
      steps:[
        '(1) Full cost: 28 × $45 = <b>$1,260</b>.',
        '(2) Each family: $45 − $15 = <b>$30</b>.',
        '(3) Total from families: 28 × $30 = <b>$840</b> (or $1,260 − $420 subsidy).',
        'Check: subsidy 28×15 = $420. $840 + $420 = $1,260 ✓'
      ],
      answer:'$1,260 full · $30 each · $840 from families'
    },
    concept:{
      heading:'× and ÷ revision',
      body:[
        'Split, written method, area model — use what fits.',
        'Division: decide what leftovers mean in the story.',
        'Multi-step: list steps, answer one part at a time.'
      ],
      notice:'Underline what each calculation finds before computing.',
      example:'Total cost → adjust per person → new total'
    },
    practice:{
      1:[
        { prompt:'8 × 9', answer:'72' },
        { prompt:'56 ÷ 7', answer:'8' },
        { prompt:'12 × 5', answer:'60' },
        { prompt:'36 ÷ 6', answer:'6' }
      ],
      2:[
        { prompt:'234 × 4', answer:'936' },
        { prompt:'156 ÷ 6', answer:'26' },
        { prompt:'45 × 12', answer:'540' },
        { prompt:'97 ÷ 6', answer:'16 r 1' }
      ],
      3:[
        { prompt:'234 × 15', answer:'3,510' },
        { prompt:'28 × $45 excursion full cost', answer:'$1,260' },
        { prompt:'500 ÷ 18', answer:'27 r 14' },
        { prompt:'125 × 16', answer:'2,000' }
      ]
    },
    wordProblems:[
      { prompt:'24 boxes × 18 crayons. Total crayons?', answer:'432' },
      { prompt:'960 ÷ 15 students per table. How many tables?', answer:'64' },
      { prompt:'Book 240 pages, 15 pages/day. Days to finish?', answer:'16 days' }
    ],
    notes:{
      diagnostic:'<p>Links to Week 4–6 content — expect stronger fluency now.</p>',
      hook:'<p>Real excursion figures if school shares them — or keep generic.</p>',
      practice:'<p>Mix bare facts and stories 50/50 in practice block.</p>'
    }
  },
  {
    id:'w10-l3', week:10, lesson:3, code:'—', ready:true,
    title:'Revision and problem solving',
    subtitle:'Data, measure & geometry',
    focus:'practise graphs, measurement and nets from recent weeks.',
    hot:'Pick one wrong graph choice for today’s scores and explain why it would confuse people.',
    hero:{ src:'images/w10-l3-real-world-maths.jpg', alt:'Real-world maths scene: market, sport and cooking combined', caption:'Maths everywhere' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:10 },
      { phase:'practice', min:15 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"Line graph best for data over…", answer:"Time" },
        { prompt:"Favourite fruit survey — graph type?", answer:"Bar" },
        { prompt:"1 m = ? cm", answer:"100" },
        { prompt:"Cube faces?", answer:"6" },
        { prompt:"Temperature over week — graph?", answer:"Line" }
      ],
      2:[
        { prompt:"2.5 km = ? m", answer:"2,500 m" },
        { prompt:"2.4 km = ? m", answer:"2,400 m" },
        { prompt:"Triangular prism: triangle faces?", answer:"2" },
        { prompt:"Mode of 5, 8, 8, 12", answer:"8" },
        { prompt:"3 m 20 cm in cm", answer:"320 cm" }
      ],
      3:[
        { prompt:"Cube net: how many squares?", answer:"6" },
        { prompt:"94, 86, 72 — margin 1st over 2nd", answer:"8" },
        { prompt:"3 m 45 cm in metres", answer:"3.45 m" },
        { prompt:"2/3 of 36", answer:"24" },
        { prompt:"Hexagonal prism: rectangle count", answer:"6" }
      ],
    },
    hook:{
      title:'Sports day recap',
      problem:'Green <b>94</b>, Red <b>86</b>, Blue <b>72</b> points.<br>(1) Bar or line graph — which and why? (2) Winning margin? (3) Long jump <b>3 m 45 cm</b> in metres? (4) Cube gift box — how many faces on its net?',
      context:'Mixed revision — data, measure, geometry in one story.'
    },
    hookSolution:{
      heading:'Pick the right tool',
      steps:[
        '(1) <b>Bar chart</b> — categorical houses, comparing scores (not time series).',
        '(2) 94 − 86 = <b>8 points</b> margin (Green over Red).',
        '(3) 3 m 45 cm = <b>3.45 m</b> (345 cm).',
        '(4) Cube net has <b>6</b> square faces.'
      ],
      answer:'Bar chart · 8 pts · 3.45 m · 6 squares'
    },
    concept:{
      heading:'Data, measure & space',
      body:[
        '<b>Data:</b> categorical → bar; change over time → line; table for exact values.',
        '<b>Measure:</b> convert km/m, cm/m; choose sensible units.',
        '<b>Geometry:</b> nets, faces, edges — visualise 2D ↔ 3D.'
      ],
      notice:'Read the question type before choosing strategy — same as all term.',
      example:'SA6 used data + measure + calculate — you’ve done this!'
    },
    practice:{
      1:[
        { prompt:'Favourite fruit survey — graph type?', answer:'Bar' },
        { prompt:'1 m = ? cm', answer:'100' },
        { prompt:'Cube faces?', answer:'6' },
        { prompt:'Temperature over week — graph?', answer:'Line' }
      ],
      2:[
        { prompt:'2.4 km = ? m', answer:'2,400 m' },
        { prompt:'Triangular prism: triangle faces?', answer:'2' },
        { prompt:'Mode of 5, 8, 8, 12', answer:'8' },
        { prompt:'3 m 20 cm in cm', answer:'320 cm' }
      ],
      3:[
        { prompt:'94, 86, 72 — margin 1st over 2nd', answer:'8' },
        { prompt:'3 m 45 cm in metres', answer:'3.45 m' },
        { prompt:'2/3 of 36', answer:'24' },
        { prompt:'Hexagonal prism: rectangle count', answer:'6' }
      ]
    },
    wordProblems:[
      { prompt:'Plant grew from 8 cm to 23 cm in 5 weeks. Average growth per week?', answer:'3 cm/week' },
      { prompt:'750 mL = ? L', answer:'0.75 L' },
      { prompt:'Survey 30: soccer 12, netball 10, rest athletics. Athletics count?', answer:'8' }
    ],
    notes:{
      diagnostic:'<p>Spiral Weeks 8–9 — geometry craft may need quick recap image.</p>',
      hook:'<p>Four-part question — one minute per part in pairs.</p>',
      concept:'<p>Celebrate SA6 investigation skills — same thinking here.</p>',
      practice:'<p>Station rotation optional: data / measure / nets.</p>'
    }
  },
  {
    id:'w10-l4', week:10, lesson:4, code:'—', ready:true,
    title:'Revision and problem solving',
    subtitle:'Term 3 celebration',
    focus:'take on mixed challenge problems and celebrate what we’ve learned.',
    hot:'What maths idea from this term are you most proud of? Give one example problem that shows it.',
    hero:{ src:'images/w10-l4-celebrate-maths.jpg', alt:'Celebratory classroom scene end of term', caption:'You’ve got this!' },
    pacing:[
      { phase:'diagnostic', min: 8 },
      { phase:'hook', min:7 },
      { phase:'solution', min:8 },
      { phase:'concept', min:8 },
      { phase:'practice', min:17 }
    ],
    diagnostic:
    {
      1:[
        { prompt:"<b>1/2 + 1/4 = ?</b>", answer:"3/4" },
        { prompt:"1/4 of 24", answer:"6" },
        { prompt:"0.25 as fraction", answer:"1/4" },
        { prompt:"8 × 7", answer:"56" },
        { prompt:"Cube net squares?", answer:"6" }
      ],
      2:[
        { prompt:"<b>15 × 12 = ?</b>", answer:"180" },
        { prompt:"1/2 + 1/4", answer:"3/4" },
        { prompt:"15 × 12", answer:"180" },
        { prompt:"2.5 km = ? m", answer:"2,500 m" },
        { prompt:"3/5 of 45", answer:"27" }
      ],
      3:[
        { prompt:"Order: <b>0.5, 1/2, 0.49</b>", answer:"0.49, 0.5 (=1/2)" },
        { prompt:"234 × 15", answer:"3,510" },
        { prompt:"2.75 m in cm", answer:"275 cm" },
        { prompt:"168 ÷ 7", answer:"24" },
        { prompt:"<b>Tier 3</b> · extra 5", answer:"—" }
      ],
    },
    hook:{
      title:'Term 3 challenge quiz',
      problem:'Four quick challenges: (A) <b>3/5</b> of 45  (B) <b>2.75 m</b> in cm  (C) <b>168 ÷ 7</b>  (D) Name the 3D solid from a net with 2 triangles and 3 rectangles. Work in teams — share strategies!',
      context:'Celebratory tone — low stakes, high engagement. Last lesson of term.'
    },
    hookSolution:{
      heading:'You’ve seen all of this before',
      steps:[
        '(A) 3/5 of 45 = 9 × 3 = <b>27</b>.',
        '(B) 2.75 m = 275 cm (or 2 m 75 cm).',
        '(C) 168 ÷ 7 = <b>24</b>.',
        '(D) <b>Triangular prism</b>.',
        'Different topics — same plan: read, choose strategy, check.'
      ],
      answer:'27 · 275 cm · 24 · triangular prism'
    },
    concept:{
      heading:'Term 3 — what you can do now',
      body:[
        'Fractions & decimals: compare, convert, operate, fraction of group.',
        'Multiplication & division: strategies, remainders, word problems.',
        'Data & geometry: graphs, tables, nets, measurement.',
        'Assessments SA5 & SA6 — show, order, investigate, calculate.'
      ],
      notice:'Maths is problem-solving — not just answers. Explain and check.',
      example:'Pick any term problem — identify strand, strategy, check.'
    },
    practice:{
      1:[
        { prompt:'1/4 of 24', answer:'6' },
        { prompt:'0.25 as fraction', answer:'1/4' },
        { prompt:'8 × 7', answer:'56' },
        { prompt:'Cube net squares?', answer:'6' }
      ],
      2:[
        { prompt:'1/2 + 1/4', answer:'3/4' },
        { prompt:'15 × 12', answer:'180' },
        { prompt:'2.5 km = ? m', answer:'2,500 m' },
        { prompt:'3/5 of 45', answer:'27' }
      ],
      3:[
        { prompt:'Order: 0.5, 1/2, 0.49', answer:'0.49, 0.5' },
        { prompt:'234 × 15', answer:'3,510' },
        { prompt:'2.75 m in cm', answer:'275 cm' },
        { prompt:'168 ÷ 7', answer:'24' }
      ]
    },
    wordProblems:[
      { prompt:'Class raises $480. 1/4 to charity, rest to camp. Camp amount?', answer:'$360' },
      { prompt:'18 boxes × 24 items, shared among 8 groups. Items per group?', answer:'54' },
      { prompt:'Temperature Mon 18°C to Fri 25°C. Change?', answer:'+7°C' }
    ],
    notes:{
      title:'<p>Last lesson — celebrate effort. Optional small prizes for challenge quiz.</p>',
      diagnostic:'<p>Not for grading — warm-up confidence builder.</p>',
      hook:'<p>Team quiz format. Reveal solutions with applause.</p>',
      concept:'<p>Short — max 8 min. Student shout-outs for favourite term topic.</p>',
      practice:'<p>Flexible: games, challenge cards, or free revision choice.</p>'
    }
  }
];
