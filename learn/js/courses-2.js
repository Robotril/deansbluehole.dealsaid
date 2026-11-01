/* Course content, part 2: Investing, Small Business, Storytelling, Cinematography, Health Care, IT */
window.MGT_COURSES = window.MGT_COURSES || [];
window.MGT_COURSES.push(

/* ===================== INVESTING ===================== */
{
  id: 'investing', cat: 'money', title: 'Investing 101', ages: 'Teens & adults',
  tag: 'Make your money work harder than you do.',
  blurb: 'Why starting early matters, then the main ways to invest: stocks, bonds, real estate, alternatives, passive and automated investing, and franchising.',
  note: 'This course is general education, not financial advice. Every investment carries risk, and you can lose money. Speak to a licensed adviser before making big decisions.',
  units: [
    { t: 'Getting started', lessons: [
      { t: 'Early investing', s: 'Investing is like planting a seed: starting early gives it more time to grow.',
        b: `<p>Investing means putting money into something you expect to grow in value or pay you income over time.</p>
<h3>The magic of compound interest</h3><p>When your money earns a return, and then that return earns a return too, you get <strong>compound growth</strong>.</p>
<div class="ex"><b>Two savers</b><p>Ana invests $100 a month from age 20 to 30, then stops. Ben invests $100 a month from 30 to 60. At a 7% average yearly return, Ana ends up with more at 60 (about $140,000 vs $122,000) despite investing a third as much, because her money had longer to compound.</p></div>
<h3>The rule of 72</h3><p>Divide 72 by your yearly return to estimate how many years it takes to double your money. At 8%, 72 ÷ 8 = <strong>9 years</strong>.</p>
<h3>Before you invest</h3><ol><li>Set a goal: what is the money for, and when will you need it?</li><li>Build an <strong>emergency fund</strong> of 3–6 months of expenses.</li><li>Pay off high-interest debt like credit cards first.</li><li>Only invest money you won't need soon.</li></ol>
<div class="tip"><b>Risk and return</b><p>Higher possible returns usually come with higher risk. The longer you can wait, the more ups and downs you can ride out.</p></div>`,
        q: [['Using the rule of 72, how long does money take to double at 6%?', ['6 years', '12 years', '72 years', '18 years'], 1, '72 ÷ 6 = 12.'], ['What should you usually build before investing?', ['A car collection', 'An emergency fund', 'A big credit card balance', 'Nothing'], 1], ['Why does starting early help so much?', ['Banks pay young people more', 'Compound growth has more time to work', 'Taxes are lower', 'It doesn\'t help'], 1]] },
      { t: 'Stock market investments', s: 'How to buy, sell and manage a portfolio of stocks.',
        b: `<p>A <strong>stock</strong> (or share) is a small piece of ownership in a company. If the company grows, your share can grow in value. Some companies also pay part of their profit to shareholders as <strong>dividends</strong>.</p>
<h3>How to buy and sell</h3><ul><li>Stocks trade on <strong>exchanges</strong>, like the New York Stock Exchange or the Bahamas International Securities Exchange (BISX).</li><li>You buy and sell through a licensed <strong>broker</strong>.</li><li>A <strong>market order</strong> buys right away at the current price. A <strong>limit order</strong> buys only at your chosen price or better.</li></ul>
<h3>Managing your portfolio</h3><ul><li><strong>Diversify:</strong> own many companies across different industries so one bad result can't sink you.</li><li><strong>Index funds</strong> own hundreds of companies in a single investment.</li><li>Think long term. Prices rise and fall daily, sometimes sharply.</li><li>Avoid buying on hype or panic selling in a dip.</li></ul>
<div class="warn"><b>Risk</b><p>A single stock can fall to zero. Never invest money you can't afford to lose.</p></div>`,
        q: [['What is a stock?', ['A loan to a company', 'A small piece of ownership in a company', 'A savings account', 'A type of bond'], 1], ['What is diversification?', ['Putting everything into one company', 'Spreading money across many investments', 'Selling everything', 'Only buying gold'], 1], ['A dividend is…', ['A fee you pay', 'Part of a company\'s profit paid to shareholders', 'A type of tax', 'A broker'], 1]] }
    ] },
    { t: 'Steady income and property', lessons: [
      { t: 'Fixed income investments', s: 'Bonds and other debt securities that provide steady income with lower risk than stocks.',
        b: `<p>When you buy a <strong>bond</strong>, you are lending money to a government or company. In return they pay you interest and give your money back at the end.</p>
<ul class="vocab"><li><b>Face value</b><span>The amount you get back at the end</span></li><li><b>Coupon</b><span>The interest rate paid, usually twice a year</span></li><li><b>Maturity</b><span>The date the loan ends</span></li><li><b>Issuer</b><span>Who borrowed: a government or company</span></li></ul>
<div class="ex"><b>Example</b><p>A $1,000 bond with a 5% coupon pays $50 a year. At maturity you get your $1,000 back.</p></div>
<h3>Types</h3><ul><li><strong>Government bonds:</strong> generally lower risk.</li><li><strong>Corporate bonds:</strong> higher interest, more risk.</li><li><strong>Certificates of deposit (CDs) / fixed deposits:</strong> bank savings locked for a set time.</li></ul>
<div class="tip"><b>Rates and prices</b><p>When interest rates rise, existing bond prices usually fall, and when rates fall, bond prices rise.</p></div>`,
        q: [['When you buy a bond, you are…', ['Owning part of a company', 'Lending money', 'Buying property', 'Gambling'], 1], ['A $2,000 bond pays a 4% coupon. How much interest per year?', ['$40', '$80', '$800', '$4'], 1], ['When interest rates rise, existing bond prices usually…', ['Rise', 'Fall', 'Stay the same', 'Double'], 1]] },
      { t: 'Real estate investments', s: 'Fundamental concepts and strategies for investing in property.',
        b: `<p>Real estate can make money in two ways: <strong>rental income</strong> and <strong>appreciation</strong> (the property rising in value).</p>
<h3>Ways to invest</h3><ul><li><strong>Rental property:</strong> buy a home or apartment and rent it out.</li><li><strong>Fix and flip:</strong> buy, renovate and sell for a profit.</li><li><strong>Vacation rentals:</strong> short-term stays, popular in tourist areas.</li><li><strong>REITs:</strong> Real Estate Investment Trusts let you own a slice of many properties without buying a building.</li></ul>
<h3>Know the costs</h3><p>Mortgage interest, property tax, insurance (including storm cover), repairs, maintenance, empty months and management fees all eat into profit.</p>
<div class="ex"><b>Simple check</b><p>Rent $1,800 a month = $21,600 a year. Costs $14,000 a year. Profit before tax: $7,600.</p></div>
<div class="tip"><b>Location, location, location</b><p>Nearby jobs, schools, beaches and safety drive both rent and value.</p></div>`,
        q: [['What are the two main ways real estate makes money?', ['Dividends and coupons', 'Rental income and appreciation', 'Interest and fees', 'Taxes and insurance'], 1], ['What is a REIT?', ['A type of mortgage', 'A way to own a share of many properties', 'A building inspector', 'A rental contract'], 1], ['Which is a cost of owning rental property?', ['Repairs', 'Dividends', 'Coupons', 'Royalties'], 0]] }
    ] },
    { t: 'Beyond the basics', lessons: [
      { t: 'Alternative investments', s: 'Opportunities beyond traditional stocks and bonds.',
        b: `<p><strong>Alternative investments</strong> are anything outside stocks, bonds and cash.</p>
<ul><li><strong>Commodities:</strong> gold, silver, oil, crops. Gold is often seen as a store of value in uncertain times.</li><li><strong>Cryptocurrency:</strong> digital currencies like Bitcoin. Extremely volatile, and scams are common.</li><li><strong>Private businesses:</strong> investing in a friend's or local company. Can pay off well, but it's hard to sell your share.</li><li><strong>Collectibles:</strong> art, coins, rare sneakers. Value depends on what buyers will pay.</li></ul>
<h3>Things to weigh</h3><ul><li><strong>Liquidity:</strong> how quickly can you turn it back into cash?</li><li><strong>Fees and storage costs.</strong></li><li><strong>Transparency:</strong> can you check what it's really worth?</li></ul>
<div class="warn"><b>Red flags</b><p>Guaranteed high returns, pressure to act fast, or rewards for recruiting friends are signs of a scam.</p></div>`,
        q: [['Which is an alternative investment?', ['A savings account', 'Gold', 'A government bond', 'An index fund'], 1], ['What does "liquidity" mean?', ['How wet an investment is', 'How quickly you can turn it into cash', 'Its interest rate', 'Its colour'], 1], ['Which is a red flag for a scam?', ['Clear fees', 'A guaranteed high return', 'A licensed broker', 'Published reports'], 1]] },
      { t: 'Passive and automated investments', s: 'Growing your wealth with minimal effort while still making informed choices.',
        b: `<p><strong>Passive investing</strong> means buying the whole market instead of trying to beat it.</p>
<ul class="vocab"><li><b>Index fund</b><span>Owns every company in an index, like the S&amp;P 500</span></li><li><b>ETF</b><span>An exchange-traded fund, often an index fund you can trade like a stock</span></li><li><b>Robo-advisor</b><span>An app that builds and rebalances a portfolio for you</span></li><li><b>Expense ratio</b><span>The yearly fee a fund charges</span></li></ul>
<h3>Dollar-cost averaging</h3><p>Invest the same amount on a schedule, say $50 every payday. When prices are low you automatically buy more shares, and when they're high you buy fewer.</p>
<h3>Automate it</h3><ul><li>Set up an automatic transfer on payday.</li><li>Reinvest dividends automatically.</li><li>Check in once or twice a year, not every day.</li></ul>
<div class="tip"><b>Why it works</b><p>Low fees and broad diversification mean you keep more of the market's return. Over long periods, most actively managed funds fail to beat the index after fees.</p></div>`,
        q: [['What does an index fund do?', ['Picks a few hot stocks', 'Owns every company in an index', 'Only holds cash', 'Lends to banks'], 1], ['What is dollar-cost averaging?', ['Investing a fixed amount on a regular schedule', 'Investing all at once', 'Converting dollars to euros', 'Only buying when prices rise'], 0], ['Why are low fees important?', ['They aren\'t', 'You keep more of your returns', 'They make funds riskier', 'They raise taxes'], 1]] },
      { t: 'Franchising', s: 'Running your own business under the brand and support of a larger company.',
        b: `<p>A <strong>franchise</strong> lets you open a business using another company's name, products and system.</p>
<ul class="vocab"><li><b>Franchisor</b><span>The parent company that owns the brand</span></li><li><b>Franchisee</b><span>The person who buys the right to run a location</span></li><li><b>Franchise fee</b><span>The up-front cost to join</span></li><li><b>Royalty</b><span>An ongoing percentage of sales paid to the franchisor</span></li></ul>
<h3>Pros</h3><ul><li>A known brand that already has customers</li><li>Training, supplies and a proven way of doing things</li><li>Often easier to get a loan</li></ul>
<h3>Cons</h3><ul><li>Big start-up costs</li><li>Royalties take a cut of every sale</li><li>Strict rules: less creative freedom</li></ul>
<div class="tip"><b>Do your homework</b><p>Read the franchise agreement carefully, talk to current owners and have a lawyer review it before signing.</p></div>`,
        q: [['Who is the franchisee?', ['The parent company', 'The person who runs a location', 'The bank', 'A customer'], 1], ['What is a royalty?', ['A crown', 'An ongoing percentage of sales paid to the franchisor', 'A one-time gift', 'A tax refund'], 1], ['Which is a downside of franchising?', ['A known brand', 'Training', 'Less creative freedom', 'A proven system'], 2]] }
    ] }
  ],
  games: [
    { type: 'calc', t: 'Compound Growth Calculator', d: 'See how time, monthly savings and returns grow your money.' },
    { type: 'match', t: 'Money Words', d: 'Match each investing term to its meaning.', pairs: [['Stock', 'A share of ownership in a company'], ['Bond', 'A loan you make to a government or company'], ['Dividend', 'Profit paid to shareholders'], ['Diversify', 'Spread money across many investments'], ['Index fund', 'Owns every company in a market index'], ['Royalty', 'A share of sales paid to a franchisor'], ['Liquidity', 'How fast something becomes cash'], ['REIT', 'A fund that owns many properties']] }
  ]
},

/* ===================== SMALL BUSINESS ===================== */
{
  id: 'business', cat: 'money', title: 'Small Business Building', ages: 'Teens & adults',
  tag: 'Turn that side hustle into an empire.',
  blurb: 'From the first idea to a growing business: generating ideas, raising money, marketing, the elevator pitch, selling and networking.',
  units: [
    { t: 'From idea to funding', lessons: [
      { t: 'Generating ideas', s: 'Strategies to brainstorm and develop ideas for your own small business.',
        b: `<p>Great businesses solve real problems. Start by looking around you.</p>
<h3>Where ideas come from</h3><ul><li><strong>Problems you notice:</strong> What frustrates you or people you know?</li><li><strong>Skills you have:</strong> baking, hair, fixing phones, tutoring, design.</li><li><strong>Local needs:</strong> What do people on your island have to wait for or travel for?</li><li><strong>Trends:</strong> What's growing? Eco-tourism, delivery, online services.</li></ul>
<h3>Brainstorm fast</h3><p>Set a timer for 10 minutes and write down 20 ideas without judging. Then choose the three you like best.</p>
<h3>Test before you invest</h3><ol><li>Talk to 10 possible customers. Would they pay? How much?</li><li>Make a small version: sell a few batches or offer the service to a few people.</li><li>Learn and improve.</li></ol>
<div class="tip"><b>The question that matters</b><p>Who is my customer, what problem do I solve for them, and why would they choose me?</p></div>`,
        q: [['What do great businesses usually do?', ['Copy every competitor', 'Solve real problems', 'Avoid customers', 'Spend big on day one'], 1], ['What is a good way to test an idea?', ['Spend all your savings first', 'Talk to possible customers and sell a small version', 'Keep it secret', 'Wait for years'], 1], ['Which is a useful source of ideas?', ['Problems you notice', 'Random guesses only', 'Ignoring your skills', 'None of these'], 0]] },
      { t: 'Fundraising', s: 'Ways to fund a small business, with creative and practical approaches.',
        b: `<p>Most businesses need some money to start. Here are the main options, from simplest to most complex.</p>
<div class="tbl"><table><thead><tr><th>Source</th><th>How it works</th><th>Watch out for</th></tr></thead><tbody>
<tr><td>Bootstrapping</td><td>Use your own savings and early sales</td><td>Growth can be slow</td></tr>
<tr><td>Pre-sales</td><td>Customers pay before you deliver</td><td>You must deliver on time</td></tr>
<tr><td>Friends and family</td><td>Loans or gifts from people you know</td><td>Put it in writing to protect relationships</td></tr>
<tr><td>Crowdfunding</td><td>Many people give small amounts online</td><td>Needs a strong story and promotion</td></tr>
<tr><td>Grants and competitions</td><td>Free money from government or organisations</td><td>Competitive applications</td></tr>
<tr><td>Bank loans</td><td>Borrow and repay with interest</td><td>You owe it even if the business fails</td></tr>
<tr><td>Investors</td><td>Money in exchange for ownership (equity)</td><td>You give up part of your company</td></tr></tbody></table></div>
<div class="tip"><b>Know your numbers</b><p>Before asking anyone for money, know what you need, what it's for and how it gets paid back.</p></div>`,
        q: [['What is bootstrapping?', ['Borrowing from a bank', 'Funding the business with your own money and sales', 'Selling shares', 'Getting a grant'], 1], ['What do investors usually want in return?', ['Nothing', 'Equity, meaning part ownership', 'Free products forever', 'A thank-you card'], 1], ['Why put a family loan in writing?', ['It\'s required by every bank', 'To protect the relationship with clear terms', 'To make it bigger', 'It isn\'t needed'], 1]] }
    ] },
    { t: 'Getting the word out', lessons: [
      { t: 'Marketing a product', s: 'Promoting and selling your product by understanding your target audience.',
        b: `<h3>Know your target audience</h3><p>Describe your ideal customer: age, location, interests and what they worry about. You can't market to "everyone".</p>
<h3>The 4 Ps</h3><ul class="vocab"><li><b>Product</b><span>What you sell and what makes it special</span></li><li><b>Price</b><span>What it costs and how that compares</span></li><li><b>Place</b><span>Where and how customers can buy it</span></li><li><b>Promotion</b><span>How people hear about it</span></li></ul>
<h3>Low-cost promotion</h3><ul><li>Social media: post useful, real content regularly. Show behind-the-scenes.</li><li>Word of mouth: ask happy customers for reviews and referrals.</li><li>Partnerships: team up with businesses that serve the same customers.</li><li>Local events, markets and community boards.</li></ul>
<div class="tip"><b>Benefits beat features</b><p>"Waterproof phone case" is a feature. "Take photos at the beach without worry" is a benefit. Lead with the benefit.</p></div>`,
        q: [['Which is one of the 4 Ps?', ['Profit', 'Place', 'Payroll', 'Partners'], 1], ['Why define a target audience?', ['To ignore other people', 'So your marketing speaks clearly to the right people', 'It\'s required by law', 'To raise prices'], 1], ['Which is a benefit, not a feature?', ['12-hour battery', 'Stay connected all day without charging', 'Aluminium body', '64 GB storage'], 1]] },
      { t: 'The elevator pitch', s: 'A short, compelling pitch that explains your idea in under a minute.',
        b: `<p>An <strong>elevator pitch</strong> is a 30–60 second summary of your business, short enough to share during an elevator ride.</p>
<h3>The structure</h3><ol><li><strong>Hook:</strong> a question or striking fact.</li><li><strong>Problem:</strong> what your customer struggles with.</li><li><strong>Solution:</strong> what you offer.</li><li><strong>Proof:</strong> why it works: sales, customers, results.</li><li><strong>Ask:</strong> what you want next: a meeting, an order, an investment.</li></ol>
<div class="ex"><b>Example</b><p>"Ever had your phone die halfway through a long day at the beach? Visitors to our island do every day. I rent solar-powered phone lockers at three beaches. In two months we've had 600 rentals and five-star reviews. I'm looking for a partner hotel to add our next location. Could we talk next week?"</p></div>
<div class="tip"><b>Practise out loud</b><p>Time yourself. Cut every word you don't need. Sound like a person, not an advert.</p></div>`,
        q: [['How long is an elevator pitch?', ['10 minutes', '30–60 seconds', 'One hour', '5 seconds'], 1], ['What comes at the end of a pitch?', ['The hook', 'The ask', 'The problem', 'Your life story'], 1], ['What is the "proof" part?', ['Evidence it works, like sales or results', 'A spelling test', 'Your address', 'The price'], 0]] }
    ] },
    { t: 'Selling and growing', lessons: [
      { t: 'Becoming a salesperson', s: 'Sales techniques, persuasive communication and building customer relationships.',
        b: `<p>Good selling isn't pushing. It's <strong>helping people decide</strong>.</p>
<h3>Listen first</h3><p>Ask open questions: "What are you looking for?" "What matters most to you?" Then listen more than you talk.</p>
<h3>Match benefits to needs</h3><p>Once you know what the customer wants, show how your product delivers it.</p>
<h3>Handle objections</h3><p>Objections are questions in disguise. Acknowledge, ask, answer:</p>
<div class="ex"><p><em>"It's too expensive."</em><br>"I understand. What are you comparing it to?" ... "This one lasts twice as long, so it costs less per year."</p></div>
<h3>Close and follow up</h3><ul><li>Ask for the sale directly: "Would you like to order today?"</li><li>Follow up with a thank-you and check they're happy.</li><li>Keep in touch. Repeat customers are the cheapest to win.</li></ul>`,
        q: [['What should you do first in a sale?', ['Talk non-stop', 'Ask questions and listen', 'Lower the price', 'Leave'], 1], ['An objection is often…', ['A reason to walk away', 'A question in disguise', 'Rude', 'Illegal'], 1], ['Why follow up after a sale?', ['To build a relationship and win repeat business', 'To ask for more money', 'It isn\'t useful', 'To complain'], 0]] },
      { t: 'Networking and expansion', s: 'Connecting with others and broadening your reach to grow your business.',
        b: `<h3>Networking</h3><ul><li>Join a chamber of commerce, business group or community organisation.</li><li>Go to markets, fairs and industry events. Bring cards or a QR code.</li><li>Give before you ask: share contacts, advice and referrals.</li><li>Follow up within 48 hours of meeting someone.</li></ul>
<h3>Ways to grow</h3><ul><li><strong>New customers:</strong> reach a new area or audience.</li><li><strong>New products:</strong> sell more to the customers you already have.</li><li><strong>New channels:</strong> add online sales or wholesale.</li><li><strong>Partnerships:</strong> team up with complementary businesses.</li></ul>
<h3>Grow carefully</h3><p>Expansion costs money. Make sure your current business is profitable and your systems are written down before hiring or opening a second location.</p>
<div class="tip"><b>Your first hire</b><p>Hire for attitude and train for skill. Write clear instructions so quality stays the same when you're not there.</p></div>`,
        q: [['What is a good networking habit?', ['Only take, never give', 'Follow up within 48 hours', 'Avoid events', 'Never share contacts'], 1], ['Before expanding, you should make sure…', ['Your business is profitable and your systems are written down', 'You have quit your day job', 'You have a big office', 'Nothing'], 0], ['Adding online sales is an example of…', ['A new channel', 'A new loan', 'A franchise fee', 'An objection'], 0]] }
    ] }
  ],
  games: [
    { type: 'order', t: 'Build the Pitch', d: 'Put the parts of an elevator pitch in order.', steps: ['Hook: grab attention', 'Problem: what the customer struggles with', 'Solution: what you offer', 'Proof: results so far', 'Ask: what you want next'] },
    { type: 'match', t: 'Funding Match', d: 'Match each funding source to how it works.', pairs: [['Bootstrapping', 'Your own savings and sales'], ['Crowdfunding', 'Many small online contributions'], ['Investor', 'Money for part ownership'], ['Bank loan', 'Borrowed money repaid with interest'], ['Grant', 'Money you don\'t repay, won by applying'], ['Pre-sales', 'Customers pay before delivery']] }
  ]
},

/* ===================== STORYTELLING ===================== */
{
  id: 'story', cat: 'creative', title: 'Storytelling', ages: 'Ages 10+',
  tag: "Spin words into magic and make 'em feel something.",
  blurb: 'Purpose and setting, characters and conflict, structure and voice, theme and pacing, and the imagery that makes readers feel.',
  units: [
    { t: 'The foundations', lessons: [
      { t: 'Purpose and setting', s: 'How purpose and setting shape plot and character behaviour.',
        b: `<h3>Purpose</h3><p>Every story has a reason to exist. Ask yourself: do I want to <strong>entertain</strong>, <strong>teach</strong>, <strong>persuade</strong> or <strong>make someone feel</strong>? Your purpose guides every choice you make.</p>
<h3>Setting</h3><p>Setting is <strong>where</strong> and <strong>when</strong> a story happens. It is more than background: it shapes what characters can do and how they behave.</p>
<div class="ex"><b>Same character, different setting</b><p>A girl who loses her phone in a busy city panics about who might find it. The same girl losing her phone on a tiny Out Island worries how she'll call for the mail boat. The setting changes the problem.</p></div>
<h3>Build a setting with details</h3><ul><li>Time: century, season, time of day</li><li>Place: island, city, school, boat</li><li>Mood: calm, tense, joyful</li><li>Culture: the customs, language and food of the people there</li></ul>
<div class="tip"><b>Use the senses</b><p>Don't list facts. Let the reader smell the salt, hear the junkanoo drums and feel the midday heat.</p></div>`,
        q: [['What is a story\'s setting?', ['The main character', 'Where and when it happens', 'The ending', 'The title'], 1], ['Which is a possible purpose for a story?', ['To entertain', 'To fill pages', 'To confuse', 'None'], 0], ['How does setting affect a story?', ['It doesn\'t', 'It shapes what characters can do and how they act', 'It only changes the cover', 'It decides the font'], 1]] },
      { t: 'Characters and conflict', s: 'How characters\' interactions and struggles drive the story and shape its themes.',
        b: `<h3>Characters</h3><ul class="vocab"><li><b>Protagonist</b><span>The main character, whose goal drives the story</span></li><li><b>Antagonist</b><span>The person or force working against them</span></li><li><b>Supporting</b><span>Friends, family and mentors who help or complicate things</span></li></ul>
<p>Strong characters <strong>want</strong> something, have a <strong>flaw</strong>, and <strong>change</strong> by the end.</p>
<h3>Conflict: the engine of every story</h3><p>No conflict, no story. Conflict is the struggle between what a character wants and what stands in the way.</p>
<div class="tbl"><table><thead><tr><th>Type</th><th>Example</th></tr></thead><tbody><tr><td>Character vs character</td><td>Two rivals compete for the same prize</td></tr><tr><td>Character vs self</td><td>A boy fights his fear of the ocean</td></tr><tr><td>Character vs nature</td><td>A family rides out a hurricane</td></tr><tr><td>Character vs society</td><td>A girl challenges an unfair rule at school</td></tr></tbody></table></div>`,
        q: [['Who is the protagonist?', ['The villain', 'The main character', 'The narrator\'s friend', 'The reader'], 1], ['A boy fighting his fear of the ocean is which conflict?', ['Character vs nature', 'Character vs self', 'Character vs society', 'No conflict'], 1], ['What do strong characters usually do by the end?', ['Stay exactly the same', 'Change in some way', 'Disappear', 'Become the narrator'], 1]] }
    ] },
    { t: 'Shape and sound', lessons: [
      { t: 'Structure and voice', s: 'How structure and pacing support the narrator\'s voice and shape the reader\'s experience.',
        b: `<h3>The story arc</h3><ol><li><strong>Exposition:</strong> meet the characters and setting.</li><li><strong>Rising action:</strong> problems build and stakes rise.</li><li><strong>Climax:</strong> the turning point, the moment of highest tension.</li><li><strong>Falling action:</strong> the results of the climax play out.</li><li><strong>Resolution:</strong> the new normal.</li></ol>
<h3>Point of view</h3><ul class="vocab"><li><b>First person</b><span>"I ran to the dock." Close and personal.</span></li><li><b>Second person</b><span>"You run to the dock." Rare and immersive.</span></li><li><b>Third person</b><span>"She ran to the dock." Flexible; can see into one mind or many.</span></li></ul>
<h3>Voice</h3><p>Voice is the personality of the writing: word choice, rhythm and attitude. A nervous 10-year-old and a calm grandfather would tell the same story in very different voices.</p>
<div class="ex"><b>Two voices</b><p>"The storm was coming and everybody knew it." / "Granny said the wind smelled wrong, and Granny was never wrong about wind."</p></div>`,
        q: [['What is the climax?', ['The beginning', 'The turning point of highest tension', 'The list of characters', 'The final sentence'], 1], ['"I opened the door" is written in…', ['First person', 'Second person', 'Third person', 'No person'], 0], ['What is voice?', ['How loud you read', 'The personality of the writing', 'The title', 'The number of chapters'], 1]] },
      { t: 'Theme and pacing', s: 'How theme and pacing work together to create stories that resonate.',
        b: `<h3>Theme</h3><p>The <strong>theme</strong> is the big idea or message underneath the plot: what the story is really about. Common themes include courage, friendship, belonging, greed and growing up.</p>
<div class="tip"><b>Show, don't preach</b><p>Let readers discover the theme through what characters do and what happens to them. Avoid ending with "and the lesson is…".</p></div>
<h3>Pacing</h3><p>Pacing is how fast or slow the story feels.</p><ul><li><strong>Speed up</strong> with short sentences, action and quick dialogue. Use this for chases and arguments.</li><li><strong>Slow down</strong> with longer sentences, description and thoughts. Use this for emotional moments and building suspense.</li></ul>
<div class="ex"><b>Fast</b><p>She ran. Rain. Thunder. The gate. Locked.</p><b>Slow</b><p>She stood at the gate for a long time, rain dripping from her hair, remembering the last summer they had all been here together.</p></div>`,
        q: [['What is a theme?', ['The setting', 'The big idea or message underneath the plot', 'The title', 'The fastest scene'], 1], ['How do you speed up pacing?', ['Long descriptions', 'Short sentences and action', 'More adjectives', 'Flashbacks'], 1], ['How should a theme usually come across?', ['Stated as a lecture at the end', 'Through characters\' actions and events', 'In the title only', 'It shouldn\'t'], 1]] }
    ] },
    { t: 'Making readers feel', lessons: [
      { t: 'Imagery and emotion', s: 'Using vivid imagery to evoke emotion and connect readers to your story.',
        b: `<h3>Show, don't tell</h3><p><strong>Telling:</strong> "Marcus was nervous."<br><strong>Showing:</strong> "Marcus wiped his palms on his shorts for the third time and stared at the diving board."</p>
<h3>Use all five senses</h3><ul><li>Sight: the turquoise water turning grey under clouds</li><li>Sound: palm fronds rattling like paper</li><li>Smell: fried fish and sea salt</li><li>Taste: sweet, sticky guava duff</li><li>Touch: hot sand burning bare feet</li></ul>
<h3>Figurative language</h3><ul class="vocab"><li><b>Simile</b><span>Compares using like or as: "quiet as a sleeping cat"</span></li><li><b>Metaphor</b><span>Says one thing is another: "the classroom was a zoo"</span></li><li><b>Personification</b><span>Gives human traits to things: "the wind whispered"</span></li></ul>
<div class="tip"><b>Specific beats general</b><p>"A flower" is forgettable. "A red hibiscus" puts a picture in the reader's mind.</p></div>`,
        q: [['Which sentence shows rather than tells?', ['She was sad.', 'Tears slid down her cheeks as she folded the letter.', 'He was angry.', 'It was scary.'], 1], ['"The wind whispered through the trees" is an example of…', ['Simile', 'Personification', 'Metaphor', 'Rhyme'], 1], ['"As quiet as a sleeping cat" is a…', ['Simile', 'Metaphor', 'Personification', 'Theme'], 0]] }
    ] }
  ],
  games: [
    { type: 'order', t: 'Story Arc', d: 'Put the parts of the story arc in order.', steps: ['Exposition: meet the characters', 'Rising action: problems build', 'Climax: the turning point', 'Falling action: consequences', 'Resolution: the new normal'] },
    { type: 'match', t: 'Writer\'s Toolkit', d: 'Match each storytelling term to its meaning.', pairs: [['Protagonist', 'The main character'], ['Antagonist', 'Works against the main character'], ['Setting', 'Where and when the story happens'], ['Theme', 'The big idea underneath the plot'], ['Simile', 'A comparison using like or as'], ['Metaphor', 'Says one thing is another'], ['Climax', 'The point of highest tension'], ['Voice', 'The personality of the writing']] }
  ]
},

/* ===================== CINEMATOGRAPHY / PHOTOGRAPHY ===================== */
{
  id: 'film', cat: 'creative', title: 'Cinematography & Photography', ages: 'Ages 12+',
  tag: 'Capture life one perfect frame at a time.',
  blurb: 'Photography first (exposure, composition, lighting and gear), then moving pictures: camera movement, shot types, colour, sound and filmmaking wisdom.',
  units: [
    { t: 'Photography', lessons: [
      { t: 'Exposure and composition', s: 'Adjusting exposure and using composition to improve the quality and impact of your photos.',
        b: `<h3>The exposure triangle</h3><p><strong>Exposure</strong> is how bright or dark a photo is. Three settings control it:</p>
<div class="tbl"><table><thead><tr><th>Setting</th><th>What it does</th><th>Side effect</th></tr></thead><tbody>
<tr><td>Aperture (f-number)</td><td>Size of the lens opening. f/1.8 is wide (bright), f/16 is small (dark).</td><td>Wide = blurry background</td></tr>
<tr><td>Shutter speed</td><td>How long the sensor sees light. 1/1000 s is fast, 1/30 s is slow.</td><td>Slow = motion blur</td></tr>
<tr><td>ISO</td><td>Sensor sensitivity. 100 is low, 3200 is high.</td><td>High = grainy noise</td></tr></tbody></table></div>
<h3>Composition</h3><ul><li><strong>Rule of thirds:</strong> imagine a 3×3 grid and place your subject on a line or where lines cross.</li><li><strong>Leading lines:</strong> roads, docks and shorelines that guide the eye.</li><li><strong>Framing:</strong> shoot through a doorway or palm branches.</li><li><strong>Fill the frame:</strong> get closer and remove clutter.</li><li><strong>Change your angle:</strong> crouch down low or climb up high.</li></ul>
<div class="tip"><b>On a phone</b><p>Turn on the grid in camera settings, tap your subject to focus, and slide to adjust brightness.</p></div>`,
        q: [['Which setting controls the size of the lens opening?', ['ISO', 'Aperture', 'Shutter speed', 'White balance'], 1], ['A very high ISO can cause…', ['Grainy noise', 'Sharper photos', 'Slower shutter', 'Bigger files only'], 0], ['The rule of thirds suggests placing your subject…', ['Always dead centre', 'On grid lines or where they cross', 'At the very edge', 'Out of frame'], 1]] },
      { t: 'Lighting and gear', s: 'Lighting techniques and equipment that improve image quality and tell a story.',
        b: `<h3>Natural light</h3><ul><li><strong>Golden hour:</strong> the hour after sunrise and before sunset gives soft, warm light.</li><li><strong>Midday sun</strong> is harsh and makes strong shadows. Find open shade.</li><li><strong>Overcast days</strong> act like a giant softbox: great for portraits.</li></ul>
<h3>Three-point lighting</h3><ul class="vocab"><li><b>Key light</b><span>The main, strongest light on the subject</span></li><li><b>Fill light</b><span>Softens the shadows from the key</span></li><li><b>Back light</b><span>Behind the subject, separating them from the background</span></li></ul>
<h3>Gear that matters</h3><ul><li><strong>Lens focal length:</strong> wide (16–35 mm) for landscapes, normal (50 mm) for everyday, telephoto (85 mm+) for portraits and wildlife.</li><li><strong>Tripod:</strong> sharp photos in low light.</li><li><strong>Reflector:</strong> a cheap way to bounce light into shadows. White card works too.</li></ul>
<div class="tip"><b>Gear isn't everything</b><p>Learn light and composition first. A great eye with a phone beats a poor eye with an expensive camera.</p></div>`,
        q: [['When is golden hour?', ['Midday', 'Shortly after sunrise and before sunset', 'Midnight', 'Any time'], 1], ['Which light separates the subject from the background?', ['Key light', 'Fill light', 'Back light', 'Flash'], 2], ['Which lens is best for distant wildlife?', ['Wide angle', 'Telephoto', 'Fisheye', 'Macro'], 1]] }
    ] },
    { t: 'Cinematography', lessons: [
      { t: 'Camera movement and shot types', s: 'How camera movements and shot types affect storytelling and composition in film.',
        b: `<h3>Shot types</h3><ul class="vocab"><li><b>Wide / establishing</b><span>Shows the whole location</span></li><li><b>Medium</b><span>Waist up; good for conversation</span></li><li><b>Close-up</b><span>The face; shows emotion</span></li><li><b>Extreme close-up</b><span>Eyes or a detail; intense</span></li><li><b>Over-the-shoulder</b><span>From behind one person toward another</span></li><li><b>POV</b><span>What the character sees</span></li></ul>
<h3>Camera movement</h3><ul class="vocab"><li><b>Pan</b><span>Turn left or right from a fixed spot</span></li><li><b>Tilt</b><span>Point up or down from a fixed spot</span></li><li><b>Dolly</b><span>Move the whole camera toward or away</span></li><li><b>Tracking</b><span>Move alongside a moving subject</span></li><li><b>Handheld</b><span>Shaky and raw, for energy or chaos</span></li><li><b>Zoom</b><span>Change focal length without moving</span></li></ul>
<h3>The 180-degree rule</h3><p>Imagine a line between two characters talking. Keep the camera on one side of it so they always face the same way on screen.</p>`,
        q: [['Which shot best shows a character\'s emotion?', ['Wide shot', 'Close-up', 'Establishing shot', 'Aerial shot'], 1], ['Turning the camera left or right from a fixed spot is a…', ['Tilt', 'Pan', 'Dolly', 'Zoom'], 1], ['What does the 180-degree rule keep consistent?', ['Lighting', 'Which way characters face on screen', 'Colour', 'Sound'], 1]] },
      { t: 'Lighting and colour', s: 'How lighting and colour shape mood, story and the look of a film.',
        b: `<h3>Lighting for mood</h3><ul><li><strong>High-key lighting:</strong> bright and even with few shadows. Used in comedies and adverts.</li><li><strong>Low-key lighting:</strong> deep shadows and contrast. Used in thrillers and dramas.</li><li><strong>Practical lights:</strong> lamps and screens visible in the scene that also light it.</li></ul>
<h3>Colour temperature</h3><p>Light has a colour, measured in <strong>Kelvin (K)</strong>. Candles and tungsten bulbs are warm and orange, around 2700–3200 K. Daylight is around 5600 K. Shade is cool and blue.</p><p>Set your camera's <strong>white balance</strong> to match, or white objects will look orange or blue.</p>
<h3>Colour tells the story</h3><ul><li>Warm tones (orange, yellow) feel cosy, happy or nostalgic.</li><li>Cool tones (blue, teal) feel calm, sad, lonely or futuristic.</li><li>Saturated colour feels lively. Desaturated colour feels gritty or serious.</li></ul>
<div class="tip"><b>Colour grading</b><p>Editors adjust colour after filming to give a film one consistent look.</p></div>`,
        q: [['Which lighting style suits a thriller?', ['High-key', 'Low-key', 'Flat', 'None'], 1], ['Daylight is roughly…', ['1000 K', '2700 K', '5600 K', '20,000 K'], 2], ['Cool, blue tones usually feel…', ['Cosy and happy', 'Calm, sad or lonely', 'Hungry', 'Loud'], 1]] },
      { t: 'Sound and filmmaking wisdom', s: 'Sound techniques and practical insights that make films better.',
        b: `<p>Audiences forgive shaky video before they forgive bad sound.</p>
<h3>Recording sound</h3><ul><li>Get the microphone <strong>close</strong> to the speaker.</li><li><strong>Lavalier</strong> (clip-on) mics are great for interviews. <strong>Shotgun</strong> mics point at the speaker from just out of frame.</li><li>Record 30 seconds of <strong>room tone</strong> (silence in the space) for editing.</li><li>Watch for wind, fridges, air-conditioning and traffic.</li><li>Wear headphones while recording.</li></ul>
<h3>Sound in the edit</h3><ul><li><strong>Foley:</strong> recreating sounds like footsteps after filming.</li><li><strong>Score:</strong> music that sets the mood. Use music you have the rights to.</li><li><strong>J-cut / L-cut:</strong> let sound start before, or carry after, the picture changes.</li></ul>
<h3>Filmmaking wisdom</h3><ul><li>Plan with a <strong>shot list</strong> or storyboard.</li><li>Shoot plenty of <strong>B-roll</strong>: extra footage to cut away to.</li><li>Get more takes than you think you need.</li><li>Keep it short. Cut anything that doesn't move the story forward.</li></ul>`,
        q: [['What is room tone?', ['Background music', 'A recording of the silence in a location', 'The colour of the room', 'A type of mic'], 1], ['What is B-roll?', ['A blooper', 'Extra footage to cut away to', 'The second microphone', 'The credits'], 1], ['What is Foley?', ['Recreating sound effects after filming', 'A camera move', 'A lighting style', 'A lens'], 0]] }
    ] }
  ],
  games: [
    { type: 'match', t: 'Shot Caller', d: 'Match each shot or move to its description.', pairs: [['Wide shot', 'Shows the whole location'], ['Close-up', 'Shows a face and emotion'], ['Pan', 'Turns left or right from one spot'], ['Tilt', 'Points up or down from one spot'], ['Dolly', 'Moves the camera toward or away'], ['Over-the-shoulder', 'Filmed from behind one person'], ['Tracking', 'Moves alongside the subject'], ['POV', 'What the character sees']] },
    { type: 'sort', t: 'Exposure Triangle', d: 'Which setting does each effect belong to?', bins: ['Aperture', 'Shutter speed', 'ISO'], items: [['Blurry background', 0], ['Freezing a jumping dog', 1], ['Grainy noise at night', 2], ['f/1.8', 0], ['1/1000 s', 1], ['ISO 3200', 2], ['Light trails from cars', 1], ['Everything in focus, front to back', 0], ['Sensor sensitivity', 2]] }
  ]
},

/* ===================== HEALTH CARE ===================== */
{
  id: 'health', cat: 'creative', title: 'Health Care Basics', ages: 'Ages 12+',
  tag: 'Heal, help, and handle the human body like a pro.',
  blurb: 'CPR and AEDs, first aid and bandaging, seizures and strokes, shock and severe injuries, choking and extra CPR tips.',
  note: 'This course is a study aid, not a certification. Take a hands-on CPR and first aid course from a certified provider. In an emergency in The Bahamas, call 919 or 911.',
  units: [
    { t: 'Saving a life', lessons: [
      { t: 'CPR and AED', s: 'Performing CPR and using an AED to respond to cardiac emergencies.',
        b: `<p>When someone's heart stops, every minute without CPR lowers their chance of survival. You can't make things worse by trying.</p>
<h3>Check, call, care</h3><ol><li><strong>Check</strong> the scene is safe. Tap the person and shout "Are you okay?"</li><li>Check for normal breathing for no more than 10 seconds. Gasping is not normal breathing.</li><li><strong>Call 919 or 911</strong>, or point at someone and tell them to. Ask someone to fetch an <strong>AED</strong>.</li><li><strong>Care:</strong> start chest compressions.</li></ol>
<h3>Adult chest compressions</h3><ul><li>Kneel beside the person. Place the heel of one hand in the <strong>centre of the chest</strong>, with your other hand on top.</li><li>Arms straight, shoulders over hands.</li><li>Push hard: about <strong>2 inches (5 cm)</strong> deep.</li><li>Push fast: <strong>100–120 compressions a minute</strong>.</li><li>Let the chest rise fully between pushes.</li><li>If trained: give <strong>30 compressions, then 2 rescue breaths</strong>. If not, do hands-only CPR non-stop.</li></ul>
<h3>Using an AED</h3><p>An AED (automated external defibrillator) checks the heart and gives a shock if needed. Turn it on and follow the voice prompts. Stick on the pads as shown, make sure nobody touches the person during analysis and shock, then resume CPR right away.</p>
<div class="tip"><b>Keep the beat</b><p>Songs around 100–120 beats a minute, like "Stayin' Alive", match the right compression speed.</p></div>`,
        q: [['How fast should adult chest compressions be?', ['60 a minute', '100–120 a minute', '200 a minute', '30 a minute'], 1], ['How deep for an adult?', ['About half an inch', 'About 2 inches (5 cm)', 'About 6 inches', 'As shallow as possible'], 1], ['What is the compression-to-breath ratio for trained rescuers?', ['15:1', '30:2', '5:5', '100:1'], 1], ['What should you do when the AED is analysing?', ['Keep pressing on the chest', 'Make sure nobody touches the person', 'Give water', 'Remove the pads'], 1]] },
      { t: 'First aid and bandaging', s: 'First aid techniques and how to apply bandages to treat injuries.',
        b: `<h3>Bleeding</h3><ol><li>Put on gloves if you have them.</li><li>Press firmly on the wound with a clean cloth or dressing.</li><li>Keep pressing. If blood soaks through, add more on top. Don't remove the first layer.</li><li>Once bleeding slows, bandage firmly but not so tight that fingers or toes go cold or blue.</li></ol>
<h3>Small cuts and scrapes</h3><p>Rinse with clean water, cover with a sterile dressing and watch for infection: redness, swelling, warmth or pus.</p>
<h3>Burns</h3><ul><li>Cool the burn under cool running water for <strong>at least 20 minutes</strong>.</li><li>Remove rings and watches before swelling starts.</li><li>Cover loosely with cling film or a clean, non-fluffy dressing.</li><li>Never use ice, butter or toothpaste.</li></ul>
<h3>Sprains and strains: RICE</h3><ul class="vocab"><li><b>Rest</b><span>Stop using it</span></li><li><b>Ice</b><span>Wrapped, 20 minutes at a time</span></li><li><b>Compression</b><span>A firm elastic bandage</span></li><li><b>Elevation</b><span>Raise it above the heart</span></li></ul>`,
        q: [['Blood soaks through the dressing. What do you do?', ['Remove it and start again', 'Add more dressing on top and keep pressing', 'Stop pressing', 'Pour water on it'], 1], ['How long should you cool a burn?', ['10 seconds', 'At least 20 minutes', 'Don\'t cool it', '2 hours with ice'], 1], ['What does the E in RICE stand for?', ['Exercise', 'Elevation', 'Energy', 'Emergency'], 1]] }
    ] },
    { t: 'Medical emergencies', lessons: [
      { t: 'Seizures and strokes', s: 'Recognising symptoms and responding to seizures and strokes.',
        b: `<h3>Seizures</h3><p>During a seizure a person may stiffen, jerk, stare blankly or lose consciousness.</p>
<ul><li><strong>Do:</strong> stay calm, time it, move hard objects away, cushion the head, loosen tight clothing.</li><li><strong>Do not:</strong> hold them down or put anything in their mouth.</li><li>After it stops, roll them onto their side (the <strong>recovery position</strong>) and stay with them.</li></ul>
<div class="warn"><b>Call 919 or 911 if</b><p>The seizure lasts more than 5 minutes, another follows quickly, the person is injured, pregnant or in water, it's their first seizure, or they don't wake up afterwards.</p></div>
<h3>Strokes: think FAST</h3><p>A stroke happens when blood can't reach part of the brain. Fast treatment saves brain tissue.</p>
<ul class="vocab"><li><b>F: Face</b><span>Ask them to smile. Does one side droop?</span></li><li><b>A: Arms</b><span>Ask them to raise both arms. Does one drift down?</span></li><li><b>S: Speech</b><span>Is their speech slurred or strange?</span></li><li><b>T: Time</b><span>Call 919 or 911 now. Note when symptoms started.</span></li></ul>`,
        q: [['During a seizure, you should…', ['Hold the person down', 'Put a spoon in their mouth', 'Move hard objects away and time it', 'Give them water'], 2], ['What does the F in FAST stand for?', ['Fever', 'Face', 'Fall', 'Fingers'], 1], ['When should you call for help during a seizure?', ['Never', 'If it lasts more than 5 minutes', 'Only if it lasts an hour', 'After they go home'], 1]] }
    ] },
    { t: 'Serious injuries and choking', lessons: [
      { t: 'Shock and extreme injuries', s: 'Recognising shock and the immediate first aid needed for severe injuries.',
        b: `<h3>Shock</h3><p><strong>Shock</strong> happens when not enough blood reaches the body's organs, often after heavy bleeding, burns or a severe allergic reaction. It can kill.</p>
<p><strong>Signs:</strong> pale, cold, clammy skin; fast, weak pulse; fast breathing; confusion; thirst; nausea.</p>
<ol><li>Call 919 or 911.</li><li>Treat the cause, like bleeding.</li><li>Lay them down. If there is no leg, neck or back injury, raise their legs slightly.</li><li>Keep them warm with a blanket or jacket.</li><li>Don't give food or drink.</li><li>Reassure them and monitor breathing.</li></ol>
<h3>Severe bleeding</h3><p>Press hard and continuously on the wound. For life-threatening bleeding from an arm or leg, a trained person may apply a <strong>tourniquet</strong> 2–3 inches above the wound and note the time.</p>
<h3>Broken bones</h3><p>Keep the injured part still in the position you found it. Support it with padding. Don't try to straighten it.</p>
<h3>Head, neck and back injuries</h3><p>If you suspect a spinal injury, keep the head and neck still and don't move the person unless they are in danger.</p>`,
        q: [['Which is a sign of shock?', ['Warm, red skin', 'Pale, cold, clammy skin', 'Slow, strong pulse', 'Feeling very hungry'], 1], ['Should you give a person in shock something to drink?', ['Yes, lots of water', 'No', 'Only soda', 'Only coffee'], 1], ['What should you do with a suspected broken bone?', ['Straighten it', 'Keep it still and supported', 'Ask them to walk it off', 'Massage it'], 1]] },
      { t: 'Choking and extra CPR tips', s: 'Recognising choking and helping someone in distress, plus extra CPR tips.',
        b: `<h3>Recognise choking</h3><p>A choking person may clutch their throat, be unable to speak, cough weakly or turn blue. If they can cough strongly, encourage them to keep coughing.</p>
<h3>Help an adult or child who can't breathe</h3><ol><li>Ask "Are you choking? Can I help?"</li><li>Give up to <strong>5 back blows</strong>: lean them forward and strike firmly between the shoulder blades with the heel of your hand.</li><li>Give up to <strong>5 abdominal thrusts</strong>: stand behind them, put a fist just above the belly button, grasp it with your other hand and pull sharply inward and up.</li><li>Repeat until the object comes out or they become unresponsive. If they become unresponsive, call 919 or 911 and begin CPR.</li></ol>
<div class="warn"><b>Babies under 1</b><p>Never use abdominal thrusts on a baby. Use 5 back blows and 5 chest thrusts with two fingers, with the baby face down along your forearm, then face up.</p></div>
<h3>Extra CPR tips</h3><ul><li><strong>Children (1 year to puberty):</strong> about 2 inches deep, with one or two hands.</li><li><strong>Babies:</strong> two fingers, about 1.5 inches (4 cm) deep.</li><li>Swap rescuers every 2 minutes. Compressions are tiring and quality drops.</li><li>Don't stop until help arrives, an AED tells you to, or the person starts breathing normally.</li></ul>`,
        q: [['A choking adult can still cough strongly. What do you do?', ['Back blows straight away', 'Encourage them to keep coughing', 'Give water', 'Start CPR'], 1], ['Where does your fist go for abdominal thrusts?', ['On the chest bone', 'Just above the belly button', 'On the back', 'On the throat'], 1], ['How often should rescuers swap during CPR?', ['Every 30 seconds', 'About every 2 minutes', 'Every 20 minutes', 'Never'], 1]] }
    ] }
  ],
  games: [
    { type: 'order', t: 'CPR Steps', d: 'Put the steps for helping an unresponsive adult in order.', steps: ['Check the scene is safe', 'Tap and shout to check for a response', 'Check for normal breathing (up to 10 seconds)', 'Call 919 or 911 and send someone for an AED', 'Start chest compressions: hard and fast in the centre of the chest', 'Use the AED as soon as it arrives'] },
    { type: 'quiz', t: 'First Aid Challenge', d: 'Rapid-fire emergency scenarios.', q: [
      ['Someone\'s face droops and their speech is slurred. You think…', ['Stroke', 'Choking', 'Sprain', 'Sunburn'], 0, 'Face and speech are both FAST signs.'],
      ['A friend burns their hand on a pot. First step?', ['Butter', 'Ice', 'Cool running water for 20 minutes', 'Toothpaste'], 2],
      ['A person is pale, clammy and confused after a bad cut. You suspect…', ['Shock', 'A cold', 'Hunger', 'A sprain'], 0],
      ['Compressions should be how fast?', ['100–120 a minute', '50 a minute', '200 a minute', 'As slow as possible'], 0],
      ['During a seizure, you should never…', ['Time it', 'Cushion the head', 'Put something in their mouth', 'Stay with them'], 2],
      ['A sprained ankle: what helps?', ['RICE', 'Running on it', 'Heat straight away', 'Nothing'], 0]
    ] }
  ]
},

/* ===================== IT ===================== */
{
  id: 'it', cat: 'creative', title: 'Information Technology', ages: 'Ages 12+',
  tag: 'CTRL + ALT + DOMINATE the digital world.',
  blurb: 'Troubleshooting, passwords and staying safe from viruses, browser extensions and keyboard shortcuts, the terms to know, and a first look at the command line.',
  units: [
    { t: 'Fix it and protect it', lessons: [
      { t: 'Basic troubleshooting', s: 'Techniques for finding and fixing common technical problems.',
        b: `<p>Most tech problems can be fixed with a calm, step-by-step approach.</p>
<h3>The troubleshooting routine</h3><ol><li><strong>Identify the problem:</strong> what exactly is happening, and when did it start?</li><li><strong>Restart:</strong> turning it off and on again really does fix many problems.</li><li><strong>Check the simple things:</strong> cables, power, Wi-Fi, volume, battery.</li><li><strong>Isolate:</strong> does it happen in other apps, on other devices, or for other users?</li><li><strong>Search the error message</strong> word for word.</li><li><strong>Change one thing at a time,</strong> then test.</li><li><strong>Write down what fixed it</strong> for next time.</li></ol>
<h3>Common fixes</h3><div class="tbl"><table><thead><tr><th>Problem</th><th>Try</th></tr></thead><tbody>
<tr><td>Slow computer</td><td>Close unused apps and tabs, restart, check storage space, run updates</td></tr>
<tr><td>No internet</td><td>Restart the router and device, forget and rejoin Wi-Fi, try another device</td></tr>
<tr><td>Frozen app</td><td>Force quit: Ctrl+Shift+Esc (Windows) or Cmd+Option+Esc (Mac)</td></tr>
<tr><td>No sound</td><td>Check volume, mute and which output device is selected</td></tr></tbody></table></div>`,
        q: [['What is often the first thing to try?', ['Buy a new computer', 'Restart the device', 'Delete everything', 'Call the manufacturer'], 1], ['Why change one thing at a time?', ['It\'s faster', 'So you know what fixed it', 'It\'s required', 'It isn\'t useful'], 1], ['Which shortcut opens Task Manager on Windows?', ['Ctrl+C', 'Ctrl+Shift+Esc', 'Alt+F4', 'Win+D'], 1]] },
      { t: 'Passwords and avoiding viruses', s: 'Strong passwords and strategies that protect your devices and personal information.',
        b: `<h3>Strong passwords</h3><ul><li><strong>Long beats complicated.</strong> A passphrase like <span class="mono">conch-sunrise-bicycle-72</span> is strong and easy to remember.</li><li>Use a <strong>different password for every account</strong>.</li><li>Use a <strong>password manager</strong> to remember them.</li><li>Turn on <strong>two-factor authentication (2FA)</strong> so a code is needed as well as your password.</li></ul>
<h3>Spot phishing</h3><p><strong>Phishing</strong> messages pretend to be from a bank, school or company to trick you into clicking a link or sharing information.</p><ul><li>Urgent threats: "Your account will be closed today!"</li><li>Strange sender addresses or spelling mistakes</li><li>Links that don't match the real website</li><li>Requests for passwords or codes. Real companies never ask for these.</li></ul>
<h3>Avoid malware</h3><ul><li>Keep your operating system, browser and apps updated.</li><li>Download apps only from official stores and websites.</li><li>Don't open unexpected attachments.</li><li>Use built-in antivirus like Windows Security.</li><li>Back up important files.</li></ul>`,
        q: [['Which is the strongest password?', ['password123', 'Fluffy', 'conch-sunrise-bicycle-72', '123456'], 2], ['What is 2FA?', ['Two passwords that are the same', 'A second check, like a code, as well as your password', 'A virus', 'A browser'], 1], ['An email says your bank account closes today unless you click a link. It\'s probably…', ['Real', 'Phishing', 'A software update', 'A receipt'], 1]] }
    ] },
    { t: 'Work faster', lessons: [
      { t: 'Browser extensions and keyboard shortcuts', s: 'Using browser extensions and keyboard shortcuts for speed and productivity.',
        b: `<h3>Shortcuts everyone should know</h3><p>On a Mac, use <strong>Cmd</strong> where Windows uses <strong>Ctrl</strong>.</p>
<div class="tbl"><table><thead><tr><th>Shortcut</th><th>Does</th></tr></thead><tbody>
<tr><td class="mono">Ctrl+C / Ctrl+V</td><td>Copy / paste</td></tr><tr><td class="mono">Ctrl+X</td><td>Cut</td></tr><tr><td class="mono">Ctrl+Z / Ctrl+Y</td><td>Undo / redo</td></tr><tr><td class="mono">Ctrl+F</td><td>Find on page</td></tr><tr><td class="mono">Ctrl+T</td><td>New browser tab</td></tr><tr><td class="mono">Ctrl+W</td><td>Close tab</td></tr><tr><td class="mono">Ctrl+Shift+T</td><td>Reopen the tab you just closed</td></tr><tr><td class="mono">Alt+Tab</td><td>Switch windows (Cmd+Tab on Mac)</td></tr><tr><td class="mono">Win+L</td><td>Lock your computer</td></tr><tr><td class="mono">Ctrl+S</td><td>Save</td></tr></tbody></table></div>
<h3>Browser extensions</h3><p>Extensions add features to your browser: ad blockers, password managers, grammar checkers, note-takers.</p>
<ul><li>Install only from the official store (Chrome Web Store, Firefox Add-ons, Edge Add-ons).</li><li>Check the reviews, the number of users and the permissions it asks for.</li><li>Remove extensions you don't use. Each one is a possible security risk and can slow the browser.</li></ul>`,
        q: [['What does Ctrl+Z do?', ['Zoom', 'Undo', 'Save', 'Close'], 1], ['Which reopens a tab you closed by accident?', ['Ctrl+T', 'Ctrl+W', 'Ctrl+Shift+T', 'Ctrl+F'], 2], ['Where should you get browser extensions?', ['Any website', 'The official extension store', 'Email attachments', 'Pop-up ads'], 1]] }
    ] },
    { t: 'Speak the language', lessons: [
      { t: 'Terms to know for IT', s: 'Essential vocabulary and concepts in information technology.',
        b: `<ul class="vocab"><li><b>Hardware</b><span>The physical parts you can touch</span></li><li><b>Software</b><span>Programs and apps</span></li><li><b>Operating system (OS)</b><span>Runs the computer: Windows, macOS, Android, iOS</span></li><li><b>CPU</b><span>The processor, the "brain" that runs instructions</span></li><li><b>RAM</b><span>Short-term memory, cleared when you power off</span></li><li><b>Storage</b><span>Long-term memory: SSD or hard drive</span></li><li><b>Router</b><span>Shares your internet connection across devices</span></li><li><b>IP address</b><span>A device's address on a network</span></li><li><b>Bandwidth</b><span>How much data a connection can carry</span></li><li><b>Cloud</b><span>Storage and services run on someone else's servers over the internet</span></li><li><b>Malware</b><span>Harmful software: viruses, ransomware, spyware</span></li><li><b>Cache</b><span>Saved copies that make things load faster</span></li><li><b>Backup</b><span>A copy of your files kept somewhere safe</span></li><li><b>Firewall</b><span>Blocks unwanted network traffic</span></li></ul>
<div class="tip"><b>RAM vs storage</b><p>RAM is your desk: what you're working on right now. Storage is your filing cabinet: everything you keep.</p></div>`,
        q: [['Which is the "brain" of a computer?', ['RAM', 'CPU', 'Router', 'Monitor'], 1], ['What is RAM?', ['Permanent storage', 'Short-term working memory', 'A type of virus', 'A cable'], 1], ['What does a router do?', ['Prints documents', 'Shares an internet connection across devices', 'Stores photos', 'Cools the CPU'], 1]] },
      { t: 'Tech speak and command lines', s: 'Tech vocabulary and the basics of using the command line.',
        b: `<p>The <strong>command line</strong> (also called the terminal or shell) lets you control a computer by typing commands instead of clicking.</p>
<p>Open it with <strong>Command Prompt</strong> or <strong>PowerShell</strong> on Windows, and <strong>Terminal</strong> on Mac or Linux.</p>
<div class="tbl"><table><thead><tr><th>Task</th><th>Windows</th><th>Mac / Linux</th></tr></thead><tbody>
<tr><td>Show where you are</td><td class="mono">cd</td><td class="mono">pwd</td></tr>
<tr><td>List files</td><td class="mono">dir</td><td class="mono">ls</td></tr>
<tr><td>Change folder</td><td class="mono">cd Documents</td><td class="mono">cd Documents</td></tr>
<tr><td>Go up a folder</td><td class="mono">cd ..</td><td class="mono">cd ..</td></tr>
<tr><td>Make a folder</td><td class="mono">mkdir notes</td><td class="mono">mkdir notes</td></tr>
<tr><td>Test a connection</td><td class="mono">ping google.com</td><td class="mono">ping google.com</td></tr>
<tr><td>Network details</td><td class="mono">ipconfig</td><td class="mono">ifconfig</td></tr>
<tr><td>Clear the screen</td><td class="mono">cls</td><td class="mono">clear</td></tr></tbody></table></div>
<div class="warn"><b>Be careful</b><p>The command line does exactly what you type, with no undo. Never paste commands from strangers, and be especially careful with commands that delete files.</p></div>
<h3>Tech speak</h3><ul><li><strong>Bug:</strong> an error in software.</li><li><strong>Patch:</strong> a small update that fixes bugs.</li><li><strong>Boot:</strong> start up a computer.</li><li><strong>Latency / lag:</strong> delay on a connection.</li></ul>`,
        q: [['Which command lists files on Mac or Linux?', ['dir', 'ls', 'cls', 'ping'], 1], ['What does "cd .." do?', ['Deletes a folder', 'Goes up one folder', 'Copies files', 'Clears the screen'], 1], ['What does ping test?', ['Printer ink', 'A network connection', 'Battery life', 'Screen brightness'], 1]] }
    ] }
  ],
  games: [
    { type: 'flash', t: 'IT Flashcards', d: 'Drill the terms every tech-savvy person knows.', fl: 'Term', bl: 'Meaning', cards: [['CPU', 'The processor that runs instructions'], ['RAM', 'Short-term working memory'], ['Operating system', 'Software that runs the computer'], ['Router', 'Shares internet across devices'], ['IP address', 'A device\'s address on a network'], ['Malware', 'Harmful software'], ['Phishing', 'Fake messages that trick you into sharing info'], ['2FA', 'A second check after your password'], ['Firewall', 'Blocks unwanted network traffic'], ['Cache', 'Saved copies that speed things up'], ['Bandwidth', 'How much data a connection carries'], ['Patch', 'A small fix-it update']] },
    { type: 'match', t: 'Shortcut Match', d: 'Match each keyboard shortcut to what it does.', pairs: [['Ctrl+C', 'Copy'], ['Ctrl+V', 'Paste'], ['Ctrl+Z', 'Undo'], ['Ctrl+F', 'Find on page'], ['Ctrl+Shift+T', 'Reopen closed tab'], ['Win+L', 'Lock the computer'], ['Alt+Tab', 'Switch windows'], ['Ctrl+S', 'Save']] }
  ]
}
);
