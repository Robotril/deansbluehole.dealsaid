/* Course content, part 1: Driving, Math, English, Cooking, Diet & Fitness */
window.MGT_COURSES = window.MGT_COURSES || [];
window.MGT_COURSES.push(

/* ===================== DRIVING ===================== */
{
  id: 'driving', public: true, cat: 'creative', title: "Driver's Test Review", ages: 'Learners 16+',
  tag: 'Know those signs and rules like your license depends on it (because it does).',
  blurb: 'The basics of driving, road conduct and procedures in The Bahamas: keeping left, overtaking, turning, roundabouts, driving with children, and the signs and signals you will meet on the road.',
  note: 'This review helps you study. It does not replace the official handbook or the test from the Road Traffic Department. Always follow the current law and posted signs.',
  units: [
    { t: 'Learning the basics', lessons: [
      { t: 'Learning the basics', s: 'Driving, road conduct and procedures in The Bahamas, starting with the most important rule of all: keep left.',
        b: `<p>Every safe trip starts before the engine does. This lesson covers what you need, where you sit on the road and the habits examiners look for.</p>
<h3>Keep left</h3>
<p>In The Bahamas, traffic drives on the <strong>left-hand side of the road</strong>. Many cars here are imported with the steering wheel on the left, and some on the right. Whichever car you drive, you keep left and pass on the right.</p>
<div class="tip"><b>Memory trick</b><p>Your body should be toward the centre of the road only if the steering wheel is on the right. In a left-hand-drive car you sit near the kerb, so take extra care when you check before overtaking.</p></div>
<h3>Before you drive</h3>
<ul><li>Carry your valid driver's licence or learner's permit.</li><li>Make sure the vehicle is licensed, inspected and insured.</li><li>Adjust your seat, then your mirrors, so you can reach the pedals and see behind you.</li><li>Fasten your seat belt and make sure every passenger does too.</li></ul>
<h3>Mirror, signal, manoeuvre</h3>
<p>Before you move off, change lanes, turn or stop, follow the same three steps every time:</p>
<ol><li><strong>Mirror:</strong> check your mirrors and blind spot to see what is around you.</li><li><strong>Signal:</strong> tell others what you plan to do, in good time.</li><li><strong>Manoeuvre:</strong> make the move smoothly, at a safe speed.</li></ol>
<h3>Good road conduct</h3>
<ul><li>Obey the posted speed limit. Limits in The Bahamas are in <strong>miles per hour</strong>.</li><li>Keep a safe gap. Use the three-second rule: pick a landmark and count three seconds after the car ahead passes it.</li><li>Never drive after drinking or while using your phone.</li><li>Use your horn only to warn others of danger, not to show anger.</li></ul>`,
        q: [
          ['On which side of the road do vehicles drive in The Bahamas?', ['The right', 'The left', 'Either side on quiet roads', 'The centre'], 1, 'Traffic in The Bahamas keeps left, whichever side the steering wheel is on.'],
          ['What is the correct order before any manoeuvre?', ['Signal, mirror, manoeuvre', 'Manoeuvre, mirror, signal', 'Mirror, signal, manoeuvre', 'Mirror, manoeuvre, signal'], 2, 'Look first, then tell others, then move.'],
          ['What does the three-second rule help you judge?', ['How long to wait at a stop sign', 'A safe following distance', 'How long to signal', 'When to change gear'], 1, 'Three seconds behind the car in front gives you time to react.']
        ] },
      { t: 'Checkpoint: the basics', s: 'A short quiz on the information from lesson 1.',
        b: `<p>Time to check what stuck. Read the summary, then answer the five questions below.</p>
<div class="ex"><b>Quick review</b><ul><li>Keep left. Overtake on the right.</li><li>Licence or permit, insurance, licensed vehicle, seat belts on.</li><li>Mirror, signal, manoeuvre.</li><li>Speed limits are in miles per hour.</li><li>Leave at least three seconds behind the car ahead, more in rain.</li></ul></div>`,
        q: [
          ['You want to overtake a slow vehicle. On which side do you normally pass it?', ['On the left', 'On the right', 'On whichever side has more space', 'On the shoulder'], 1, 'Because traffic keeps left, overtaking happens on the right.'],
          ['Which of these must you check before driving off?', ['That the radio works', 'That your seat and mirrors are adjusted', 'That the fuel tank is full', 'That the windows are down'], 1, 'Set your seat first, then the mirrors.'],
          ['Speed limits in The Bahamas are shown in…', ['Kilometres per hour', 'Miles per hour', 'Metres per second', 'Knots'], 1, 'The Bahamas uses miles per hour.'],
          ['When is it right to use your horn?', ['To greet a friend', 'When someone cuts you off and you are angry', 'To warn others of danger', 'Never'], 2, 'The horn is a warning device.'],
          ['In heavy rain, your following distance should…', ['Stay the same', 'Get shorter', 'Get longer', "Not matter"], 2, 'Wet roads double your stopping distance, so leave more room.']
        ] }
    ] },
    { t: 'Advanced driving procedures', lessons: [
      { t: 'Overtaking, turning and roundabouts', s: 'How to overtake safely, position for left and right turns, and handle a roundabout in left-hand traffic.',
        b: `<h3>Overtaking</h3>
<p>Overtake only when you can see far enough ahead to do it safely and you are not breaking the law.</p>
<ol><li>Check that the road ahead is clear and long enough.</li><li>Check your mirrors and your blind spot.</li><li>Signal right.</li><li>Pass with a wide gap, without lingering beside the other vehicle.</li><li>Signal left and return to the left once you can see the vehicle you passed in your rear-view mirror.</li></ol>
<div class="warn"><b>Never overtake</b><ul><li>On a bend, a hill crest or near a junction</li><li>At or near a pedestrian crossing</li><li>Where a solid line marks the centre of the road on your side</li><li>Where a sign says no overtaking</li></ul></div>
<h3>Turning left</h3>
<p>Keep close to the left edge of the road, check your mirrors, signal left early and slow down before the turn. Watch for cyclists and pedestrians on your left.</p>
<h3>Turning right</h3>
<p>A right turn crosses oncoming traffic. Signal right, move toward the centre line, and <strong>give way to oncoming vehicles</strong> before you turn. Turn into the left side of the new road.</p>
<h3>Roundabouts</h3>
<p>In left-hand traffic, you go around a roundabout <strong>clockwise</strong>.</p>
<ul><li>Slow down as you approach and choose your lane early.</li><li><strong>Give way to traffic already on the roundabout, coming from your right.</strong></li><li>Signal left just after you pass the exit before the one you want.</li><li>Keep an eye out for vehicles that are not signalling.</li></ul>
<div class="sign-row"><figure>{{sign:roundabout}}<figcaption>Roundabout: traffic moves clockwise</figcaption></figure><figure>{{sign:giveway}}<figcaption>Give way</figcaption></figure></div>`,
        q: [
          ['At a roundabout in The Bahamas, which traffic do you give way to?', ['Traffic from your left', 'Traffic already on the roundabout, from your right', 'Pedestrians only', 'Nobody, if you are going straight'], 1, 'Traffic on the roundabout has priority, and it comes from your right.'],
          ['When turning right, what must you do?', ['Give way to oncoming traffic', 'Speed up to beat oncoming traffic', 'Turn from the left edge', 'Sound your horn'], 0, 'A right turn crosses oncoming traffic, so you give way.'],
          ['When can you return to the left after overtaking?', ['Immediately', 'When you can see the passed vehicle in your rear-view mirror', 'After one minute', 'At the next junction'], 1, 'Seeing it in your rear-view mirror means you have room.'],
          ['Which direction do vehicles travel around a roundabout here?', ['Clockwise', 'Anti-clockwise', 'Either', 'Straight across'], 0, 'Left-hand traffic circles clockwise.']
        ] },
      { t: 'Driving with children, weather and night', s: 'Keeping children safe in the car, and adjusting for rain, glare and darkness.',
        b: `<h3>Children in the car</h3>
<ul><li>Use a child seat or booster that suits the child's age, height and weight, fitted following its instructions.</li><li>The back seat is the safest place for children.</li><li>Never place a rear-facing child seat in front of an active airbag.</li><li>Turn on child locks for the rear doors.</li><li><strong>Never leave a child alone in a parked car.</strong> In our heat, the inside of a car can become deadly in minutes.</li><li>Pull over safely if a child needs your attention. Do not turn around while driving.</li></ul>
<h3>School zones and pedestrians</h3>
<p>Slow right down near schools, playgrounds and bus stops. Children can step out without looking. Give way to pedestrians on a crossing.</p>
<h3>Rain</h3>
<p>The first rain after a dry spell lifts oil from the road and makes it slippery. Slow down, turn on your headlights, double your following distance and brake gently. If you drive through deep water, test your brakes afterwards.</p>
<h3>Night and glare</h3>
<ul><li>Use dipped headlights at night and in poor visibility.</li><li>Dip your main beam for oncoming traffic and when following another car.</li><li>If dazzled, slow down and look toward the left edge of the road.</li></ul>
<h3>Emergency vehicles</h3>
<p>When you see flashing lights or hear a siren, pull over to the left when it is safe and stop until the vehicle has passed.</p>`,
        q: [
          ['Where is the safest place for a young child to ride?', ['Front seat', 'Back seat in a suitable child seat', 'On an adult\'s lap', 'Anywhere with a seat belt'], 1, 'Back seat, in a seat or booster that fits the child.'],
          ['An ambulance with its siren on comes up behind you. What do you do?', ['Speed up', 'Stop immediately in your lane', 'Pull over to the left when safe and stop', 'Move to the right'], 2, 'Pull left and let it pass.'],
          ['Why is the first rain after a dry spell especially dangerous?', ['It is colder', 'Oil on the road makes it slippery', 'Traffic lights stop working', 'It is always at night'], 1, 'Oil and dust mix with the water.']
        ] },
      { t: 'Checkpoint: advanced procedures', s: 'A short quiz on overtaking, turning, roundabouts and driving with children.',
        b: `<div class="ex"><b>Quick review</b><ul><li>Overtake on the right, only with a clear view and never near bends, crests, junctions or crossings.</li><li>Left turn: keep left. Right turn: give way to oncoming traffic.</li><li>Roundabouts: clockwise, give way to traffic from the right.</li><li>Children: back seat, correct child seat, never left alone in the car.</li><li>Emergency vehicles: pull left and stop.</li></ul></div>`,
        q: [
          ['Which is a safe place to overtake?', ['Just before a bend', 'At the crest of a hill', 'On a long straight road with a clear view and broken centre line', 'At a pedestrian crossing'], 2, 'You need a clear view and a legal place.'],
          ['You are approaching a roundabout and want the third exit. When do you signal left?', ['As you enter', 'Just after passing the second exit', 'Before you reach the roundabout', 'You never signal'], 1, 'Signal left after the exit before yours.'],
          ['A rear-facing baby seat should never be placed…', ['In the back seat', 'In front of an active airbag', 'Behind the driver', 'In a car with child locks'], 1, 'An airbag can seriously injure a baby in a rear-facing seat.'],
          ['You are dazzled by oncoming headlights. What should you do?', ['Flash your lights back', 'Slow down and look toward the left edge of the road', 'Close your eyes briefly', 'Speed up to pass them quickly'], 1, 'Slow down and keep your eyes on the left edge.'],
          ['Before turning left, you should check for…', ['Cyclists and pedestrians on your left', 'Only cars in front', 'Planes', 'Nothing, left turns are always safe'], 0, 'Vulnerable road users can be close on your left side.']
        ] }
    ] },
    { t: 'Signs, signals and the law', lessons: [
      { t: 'Signage, signals and law', s: 'The shapes and colours of road signs, road markings, traffic lights, hand signals and what to do after a crash.',
        b: `<p>You will see both British-style and American-style signs in The Bahamas. The <strong>shape and colour</strong> of a sign tells you what kind of message it carries, even before you read it.</p>
<div class="sign-row"><figure>{{sign:stop}}<figcaption>Octagon: Stop</figcaption></figure><figure>{{sign:giveway}}<figcaption>Upside-down triangle: Give way</figcaption></figure><figure>{{sign:speed}}<figcaption>Red circle: an order (here, a speed limit)</figcaption></figure><figure>{{sign:keepleft}}<figcaption>Blue circle: what you must do</figcaption></figure><figure>{{sign:bend}}<figcaption>Red triangle: warning</figcaption></figure><figure>{{sign:info}}<figcaption>Rectangle: information</figcaption></figure></div>
<div class="tbl"><table><thead><tr><th>Shape or colour</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Red octagon</td><td>Stop completely at the line, then go when it is safe.</td></tr>
<tr><td>Upside-down triangle</td><td>Give way (yield) to traffic on the main road.</td></tr>
<tr><td>Circle with red border</td><td>A prohibition or limit: something you must not do.</td></tr>
<tr><td>Blue circle</td><td>A mandatory instruction: something you must do.</td></tr>
<tr><td>Triangle with red border</td><td>A warning of a hazard ahead.</td></tr>
<tr><td>Rectangle</td><td>Directions and information.</td></tr></tbody></table></div>
<h3>Road markings</h3>
<ul><li><strong>Solid centre line:</strong> do not cross it to overtake.</li><li><strong>Broken centre line:</strong> you may cross when it is safe.</li><li><strong>Zebra crossing:</strong> give way to pedestrians who are on it.</li><li><strong>Stop line:</strong> stop behind it at a stop sign or red light.</li></ul>
<h3>Traffic lights</h3>
<ul><li><strong>Red:</strong> stop.</li><li><strong>Amber:</strong> stop, unless you have already crossed the line or stopping would be unsafe.</li><li><strong>Green:</strong> go, but only if the way is clear.</li></ul>
<p>A police officer directing traffic overrides the lights and signs.</p>
<h3>Hand signals</h3>
<p>If your indicators fail, use your right arm out of the window: arm straight out for a right turn, and arm circled anti-clockwise for a left turn. Move your arm up and down to show you are slowing down.</p>
<h3>After a crash</h3>
<ol><li>Stop, turn off the engine and turn on your hazard lights.</li><li>Check for injuries. Call <strong>919 or 911</strong> for police and ambulance.</li><li>Do not move injured people unless they are in danger.</li><li>Exchange names, addresses, licence and insurance details.</li><li>Report the crash to the police.</li></ol>`,
        q: [
          ['What does a triangle with a red border usually mean?', ['Give way', 'A warning of a hazard ahead', 'Information', 'Parking'], 1, 'Triangles warn.'],
          ['The traffic light turns amber as you approach and you can stop safely. What do you do?', ['Speed up', 'Stop', 'Sound your horn', 'Flash your lights'], 1, 'Amber means stop if it is safe to do so.'],
          ['Who do you obey if a police officer\'s signals conflict with a traffic light?', ['The traffic light', 'The police officer', 'Whoever is closer', 'Neither'], 1, 'Police directions override lights and signs.'],
          ['Which number reaches police and ambulance in The Bahamas?', ['999 only', '919 or 911', '411', '112 only'], 1, 'Both 919 and 911 reach emergency services.']
        ] },
      { t: 'Checkpoint: signs and law', s: 'Short quiz on lesson 3. Then you are done.',
        b: `<p>Last checkpoint. Answer these, then try the Road Sign Challenge game for extra practice.</p>
<div class="ex"><b>Quick review</b><ul><li>Octagon = stop. Upside-down triangle = give way.</li><li>Red circle = must not. Blue circle = must. Red triangle = warning. Rectangle = information.</li><li>Solid centre line: no crossing. Broken line: cross when safe.</li><li>Amber means stop if you safely can.</li><li>After a crash: stop, hazards on, call 919 or 911, exchange details, report.</li></ul></div>`,
        q: [
          ['{{sign:noentry}}What does this sign mean?', ['No entry for vehicles', 'Road closed for one hour', 'One-way street ahead', 'Parking'], 0, 'A red circle with a white bar means no entry.'],
          ['{{sign:children}}What does this sign warn you about?', ['A school bus stop', 'Children likely to cross', 'A playground for adults', 'A pedestrian-only street'], 1, 'Slow down and be ready to stop.'],
          ['Which centre line may you cross to overtake when it is safe?', ['Solid', 'Double solid', 'Broken', 'None'], 2, 'Broken lines may be crossed when safe.'],
          ['After a crash, what should you do first?', ['Drive away to clear the road', 'Stop, switch off the engine and turn on hazard lights', 'Post photos online', 'Move injured people straight away'], 1, 'Make the scene safe first.'],
          ['{{sign:nooverteke}}What does this sign mean?', ['Overtaking allowed', 'No overtaking', 'Two-lane road ahead', 'Car park'], 1, 'Red circle signs forbid something. This one forbids overtaking.']
        ] },
      { t: 'Congratulations', s: 'You have completed the Driver\'s Test Review.',
        b: `<p>Well done. You have covered keeping left, the safe-driving routine, overtaking, turning, roundabouts, children, weather, signs, signals and what to do after a crash.</p>
<h3>Before your test</h3>
<ul><li>Read the official handbook from the Road Traffic Department.</li><li>Practise with a licensed driver in daylight, at night and in the rain.</li><li>Play the Road Sign Challenge until you get a perfect score.</li></ul>
<p>When you are ready for more, <a href="#signup">create a free account</a> and explore every course in Premium Learning.</p>` }
    ] }
  ],
  games: [
    { type: 'quiz', t: 'Road Sign Challenge', d: 'Name each sign from its shape and colour.', q: [
      ['{{sign:stop}}What must you do at this sign?', ['Slow down', 'Stop completely, then go when safe', 'Give way only to buses', 'Park'], 1, 'Stop at the line every time.'],
      ['{{sign:giveway}}What does this sign mean?', ['Stop', 'Give way to traffic on the main road', 'No entry', 'Hospital ahead'], 1],
      ['{{sign:roundabout}}What does this sign tell you?', ['Roundabout: go clockwise', 'U-turn allowed', 'Recycling centre', 'Road ends'], 0],
      ['{{sign:speed}}What does this sign mean?', ['Minimum speed 25', 'Maximum speed 25 mph', 'Route 25', '25 parking spaces'], 1],
      ['{{sign:keepleft}}What does this sign tell you to do?', ['Turn left now', 'Keep to the left of the sign', 'No left turn', 'Left lane closed'], 1, 'Blue circles give an instruction you must follow.'],
      ['{{sign:bend}}What does this sign warn of?', ['A bend to the right', 'A dead end', 'A hill', 'A one-way street'], 0],
      ['{{sign:info}}What kind of sign is this?', ['Warning', 'Order', 'Direction information', 'Stop'], 2],
      ['{{sign:noentry}}What does this sign mean?', ['No entry', 'Stop', 'Bus lane', 'Keep left'], 0]
    ] },
    { type: 'order', t: 'Safe Overtake', d: 'Put the steps for overtaking in the right order.', steps: [
      'Check the road ahead is clear and long enough', 'Check your mirrors and blind spot', 'Signal right', 'Pass with a wide gap', 'See the passed vehicle in your rear-view mirror', 'Signal left and return to the left side'
    ] }
  ]
},

/* ===================== MATH ===================== */
{
  id: 'math', cat: 'youth', title: 'Math Basics', ages: 'Grades 1–6',
  tag: 'Crunch those numbers and find x like it owes you money.',
  blurb: 'Addition, subtraction, multiplication and division, starting at elementary level (grades 1–3) and building up to primary level. Extra examples with an answer key at the end.',
  units: [
    { t: 'Elementary: adding and taking away', lessons: [
      { t: 'Elementary addition', s: 'Basic addition at elementary school level, grades 1–3.',
        b: `<p><strong>Adding</strong> means putting groups together to find how many there are in all. The answer is called the <strong>sum</strong>.</p>
<div class="ex"><b>Example</b><p>You have 3 mangoes. Your friend gives you 4 more. 3 + 4 = 7. Now you have 7 mangoes.</p></div>
<h3>Count on</h3><p>Start with the bigger number and count on. For 8 + 3, start at 8 and count three more: 9, 10, <strong>11</strong>.</p>
<h3>Make a ten</h3><p>Tens are easy to add. For 9 + 6, borrow 1 from the 6 to make 10. Then 10 + 5 = <strong>15</strong>.</p>
<h3>Bigger numbers: tens and ones</h3><p>Add the ones first, then the tens.</p>
<div class="ex"><b>27 + 15</b><p>Ones: 7 + 5 = 12. Write 2, carry 1 ten.<br>Tens: 2 + 1 + 1 (carried) = 4.<br>Answer: <strong>42</strong>.</p></div>
<div class="tip"><b>Did you know?</b><p>Order doesn't matter when you add. 4 + 6 and 6 + 4 both make 10.</p></div>`,
        q: [['What is 6 + 7?', ['12', '13', '14', '11'], 1, '6 + 4 makes 10, then 3 more is 13.'], ['What is 27 + 15?', ['32', '41', '42', '312'], 2, '7 + 5 = 12, carry the 1: 2 + 1 + 1 = 4 tens. 42.'], ['The answer to an addition problem is called the…', ['Difference', 'Sum', 'Product', 'Quotient'], 1]] },
      { t: 'Elementary subtraction', s: 'Basic subtraction at elementary school level, grades 1–3.',
        b: `<p><strong>Subtracting</strong> means taking some away to find how many are left. The answer is called the <strong>difference</strong>.</p>
<div class="ex"><b>Example</b><p>There are 10 conch shells on the beach. You pick up 4. 10 − 4 = 6 are left.</p></div>
<h3>Count back</h3><p>For 12 − 3, start at 12 and count back three: 11, 10, <strong>9</strong>.</p>
<h3>Think addition</h3><p>Subtraction is the opposite of addition. For 15 − 8, ask: 8 plus what makes 15? 8 + 7 = 15, so 15 − 8 = <strong>7</strong>.</p>
<h3>Borrowing</h3>
<div class="ex"><b>42 − 17</b><p>Ones: you can't take 7 from 2, so borrow 1 ten. Now it's 12 − 7 = 5.<br>Tens: 4 became 3. 3 − 1 = 2.<br>Answer: <strong>25</strong>.</p></div>
<div class="tip"><b>Check your work</b><p>Add your answer to the number you took away. 25 + 17 = 42. It matches, so you're right.</p></div>`,
        q: [['What is 14 − 6?', ['7', '8', '9', '10'], 1, '6 + 8 = 14.'], ['What is 42 − 17?', ['35', '25', '29', '24'], 1], ['How can you check 30 − 12 = 18?', ['Add 18 + 12', 'Subtract 18 − 12', 'Multiply 18 × 12', "You can't"], 0, '18 + 12 = 30, so it checks out.']] }
    ] },
    { t: 'Elementary: groups and sharing', lessons: [
      { t: 'Elementary multiplication and division', s: 'Multiplication and division at elementary level, grades 1–3.',
        b: `<h3>Multiplication is fast adding</h3><p>3 × 4 means 3 groups of 4. 4 + 4 + 4 = <strong>12</strong>. The answer is called the <strong>product</strong>.</p>
<div class="ex"><b>Arrays</b><p>Arrange 12 marbles in 3 rows of 4. Count the rows and the columns and you see 3 × 4 = 12, and also 4 × 3 = 12.</p></div>
<h3>Division is fair sharing</h3><p>12 ÷ 3 means share 12 things equally into 3 groups. Each group gets <strong>4</strong>. The answer is called the <strong>quotient</strong>.</p>
<h3>Fact families</h3><p>These four facts belong together. If you know one, you know them all:</p>
<div class="ex"><p>3 × 4 = 12 · 4 × 3 = 12 · 12 ÷ 3 = 4 · 12 ÷ 4 = 3</p></div>
<h3>Handy patterns</h3><ul><li>Anything × 1 stays the same.</li><li>Anything × 10: add a zero (7 × 10 = 70).</li><li>× 5 answers end in 0 or 5.</li><li>× 2 is doubling.</li></ul>`,
        q: [['What is 5 × 3?', ['8', '15', '53', '10'], 1, '5 + 5 + 5 = 15.'], ['24 cookies are shared equally by 4 friends. How many does each get?', ['4', '6', '8', '20'], 1, '24 ÷ 4 = 6.'], ['If 6 × 7 = 42, what is 42 ÷ 7?', ['6', '7', '35', '49'], 0, 'Same fact family.']] }
    ] },
    { t: 'Primary level', lessons: [
      { t: 'Primary addition and subtraction', s: 'Addition and subtraction with bigger numbers and decimals.',
        b: `<p>At primary level the method is the same as before. You just line up more columns.</p>
<h3>Line up the places</h3><p>Write the numbers so ones are under ones, tens under tens and hundreds under hundreds. Then work from right to left.</p>
<div class="ex"><b>358 + 267</b><p>Ones: 8 + 7 = 15 → write 5, carry 1<br>Tens: 5 + 6 + 1 = 12 → write 2, carry 1<br>Hundreds: 3 + 2 + 1 = 6<br>Answer: <strong>625</strong></p></div>
<div class="ex"><b>503 − 128</b><p>Ones: 3 − 8 needs a borrow. Tens is 0, so borrow from the hundreds first: 5 → 4, tens 0 → 10, then tens 10 → 9 and ones 3 → 13.<br>13 − 8 = 5 · 9 − 2 = 7 · 4 − 1 = 3<br>Answer: <strong>375</strong></p></div>
<h3>Decimals</h3><p>Line up the <strong>decimal points</strong>. Fill empty places with zeros.</p>
<div class="ex"><b>3.5 + 1.25</b><p>3.50 + 1.25 = <strong>4.75</strong></p></div>
<div class="tip"><b>Estimate first</b><p>358 + 267 is about 360 + 270 = 630. Your exact answer, 625, is close, so it's sensible.</p></div>`,
        q: [['What is 358 + 267?', ['515', '625', '615', '5125'], 1], ['What is 503 − 128?', ['375', '425', '385', '475'], 0], ['What is 3.5 + 1.25?', ['4.30', '4.75', '1.60', '47.5'], 1, 'Line up the decimal points: 3.50 + 1.25.']] },
      { t: 'Primary multiplication and division', s: 'Long multiplication and long division.',
        b: `<h3>Long multiplication</h3><p>Split the second number into tens and ones, multiply each part, then add.</p>
<div class="ex"><b>23 × 14</b><p>23 × 4 = 92<br>23 × 10 = 230<br>92 + 230 = <strong>322</strong></p></div>
<h3>Long division</h3><p>Remember the steps with <strong>D-M-S-B</strong>: Divide, Multiply, Subtract, Bring down. Repeat.</p>
<div class="ex"><b>156 ÷ 12</b><p>12 into 15 goes 1 time. 1 × 12 = 12. 15 − 12 = 3. Bring down 6 → 36.<br>12 into 36 goes 3 times. 3 × 12 = 36. 36 − 36 = 0.<br>Answer: <strong>13</strong></p></div>
<h3>Remainders</h3><p>Sometimes things don't share evenly. 17 ÷ 5 = 3 remainder 2, because 3 × 5 = 15 and 2 are left over.</p>
<div class="tip"><b>Check with the opposite</b><p>13 × 12 = 156, so 156 ÷ 12 = 13 is right.</p></div>`,
        q: [['What is 23 × 14?', ['322', '92', '230', '312'], 0], ['What is 156 ÷ 12?', ['12', '13', '14', '15'], 1], ['What is 17 ÷ 5?', ['3', '3 remainder 2', '4', '3 remainder 1'], 1]] },
      { t: 'Extra examples and answer key', s: 'Extra examples to practise, with the answers hidden until you are ready.',
        b: `<p>Try each one on paper first. Then open it to check your answer.</p>
<details><summary>1. 46 + 38</summary><p><strong>84</strong>. 6 + 8 = 14, carry 1. 4 + 3 + 1 = 8.</p></details>
<details><summary>2. 91 − 47</summary><p><strong>44</strong>. Borrow: 11 − 7 = 4, 8 − 4 = 4.</p></details>
<details><summary>3. 7 × 8</summary><p><strong>56</strong></p></details>
<details><summary>4. 63 ÷ 9</summary><p><strong>7</strong>, because 7 × 9 = 63.</p></details>
<details><summary>5. 482 + 319</summary><p><strong>801</strong></p></details>
<details><summary>6. 700 − 256</summary><p><strong>444</strong></p></details>
<details><summary>7. 34 × 25</summary><p><strong>850</strong>. 34 × 5 = 170, 34 × 20 = 680, 170 + 680 = 850.</p></details>
<details><summary>8. 144 ÷ 12</summary><p><strong>12</strong></p></details>
<details><summary>9. 2.6 + 4.75</summary><p><strong>7.35</strong></p></details>
<details><summary>10. 50 ÷ 6</summary><p><strong>8 remainder 2</strong></p></details>
<p>Want more? The Math Sprint game makes new problems every time you play.</p>`,
        q: [['What is 8 × 9?', ['63', '72', '81', '64'], 1], ['What is 1000 − 1?', ['999', '900', '1001', '99'], 0], ['What is 45 ÷ 5?', ['8', '9', '10', '7'], 1]] }
    ] }
  ],
  games: [
    { type: 'math', t: 'Math Sprint', d: 'Ten questions against the clock, at three levels.' },
    { type: 'match', t: 'Math Words', d: 'Match each math word to its meaning.', pairs: [['Sum', 'The answer to an addition'], ['Difference', 'The answer to a subtraction'], ['Product', 'The answer to a multiplication'], ['Quotient', 'The answer to a division'], ['Remainder', 'What is left over after dividing'], ['Fact family', 'Related facts like 3×4=12 and 12÷3=4'], ['Digit', 'A single symbol from 0 to 9'], ['Array', 'Objects arranged in rows and columns']] }
  ]
},

/* ===================== ENGLISH ===================== */
{
  id: 'english', cat: 'youth', title: 'English Basics', ages: 'Grades 1–6',
  tag: 'Master the ABCs and comma drama.',
  blurb: 'From nouns and verbs to sentences, paragraphs and the five-paragraph essay. Build the writing skills every subject depends on.',
  units: [
    { t: 'Words that build sentences', lessons: [
      { t: 'Nouns, verbs and adjectives', s: 'The roles nouns, adjectives and verbs play in building sentences and telling stories.',
        b: `<p>Every sentence is built from words with different jobs. Three of the most important are nouns, verbs and adjectives.</p>
<ul class="vocab"><li><b>Noun</b><span>A person, place, thing or idea: girl, Nassau, boat, happiness</span></li><li><b>Verb</b><span>An action or state of being: run, swim, think, is</span></li><li><b>Adjective</b><span>Describes a noun: blue, tall, noisy, three</span></li></ul>
<div class="ex"><b>Spot them</b><p>The <u>small</u> (adjective) <u>dog</u> (noun) <u>barked</u> (verb).</p></div>
<h3>Proper and common nouns</h3><p>A <strong>common noun</strong> names any person, place or thing: island, teacher. A <strong>proper noun</strong> names a specific one and starts with a capital letter: Andros, Ms. Rolle.</p>
<h3>Verbs and time</h3><p>Verbs change to show when something happens: I <strong>jump</strong> (now), I <strong>jumped</strong> (past), I <strong>will jump</strong> (future).</p>
<div class="tip"><b>Test for an adjective</b><p>Put it between "the" and a noun: "the ___ boat". If it fits (the <em>red</em> boat), it's an adjective.</p></div>`,
        q: [['In "The happy child ran home", which word is the verb?', ['happy', 'child', 'ran', 'home'], 2], ['Which word is a proper noun?', ['city', 'Freeport', 'river', 'teacher'], 1, 'It names a specific place and has a capital letter.'], ['Which word is an adjective?', ['quickly', 'beautiful', 'swim', 'Bahamas'], 1]] }
    ] },
    { t: 'Sentences and paragraphs', lessons: [
      { t: 'What is a sentence?', s: 'The definition and structure of a sentence, and how to identify its parts.',
        b: `<p>A <strong>sentence</strong> is a group of words that expresses a complete thought. It needs two parts:</p>
<ul><li>A <strong>subject</strong>: who or what the sentence is about.</li><li>A <strong>predicate</strong>: what the subject does or is. It always contains a verb.</li></ul>
<div class="ex"><b>Subject | Predicate</b><p>My brother | plays football.<br>The sun | set over the ocean.</p></div>
<h3>Four kinds of sentence</h3>
<div class="tbl"><table><thead><tr><th>Kind</th><th>Job</th><th>Ends with</th></tr></thead><tbody><tr><td>Statement</td><td>Tells something</td><td>.</td></tr><tr><td>Question</td><td>Asks something</td><td>?</td></tr><tr><td>Command</td><td>Gives an order</td><td>. or !</td></tr><tr><td>Exclamation</td><td>Shows strong feeling</td><td>!</td></tr></tbody></table></div>
<h3>Fragments</h3><p>"Running to the store." is a <strong>fragment</strong>: it has no subject, so the thought isn't complete. Fix it: "Maya was running to the store."</p>
<div class="tip"><b>Remember</b><p>Every sentence starts with a capital letter and ends with a punctuation mark.</p></div>`,
        q: [['Which is a complete sentence?', ['Under the table.', 'The cat slept under the table.', 'Slept under the table.', 'The sleepy cat.'], 1], ['In "The teacher smiled", what is the subject?', ['The teacher', 'smiled', 'The', 'There is no subject'], 0], ['What punctuation ends a question?', ['.', '!', '?', ','], 2]] },
      { t: 'What is a paragraph?', s: 'The structure of a paragraph: main idea, supporting details and a closing sentence.',
        b: `<p>A <strong>paragraph</strong> is a group of sentences about one main idea. A good paragraph has three parts, like a sandwich:</p>
<ol><li><strong>Topic sentence</strong> (top bread): tells the reader the main idea.</li><li><strong>Supporting details</strong> (filling): two to four sentences that explain, give examples or give reasons.</li><li><strong>Closing sentence</strong> (bottom bread): wraps up the idea.</li></ol>
<div class="ex"><b>Example</b><p><u>Junkanoo is the most exciting festival in The Bahamas.</u> Dancers wear costumes made from coloured crepe paper and cardboard. Goatskin drums, cowbells and horns fill the streets with music. Groups practise for months to win prizes. <u>It is no surprise that people come from all over the world to see it.</u></p></div>
<h3>Paragraph tips</h3><ul><li>Indent the first line, or leave a blank line between paragraphs.</li><li>Start a new paragraph when you start a new idea.</li><li>Every detail should connect to the topic sentence.</li></ul>`,
        q: [['Which sentence tells the main idea of a paragraph?', ['The closing sentence', 'The topic sentence', 'The longest sentence', 'Any detail sentence'], 1], ['When should you start a new paragraph?', ['Every two sentences', 'When you begin a new idea', 'Only at the end', 'Never'], 1], ['What do supporting details do?', ['Change the subject', 'Explain or give examples of the main idea', 'End the paragraph', 'Ask questions'], 1]] }
    ] },
    { t: 'Better sentences, first essays', lessons: [
      { t: 'Complex sentences', s: 'Building complex sentences from independent and dependent clauses.',
        b: `<p>A <strong>clause</strong> is a group of words with a subject and a verb.</p>
<ul><li>An <strong>independent clause</strong> can stand alone as a sentence: <em>I stayed inside.</em></li><li>A <strong>dependent clause</strong> can't stand alone. It usually starts with a word like <em>because, when, although, if, since, after</em>: <em>because it was raining</em>.</li></ul>
<p>A <strong>complex sentence</strong> joins one independent clause with at least one dependent clause.</p>
<div class="ex"><b>Examples</b><p>I stayed inside <u>because it was raining</u>.<br><u>When the bell rang</u>, the students lined up.<br><u>Although she was tired</u>, Kayla finished her homework.</p></div>
<div class="tip"><b>Comma rule</b><p>If the dependent clause comes <strong>first</strong>, put a comma after it. If it comes last, you usually don't need one.</p></div>`,
        q: [['Which is a dependent clause?', ['The dog barked.', 'because the dog barked', 'I heard the dog.', 'Dogs bark.'], 1], ['Where does the comma go? "After we ate dinner we went for a walk."', ['After "ate"', 'After "dinner"', 'After "went"', 'No comma'], 1], ['A complex sentence has…', ['Two dependent clauses only', 'An independent clause and at least one dependent clause', 'No verbs', 'Only one word'], 1]] },
      { t: 'Introduction to essays', s: 'Thesis statements, supporting arguments and effective conclusions.',
        b: `<p>An <strong>essay</strong> is a group of paragraphs that work together to explain or argue one big idea.</p>
<h3>The thesis statement</h3><p>The thesis is the most important sentence in your essay. It states your main point, usually at the end of the introduction.</p>
<div class="ex"><b>Weak vs strong</b><p>Weak: "This essay is about school uniforms."<br>Strong: "School uniforms help students focus, save families money and build school pride."</p></div>
<p>A strong thesis takes a position and often previews your reasons.</p>
<h3>Supporting arguments</h3><p>Each body paragraph proves one part of your thesis with reasons, facts, examples or stories.</p>
<h3>The conclusion</h3><p>Restate your thesis in new words, sum up your reasons and leave the reader with a final thought. Don't add brand new arguments here.</p>
<div class="tip"><b>Plan before you write</b><p>Jot your thesis and three reasons as a list. Ten minutes of planning saves an hour of rewriting.</p></div>`,
        q: [['Where does the thesis statement usually go?', ['In the conclusion only', 'At the end of the introduction', 'In the title', 'In every paragraph'], 1], ['Which is the strongest thesis?', ['This essay is about pets.', 'Pets.', 'Dogs make great pets because they are loyal, protective and encourage exercise.', 'I will talk about dogs.'], 2], ['What should a conclusion NOT do?', ['Restate the thesis', 'Sum up reasons', 'Introduce a brand-new argument', 'Leave a final thought'], 2]] }
    ] },
    { t: 'Writing with structure and style', lessons: [
      { t: 'Five-paragraph essays', s: 'The structure of a five-paragraph essay: introduction, three body paragraphs and conclusion.',
        b: `<p>The five-paragraph essay is a simple, reliable structure you can use for almost any topic.</p>
<ol><li><strong>Introduction:</strong> a hook to grab attention, some background and your thesis with three points.</li><li><strong>Body paragraph 1:</strong> your first point, with evidence.</li><li><strong>Body paragraph 2:</strong> your second point, with evidence.</li><li><strong>Body paragraph 3:</strong> your third point, with evidence.</li><li><strong>Conclusion:</strong> restate the thesis, sum up the three points and end with a final thought.</li></ol>
<h3>Hooks that work</h3><ul><li>A surprising fact: "Bahamian waters are home to some of the longest underwater cave systems in the world."</li><li>A question: "What would you do with an extra hour every day?"</li><li>A short story or quote.</li></ul>
<h3>Transitions</h3><p>Link your paragraphs with words like <em>first, in addition, another reason, however, finally, in conclusion</em>.</p>
<div class="tip"><b>Body paragraph recipe</b><p>Topic sentence → evidence → explanation of how the evidence proves your point → link back to the thesis.</p></div>`,
        q: [['How many body paragraphs does a five-paragraph essay have?', ['One', 'Two', 'Three', 'Five'], 2], ['What is a hook?', ['The last sentence', 'An opening that grabs the reader\'s attention', 'A type of comma', 'The essay title'], 1], ['Which is a transition word?', ['However', 'Banana', 'Quickly', 'Blue'], 0]] },
      { t: 'Expanding sentences and contractions', s: 'Using descriptive language to expand sentences, and how contractions work.',
        b: `<h3>Expanding sentences</h3><p>Short sentences are clear but can be dull. Expand them by answering <strong>who, what, when, where, why and how</strong>.</p>
<div class="ex"><b>Grow a sentence</b><p>The boy swam.<br>The <u>young</u> boy swam.<br>The young boy swam <u>quickly</u>.<br>The young boy swam quickly <u>across the bay</u>.<br>The young boy swam quickly across the bay <u>to reach his sister's boat</u>.</p></div>
<p>Use adjectives and adverbs, but choose strong, precise words: "sprinted" beats "ran very fast".</p>
<h3>Contractions</h3><p>A <strong>contraction</strong> joins two words and replaces missing letters with an <strong>apostrophe</strong>.</p>
<ul class="vocab"><li><b>can't</b><span>cannot</span></li><li><b>don't</b><span>do not</span></li><li><b>it's</b><span>it is / it has</span></li><li><b>they're</b><span>they are</span></li><li><b>won't</b><span>will not</span></li><li><b>I'm</b><span>I am</span></li><li><b>we've</b><span>we have</span></li><li><b>she'll</b><span>she will</span></li></ul>
<div class="warn"><b>Watch out</b><p><em>It's</em> means "it is". <em>Its</em> (no apostrophe) means "belonging to it": "The dog wagged its tail."</p></div>`,
        q: [['What is the contraction for "will not"?', ["willn't", "won't", "wont", "wil'not"], 1], ['Which sentence is the most expanded?', ['The bird sang.', 'The bird sang loudly.', 'The bright yellow bird sang loudly from the mango tree at sunrise.', 'Birds sing.'], 2], ['Which is correct?', ["The cat licked it's paw.", 'The cat licked its paw.', "The cat licked its' paw.", 'The cat licked it is paw.'], 1]] }
    ] }
  ],
  games: [
    { type: 'sort', t: 'Word Sorter', d: 'Is it a noun, a verb or an adjective?', bins: ['Noun', 'Verb', 'Adjective'], items: [['island', 0], ['swim', 1], ['bright', 2], ['teacher', 0], ['jump', 1], ['tiny', 2], ['conch', 0], ['laugh', 1], ['noisy', 2], ['Nassau', 0], ['write', 1], ['gentle', 2], ['happiness', 0], ['build', 1], ['salty', 2]] },
    { type: 'match', t: 'Contraction Match', d: 'Match each contraction to the words it replaces.', pairs: [["can't", 'cannot'], ["won't", 'will not'], ["they're", 'they are'], ["it's", 'it is'], ["I'm", 'I am'], ["we've", 'we have'], ["she'll", 'she will'], ["don't", 'do not']] }
  ]
},

/* ===================== COOKING ===================== */
{
  id: 'cooking', cat: 'wellness', title: 'Cooking 101', ages: 'Teens & adults',
  tag: 'Sizzle, sauté, and survive dinner without burning water.',
  blurb: 'Food safety first, then the skills that make food taste great: balancing flavour and texture, cooking efficiently, making sauces, and the cooking and prep techniques that build flavour.',
  units: [
    { t: 'Safe and tasty', lessons: [
      { t: 'Food health and safety', s: 'Food safety practices that prevent foodborne illness and keep meals nutritious.',
        b: `<p>Most food poisoning at home is preventable. Remember four words: <strong>clean, separate, cook, chill</strong>.</p>
<h3>Clean</h3><ul><li>Wash your hands with soap for at least 20 seconds before cooking and after touching raw meat, fish or eggs.</li><li>Wash fruit and vegetables under running water.</li><li>Clean boards, knives and counters with hot, soapy water.</li></ul>
<h3>Separate</h3><p>Keep raw meat, poultry and seafood away from ready-to-eat food. Use a different cutting board, or wash it thoroughly between uses. This prevents <strong>cross-contamination</strong>.</p>
<h3>Cook</h3><p>A food thermometer is the only reliable way to know meat is safe.</p>
<div class="tbl"><table><thead><tr><th>Food</th><th>Safe internal temperature</th></tr></thead><tbody><tr><td>Chicken, turkey, any poultry</td><td>165°F (74°C)</td></tr><tr><td>Ground beef, pork</td><td>160°F (71°C)</td></tr><tr><td>Whole cuts of beef, pork, lamb</td><td>145°F (63°C), then rest 3 minutes</td></tr><tr><td>Fish</td><td>145°F (63°C), or until it flakes</td></tr><tr><td>Leftovers</td><td>165°F (74°C)</td></tr></tbody></table></div>
<h3>Chill</h3><p>Bacteria grow fastest between <strong>40°F and 140°F (4°C to 60°C)</strong>, the <strong>danger zone</strong>. Refrigerate leftovers within 2 hours, or within 1 hour on a very hot day. Thaw food in the fridge, not on the counter.</p>`,
        q: [['What is the safe internal temperature for chicken?', ['125°F (52°C)', '145°F (63°C)', '165°F (74°C)', '200°F (93°C)'], 2], ['What is the "danger zone"?', ['Below 0°F', '40–140°F (4–60°C)', 'Above 200°F', 'The kitchen sink'], 1], ['Why use separate cutting boards for raw meat and salad?', ['To save time', 'To prevent cross-contamination', 'Because meat is heavier', 'It looks neater'], 1]] },
      { t: 'Making food taste good', s: 'The core tools that make any dish delicious: salt, acid, fat and heat.',
        b: `<p>Great cooks taste as they go and adjust four things.</p>
<ul class="vocab"><li><b>Salt</b><span>Brings out flavour. Add a little at a time, early and throughout.</span></li><li><b>Acid</b><span>Lime, lemon, vinegar, tomato. Brightens heavy food.</span></li><li><b>Fat</b><span>Butter, oil, coconut milk. Carries flavour and adds richness.</span></li><li><b>Heat</b><span>Changes texture and creates browning and deeper flavour.</span></li></ul>
<h3>The five tastes</h3><p>Sweet, salty, sour, bitter and <strong>umami</strong> (savoury). Umami comes from foods like tomatoes, mushrooms, cheese and soy sauce.</p>
<h3>Herbs and spices</h3><ul><li>Add dried herbs and whole spices early so their flavour can spread.</li><li>Add fresh, soft herbs like parsley and cilantro at the end.</li><li>Goat pepper, thyme, garlic and lime are classic partners in Bahamian cooking.</li></ul>
<div class="tip"><b>Fixing a flat dish</b><p>If it tastes dull, add salt. If it tastes heavy, add acid. If it's too sharp, add a little fat or sweetness.</p></div>`,
        q: [['A stew tastes heavy and dull. What is a good fix?', ['Add more water', 'A squeeze of lime or a splash of vinegar', 'Cook it longer', 'Add flour'], 1], ['What is umami?', ['A spice', 'A savoury taste', 'A cooking pot', 'A type of rice'], 1], ['When should fresh, soft herbs usually go in?', ['At the very start', 'At the end', 'Never', 'Only in desserts'], 1]] }
    ] },
    { t: 'Building better dishes', lessons: [
      { t: 'Balancing flavours and textures', s: 'Harmonising flavours and textures to create a well-rounded meal.',
        b: `<p>The most memorable dishes have <strong>contrast</strong>. Think about both taste and texture.</p>
<h3>Balance flavours</h3><ul><li>Sweet balances sour and spicy: think mango salsa on grilled fish.</li><li>Salty balances sweet: think salted caramel.</li><li>Acid cuts through fat: think lime on fried snapper.</li><li>Bitter balances rich: think dark greens with a creamy dish.</li></ul>
<h3>Add texture</h3><ul><li><strong>Crunchy:</strong> toasted nuts, fried onions, fresh cucumber</li><li><strong>Creamy:</strong> avocado, yoghurt, mashed potato</li><li><strong>Chewy:</strong> grains, bread</li><li><strong>Crisp:</strong> a well-seared crust, a fresh salad</li></ul>
<div class="ex"><b>Build a plate</b><p>Peas 'n' rice (soft, savoury) + fried fish (crisp, rich) + coleslaw (crunchy, tangy). Every bite gives something different.</p></div>`,
        q: [['What cuts through the richness of fried food?', ['More oil', 'Acid like lime juice', 'Flour', 'Sugar only'], 1], ['Which adds crunch?', ['Mashed potato', 'Toasted nuts', 'Yoghurt', 'Soup'], 1], ['Why add contrast to a dish?', ['To make it take longer', 'To make every bite more interesting', 'To use more pans', 'It is required by law'], 1]] },
      { t: 'Efficient cooking', s: 'Time-saving techniques, meal planning and kitchen organisation.',
        b: `<h3>Mise en place</h3><p>French for "everything in its place". Before you turn on the heat, read the recipe, then wash, chop and measure everything. Cooking becomes calm instead of rushed.</p>
<h3>Plan your week</h3><ul><li>Plan meals before you shop, and buy only what's on your list.</li><li>Cook once, eat twice: make a big pot of rice or beans for several meals.</li><li>Use leftovers creatively: roast chicken today, chicken souse or sandwiches tomorrow.</li></ul>
<h3>Work smart</h3><ul><li>Start the slowest item first, like rice or roasting vegetables.</li><li>Clean as you go so you finish with an empty sink.</li><li>Keep a sharp knife. A dull knife is slower and more dangerous.</li><li>One-pan and sheet-pan meals save time and washing up.</li></ul>
<div class="tip"><b>Reduce waste</b><p>Freeze bread, ripe bananas and herbs in oil. Vegetable scraps make good stock.</p></div>`,
        q: [['What does "mise en place" mean?', ['Cooking with fire', 'Everything in its place, prepared before cooking', 'A French dessert', 'Washing up after'], 1], ['Which dish should you start first?', ['The one that takes the longest', 'The salad', 'Whatever is easiest', 'Dessert'], 0], ['Why keep your knife sharp?', ['It looks nice', 'It is faster and safer', 'Dull knives are illegal', 'It saves electricity'], 1]] },
      { t: 'Sauce making', s: 'The fundamental techniques and ingredients for a variety of flavourful sauces.',
        b: `<p>A good sauce can turn plain rice or chicken into a meal. Most sauces are built from a few basic methods.</p>
<h3>The roux</h3><p>Cook equal parts fat and flour together, then whisk in liquid. The roux thickens it. Cook the roux longer for a darker colour and nuttier taste.</p>
<h3>The five French "mother sauces"</h3><div class="tbl"><table><thead><tr><th>Sauce</th><th>Built from</th></tr></thead><tbody><tr><td>Béchamel</td><td>Milk + white roux</td></tr><tr><td>Velouté</td><td>Light stock + roux</td></tr><tr><td>Espagnole</td><td>Brown stock + brown roux</td></tr><tr><td>Tomato</td><td>Tomatoes, simmered and seasoned</td></tr><tr><td>Hollandaise</td><td>Egg yolk + butter + lemon, emulsified</td></tr></tbody></table></div>
<h3>Quick pan sauce</h3><ol><li>Sear meat, then take it out of the pan.</li><li>Add a little onion or garlic to the drippings.</li><li>Pour in stock, juice or wine and scrape up the brown bits (<strong>deglazing</strong>).</li><li>Simmer until it thickens (<strong>reducing</strong>).</li><li>Turn off the heat and stir in a knob of butter.</li></ol>
<div class="tip"><b>Emulsion</b><p>Oil and vinegar don't mix by themselves. Whisk in mustard or egg yolk to hold them together, the way a vinaigrette or mayonnaise does.</p></div>`,
        q: [['A roux is made from…', ['Equal parts fat and flour', 'Eggs and sugar', 'Milk and water', 'Tomato and salt'], 0], ['What is deglazing?', ['Freezing a sauce', 'Adding liquid to a hot pan to lift the browned bits', 'Adding sugar', 'Burning the pan'], 1], ['Which mother sauce is made from milk and a white roux?', ['Hollandaise', 'Espagnole', 'Béchamel', 'Tomato'], 2]] }
    ] },
    { t: 'Techniques that build flavour', lessons: [
      { t: 'Cooking techniques to enhance flavour', s: 'Searing, roasting, caramelising and other methods that deepen flavour.',
        b: `<h3>Browning is flavour</h3><p>When protein and sugars brown in high heat, hundreds of new flavours form. This is called the <strong>Maillard reaction</strong>. It's why seared steak and toasted bread taste so good.</p>
<ul><li><strong>Searing:</strong> very hot pan, dry meat, don't crowd the pan, don't move it too soon.</li><li><strong>Roasting:</strong> dry oven heat browns vegetables and meat. Try 400–425°F (200–220°C) for vegetables.</li><li><strong>Caramelising:</strong> cook onions slowly over low heat for 30 minutes or more until sweet and golden.</li><li><strong>Grilling:</strong> adds smoky char.</li><li><strong>Toasting spices:</strong> heat whole spices in a dry pan for 1–2 minutes until fragrant.</li><li><strong>Blooming:</strong> fry ground spices briefly in oil to release their flavour.</li></ul>
<h3>Gentle methods</h3><p><strong>Braising</strong> (brown, then simmer slowly in a little liquid) turns tough cuts tender. <strong>Steaming</strong> keeps vegetables bright and crisp.</p>
<div class="warn"><b>Don't crowd the pan</b><p>Too much food at once lets out steam, so it boils instead of browning. Cook in batches.</p></div>`,
        q: [['What is the Maillard reaction?', ['Freezing food', 'Browning that creates new flavours', 'Boiling pasta', 'Mixing oil and water'], 1], ['Why shouldn\'t you crowd the pan?', ['Food steams instead of browning', 'The pan might break', 'It uses less oil', 'It cooks faster'], 0], ['Which method is best for a tough cut of meat?', ['Quick searing only', 'Braising', 'Eating raw', 'Microwaving'], 1]] },
      { t: 'Prep techniques to enhance flavour', s: 'Marinating, seasoning and preparation methods that boost flavour before cooking.',
        b: `<h3>Marinating</h3><p>A marinade usually combines <strong>acid</strong> (lime, vinegar), <strong>oil</strong> and <strong>flavour</strong> (garlic, herbs, spices). Fish needs only 15–30 minutes. Chicken can marinate for a few hours or overnight. Always marinate in the fridge.</p>
<div class="warn"><b>Safety</b><p>Don't reuse marinade that touched raw meat unless you boil it first.</p></div>
<h3>Brining</h3><p>Soaking meat in salty water helps it hold moisture, which makes chicken and pork juicier.</p>
<h3>Dry rubs</h3><p>A mix of salt, spices and sometimes sugar rubbed straight onto meat. Great for grilling.</p>
<h3>Cutting matters</h3><ul><li>Same-size pieces cook evenly.</li><li>Smaller cuts release more flavour into a sauce.</li><li>Slice meat <strong>against the grain</strong> to make it more tender to chew.</li></ul>
<h3>Small things, big flavour</h3><ul><li>Zest citrus before juicing it. The oils in the peel are full of flavour.</li><li>Crush garlic and let it sit a few minutes before cooking.</li><li>Season every layer: salt the pasta water, the vegetables and the sauce.</li></ul>`,
        q: [['How long should fish usually marinate?', ['15–30 minutes', '3 days', '1 week', 'It should never be marinated'], 0], ['Why slice meat against the grain?', ['It looks better', 'It makes it more tender to chew', 'It cooks faster', 'It is required'], 1], ['What helps chicken stay juicy?', ['Brining', 'Freezing twice', 'Overcooking', 'Cutting into uneven pieces'], 0]] }
    ] }
  ],
  games: [
    { type: 'match', t: 'Kitchen Lingo', d: 'Match the cooking term to what it means.', pairs: [['Sear', 'Brown the surface over high heat'], ['Braise', 'Brown, then simmer slowly in a little liquid'], ['Deglaze', 'Add liquid to lift browned bits from the pan'], ['Reduce', 'Simmer to thicken and concentrate'], ['Roux', 'Fat and flour cooked together'], ['Mise en place', 'Everything prepped before cooking'], ['Marinate', 'Soak in a flavoured liquid'], ['Zest', 'The flavourful outer peel of citrus']] },
    { type: 'sort', t: 'Fridge or Counter?', d: 'Where should each item be stored?', bins: ['Refrigerator', 'Counter or pantry'], items: [['Raw chicken', 0], ['Cooked rice leftovers', 0], ['Uncut onions', 1], ['Milk', 0], ['Dry pasta', 1], ['Opened mayonnaise', 0], ['Unripe bananas', 1], ['Raw fish', 0], ['Canned beans (unopened)', 1], ['Cut melon', 0]] }
  ]
},

/* ===================== DIET & FITNESS ===================== */
{
  id: 'diet', cat: 'wellness', title: 'Diet & Fitness', ages: 'Teens & adults',
  tag: 'Abs are made in the kitchen... and the gym.',
  blurb: 'Popular diets explained honestly, from keto and carnivore to vegan, plus calorie deficits and surpluses, bulking, workout splits and bodyweight training.',
  note: 'This course is general education, not medical advice. Talk to a doctor before big changes to your diet or exercise, especially if you have a health condition, are pregnant or are under 18.',
  units: [
    { t: 'How diets work', lessons: [
      { t: 'Keto diet', s: 'Low carbohydrate, high fat eating, and how it aims to promote fat burning.',
        b: `<p>The <strong>ketogenic (keto) diet</strong> cuts carbohydrates very low, usually to about 20–50 grams a day, and gets most calories from fat.</p>
<h3>How it works</h3><p>With very few carbs, the body makes <strong>ketones</strong> from fat to use for energy. This state is called <strong>ketosis</strong>.</p>
<ul class="vocab"><li><b>Eat</b><span>Meat, fish, eggs, cheese, avocado, nuts, oils, leafy greens</span></li><li><b>Avoid</b><span>Bread, rice, pasta, sugar, most fruit, potatoes, beans</span></li></ul>
<h3>Pros and cons</h3><ul><li>Some people lose weight quickly and feel less hungry.</li><li>The first week can bring "keto flu": tiredness, headaches and cravings.</li><li>It can be hard to keep up and low in fibre.</li><li>It is not suitable for everyone. People with some medical conditions should avoid it.</li></ul>`,
        q: [['What does the keto diet restrict most?', ['Fat', 'Protein', 'Carbohydrates', 'Water'], 2], ['What is ketosis?', ['A type of exercise', 'Using ketones made from fat for energy', 'A vitamin', 'A muscle injury'], 1], ['Which food fits a keto diet?', ['White rice', 'Avocado', 'Bread', 'Candy'], 1]] },
      { t: 'Carnivore diet', s: 'Eating only animal products: the principles, claimed benefits and potential risks.',
        b: `<p>The <strong>carnivore diet</strong> is the most extreme low-carb diet. Followers eat only animal foods: meat, fish, eggs and sometimes dairy.</p>
<h3>Why people try it</h3><p>Supporters say it is simple and filling, and some report weight loss or fewer digestive problems.</p>
<h3>Risks to know</h3><ul><li>No fibre, which matters for gut health.</li><li>Missing vitamin C and many plant nutrients.</li><li>Often high in saturated fat, which can raise cholesterol.</li><li>Very little long-term research supports it.</li></ul>
<div class="tip"><b>Bottom line</b><p>Most nutrition experts recommend a varied diet with plenty of plants. If you try carnivore, do it with a doctor's guidance and get blood work done.</p></div>`,
        q: [['What does the carnivore diet include?', ['Only plants', 'Only animal foods', 'Only fruit', 'Everything'], 1], ['Which nutrient is missing on a carnivore diet?', ['Protein', 'Fibre', 'Fat', 'Iron'], 1], ['What do most nutrition experts recommend instead?', ['Only meat', 'A varied diet with plenty of plants', 'Fasting all week', 'Only juice'], 1]] },
      { t: 'Calorie deficit', s: 'Eating fewer calories than you burn, which leads to weight loss over time.',
        b: `<p>Your body burns energy (calories) all day to breathe, think and move. If you eat <strong>fewer calories than you burn</strong>, your body uses stored energy, mostly fat. That is a <strong>calorie deficit</strong>.</p>
<h3>How big a deficit?</h3><p>A deficit of about <strong>500 calories a day</strong> often leads to losing around 1 pound (0.45 kg) a week. Slow loss is easier to keep off.</p>
<h3>How to create one</h3><ul><li>Fill half your plate with vegetables.</li><li>Choose water over sugary drinks.</li><li>Eat enough protein to stay full and protect muscle.</li><li>Move more: walking counts.</li><li>Watch portion sizes of rice, bread and fried foods.</li></ul>
<div class="warn"><b>Too much is harmful</b><p>Crash diets can cause tiredness, muscle loss and nutrient gaps. Growing teens need enough food to develop, so they should focus on healthy habits, not strict counting.</p></div>`,
        q: [['A calorie deficit means…', ['Eating more than you burn', 'Eating fewer calories than you burn', 'Eating only at night', 'Never eating carbs'], 1], ['About how much does a 500-calorie daily deficit lose per week?', ['About 1 pound', '10 pounds', 'Nothing', '5 pounds'], 0], ['Which swap helps create a deficit?', ['Soda instead of water', 'Water instead of soda', 'Larger portions', 'Skipping vegetables'], 1]] },
      { t: 'Calorie surplus', s: 'Eating more calories than you burn, which leads to weight gain over time.',
        b: `<p>A <strong>calorie surplus</strong> is the opposite of a deficit: you eat <strong>more calories than you burn</strong>, and your body stores the extra.</p>
<h3>When a surplus is useful</h3><ul><li>Building muscle, together with strength training</li><li>Recovering from illness or being underweight</li><li>Supporting high levels of sport</li></ul>
<h3>Where the extra goes</h3><p>With no training, most extra calories are stored as fat. With strength training and enough protein, more of the gain can be muscle.</p>
<div class="tip"><b>Easy ways to add calories</b><p>Add nuts, peanut butter, olive oil, whole milk, eggs, oats and an extra snack. Choose foods that bring nutrients, not just sugar.</p></div>`,
        q: [['A calorie surplus usually leads to…', ['Weight loss', 'Weight gain', 'No change', 'Faster running'], 1], ['Without training, extra calories are mostly stored as…', ['Muscle', 'Fat', 'Bone', 'Water'], 1], ['Which is a nutritious way to add calories?', ['Soda', 'Peanut butter and oats', 'Candy', 'Energy drinks'], 1]] },
      { t: 'Bulking diet', s: 'A calorie surplus with plenty of protein and nutrient-rich food to support muscle growth.',
        b: `<p><strong>Bulking</strong> means eating in a planned surplus while lifting weights to build muscle.</p>
<h3>Lean bulk</h3><p>Aim for a small surplus of about <strong>250–500 calories</strong> a day. A bigger surplus mostly adds fat.</p>
<h3>Protein</h3><p>Many lifters aim for about <strong>1.6–2.2 grams of protein per kilogram</strong> of body weight a day, spread over several meals.</p>
<div class="ex"><b>Example</b><p>A 70 kg person: 70 × 1.6 = 112 g up to 70 × 2.2 = 154 g of protein a day.</p></div>
<h3>Good bulking foods</h3><ul><li>Protein: chicken, fish, eggs, beans, Greek yoghurt, milk</li><li>Carbs for energy: rice, oats, potatoes, bread, fruit</li><li>Healthy fats: nuts, avocado, olive oil</li></ul>
<p>Track your weight weekly. Gaining about 0.25–0.5% of body weight per week is a sensible pace.</p>`,
        q: [['What is a "lean bulk" surplus?', ['About 250–500 calories a day', '3000 extra calories a day', 'No surplus', 'Fasting'], 0], ['Roughly how much protein do lifters aim for?', ['0.1 g per kg', '1.6–2.2 g per kg', '10 g per kg', 'None'], 1], ['What must go with bulking to build muscle?', ['Strength training', 'Only sleep', 'Only cardio', 'Nothing'], 0]] },
      { t: 'Vegan and vegetarian diets', s: 'How to build muscle on a vegan or vegetarian diet.',
        b: `<ul class="vocab"><li><b>Vegetarian</b><span>No meat or fish. Usually eats eggs and dairy.</span></li><li><b>Vegan</b><span>No animal products at all.</span></li></ul>
<h3>Protein without meat</h3><ul><li>Beans, lentils, chickpeas and pigeon peas</li><li>Tofu, tempeh and edamame (soy)</li><li>Seitan (wheat gluten)</li><li>Nuts, seeds and peanut butter</li><li>Eggs, Greek yoghurt and cheese (for vegetarians)</li></ul>
<p>Plant proteins have different <strong>amino acids</strong>. Eating a variety through the day, such as rice with beans, gives you everything you need.</p>
<h3>Nutrients to watch</h3><ul><li><strong>Vitamin B12:</strong> vegans need a supplement or fortified foods.</li><li><strong>Iron:</strong> pair beans and greens with vitamin C (citrus) to absorb more.</li><li><strong>Calcium, omega-3 and vitamin D:</strong> fortified plant milks, seeds and sunlight help.</li></ul>
<div class="tip"><b>Yes, you can build muscle</b><p>With enough total protein, enough calories and progressive training, vegans and vegetarians build muscle like anyone else.</p></div>`,
        q: [['Which vitamin do vegans usually need to supplement?', ['Vitamin C', 'Vitamin B12', 'Vitamin A', 'None'], 1], ['Which is a good plant protein?', ['Lettuce', 'Lentils', 'Sugar', 'Apple juice'], 1], ['What helps your body absorb iron from beans?', ['Coffee', 'Vitamin C, like citrus', 'Salt', 'Milk'], 1]] }
    ] },
    { t: 'Training', lessons: [
      { t: 'Workout splits', s: 'Ways to organise your training week for recovery, growth and efficiency.',
        b: `<p>A <strong>split</strong> is how you divide your workouts across the week. Muscles grow during rest, so the goal is to train hard and recover well.</p>
<div class="tbl"><table><thead><tr><th>Split</th><th>Example week</th><th>Best for</th></tr></thead><tbody>
<tr><td>Full body</td><td>Mon, Wed, Fri: whole body</td><td>Beginners, busy schedules</td></tr>
<tr><td>Upper / lower</td><td>Mon upper, Tue lower, Thu upper, Fri lower</td><td>Intermediate lifters</td></tr>
<tr><td>Push / pull / legs</td><td>Push (chest, shoulders, triceps), Pull (back, biceps), Legs</td><td>Training 3–6 days a week</td></tr>
<tr><td>Body-part split</td><td>One muscle group per day</td><td>Advanced lifters</td></tr></tbody></table></div>
<h3>Principles for any split</h3><ul><li>Train each muscle group about twice a week.</li><li><strong>Progressive overload:</strong> slowly add weight, reps or sets over time.</li><li>Rest 48 hours before training the same muscle hard again.</li><li>Sleep 7–9 hours. Recovery is where the gains happen.</li><li>Warm up for 5–10 minutes first.</li></ul>`,
        q: [['Which split suits most beginners?', ['Body-part split', 'Full body, three days a week', 'Training the same muscle daily', 'No training'], 1], ['What is progressive overload?', ['Lifting the same weight forever', 'Gradually increasing weight, reps or sets', 'Training until injury', 'Skipping rest'], 1], ['"Push" day usually trains…', ['Back and biceps', 'Chest, shoulders and triceps', 'Legs only', 'Abs only'], 1]] },
      { t: 'Bodyweight workouts', s: 'Building strength, flexibility and endurance with no weights at all.',
        b: `<p>Your body is a complete gym. Bodyweight training needs no equipment and can be done anywhere.</p>
<ul class="vocab"><li><b>Push-up</b><span>Chest, shoulders, triceps</span></li><li><b>Squat</b><span>Thighs and glutes</span></li><li><b>Lunge</b><span>Legs and balance</span></li><li><b>Plank</b><span>Core strength</span></li><li><b>Glute bridge</b><span>Glutes and lower back</span></li><li><b>Burpee</b><span>Full body and fitness</span></li></ul>
<h3>Make it harder over time</h3><ul><li>Push-ups: knees → full → feet raised → one arm closer</li><li>Squats: regular → jump squats → split squats</li><li>Slow down: 3 seconds down, 1 second up</li></ul>
<div class="ex"><b>Beginner circuit (repeat 3 times)</b><p>10 squats · 8 push-ups (knees okay) · 10 lunges each leg · 20-second plank · 10 glute bridges · rest 1 minute</p></div>
<div class="tip"><b>Form first</b><p>Ten good reps beat thirty sloppy ones. Keep your back straight and move with control.</p></div>`,
        q: [['Which exercise mainly trains the core?', ['Plank', 'Squat', 'Push-up', 'Lunge'], 0], ['How can you make push-ups harder?', ['Do them on your knees', 'Raise your feet', 'Do fewer', 'Go faster with bad form'], 1], ['What matters most when starting out?', ['Speed', 'Good form', 'Doing 100 reps', 'Heavy weights'], 1]] }
    ] }
  ],
  games: [
    { type: 'sort', t: 'Keto or Not?', d: 'Would each food fit a strict keto diet?', bins: ['Keto-friendly', 'High-carb'], items: [['Eggs', 0], ['White rice', 1], ['Avocado', 0], ['Bread', 1], ['Salmon', 0], ['Banana', 1], ['Cheese', 0], ['Pasta', 1], ['Spinach', 0], ['Soda', 1], ['Almonds', 0], ['Potatoes', 1]] },
    { type: 'match', t: 'Muscle Match', d: 'Match each exercise to the main muscles it trains.', pairs: [['Push-up', 'Chest, shoulders, triceps'], ['Squat', 'Thighs and glutes'], ['Plank', 'Core'], ['Pull-up', 'Back and biceps'], ['Calf raise', 'Calves'], ['Glute bridge', 'Glutes and lower back']] }
  ]
}
);
