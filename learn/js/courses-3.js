/* Course content, part 3: Botany, Beekeeping, Chickens, Spanish, French, ASL */
window.MGT_COURSES = window.MGT_COURSES || [];
window.MGT_COURSES.push(

/* ===================== BOTANY ===================== */
{
  id: 'botany', cat: 'creative', title: 'Botany & Gardening', ages: 'All ages',
  tag: 'Talk to plants... and finally understand when they talk back.',
  blurb: 'How plants work, building a beautiful garden, landscaping, colour coordination, growing plants for tea and remedies, and fertilising and plant reproduction.',
  units: [
    { t: 'Plant science', lessons: [
      { t: 'Botany 101', s: 'Plant structures and functions, classification and why plants matter to ecosystems.',
        b: `<p><strong>Botany</strong> is the science of plants. Every garden makes more sense once you know how a plant works.</p>
<ul class="vocab"><li><b>Roots</b><span>Anchor the plant and take in water and minerals</span></li><li><b>Stem</b><span>Supports the plant and carries water and food</span></li><li><b>Leaves</b><span>Make food from sunlight</span></li><li><b>Flowers</b><span>Make seeds through pollination</span></li><li><b>Fruit</b><span>Protects and spreads seeds</span></li></ul>
<h3>Photosynthesis</h3><p>Leaves use <strong>sunlight</strong> to turn <strong>water</strong> and <strong>carbon dioxide</strong> into <strong>sugar</strong> (food) and <strong>oxygen</strong>. That oxygen is the air we breathe.</p>
<div class="ex"><b>The recipe</b><p>Sunlight + water + carbon dioxide → sugar + oxygen</p></div>
<h3>Plant groups</h3><ul><li><strong>Flowering plants</strong> make seeds inside fruit: hibiscus, mango, grasses.</li><li><strong>Conifers</strong> make seeds in cones: Caribbean pine.</li><li><strong>Ferns and mosses</strong> spread by spores, not seeds.</li></ul>
<p>Flowering plants are split into <strong>monocots</strong> (one seed leaf, parallel veins, like palms and grasses) and <strong>dicots</strong> (two seed leaves, branching veins, like beans and hibiscus).</p>`,
        q: [['What do leaves make during photosynthesis?', ['Water and soil', 'Sugar and oxygen', 'Roots', 'Carbon dioxide only'], 1], ['Which part takes in water from the soil?', ['Leaves', 'Flowers', 'Roots', 'Fruit'], 2], ['Palms are…', ['Monocots', 'Dicots', 'Ferns', 'Mosses'], 0]] },
      { t: 'Fertilising and plant reproduction', s: 'The role of fertilisation in plant reproduction, and feeding plants for healthy growth.',
        b: `<h3>How plants reproduce</h3><p><strong>Pollination</strong> moves pollen from the male part of a flower (the <strong>stamen</strong>) to the female part (the <strong>pistil</strong>). Bees, butterflies, birds, bats and the wind all help. Once pollinated, the flower grows a fruit with seeds inside.</p>
<h3>New plants without seeds</h3><ul><li><strong>Cuttings:</strong> a piece of stem planted to grow roots (hibiscus, bougainvillea, cassava).</li><li><strong>Division:</strong> split a clump into several plants (aloe pups, lemongrass).</li><li><strong>Runners:</strong> stems that root along the ground (strawberries, some grasses).</li></ul>
<h3>Feeding plants: N-P-K</h3><ul class="vocab"><li><b>N: Nitrogen</b><span>Green, leafy growth</span></li><li><b>P: Phosphorus</b><span>Roots, flowers and fruit</span></li><li><b>K: Potassium</b><span>Overall health and disease resistance</span></li></ul>
<p>A bag marked 10-10-10 has equal amounts of each.</p>
<div class="tip"><b>Compost</b><p>Fruit peels, vegetable scraps, leaves and coffee grounds turn into rich, free fertiliser. Thin, sandy or rocky island soil especially benefits from it.</p></div>
<div class="warn"><b>Don't overdo it</b><p>Too much fertiliser burns roots. Follow the label.</p></div>`,
        q: [['What does nitrogen (N) mainly help with?', ['Leafy green growth', 'Flowers only', 'Nothing', 'Root rot'], 0], ['Pollination moves pollen from the…', ['Roots to leaves', 'Stamen to pistil', 'Fruit to stem', 'Soil to flower'], 1], ['Growing a new plant from a piece of stem is called…', ['A cutting', 'Composting', 'Photosynthesis', 'Pruning'], 0]] }
    ] },
    { t: 'Design your garden', lessons: [
      { t: 'Building a beautiful garden', s: 'Designing, planting and maintaining a vibrant garden.',
        b: `<h3>1. Study your site</h3><ul><li><strong>Sun:</strong> most vegetables need 6–8 hours of direct sun a day.</li><li><strong>Soil:</strong> sandy, rocky or rich? Mix in compost to improve it.</li><li><strong>Water:</strong> where does rain drain? Where's your hose?</li><li><strong>Wind and salt spray</strong> near the coast.</li></ul>
<h3>2. Plan</h3><p>Sketch your space. Put tall plants at the back or north side so they don't shade small ones. Start small: one well-kept bed beats three neglected ones.</p>
<h3>3. Plant</h3><ul><li><strong>Raised beds</strong> or containers help where soil is thin or rocky.</li><li>Plant in the cooler part of the day and water well right after.</li><li>Follow spacing on the seed packet so plants have room to grow.</li></ul>
<h3>4. Maintain</h3><ul><li>Water deeply and less often, early in the morning.</li><li><strong>Mulch</strong> (leaves, straw, wood chips) holds moisture and blocks weeds.</li><li>Pull weeds while they're small.</li><li>Check leaves for pests often.</li></ul>`,
        q: [['How much direct sun do most vegetables need?', ['1 hour', '6–8 hours', 'None', '24 hours'], 1], ['What does mulch do?', ['Attracts pests', 'Holds moisture and blocks weeds', 'Replaces water', 'Kills plants'], 1], ['When is the best time to water?', ['Early morning', 'Midday heat', 'Never', 'Only during storms'], 0]] },
      { t: 'Landscaping', s: 'Designing and maintaining outdoor spaces that look good and work well.',
        b: `<p><strong>Landscaping</strong> is shaping an outdoor space so it's beautiful and useful.</p>
<ul class="vocab"><li><b>Softscape</b><span>Living things: plants, trees, grass</span></li><li><b>Hardscape</b><span>Non-living things: paths, walls, patios, stones</span></li></ul>
<h3>Design principles</h3><ul><li><strong>Focal point:</strong> one thing that draws the eye, like a tree, fountain or bench.</li><li><strong>Layering:</strong> ground cover in front, shrubs in the middle, trees at the back.</li><li><strong>Repetition:</strong> repeat a plant or colour to tie the space together.</li><li><strong>Flow:</strong> paths should lead somewhere and feel natural to walk.</li><li><strong>Balance:</strong> both sides should feel equally "weighted", even if not identical.</li></ul>
<h3>Choose native and adapted plants</h3><p>Native plants are used to local heat, salt and rainfall, so they need less water and care, and they feed local birds and insects. Examples in The Bahamas include sea grape, buttonwood, wild coffee and lignum vitae, the national tree.</p>`,
        q: [['A stone path is part of the…', ['Softscape', 'Hardscape', 'Compost', 'Canopy'], 1], ['What is a focal point?', ['A weed', 'Something that draws the eye', 'A watering schedule', 'A soil type'], 1], ['Why choose native plants?', ['They need less water and care, and support local wildlife', 'They are always expensive', 'They grow anywhere in the world', 'No reason'], 0]] },
      { t: 'Colour coordinating in a garden', s: 'Selecting and arranging plants by colour to create a visually appealing landscape.',
        b: `<p>The <strong>colour wheel</strong> is the gardener's secret tool.</p>
<ul class="vocab"><li><b>Complementary</b><span>Opposites on the wheel: purple and yellow, orange and blue. Bold and lively.</span></li><li><b>Analogous</b><span>Neighbours on the wheel: red, orange and yellow. Harmonious and warm.</span></li><li><b>Monochromatic</b><span>Many shades of one colour. Calm and elegant.</span></li></ul>
<h3>Warm and cool</h3><ul><li><strong>Warm colours</strong> (red, orange, yellow) feel energetic and seem closer. Use them near patios.</li><li><strong>Cool colours</strong> (blue, purple, white) feel calm and seem further away. Use them to make small spaces feel bigger.</li></ul>
<h3>Don't forget foliage</h3><p>Leaves come in silver, lime, burgundy and variegated patterns. Crotons are a Caribbean favourite for year-round colour without flowers.</p>
<div class="tip"><b>White is the peacemaker</b><p>White flowers and silver leaves sit happily between clashing colours and glow at dusk.</p></div>`,
        q: [['Purple and yellow are…', ['Analogous', 'Complementary', 'Monochromatic', 'Neutral'], 1], ['Which colours make a small space feel bigger?', ['Warm colours', 'Cool colours', 'Only red', 'Black'], 1], ['Red, orange and yellow together are…', ['Analogous', 'Complementary', 'Monochromatic', 'Cool'], 0]] }
    ] },
    { t: 'The healing garden', lessons: [
      { t: 'Tea and medicine', s: 'Growing plants for herbal teas and natural remedies.',
        b: `<p>People have grown plants for tea and remedies for thousands of years. Bahamian "bush medicine" is a living tradition of this knowledge.</p>
<div class="tbl"><table><thead><tr><th>Plant</th><th>Traditional use</th><th>How to grow</th></tr></thead><tbody>
<tr><td>Lemongrass ("fever grass")</td><td>Calming, lemony tea</td><td>Full sun; divide clumps</td></tr>
<tr><td>Mint</td><td>Soothes the stomach</td><td>Grow in a pot: it spreads fast</td></tr>
<tr><td>Ginger</td><td>Nausea, colds</td><td>Plant a fresh root in rich soil and part shade</td></tr>
<tr><td>Aloe vera</td><td>Gel soothes minor burns and sunburn</td><td>Sandy soil, little water</td></tr>
<tr><td>Chamomile</td><td>Relaxing bedtime tea</td><td>Sun, cooler months</td></tr>
<tr><td>Moringa</td><td>Nutritious leaves for tea or cooking</td><td>Full sun; drought-tolerant tree</td></tr></tbody></table></div>
<h3>Harvest and dry</h3><p>Pick leaves in the morning after the dew dries. Hang small bunches upside down in a dry, shady place, then store them in a sealed jar.</p>
<div class="warn"><b>Safety first</b><p>Natural doesn't always mean safe. Identify plants with certainty, start with small amounts, and talk to a doctor before using herbs if you're pregnant, take medication or have a health condition.</p></div>`,
        q: [['Which plant should be grown in a pot because it spreads fast?', ['Aloe', 'Mint', 'Moringa', 'Ginger'], 1], ['What is aloe vera gel traditionally used for?', ['Soothing minor burns', 'Fixing bones', 'Dyeing hair', 'Fertiliser'], 0], ['Before using herbal remedies while on medication, you should…', ['Take double', 'Talk to a doctor', 'Ignore it', 'Only use them at night'], 1]] }
    ] }
  ],
  games: [
    { type: 'match', t: 'Plant Parts', d: 'Match each plant part or process to its job.', pairs: [['Roots', 'Take in water and anchor the plant'], ['Leaves', 'Make food from sunlight'], ['Flower', 'Makes seeds through pollination'], ['Stem', 'Carries water and supports the plant'], ['Photosynthesis', 'Turns light, water and CO₂ into sugar'], ['Pollination', 'Moves pollen to the pistil'], ['Nitrogen', 'Boosts leafy growth'], ['Mulch', 'Holds moisture, blocks weeds']] },
    { type: 'sort', t: 'Colour Wheel', d: 'Is each pairing complementary or analogous?', bins: ['Complementary', 'Analogous'], items: [['Purple + yellow', 0], ['Red + orange', 1], ['Blue + orange', 0], ['Yellow + green', 1], ['Red + green', 0], ['Blue + purple', 1], ['Orange + yellow', 1], ['Green + blue', 1]] }
  ]
},

/* ===================== BEEKEEPING ===================== */
{
  id: 'bees', cat: 'creative', title: 'Beekeeping', ages: 'Teens & adults',
  tag: 'Buzzing with honey, harmony, and hive wisdom.',
  blurb: 'Bee biology, hive life and equipment, managing colonies through the seasons, harvesting honey and choosing a good home for your bees.',
  units: [
    { t: 'Meet the bees', lessons: [
      { t: 'Bee biology', s: 'The anatomy, behaviours and ecological role of bees in pollination and biodiversity.',
        b: `<p>A honeybee colony works like one super-organism, with thousands of bees in three roles.</p>
<ul class="vocab"><li><b>Queen</b><span>One per hive. Lays up to 2,000 eggs a day. Lives several years.</span></li><li><b>Workers</b><span>Female. Tens of thousands. Do every job. Live about 6 weeks in busy season.</span></li><li><b>Drones</b><span>Male. No stinger. Their only job is to mate with a queen.</span></li></ul>
<h3>Body</h3><p>Like all insects, bees have three body parts: <strong>head</strong>, <strong>thorax</strong> (with 6 legs and 4 wings) and <strong>abdomen</strong>. Workers carry pollen in "baskets" on their back legs and make wax from glands on their abdomen.</p>
<h3>Why bees matter</h3><p>Bees pollinate a large share of the crops we eat, from mangoes and avocados to melons and peppers. Without pollinators, many fruits and vegetables would be scarce.</p>
<div class="tip"><b>The waggle dance</b><p>A forager tells her sisters where flowers are by dancing. The angle of her dance shows direction compared to the sun, and how long she waggles shows the distance.</p></div>`,
        q: [['How many queens are in a normal hive?', ['One', 'Ten', 'Hundreds', 'None'], 0], ['Which bees are male?', ['Workers', 'Drones', 'Queens', 'All of them'], 1], ['What does the waggle dance communicate?', ['Danger only', 'Where food is', 'Bedtime', 'The queen\'s age'], 1]] },
      { t: 'Hive life and equipment', s: 'Social structure inside the colony, and the equipment a beekeeper needs.',
        b: `<h3>A worker's career</h3><p>Worker bees change jobs as they age: cleaning cells → feeding larvae (nurse bee) → making wax and building comb → guarding the entrance → foraging outside.</p>
<h3>Inside the hive</h3><ul><li><strong>Brood:</strong> eggs, larvae and pupae in the centre of the hive.</li><li><strong>Honey and pollen</strong> stored around and above the brood.</li><li><strong>Propolis:</strong> "bee glue" made from plant resin, used to seal gaps.</li></ul>
<h3>The Langstroth hive</h3><p>The most common hive is a stack of boxes holding removable frames.</p><ul><li><strong>Bottom board</strong> and entrance</li><li><strong>Brood box:</strong> where the queen lays</li><li><strong>Queen excluder</strong> (optional): keeps the queen below</li><li><strong>Honey supers:</strong> boxes for honey storage</li><li><strong>Inner and outer covers</strong></li></ul>
<h3>Beekeeper gear</h3><ul class="vocab"><li><b>Veil and suit</b><span>Protect from stings</span></li><li><b>Gloves</b><span>Protect hands</span></li><li><b>Smoker</b><span>Cool smoke calms bees</span></li><li><b>Hive tool</b><span>Prises apart frames glued with propolis</span></li></ul>`,
        q: [['What is propolis?', ['Honey', '"Bee glue" made from plant resin', 'A type of bee', 'Wax'], 1], ['What is a honey super?', ['A strong bee', 'A box where bees store honey', 'The queen\'s cell', 'A smoker'], 1], ['What does the smoker do?', ['Cooks honey', 'Calms the bees', 'Kills mites', 'Lights the hive'], 1]] }
    ] },
    { t: 'Caring for a colony', lessons: [
      { t: 'Bee management and seasonal health', s: 'Understanding bee behaviour and the seasons to keep colonies healthy and productive.',
        b: `<h3>Regular inspections</h3><p>Check your hive every 1–2 weeks in busy season. Work on a calm, sunny day, move slowly, and look for:</p><ul><li>Eggs (a sign the queen is laying)</li><li>A healthy brood pattern with few empty gaps</li><li>Enough stored honey and pollen</li><li>Signs of pests or disease</li></ul>
<h3>Seasons in a warm climate</h3><ul><li><strong>Main bloom:</strong> colonies grow fast. Add supers before they run out of space.</li><li><strong>Dearth</strong> (few flowers, often in long dry spells): bees may need sugar syrup, and robbing between hives increases.</li><li><strong>Hurricane season:</strong> strap hives down and move them to shelter if a storm is coming.</li></ul>
<h3>Swarming</h3><p>When a hive is crowded, the old queen leaves with about half the bees to start a new home. Give bees enough space to reduce swarming.</p>
<h3>Pests</h3><p><strong>Varroa mites</strong> are tiny parasites that weaken bees and spread viruses. Beekeepers monitor mite levels and treat when needed. Small hive beetles and wax moths attack weak colonies.</p>`,
        q: [['How often should you inspect a hive in busy season?', ['Every 1–2 weeks', 'Once a year', 'Every hour', 'Never'], 0], ['What causes swarming?', ['Cold weather', 'A crowded hive', 'Too much honey taken', 'Smoke'], 1], ['What are varroa mites?', ['Helpful bees', 'Parasites that weaken bees', 'A type of flower', 'Beekeeping tools'], 1]] }
    ] },
    { t: 'Honey and habitat', lessons: [
      { t: 'Honey harvesting and uses', s: 'Harvesting honey, its uses and benefits, and sustainable beekeeping.',
        b: `<h3>When is honey ready?</h3><p>Bees evaporate nectar until it is thick, then seal each cell with a wax cap. Harvest frames that are <strong>at least 80% capped</strong>. Uncapped honey is too wet and can ferment.</p>
<h3>Harvesting step by step</h3><ol><li>Remove bees from the super with a bee brush or escape board.</li><li>Slice off the wax caps with an uncapping knife.</li><li>Spin the frames in an <strong>extractor</strong> to fling the honey out.</li><li>Strain through a fine mesh to remove wax bits.</li><li>Bottle in clean, dry jars.</li></ol>
<h3>Leave enough for the bees</h3><p>Honey is the colony's food store. Sustainable beekeepers only take the surplus and always leave plenty behind.</p>
<h3>Uses</h3><ul><li>Food and natural sweetener</li><li>Soothing sore throats (but <strong>never give honey to babies under 1</strong>)</li><li>Beeswax for candles, lip balm and wood polish</li><li>Income from selling honey and wax</li></ul>`,
        q: [['When are honey frames ready to harvest?', ['When at least 80% capped', 'As soon as there\'s any nectar', 'Never', 'Only at night'], 0], ['What does an extractor do?', ['Spins honey out of the comb', 'Catches the queen', 'Makes wax', 'Smokes the bees'], 0], ['Who should never be given honey?', ['Adults', 'Babies under 1', 'Teenagers', 'Beekeepers'], 1]] },
      { t: 'Apiaries and habitats', s: 'Where bees thrive, why habitats matter, and the challenges bees face.',
        b: `<p>An <strong>apiary</strong> is a place where hives are kept.</p>
<h3>Choosing a site</h3><ul><li><strong>Morning sun</strong> gets bees foraging early. Afternoon shade helps in the heat.</li><li><strong>Water</strong> nearby: bees need it to cool the hive. Add stones to a dish so they don't drown.</li><li><strong>Forage</strong> within about 2 miles: flowering trees, gardens and wildflowers.</li><li><strong>Shelter</strong> from strong wind.</li><li>Away from paths and neighbours' doors. Point entrances away from where people walk.</li><li>Raise hives off the ground on a stand.</li></ul>
<h3>Wild bees</h3><p>Many native bees don't live in hives. They nest in the ground, in hollow stems or in dead wood. Leaving a wild corner helps them.</p>
<h3>Threats bees face</h3><ul><li>Loss of flowers and habitat</li><li>Pesticides</li><li>Pests and disease</li><li>Extreme weather</li></ul>
<div class="tip"><b>Help bees anywhere</b><p>Plant flowers that bloom at different times of year, avoid spraying pesticides on open flowers, and leave some bare soil for ground-nesting bees.</p></div>`,
        q: [['What is an apiary?', ['A bee disease', 'A place where hives are kept', 'A type of honey', 'A queen bee'], 1], ['Why add stones to a water dish?', ['Decoration', 'So bees don\'t drown', 'To heat the water', 'To keep birds away'], 1], ['Which helps wild bees?', ['Spraying all flowers', 'Leaving a wild corner and bare soil', 'Paving the whole garden', 'Removing all flowers'], 1]] }
    ] }
  ],
  games: [
    { type: 'sort', t: 'Who Does It?', d: 'Queen, worker or drone?', bins: ['Queen', 'Worker', 'Drone'], items: [['Lays up to 2,000 eggs a day', 0], ['Collects pollen and nectar', 1], ['Male, with no stinger', 2], ['Guards the hive entrance', 1], ['Only one per hive', 0], ['Feeds the larvae', 1], ['Main job is to mate', 2], ['Builds wax comb', 1], ['Can live for several years', 0]] },
    { type: 'order', t: 'Honey Harvest', d: 'Put the honey harvest steps in order.', steps: ['Check frames are at least 80% capped', 'Clear bees off the honey super', 'Slice off the wax caps', 'Spin frames in the extractor', 'Strain the honey', 'Bottle in clean, dry jars'] }
  ]
},

/* ===================== CHICKENS ===================== */
{
  id: 'chickens', cat: 'creative', title: 'Chicken & Egg Farming', ages: 'All ages',
  tag: 'Feathered friends, fresh eggs, and farmyard fun.',
  blurb: 'How chickens grow and reproduce, raising chicks and collecting eggs safely, and building a coop that keeps your flock healthy and safe.',
  units: [
    { t: 'Chicken know-how', lessons: [
      { t: 'Chicken biology and reproduction', s: 'Chicken life cycles, reproductive systems and why breeding choices matter.',
        b: `<h3>Life cycle</h3><ol><li><strong>Egg:</strong> a fertilised egg kept warm hatches in about <strong>21 days</strong>.</li><li><strong>Chick:</strong> fluffy and needs heat for the first weeks.</li><li><strong>Pullet / cockerel:</strong> a young hen or young rooster.</li><li><strong>Hen / rooster:</strong> adults. Most hens start laying at around <strong>18–22 weeks</strong>.</li></ol>
<h3>Do you need a rooster?</h3><p><strong>No.</strong> Hens lay eggs without a rooster. You only need a rooster if you want <strong>fertilised eggs</strong> that can hatch into chicks. Roosters also crow loudly, so check local rules.</p>
<h3>Egg facts</h3><ul><li>A good laying hen produces about one egg every 24–26 hours.</li><li>Shell colour depends on the breed, not on nutrition.</li><li>Laying slows when days are shorter, during moulting (when hens replace their feathers) and as hens age.</li></ul>
<h3>Breeds</h3><ul><li><strong>Layers</strong> (like Leghorns) produce lots of eggs.</li><li><strong>Meat breeds</strong> grow quickly.</li><li><strong>Dual-purpose</strong> breeds (like Rhode Island Reds) do both and handle heat well.</li></ul>`,
        q: [['How long does a chicken egg take to hatch?', ['7 days', '21 days', '3 months', '1 year'], 1], ['Do hens need a rooster to lay eggs?', ['Yes, always', 'No, only for fertilised eggs', 'Only in winter', 'Only brown eggs'], 1], ['What decides eggshell colour?', ['Food', 'Breed', 'Weather', 'The rooster'], 1]] },
      { t: 'Chicken raising and egg collection', s: 'Raising chickens, and collecting and handling eggs for quality and safety.',
        b: `<h3>Raising chicks</h3><ul><li>Keep chicks in a <strong>brooder</strong>: a draught-free box with bedding, a heat source, food and water.</li><li>Start at about <strong>95°F (35°C)</strong> in week one, then lower it by about 5°F each week until they have feathers.</li><li>Watch them: huddled under the lamp means too cold; spread far away and panting means too hot.</li></ul>
<h3>Feeding</h3><div class="tbl"><table><thead><tr><th>Age</th><th>Feed</th></tr></thead><tbody><tr><td>0–8 weeks</td><td>Chick starter</td></tr><tr><td>8–18 weeks</td><td>Grower feed</td></tr><tr><td>Laying hens</td><td>Layer feed + oyster shell for calcium</td></tr></tbody></table></div><p>Always provide <strong>clean water</strong>. In hot weather a hen can drink a lot, so check it twice a day. Kitchen scraps are a treat, not a meal.</p>
<h3>Collecting eggs</h3><ul><li>Collect at least once a day, twice in hot weather.</li><li>Wash your hands after handling chickens and eggs.</li><li>Throw away cracked eggs.</li><li>If eggs are dirty, gently brush them clean. If you wash them, refrigerate them.</li><li>Store eggs pointy end down in the fridge.</li></ul>
<div class="tip"><b>Float test</b><p>Put an egg in water. Fresh eggs sink and lie flat. If it floats, throw it out.</p></div>`,
        q: [['What temperature should a brooder be in the first week?', ['About 95°F (35°C)', '50°F (10°C)', '120°F (49°C)', 'Room temperature'], 0], ['Why give laying hens oyster shell?', ['For flavour', 'For calcium to make strong shells', 'To clean their beaks', 'No reason'], 1], ['An egg floats in water. What do you do?', ['Eat it', 'Throw it out', 'Hatch it', 'Boil it longer'], 1]] },
      { t: 'Coop building and chicken habitats', s: 'Designing and building a safe, comfortable coop for a healthy, productive flock.',
        b: `<h3>Space</h3><ul><li><strong>Inside the coop:</strong> about 3–4 sq ft per bird.</li><li><strong>Outdoor run:</strong> about 8–10 sq ft per bird.</li></ul>
<h3>Must-haves</h3><ul class="vocab"><li><b>Roosting bars</b><span>Chickens sleep perched. Allow 8–10 inches per bird.</span></li><li><b>Nest boxes</b><span>One box (about 12×12 in) for every 4–5 hens</span></li><li><b>Ventilation</b><span>High vents release heat and ammonia</span></li><li><b>Shade</b><span>Essential in a hot climate</span></li><li><b>Bedding</b><span>Pine shavings or straw, changed regularly</span></li></ul>
<h3>Predator-proofing</h3><ul><li>Use <strong>hardware cloth</strong> (welded mesh), not chicken wire. Chicken wire keeps chickens in but doesn't keep predators out.</li><li>Bury mesh 12 inches down or out around the run to stop diggers.</li><li>Lock the coop at night.</li></ul>
<h3>Keep it clean</h3><p>Remove droppings often, refresh bedding and give hens a patch of dry dirt for <strong>dust baths</strong>, which keep mites away. A clean coop means healthy birds and clean eggs.</p>
<div class="warn"><b>Storms</b><p>Anchor the coop well and have a plan to move your flock to shelter during hurricane season.</p></div>`,
        q: [['How many hens can share one nest box?', ['4–5', '1', '20', '50'], 0], ['What keeps predators out best?', ['Chicken wire', 'Hardware cloth (welded mesh)', 'String', 'Nothing'], 1], ['Why do chickens take dust baths?', ['To keep mites away', 'To cool off', 'To find food', 'They don\'t'], 0]] }
    ] }
  ],
  games: [
    { type: 'sort', t: 'Coop Check', d: 'Good practice or bad idea?', bins: ['Good practice', 'Bad idea'], items: [['Collecting eggs every day', 0], ['Using chicken wire to stop predators', 1], ['High vents for airflow', 0], ['Leaving the coop open overnight', 1], ['Oyster shell for laying hens', 0], ['Eating an egg that floats', 1], ['One nest box for every 4–5 hens', 0], ['Only feeding kitchen scraps', 1], ['Providing shade and fresh water', 0]] },
    { type: 'match', t: 'Farmyard Words', d: 'Match each word to its meaning.', pairs: [['Pullet', 'A young hen'], ['Cockerel', 'A young rooster'], ['Brooder', 'A warm box for chicks'], ['Roost', 'Where chickens sleep'], ['Moulting', 'Replacing old feathers'], ['Layer feed', 'Food for egg-laying hens']] }
  ]
},

/* ===================== SPANISH ===================== */
{
  id: 'spanish', cat: 'lang', title: 'Spanish Basics', ages: 'All ages', hello: '¡Hola!',
  tag: 'Hablar, viajar, conectar. Speak, travel, connect.',
  blurb: 'The Spanish alphabet and greetings, daily routines, food, travel and shopping, and how to share feelings, opinions and plans for the future.',
  units: [
    { t: 'First words', lessons: [
      { t: 'Introductions and the world around you', s: 'The Spanish alphabet, greetings and basic words to start communicating.',
        b: `<h3>Pronunciation</h3><p>Spanish is spelled the way it sounds. The vowels are always the same: <strong>a</strong> (ah), <strong>e</strong> (eh), <strong>i</strong> (ee), <strong>o</strong> (oh), <strong>u</strong> (oo). Watch for <strong>ñ</strong> (ny, as in <em>año</em>), <strong>ll</strong> (y, as in <em>llamo</em>) and silent <strong>h</strong> (<em>hola</em> = OH-la).</p>
<h3>Greetings</h3><ul class="vocab"><li><b>Hola</b><span>Hello</span></li><li><b>Buenos días</b><span>Good morning</span></li><li><b>Buenas tardes</b><span>Good afternoon</span></li><li><b>Buenas noches</b><span>Good evening / night</span></li><li><b>¿Cómo estás?</b><span>How are you?</span></li><li><b>Bien, gracias</b><span>Fine, thanks</span></li><li><b>Me llamo…</b><span>My name is…</span></li><li><b>Mucho gusto</b><span>Nice to meet you</span></li><li><b>Adiós</b><span>Goodbye</span></li><li><b>Por favor</b><span>Please</span></li></ul>
<h3>Numbers 1–10</h3><p>uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez</p>
<h3>Things around you</h3><ul class="vocab"><li><b>la casa</b><span>the house</span></li><li><b>el agua</b><span>the water</span></li><li><b>el sol</b><span>the sun</span></li><li><b>la playa</b><span>the beach</span></li><li><b>el libro</b><span>the book</span></li><li><b>el amigo / la amiga</b><span>the friend</span></li></ul>
<div class="tip"><b>El and la</b><p>Every noun is masculine (<em>el</em>) or feminine (<em>la</em>). Many masculine nouns end in -o and many feminine nouns end in -a.</p></div>`,
        q: [['How do you say "Good morning"?', ['Buenas noches', 'Buenos días', 'Adiós', 'Gracias'], 1], ['"Me llamo Ana" means…', ['I live in Ana', 'My name is Ana', 'I like Ana', 'Ana is tired'], 1], ['What is "cinco"?', ['3', '5', '7', '10'], 1]] },
      { t: 'Actions and daily routine', s: 'Common actions and daily routines using simple present tense verbs.',
        b: `<h3>Regular verbs in the present tense</h3><p>Spanish verbs end in <strong>-ar</strong>, <strong>-er</strong> or <strong>-ir</strong>. Drop the ending and add a new one for each person.</p>
<div class="tbl"><table><thead><tr><th></th><th>hablar (speak)</th><th>comer (eat)</th><th>vivir (live)</th></tr></thead><tbody>
<tr><td>yo (I)</td><td>hablo</td><td>como</td><td>vivo</td></tr><tr><td>tú (you)</td><td>hablas</td><td>comes</td><td>vives</td></tr><tr><td>él / ella (he / she)</td><td>habla</td><td>come</td><td>vive</td></tr><tr><td>nosotros (we)</td><td>hablamos</td><td>comemos</td><td>vivimos</td></tr><tr><td>ellos (they)</td><td>hablan</td><td>comen</td><td>viven</td></tr></tbody></table></div>
<h3>My day</h3><ul class="vocab"><li><b>Me levanto</b><span>I get up</span></li><li><b>Me ducho</b><span>I shower</span></li><li><b>Desayuno</b><span>I eat breakfast</span></li><li><b>Voy a la escuela</b><span>I go to school</span></li><li><b>Trabajo</b><span>I work</span></li><li><b>Estudio</b><span>I study</span></li><li><b>Ceno</b><span>I eat dinner</span></li><li><b>Me acuesto</b><span>I go to bed</span></li></ul>
<div class="ex"><b>Example</b><p>Me levanto a las siete. Desayuno y voy a la escuela. — I get up at seven. I eat breakfast and go to school.</p></div>`,
        q: [['How do you say "I speak"?', ['Hablas', 'Hablo', 'Hablamos', 'Hablan'], 1], ['"Nosotros comemos" means…', ['They eat', 'We eat', 'I eat', 'You eat'], 1], ['"Me acuesto" means…', ['I get up', 'I go to bed', 'I study', 'I work'], 1]] }
    ] },
    { t: 'Out and about', lessons: [
      { t: 'Food, travel, currency and shopping', s: 'Vocabulary and phrases for food, travel, money and shopping.',
        b: `<h3>At the restaurant</h3><ul class="vocab"><li><b>Quiero…</b><span>I want…</span></li><li><b>Me gustaría…</b><span>I would like…</span></li><li><b>el pollo / el pescado</b><span>chicken / fish</span></li><li><b>el arroz</b><span>rice</span></li><li><b>la cuenta, por favor</b><span>the bill, please</span></li><li><b>¡Está delicioso!</b><span>It's delicious!</span></li></ul>
<h3>Travel</h3><ul class="vocab"><li><b>¿Dónde está…?</b><span>Where is…?</span></li><li><b>el aeropuerto</b><span>the airport</span></li><li><b>el hotel</b><span>the hotel</span></li><li><b>el baño</b><span>the bathroom</span></li><li><b>a la izquierda / derecha</b><span>to the left / right</span></li><li><b>todo recto</b><span>straight ahead</span></li></ul>
<h3>Money and shopping</h3><ul class="vocab"><li><b>¿Cuánto cuesta?</b><span>How much does it cost?</span></li><li><b>el dinero</b><span>money</span></li><li><b>barato / caro</b><span>cheap / expensive</span></li><li><b>¿Aceptan tarjeta?</b><span>Do you take cards?</span></li><li><b>la tienda</b><span>the shop</span></li></ul>
<h3>Bigger numbers</h3><p>veinte (20), treinta (30), cuarenta (40), cincuenta (50), cien (100)</p>
<div class="ex"><b>Dialogue</b><p>— ¿Cuánto cuesta la camiseta?<br>— Cuesta veinte dólares.<br>— Es un poco cara. ¿Aceptan tarjeta?<br>— Sí, claro.</p></div>`,
        q: [['How do you ask "How much does it cost?"', ['¿Dónde está?', '¿Cuánto cuesta?', '¿Cómo estás?', '¿Qué hora es?'], 1], ['"La cuenta, por favor" means…', ['The menu, please', 'The bill, please', 'The bathroom, please', 'The hotel, please'], 1], ['"A la izquierda" means…', ['To the right', 'To the left', 'Straight ahead', 'Upstairs'], 1]] },
      { t: 'Feelings, opinions and the future', s: 'Express feelings, share opinions and talk about the future in simple, clear sentences.',
        b: `<h3>Feelings with estar</h3><p>Use <strong>estar</strong> for how you feel right now: <em>estoy, estás, está, estamos, están</em>.</p>
<ul class="vocab"><li><b>Estoy feliz</b><span>I'm happy</span></li><li><b>Estoy triste</b><span>I'm sad</span></li><li><b>Estoy cansado/a</b><span>I'm tired</span></li><li><b>Estoy emocionado/a</b><span>I'm excited</span></li><li><b>Estoy nervioso/a</b><span>I'm nervous</span></li></ul>
<h3>Opinions</h3><ul class="vocab"><li><b>Me gusta…</b><span>I like… (one thing)</span></li><li><b>Me gustan…</b><span>I like… (plural)</span></li><li><b>Creo que…</b><span>I think that…</span></li><li><b>En mi opinión…</b><span>In my opinion…</span></li><li><b>Prefiero…</b><span>I prefer…</span></li></ul>
<h3>The near future: ir + a + verb</h3><p>Use <em>voy, vas, va, vamos, van</em> + <strong>a</strong> + infinitive.</p>
<div class="ex"><p>Voy a estudiar. — I'm going to study.<br>Vamos a viajar a México. — We're going to travel to Mexico.<br>Mañana voy a cocinar. — Tomorrow I'm going to cook.</p></div>
<div class="ex"><b>Put it together</b><p>Estoy emocionado porque mañana voy a ir a la playa. Creo que va a hacer sol. — I'm excited because tomorrow I'm going to the beach. I think it's going to be sunny.</p></div>`,
        q: [['"Estoy cansado" means…', ['I\'m happy', 'I\'m tired', 'I\'m hungry', 'I\'m late'], 1], ['How do you say "I\'m going to study"?', ['Voy a estudiar', 'Estudio ayer', 'Me gusta estudiar', 'Estoy estudiar'], 0], ['Which means "I think that…"?', ['Creo que…', 'Prefiero…', 'Me llamo…', 'Quiero…'], 0]] },
      { t: 'Conclusion', s: 'Congratulations! Review what you learned and keep practising.',
        b: `<p><strong>¡Felicidades!</strong> You can now greet people, introduce yourself, describe your day, order food, ask for directions, shop and talk about how you feel and what you plan to do.</p>
<h3>Keep it going</h3><ul><li>Play the flashcards until you know every card.</li><li>Change your phone's language to Spanish for a week.</li><li>Listen to Spanish music and look up the lyrics.</li><li>Find a practice partner and talk for 5 minutes a day.</li></ul>
<div class="ex"><b>Final challenge</b><p>Write five sentences about yourself: your name, where you live, your daily routine, something you like and something you're going to do this weekend.</p></div>`,
        q: [['"¡Felicidades!" means…', ['Goodbye', 'Congratulations', 'Good luck', 'Please'], 1], ['Which sentence is about the future?', ['Me levanto a las siete', 'Voy a viajar', 'Estoy feliz', 'Me llamo Luis'], 1]] }
    ] }
  ],
  games: [
    { type: 'flash', t: 'Spanish Flashcards', d: 'Flip, say it out loud, repeat.', fl: 'Español', bl: 'English', cards: [['Hola', 'Hello'], ['Gracias', 'Thank you'], ['Por favor', 'Please'], ['Buenos días', 'Good morning'], ['¿Cómo estás?', 'How are you?'], ['Me llamo…', 'My name is…'], ['¿Cuánto cuesta?', 'How much is it?'], ['¿Dónde está el baño?', 'Where is the bathroom?'], ['La cuenta, por favor', 'The bill, please'], ['Estoy feliz', 'I\'m happy'], ['Voy a estudiar', 'I\'m going to study'], ['la playa', 'the beach'], ['el agua', 'the water'], ['Adiós', 'Goodbye']] },
    { type: 'match', t: 'Number Match', d: 'Match each Spanish number to its value.', pairs: [['uno', '1'], ['tres', '3'], ['cinco', '5'], ['siete', '7'], ['diez', '10'], ['veinte', '20'], ['cincuenta', '50'], ['cien', '100']] }
  ]
},

/* ===================== FRENCH ===================== */
{
  id: 'french', cat: 'lang', title: 'French Basics', ages: 'All ages', hello: 'Bonjour !',
  tag: 'Parlez, voyagez, découvrez. Speak, travel, discover.',
  blurb: 'From greetings, numbers and time to family, food, weather, directions, culture and travel, ending with advanced concepts that prepare you for real fluency.',
  units: [
    { t: 'First steps', lessons: [
      { t: 'Introductions, numbers and time', s: 'Greetings, simple introductions, counting and telling the time.',
        b: `<h3>Greetings</h3><ul class="vocab"><li><b>Bonjour</b><span>Hello / good day</span></li><li><b>Bonsoir</b><span>Good evening</span></li><li><b>Salut</b><span>Hi (informal)</span></li><li><b>Comment ça va ?</b><span>How are you?</span></li><li><b>Ça va bien, merci</b><span>I'm fine, thanks</span></li><li><b>Je m'appelle…</b><span>My name is…</span></li><li><b>Enchanté(e)</b><span>Nice to meet you</span></li><li><b>Au revoir</b><span>Goodbye</span></li><li><b>S'il vous plaît</b><span>Please (polite)</span></li><li><b>Merci</b><span>Thank you</span></li></ul>
<div class="tip"><b>Tu or vous?</b><p>Use <em>tu</em> with friends, family and children. Use <em>vous</em> with adults you don't know well, or with more than one person.</p></div>
<h3>Numbers</h3><p>un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix … vingt (20), trente (30), cent (100)</p>
<h3>Telling the time</h3><ul class="vocab"><li><b>Quelle heure est-il ?</b><span>What time is it?</span></li><li><b>Il est trois heures</b><span>It's three o'clock</span></li><li><b>…et demie</b><span>…thirty (half past)</span></li><li><b>…et quart</b><span>…quarter past</span></li><li><b>midi / minuit</b><span>noon / midnight</span></li></ul>`,
        q: [['How do you say "My name is Marie"?', ['Je suis Marie', 'Je m\'appelle Marie', 'J\'ai Marie', 'Bonjour Marie'], 1], ['Which word do you use with an adult you don\'t know?', ['tu', 'vous', 'salut', 'moi'], 1], ['"Il est trois heures et demie" means…', ['It\'s 3:15', 'It\'s 3:30', 'It\'s 3:00', 'It\'s 13:00'], 1]] },
      { t: 'Family, friends, home and work', s: 'Vocabulary and grammar to describe family, friends, home, routines, school and work.',
        b: `<h3>Family</h3><ul class="vocab"><li><b>la mère / le père</b><span>mother / father</span></li><li><b>la sœur / le frère</b><span>sister / brother</span></li><li><b>la grand-mère</b><span>grandmother</span></li><li><b>l'ami / l'amie</b><span>friend</span></li></ul>
<h3>Être and avoir</h3><div class="tbl"><table><thead><tr><th></th><th>être (to be)</th><th>avoir (to have)</th></tr></thead><tbody><tr><td>je / j'</td><td>suis</td><td>ai</td></tr><tr><td>tu</td><td>es</td><td>as</td></tr><tr><td>il / elle</td><td>est</td><td>a</td></tr><tr><td>nous</td><td>sommes</td><td>avons</td></tr><tr><td>vous</td><td>êtes</td><td>avez</td></tr><tr><td>ils / elles</td><td>sont</td><td>ont</td></tr></tbody></table></div>
<div class="ex"><p>J'ai deux frères. — I have two brothers.<br>Ma mère est gentille. — My mother is kind.<br>J'ai quinze ans. — I'm fifteen (literally "I have fifteen years").</p></div>
<h3>Home, school and work</h3><ul class="vocab"><li><b>J'habite à…</b><span>I live in…</span></li><li><b>la maison</b><span>the house</span></li><li><b>l'école</b><span>school</span></li><li><b>Je travaille</b><span>I work</span></li><li><b>J'étudie</b><span>I study</span></li><li><b>le matin / le soir</b><span>morning / evening</span></li></ul>`,
        q: [['"J\'ai deux sœurs" means…', ['I am two sisters', 'I have two sisters', 'I see two sisters', 'I like two sisters'], 1], ['How do you say "I\'m 15" in French?', ['Je suis quinze', 'J\'ai quinze ans', 'Je quinze', 'Il est quinze'], 1], ['Which is "we are"?', ['nous avons', 'nous sommes', 'vous êtes', 'ils sont'], 1]] }
    ] },
    { t: 'Living French', lessons: [
      { t: 'Food, weather, city and directions', s: 'Ordering food with partitive articles, talking about the weather, and asking for directions.',
        b: `<h3>Ordering food</h3><p>French uses <strong>partitive articles</strong> for "some": <strong>du</strong> (masculine), <strong>de la</strong> (feminine), <strong>de l'</strong> (before a vowel), <strong>des</strong> (plural).</p>
<div class="ex"><p>Je voudrais du pain. — I would like some bread.<br>Je prends de la soupe. — I'll have some soup.<br>De l'eau, s'il vous plaît. — Some water, please.</p></div>
<ul class="vocab"><li><b>Je voudrais…</b><span>I would like…</span></li><li><b>L'addition, s'il vous plaît</b><span>The bill, please</span></li><li><b>C'est délicieux</b><span>It's delicious</span></li></ul>
<h3>Weather</h3><ul class="vocab"><li><b>Il fait beau</b><span>It's nice out</span></li><li><b>Il fait chaud / froid</b><span>It's hot / cold</span></li><li><b>Il pleut</b><span>It's raining</span></li><li><b>Il y a du soleil</b><span>It's sunny</span></li><li><b>l'été / l'hiver</b><span>summer / winter</span></li></ul>
<h3>Directions</h3><ul class="vocab"><li><b>Où est… ?</b><span>Where is…?</span></li><li><b>à gauche</b><span>to the left</span></li><li><b>à droite</b><span>to the right</span></li><li><b>tout droit</b><span>straight ahead</span></li><li><b>près de / loin de</b><span>near / far from</span></li></ul>`,
        q: [['"Je voudrais de l\'eau" means…', ['I would like some water', 'I have water', 'Where is the water?', 'The water is cold'], 0], ['"Il pleut" means…', ['It\'s sunny', 'It\'s raining', 'It\'s hot', 'It\'s windy'], 1], ['Which means "straight ahead"?', ['à gauche', 'à droite', 'tout droit', 'près de'], 2]] },
      { t: 'Culture, travel and hobbies', s: 'Hobbies, weekend plans and travel phrases, plus French-speaking culture and customs.',
        b: `<h3>Hobbies</h3><ul class="vocab"><li><b>J'aime…</b><span>I like…</span></li><li><b>jouer au foot</b><span>play football</span></li><li><b>faire du vélo</b><span>go cycling</span></li><li><b>nager</b><span>swim</span></li><li><b>lire</b><span>read</span></li><li><b>écouter de la musique</b><span>listen to music</span></li></ul>
<div class="ex"><p>Ce week-end, je vais nager avec mes amis. — This weekend, I'm going to swim with my friends.</p></div>
<h3>Travel</h3><ul class="vocab"><li><b>l'aéroport</b><span>the airport</span></li><li><b>le billet</b><span>the ticket</span></li><li><b>le passeport</b><span>the passport</span></li><li><b>J'ai une réservation</b><span>I have a reservation</span></li><li><b>la chambre</b><span>the room</span></li></ul>
<h3>The French-speaking world</h3><p>About 300 million people speak French across five continents: France, Canada (Québec), Belgium, Switzerland, much of West and Central Africa, and in the Caribbean in <strong>Haiti</strong>, Martinique and Guadeloupe.</p>
<h3>Customs</h3><ul><li>Always say <em>Bonjour</em> when you walk into a shop.</li><li>Friends often greet with <em>la bise</em>, a light kiss on each cheek.</li><li>Meals are unhurried, and lunch is often the main meal.</li></ul>`,
        q: [['"Faire du vélo" means…', ['To swim', 'To go cycling', 'To read', 'To cook'], 1], ['Which Caribbean country has French as an official language?', ['Jamaica', 'Haiti', 'Cuba', 'The Bahamas'], 1], ['What should you say when you walk into a shop in France?', ['Au revoir', 'Bonjour', 'Merci', 'Rien'], 1]] },
      { t: 'Advanced French concepts', s: 'Health, technology and social issues, plus reflexive verbs, pronouns, the subjunctive and past and future tenses.',
        b: `<h3>Reflexive verbs</h3><p>The action is done to yourself: <em>se lever</em> (to get up) → <strong>je me lève</strong>, tu te lèves, il se lève.</p>
<h3>Object pronouns</h3><p>Replace a noun to avoid repeating it. The pronoun goes <strong>before</strong> the verb: <em>Je vois Marie</em> → <strong>Je la vois</strong> (I see her).</p>
<h3>The past: passé composé</h3><p><strong>avoir</strong> or <strong>être</strong> + past participle.</p><div class="ex"><p>J'ai mangé. — I ate.<br>Nous avons fini. — We finished.<br>Elle est allée à Paris. — She went to Paris.</p></div>
<h3>The future</h3><p>Near future: <strong>aller + infinitive</strong> (je vais partir). Simple future: add endings to the infinitive (je parler<strong>ai</strong>, tu parler<strong>as</strong>, il parler<strong>a</strong>).</p>
<h3>The subjunctive</h3><p>Used after expressions of necessity, wishes and emotions: <em>Il faut que tu <strong>sois</strong> à l'heure</em> (You must be on time).</p>
<h3>Giving advice and opinions</h3><ul class="vocab"><li><b>Tu devrais…</b><span>You should…</span></li><li><b>À mon avis…</b><span>In my opinion…</span></li><li><b>Je pense que…</b><span>I think that…</span></li><li><b>Je ne suis pas d'accord</b><span>I don't agree</span></li></ul>`,
        q: [['"J\'ai mangé" means…', ['I eat', 'I ate', 'I will eat', 'I am eating'], 1], ['"Je la vois" means…', ['I see her', 'I see you', 'I am her', 'I go there'], 0], ['"Tu devrais" is used to…', ['Give advice', 'Say goodbye', 'Count', 'Tell the time'], 0]] },
      { t: 'Conclusion', s: 'Félicitations! Review and keep practising.',
        b: `<p><strong>Félicitations !</strong> You've gone from <em>bonjour</em> to the subjunctive. You can introduce yourself, talk about family, order food, ask directions, plan a trip and share your opinions.</p>
<h3>Keep going</h3><ul><li>Play the French flashcards until you know them all.</li><li>Watch a French or Haitian film with French subtitles.</li><li>Keep a five-sentence diary in French each day.</li><li>Practise with someone who speaks French, maybe a classmate or neighbour.</li></ul>`,
        q: [['"Félicitations" means…', ['Goodbye', 'Congratulations', 'Thank you', 'Please'], 1], ['Which is in the past tense?', ['Je vais partir', 'J\'ai fini', 'Je parlerai', 'Je finis'], 1]] }
    ] }
  ],
  games: [
    { type: 'flash', t: 'French Flashcards', d: 'Flip, say it out loud, repeat.', fl: 'Français', bl: 'English', cards: [['Bonjour', 'Hello'], ['Merci', 'Thank you'], ['S\'il vous plaît', 'Please'], ['Comment ça va ?', 'How are you?'], ['Je m\'appelle…', 'My name is…'], ['Au revoir', 'Goodbye'], ['Quelle heure est-il ?', 'What time is it?'], ['Il fait beau', 'It\'s nice out'], ['Je voudrais…', 'I would like…'], ['L\'addition, s\'il vous plaît', 'The bill, please'], ['à gauche', 'to the left'], ['tout droit', 'straight ahead'], ['J\'ai mangé', 'I ate'], ['À mon avis', 'In my opinion']] },
    { type: 'match', t: 'Famille Match', d: 'Match the French to the English.', pairs: [['la mère', 'mother'], ['le père', 'father'], ['la sœur', 'sister'], ['le frère', 'brother'], ['l\'ami', 'friend'], ['la maison', 'house'], ['l\'école', 'school'], ['le billet', 'ticket']] }
  ]
},

/* ===================== ASL ===================== */
{
  id: 'asl', cat: 'lang', title: 'American Sign Language Basics', ages: 'All ages', hello: 'HELLO',
  tag: 'Talk with your hands, listen with your eyes.',
  blurb: 'The ASL alphabet and fingerspelling, signs for people, family and greetings, daily life, hobbies, school and work, and how facial expression and Deaf culture shape the language.',
  units: [
    { t: 'First signs', lessons: [
      { t: 'Welcome: ABCs and fingerspelling', s: 'The ASL alphabet and how to fingerspell letters and names.',
        b: `<p><strong>American Sign Language (ASL)</strong> is a complete language with its own grammar, used by Deaf communities across the United States and Canada. It is not English on the hands.</p>
<h3>Fingerspelling</h3><p>You spell names, places and words that have no sign one letter at a time with your <strong>dominant hand</strong>, held at shoulder height with your palm facing out.</p>
<div class="tbl"><table><thead><tr><th>Letter</th><th>Handshape</th></tr></thead><tbody>
<tr><td>A</td><td>Fist, thumb resting against the side of the index finger</td></tr>
<tr><td>B</td><td>Flat hand, fingers together pointing up, thumb folded across the palm</td></tr>
<tr><td>C</td><td>Hand curved like the letter C</td></tr>
<tr><td>D</td><td>Index finger up; other fingertips touch the thumb, making a circle</td></tr>
<tr><td>E</td><td>Fingertips curled down to rest on the thumb</td></tr>
<tr><td>I</td><td>Fist with the pinky up</td></tr>
<tr><td>L</td><td>Thumb and index finger make an L</td></tr>
<tr><td>O</td><td>All fingertips touch the thumb, making an O</td></tr>
<tr><td>S</td><td>Fist with the thumb across the front of the fingers</td></tr>
<tr><td>V</td><td>Index and middle fingers up in a V</td></tr>
<tr><td>Y</td><td>Thumb and pinky out, other fingers folded</td></tr></tbody></table></div>
<p>The flashcard game covers all 26 letters.</p>
<div class="tip"><b>Fingerspelling tips</b><ul><li>Keep your hand steady. Don't bounce it with each letter.</li><li>For double letters (like the L in "Bella"), slide the letter slightly to the side.</li><li>Aim for smooth, readable shapes rather than speed.</li><li>Practise in a mirror.</li></ul></div>`,
        q: [['Which hand do you fingerspell with?', ['Always the left', 'Your dominant hand', 'Both hands', 'It doesn\'t matter'], 1], ['Which letter is a fist with the pinky up?', ['A', 'I', 'S', 'Y'], 1], ['ASL is…', ['English on the hands', 'A complete language with its own grammar', 'Only fingerspelling', 'The same worldwide'], 1]] },
      { t: 'People, family and greetings', s: 'Signs to introduce people, family members and common greetings.',
        b: `<h3>Greetings</h3><ul class="vocab"><li><b>HELLO</b><span>Flat hand starts at your forehead and moves out, like a salute</span></li><li><b>THANK YOU</b><span>Fingertips of a flat hand touch your chin, then move forward and down</span></li><li><b>PLEASE</b><span>Flat hand circles on your chest</span></li><li><b>SORRY</b><span>A-hand (fist) circles on your chest</span></li><li><b>YES</b><span>S-hand (fist) nods up and down like a head</span></li><li><b>NO</b><span>Index and middle fingers snap closed onto the thumb</span></li><li><b>NAME</b><span>Both H-hands (two fingers out); tap the top pair on the bottom pair twice</span></li><li><b>NICE TO MEET YOU</b><span>NICE (one flat palm slides across the other) + MEET (index fingers come together) + YOU (point)</span></li></ul>
<h3>Family</h3><p>Female signs are made near the <strong>chin</strong>. Male signs are made near the <strong>forehead</strong>.</p>
<ul class="vocab"><li><b>MOTHER</b><span>Open 5-hand, tap your thumb on your chin</span></li><li><b>FATHER</b><span>Open 5-hand, tap your thumb on your forehead</span></li><li><b>FRIEND</b><span>Hook index fingers together, then swap and hook again</span></li></ul>
<div class="ex"><b>Introduce yourself</b><p>HELLO. MY NAME (fingerspell your name). NICE MEET YOU.</p></div>`,
        q: [['Where are female family signs usually made?', ['Near the forehead', 'Near the chin', 'On the chest', 'Near the ear'], 1], ['How is THANK YOU signed?', ['Fist nodding', 'Flat hand from chin moving forward', 'Hand circling on the chest', 'Waving'], 1], ['How is FATHER signed?', ['Thumb of a 5-hand taps the forehead', 'Thumb taps the chin', 'Fist on chest', 'Hooked fingers'], 0]] }
    ] },
    { t: 'Everyday conversation', lessons: [
      { t: 'Daily life, hobbies, school and work', s: 'Signs and phrases for daily routines, interests and responsibilities.',
        b: `<h3>Daily life</h3><ul class="vocab"><li><b>EAT</b><span>Flat O-hand taps your mouth</span></li><li><b>DRINK</b><span>C-hand tips toward your mouth like a cup</span></li><li><b>SLEEP</b><span>Open hand slides down over your face and closes</span></li><li><b>HOME</b><span>Flat O-hand touches your cheek near the mouth, then near the ear</span></li><li><b>WATER</b><span>W-hand taps your chin</span></li></ul>
<h3>School and work</h3><ul class="vocab"><li><b>SCHOOL</b><span>Clap your hands together twice</span></li><li><b>WORK</b><span>S-hand taps the back of your other S-hand wrist twice</span></li><li><b>LEARN</b><span>Take "knowledge" from a flat palm and bring it to your forehead</span></li><li><b>TEACHER</b><span>TEACH + the person sign (flat hands move down the sides of your body)</span></li></ul>
<h3>Hobbies</h3><ul class="vocab"><li><b>LIKE</b><span>Thumb and middle finger pull away from your chest and close</span></li><li><b>PLAY</b><span>Y-hands shake from the wrist</span></li><li><b>MUSIC</b><span>Flat hand swings back and forth over your other forearm</span></li></ul>
<h3>Word order</h3><p>ASL often puts the <strong>topic first</strong>: "SCHOOL, I GO" or "MUSIC, I LIKE". Time words usually come at the start: "TOMORROW I WORK".</p>`,
        q: [['How is SCHOOL signed?', ['Clap twice', 'Tap the chin', 'Wave', 'Point up'], 0], ['Where do time words usually go in an ASL sentence?', ['At the end', 'At the start', 'In the middle', 'They are never used'], 1], ['Which sign uses a C-hand tipped toward the mouth?', ['EAT', 'DRINK', 'SLEEP', 'HOME'], 1]] },
      { t: 'Emotions, descriptions and culture', s: 'How facial expressions, body language and Deaf culture shape communication in ASL.',
        b: `<h3>Your face is grammar</h3><p>In ASL, facial expressions are not just feelings. They are part of the grammar.</p>
<ul><li><strong>Yes/no questions:</strong> raise your eyebrows. ("YOU HUNGRY?")</li><li><strong>Wh- questions</strong> (who, what, where, why): furrow your eyebrows. ("WHERE YOU LIVE?")</li><li><strong>Size and intensity:</strong> puff your cheeks for something big, purse your lips for something small or thin.</li></ul>
<h3>Emotions</h3><ul class="vocab"><li><b>HAPPY</b><span>Flat hand brushes up your chest twice, with a happy face</span></li><li><b>SAD</b><span>Open hands move down in front of your face, with a sad face</span></li><li><b>LOVE</b><span>Cross your arms over your chest</span></li><li><b>ANGRY</b><span>Clawed hand pulls away from your face</span></li></ul>
<h3>Deaf culture</h3><ul><li>Many people use <strong>Deaf</strong> with a capital D to describe belonging to a community with its own language and culture.</li><li>To get someone's attention, wave in their line of sight, tap their shoulder, or flick the lights.</li><li>Keep eye contact while signing. Looking away can seem rude.</li><li>Storytelling is a cherished tradition. Signers use space, role shifting and expression to bring stories to life.</li><li>Ask Deaf people how they prefer to communicate, and never pretend to understand.</li></ul>`,
        q: [['What do raised eyebrows show in ASL?', ['A wh- question', 'A yes/no question', 'Anger', 'The end of a story'], 1], ['How should you get a Deaf person\'s attention?', ['Shout', 'Wave in their line of sight or tap their shoulder', 'Throw something', 'Wait silently behind them'], 1], ['How is LOVE signed?', ['Clap twice', 'Cross your arms over your chest', 'Thumb on chin', 'Point up'], 1]] },
      { t: 'Conclusion', s: 'Congratulations! Keep signing.',
        b: `<p><strong>Congratulations!</strong> You can fingerspell, greet people, introduce your family, talk about your day and use your face as part of the grammar.</p>
<h3>Keep practising</h3><ul><li>Fingerspell street signs and shop names as you walk by.</li><li>Use the flashcards until you know the whole alphabet.</li><li>Watch videos made by Deaf signers. Learning from native signers is the best way to improve.</li><li>Look for Deaf community events and classes near you.</li></ul>`,
        q: [['Who is best to learn ASL from?', ['Only books', 'Deaf native signers', 'Nobody', 'Text messages'], 1], ['What is a good daily practice?', ['Fingerspelling signs you pass', 'Avoiding practice', 'Only reading about ASL', 'Shouting'], 0]] }
    ] }
  ],
  games: [
    { type: 'flash', t: 'ASL Alphabet', d: 'Read the handshape, form it with your hand, then check the letter.', fl: 'Handshape', bl: 'Letter', cards: [
      ['Fist, thumb resting on the side of the index finger', 'A'], ['Flat hand, fingers up together, thumb folded across palm', 'B'], ['Hand curved into a C shape', 'C'], ['Index up, other fingertips touch the thumb', 'D'], ['Fingertips curled down onto the thumb', 'E'], ['Thumb and index touch in a circle, other three fingers up', 'F'], ['Index and thumb point sideways, parallel', 'G'], ['Index and middle fingers point sideways together', 'H'], ['Fist with the pinky up', 'I'], ['Pinky up, draw a J in the air', 'J'], ['Index and middle up in a V, thumb between them', 'K'], ['Thumb and index make an L', 'L'], ['Thumb tucked under the first three fingers', 'M'], ['Thumb tucked under the first two fingers', 'N'], ['All fingertips meet the thumb in an O', 'O'], ['Like K, but pointing down', 'P'], ['Like G, but pointing down', 'Q'], ['Index and middle fingers crossed', 'R'], ['Fist, thumb across the front of the fingers', 'S'], ['Thumb tucked between index and middle fingers', 'T'], ['Index and middle fingers up together', 'U'], ['Index and middle fingers up in a V', 'V'], ['Index, middle and ring fingers up', 'W'], ['Index finger bent like a hook', 'X'], ['Thumb and pinky out', 'Y'], ['Index finger draws a Z in the air', 'Z']
    ] },
    { type: 'match', t: 'Sign Match', d: 'Match each sign to how it\'s made.', pairs: [['HELLO', 'Salute out from the forehead'], ['THANK YOU', 'Flat hand from chin, forward'], ['MOTHER', 'Thumb of 5-hand taps chin'], ['FATHER', 'Thumb of 5-hand taps forehead'], ['SCHOOL', 'Clap twice'], ['LOVE', 'Arms crossed over chest'], ['PLEASE', 'Flat hand circles on chest'], ['FRIEND', 'Hook index fingers, swap, hook again']] }
  ]
}
);
