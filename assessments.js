/* Maths Heads · Term 3 assessments — official task files + session plans */
const ASSESSMENTS = {
  sa5: {
    id: 'sa5',
    code: 'SA 5',
    file: 'MAT05_SA5_2026.docx',
    display: 'pages',
    title: 'Representing and ordering decimals and fractions',
    unit: 'Mathematics AC V9 · Year 5 · Unit 3',
    technique: 'Written assessment',
    conditions: [
      'Completed individually under supervised conditions.',
      'Prompt and scribe for students if necessary.',
      'Number line sheet is provided with the task.'
    ],
    resources: [
      'Official task: <b>MAT05_SA5_2026.docx</b>',
      'Sheet — Number line (page 3 below)',
      'Pencils, ruler'
    ],
    pages: [
      { id: 'page-01', src: 'assessments/sa5-pages/page-01-questions-1-7.png', label: 'Questions 1–7' },
      { id: 'page-02', src: 'assessments/sa5-pages/page-02-questions-8-12.png', label: 'Questions 8–12' },
      { id: 'page-03', src: 'assessments/sa5-pages/page-03-number-line.png', label: 'Sheet — Number line' },
      { id: 'page-04', src: 'assessments/sa5-pages/page-04-marking-guide.png', label: 'Marking guide', teacherOnly: true }
    ],
    sessions: {
      'w3-l3': {
        label: 'Session 1',
        focus: 'Questions 1–6 · fractions, decimals & place value',
        minutes: 45,
        pages: ['page-01'],
        items: [
          'Shade diagrams for <b>¼</b> and <b>¾</b>; compare which is greater',
          'Shade diagrams for <b>0.40</b> and <b>0.04</b>; compare decimals',
          'Place value charts — hundredths, mixed numerals',
          'Order decimals: 2.21, 0.02, 2.22, 1.25, 1.02, 0.50'
        ],
        notes: '<p>~45 min after homework. Distribute task + number line sheet. Circulate — watch shading and place-value alignment.</p><p>Students who finish early can check working, not start Session 2 questions.</p>'
      },
      'w3-l4': {
        label: 'Session 2',
        focus: 'Questions 7–12 · number line, reasoning & word problems',
        minutes: 45,
        pages: ['page-01', 'page-03', 'page-02'],
        items: [
          'Label fractions and decimals on the <b>number line sheet</b>',
          'Is Jill correct? — justify reasoning on the number line',
          '50 m freestyle — who qualifies for regional final? (&lt; 39½ s)',
          'Georgie\'s fabric — add mixed numerals to reach 2⅖ m',
          'Calculate remaining items on the task'
        ],
        notes: '<p>Collect Session 1 work if not already submitted. Emphasise <b>show working</b> on Q10–11.</p><p>Swimming question: compare to 39.5 seconds precisely.</p>'
      }
    }
  },
  sa6: {
    id: 'sa6',
    code: 'SA 6',
    file: 'MAT05_SA6_2026.docx',
    display: 'pages',
    title: 'Investigation — Down the drain',
    unit: 'Mathematics AC V9 · Year 5 · Unit 3',
    technique: 'Statistical investigation',
    conditions: [
      'Completed individually.',
      'May be completed over multiple sessions.',
      'Prompt and scribe for students if necessary.'
    ],
    resources: [
      'Official task: <b>MAT05_SA6_2026.docx</b> (also shown below in the app)',
      'Bucket or container, measuring cups/jugs, stopwatches',
      'Grid paper, online graph maker (e.g. Graph Maker 2)',
      'Optional: <a href="https://web-japan.org/kidsweb/virtual/origami/exploring01.html" target="_blank" rel="noopener">digital tools link</a> from task'
    ],
    materials: [
      'Bucket or container',
      'Measuring cups and jugs',
      'Stopwatches',
      'Grid paper',
      'Device for online graph maker'
    ],
    pages: [
      { id: 'page-01-intro', src: 'assessments/sa6-pages/page-01-intro.png', label: 'Introduction & resources' },
      { id: 'page-02-part-a-collect', src: 'assessments/sa6-pages/page-02-part-a-collect.png', label: 'Part A — Collect data' },
      { id: 'page-03-part-a-graphs', src: 'assessments/sa6-pages/page-03-part-a-graphs.png', label: 'Part A — Graphs' },
      { id: 'page-04-part-b-1', src: 'assessments/sa6-pages/page-04-part-b-1.png', label: 'Part B — Calculations (1)' },
      { id: 'page-05-part-b-2', src: 'assessments/sa6-pages/page-05-part-b-2.png', label: 'Part B — Calculations (2)' },
      { id: 'page-06-marking-guide', src: 'assessments/sa6-pages/page-06-marking-guide.png', label: 'Marking guide', teacherOnly: true }
    ],
    sessions: {
      'w7-l1': {
        label: 'Part A · Setup & collect',
        focus: 'Dripping tap investigation — collect 3-minute data',
        minutes: 45,
        pages: ['page-01-intro', 'page-02-part-a-collect'],
        items: [
          'Read conventions and investigation overview',
          'Set up dripping tap (or slow-drip tap)',
          'Record collection method',
          'Measure water lost in <b>3 minutes</b> (ml)',
          'Add class results to the shared table'
        ],
        notes: '<p>Outdoor tap or sink station — rotate groups if needed. Safety: slip hazard, mop spills.</p><p>Students who miss collection can use a classmate\'s data with annotation.</p>'
      },
      'w7-l2': {
        label: 'Part A · Represent',
        focus: '24-hour wastage & two graphs',
        minutes: 45,
        pages: ['page-02-part-a-collect', 'page-03-part-a-graphs'],
        items: [
          'Calculate water wasted in <b>24 hours</b> from 3-min data',
          'Graph 1 — on <b>grid paper</b> (hand-drawn)',
          'Graph 2 — <b>online graph maker</b>; snip and paste into task',
          'Complete Part A table with all class results'
        ],
        notes: '<p>Discuss appropriate graph types (bar/column for categorical names; consider scale for ml).</p><p>Check students snip/attach online graph before closing tab.</p>'
      },
      'w7-l3': {
        label: 'Part B · Calculations (1)',
        focus: 'Drops per minute — multiplication & division',
        minutes: 45,
        pages: ['page-04-part-b-1'],
        items: [
          '37 drops/min — how many in 6 minutes?',
          '240 drips/hour — how many in 3 hours?',
          '648 drops over 6 minutes — drops per minute?',
          '128 drips/hour — drips in 24 hours?',
          '1872 drops at 78/min — how many minutes?'
        ],
        notes: '<p>Insist on <b>efficient strategies</b> and clear working. Allow scrap paper.</p><p>Link back to their investigation data where possible.</p>'
      },
      'w7-l4': {
        label: 'Part B · Calculations (2)',
        focus: 'Equations, comparison & wrap-up',
        minutes: 45,
        pages: ['page-05-part-b-2'],
        items: [
          'Solve: <b>78 × ___ = 1638</b>',
          'Tap drips 172/hr; faster tap drips twice as fast — drops in 36 hours?',
          'Solve: <b>(156 × 8) ÷ ___ = 52</b>',
          'Final check, submit investigation'
        ],
        notes: '<p>Collect all parts. Note authentication: teacher observed development over sessions.</p><p>Celebrate real-world connection — water conservation discussion if time.</p>'
      }
    }
  }
};

function getAssessment(id){ return ASSESSMENTS[id]; }
function getAssessSession(lessonId){
  for(const a of Object.values(ASSESSMENTS)){
    if(a.sessions && a.sessions[lessonId]) return { assess: a, session: a.sessions[lessonId] };
  }
  return null;
}

const assessHtmlCache = {};

async function fetchAssessHtml(assessId){
  const a = getAssessment(assessId);
  if(a?.display === 'pages') return '';
  if(assessHtmlCache[assessId]) return assessHtmlCache[assessId];
  if(!a?.htmlFile) return '';
  const resp = await fetch(a.htmlFile);
  if(!resp.ok) throw new Error('Could not load ' + a.htmlFile);
  assessHtmlCache[assessId] = await resp.text();
  return assessHtmlCache[assessId];
}

function getAssessPages(assess, lessonId, includeTeacher){
  if(!assess?.pages?.length) return [];
  const session = lessonId && assess.sessions?.[lessonId];
  const ids = session?.pages;
  const list = ids
    ? assess.pages.filter(p => ids.includes(p.id))
    : assess.pages.filter(p => !p.teacherOnly);
  if(includeTeacher){
    const extra = assess.pages.filter(p => p.teacherOnly && !list.some(x => x.id === p.id));
    return list.concat(extra);
  }
  return list;
}
