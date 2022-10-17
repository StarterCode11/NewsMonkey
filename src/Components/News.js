import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Jeff Cox",
    "title": "Businesses added 208,000 jobs in September, better than expected, ADP reports - CNBC",
    "description": "Businesses added 208,000 for the month, better than the 200,000 Dow Jones estimate and ahead of the upwardly revised 185,000 in August.",
    "url": "https://www.cnbc.com/2022/10/05/adp-jobs-report-september-2022.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107101159-gettyimages-1413158128-u.semployersadded528000jobs04.jpeg?v=1664974551&w=1920&h=1080",
    "publishedAt": "2022-10-05T12:15:01Z",
    "content": "The U.S. labor market showed strength in September, with private companies adding more jobs than expected, payroll services firm ADP reported Wednesday.\r\nBusinesses added 208,000 for the month, bette… [+1692 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investor's Business Daily"
    },
    "author": "Investor's Business Daily",
    "title": "Dow Jones Futures Fall After Two-Day Stock Market Rally; Musk-Twitter Saga Isn't Quite Over | Investor's Business Daily - Investor's Business Daily",
    "description": "Treasury yields and the dollar rebounded. The Musk-Twitter saga isn't over yet.",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-fall-after-market-rallies-on-fed-hopes-elon-musk-twitter-saga-not-over-yet/",
    "urlToImage": "https://www.investors.com/wp-content/uploads/2021/06/Stock-elonmusk-02-shutt.jpg",
    "publishedAt": "2022-10-05T11:44:00Z",
    "content": "Dow Jones futures fell early Wednesday, along with S&amp;P 500 futures and Nasdaq futures, with Treasury yields and the dollar moving higher. OPEC+ is expected to announce a larger production cut at … [+10763 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Diana Olick",
    "title": "Mortgage applications plummet 14% as higher interest rates and Hurricane Ian crush demand - CNBC",
    "description": "The highest mortgage rates in more than 20 years coincided with one of the deadliest hurricanes on record, both contributing to a steep drop in mortgage demand.",
    "url": "https://www.cnbc.com/2022/10/05/weekly-mortgage-applications-plummet-14percent-as-higher-interest-rates-and-hurricane-ian-crush-demand.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107129337-1664920311792-gettyimages-1240450185-AFP_329H2E4.jpeg?v=1664967601&w=1920&h=1080",
    "publishedAt": "2022-10-05T11:00:01Z",
    "content": "The highest mortgage rates in more than 20 years coincided with one of the deadliest hurricanes on record in the United States, both contributing to a steep drop in mortgage demand.\r\nTotal mortgage a… [+1908 chars]"
    },
    {
    "source": {
    "id": "fortune",
    "name": "Fortune"
    },
    "author": "Fortune Editors",
    "title": "The 50 Most Powerful Women in Business of 2022 - Fortune",
    "description": "#1 Karen Lynch · #2 Julie Sweet · #3 Jane Fraser · #4 Mary Barra · #5 Jessica Tan · #6 Carol Tomé · #7 Rosalind Brewer · #8 Emma Walmsley · #9 Gail Boudreaux · #10 Abigail Johnson",
    "url": "https://fortune.com/most-powerful-women/2022/",
    "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/10/mpw-logo.jpg?resize=1200,600",
    "publishedAt": "2022-10-05T10:48:14Z",
    "content": "Skip to ContentWritten by\r\n<ul><li></li><li>\r\n</li><li>\r\n</li><li>\r\n</li></ul>"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Barbara Kollmeyer",
    "title": "He nailed three big S&P 500 moves this year. Here's where this strategist sees stocks headed next, with beaten down names to buy. - MarketWatch",
    "description": "Critical information for the U.S. trading day",
    "url": "https://www.marketwatch.com/story/he-nailed-three-big-s-p-500-moves-this-year-heres-where-this-strategist-sees-stocks-headed-next-with-beaten-down-names-to-buy-11664966394",
    "urlToImage": "https://images.mktw.net/im-636666/social",
    "publishedAt": "2022-10-05T10:39:00Z",
    "content": "A Wall Street hat trick may not be on the cards, with stock futures in the red ahead of an OPEC meeting and more data.\r\nA two-day rally was never a guaranteed exit out of the bear woods anyway, as so… [+145 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Clare Duffy",
    "title": "In major reversal, Elon Musk again proposes buying Twitter at full price - CNN",
    "description": "Elon Musk on Monday sent a letter to Twitter proposing to follow through with his deal to buy the company at the originally agreed upon price of $54.20 per share, according to a securities filing on Tuesday.",
    "url": "https://www.cnn.com/2022/10/04/tech/elon-musk-twitter-deal/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221003161026-03-elon-musk-0309-file.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2022-10-05T09:47:00Z",
    "content": "Elon Musk on Monday sent a letter to Twitter proposing to follow through with his deal to buy the company at the originally agreed upon price of $54.20 per share, according to a securities filing on … [+5785 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Sophie Kiderlin",
    "title": "Treasury yields rise as uncertainty over Fed interest rate policy spreads - CNBC",
    "description": "Treasury yields rose on Wednesday after declining for two consecutive days at the start of the week, as uncertainty over future interest rate hikes continues.",
    "url": "https://www.cnbc.com/2022/10/05/treasury-yields-rise-as-uncertainty-over-fed-rate-policy-spreads.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107118025-gettyimages-1423430427-032a3354_6eaed9eb-e653-4baa-a93d-4ae4bf0e961d.jpeg?v=1664960017&w=1920&h=1080",
    "publishedAt": "2022-10-05T08:53:37Z",
    "content": "Treasury yields rose on Wednesday after declining for two consecutive days at the start of the week, as uncertainty over future interest rate hikes continues and stock futures pull back.\r\nThe yield o… [+1503 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Sarah Min",
    "title": "Stock futures fall following a sharp two-day rally on Wall Street - CNBC",
    "description": "Some traders wonder whether a pullback in Treasury yields could mean markets have finally priced in a bottom.",
    "url": "https://www.cnbc.com/2022/10/04/stock-market-futures-open-to-close-news.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107114794-NYSE-Trading-Floor-Photo-220907-CC-PRESS-3.jpg?v=1664920999&w=1920&h=1080",
    "publishedAt": "2022-10-05T08:03:00Z",
    "content": "U.S. stock futures fell on Wednesday morning after the S&amp;P 500 posted its best two-day gain in roughly two years.\r\nDow Jones Industrial Average futures declined by 150 points, or 0.49%. S&amp;P 5… [+1274 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WOLF STREET"
    },
    "author": null,
    "title": "Bank of England Bought No Bonds Today, after Buying only £22 Million on Monday, instead of £5 Billion per Day - WOLF STREET",
    "description": "Carefully communicating this isn’t a Pivot to QE but a temporary “backstop” to calm a panic. And it calmed the panic with minimal purchases.",
    "url": "https://wolfstreet.com/2022/10/04/bank-of-england-bought-no-bonds-today-after-buying-only-22-million-on-monday-instead-of-5-billion-per-day/",
    "urlToImage": "https://wolfstreet.com/wp-content/uploads/2022/10/UK-bonds-gilts-2022-10-04_10-year.png",
    "publishedAt": "2022-10-05T03:58:42Z",
    "content": "Carefully communicating this isnt a Pivot to QE but a temporary backstop to calm a panic. And it calmed the panic with minimal purchases.\r\nThis was the infamous Pivot back to QE: The Bank of England … [+3793 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Abigail Ng",
    "title": "Hong Kong's Hang Seng soars 4% on return to trade; Asia markets rise after U.S. stocks popped - CNBC",
    "description": "Shares in the Asia-Pacific traded higher on Wednesday after U.S. stocks rallied for a second day.",
    "url": "https://www.cnbc.com/2022/10/05/asia-markets-wall-street-south-korea-cpi-stocks-oil-opec.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106804706-1606865566516-gettyimages-1229866437-JAPAN_JPX.jpeg?v=1664927634&w=1920&h=1080",
    "publishedAt": "2022-10-05T02:04:00Z",
    "content": "Shares in the Asia-Pacific traded higher on Wednesday after U.S. stocks rallied for a second day.\r\nHong Kong's Hang Seng index jumped 4.4% before paring some gains to trade at 3.8%, on its return to … [+1384 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Alex Harring",
    "title": "Goldman says these stocks with high cash returns will work in this economy. One of them could nearly double - CNBC",
    "description": "The bank screened for stocks it believes can deliver during difficult markets.",
    "url": "https://www.cnbc.com/2022/10/05/goldman-says-these-stocks-with-high-cash-returns-will-work-in-this-economy.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/105664113-1546891871953gettyimages-535058993.jpeg?v=1664932720&w=1920&h=1080",
    "publishedAt": "2022-10-05T01:18:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Benzinga"
    },
    "author": "Shivdeep Dhaliwal",
    "title": "Dogecoin Outstrips Bitcoin, Ethereum — Analyst Says 'Relief Rally In Q4 is On The Horizon' For This Major - Benzinga",
    "description": "Cryptocurrencies were seen spiking on Tuesday evening as the global cryptocurrency market cap rose 2.7% to $970 billion at 8:17 p.m. EDT.",
    "url": "https://www.benzinga.com/markets/cryptocurrency/22/10/29148029/dogecoin-gains-eclipse-bitcoin-ethereum-spike-analyst-says-relief-rally-in-q4-is-on-the-ho",
    "urlToImage": "https://cdn.benzinga.com/files/images/story/2022/10/04/shutterstock_1969078429.jpg?width=1200&height=800&fit=crop",
    "publishedAt": "2022-10-05T01:15:46Z",
    "content": "Cryptocurrencies were seen spiking on Tuesday evening as the global cryptocurrency market cap rose 2.7% to $970 billion at 8:17 p.m. EDT.\r\n<table>Price Performance Of Major Coins\r\n<tr><th>Coin</th><t… [+4146 chars]"
    },
    {
    "source": {
    "id": "buzzfeed",
    "name": "Buzzfeed"
    },
    "author": "Megan Liscomb",
    "title": "\"They Doubled In Price\": 34 Common Grocery Items That People Say Are Costing Them Way, Way More Than They Used To - BuzzFeed",
    "description": "\"The other day I went to buy a pack of ramen that used to be 25 cents. I hadn’t bought any in a while and almost passed out to see it was now 45 cents. Can I still find 45 cents? Sure, but it just captures the whole problem. Prices didn’t jump; they did an Ol…",
    "url": "https://www.buzzfeed.com/meganeliscomb/grocery-price-inflation-2022",
    "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-10/4/16/enhanced/037c1440c087/original-858-1664902323-11.jpg?crop=1243:650;0,89%26downsize=1250:*",
    "publishedAt": "2022-10-05T00:31:02Z",
    "content": null
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Taylor Lorenz",
    "title": "Facebook shuts Bulletin, it's take on Substack - The Washington Post",
    "description": "The decision to shut down Bulletin is an indication that Facebook found a subscriber-focused site was not as lucrative as hoped.",
    "url": "https://www.washingtonpost.com/technology/2022/10/04/facebook-bulletin-newsletter-close/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O3EF7RCCYUI63PQXRHF6NOGAUU.jpg&w=1440",
    "publishedAt": "2022-10-04T23:53:00Z",
    "content": "Facebook parent Meta announced on Tuesday that it will shutter its newsletter platform Bulletin in early January, less than two years after it was launched.\r\nThe service was intended to capitalize on… [+3924 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Jim Cramer says the market is in its 'high peaks region' - CNBC Television",
    "description": "Cramer pointed out the \"high peaks\" he's noticed in the stock market on Tuesday.",
    "url": "https://www.youtube.com/watch?v=RUaYBs7-RB8",
    "urlToImage": "https://i.ytimg.com/vi/RUaYBs7-RB8/hqdefault.jpg",
    "publishedAt": "2022-10-04T23:48:55Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Zelle fraud cases exploding in 2022 - FOX 5 New York",
    "description": "According to a Senate report, incidents of online fraud claims are exploding and adding insult to injury, banks typically are not refunding customers despite...",
    "url": "https://www.youtube.com/watch?v=ED7aU5QEwN8",
    "urlToImage": "https://i.ytimg.com/vi/ED7aU5QEwN8/hqdefault.jpg",
    "publishedAt": "2022-10-04T23:18:39Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "syracuse.com"
    },
    "author": "Mark Weiner | mweiner@syracuse.com",
    "title": "Micron picks Syracuse suburb for huge computer chip plant that would bring up to 9,000 jobs - syracuse.com",
    "description": "Semiconductor giant would invest $100B to build a mega-complex here. \"This is incredible and transformative news for Central New York,\" Schumer says.",
    "url": "https://www.syracuse.com/business/2022/10/micron-picks-syracuse-suburb-for-huge-computer-chip-plant-that-would-bring-up-to-9000-jobs.html",
    "urlToImage": "https://www.syracuse.com/resizer/WQFzML9JPlInn9bjP3GF5ndBcNw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/6PODTTPKPNAQJNX2LNW62JAPD4.jpg",
    "publishedAt": "2022-10-04T22:39:00Z",
    "content": "Micron Technology plans to spend up to $100 billion building a mega-complex of computer chip plants in Syracuses northern suburbs in what would be the largest single private investment in New York hi… [+14436 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "KSN-TV"
    },
    "author": "Stephanie Nutt",
    "title": "Kansas Sonic franchise operator violates child labor laws, fined nearly $42K - KSN-TV",
    "description": "A Sonic franchise operator in the Wichita-area has been fined nearly $42,000 for violating child labor provisions of the Fair Labor Standards Act.",
    "url": "https://www.ksn.com/news/local/kansas-sonic-franchise-operator-violates-child-labor-laws-fined-nearly-42k/",
    "urlToImage": "https://www.ksn.com/wp-content/uploads/sites/13/2022/10/SONIC-SIGN.jpeg?w=1280",
    "publishedAt": "2022-10-04T21:57:26Z",
    "content": "WICHITA, Kan. (KSNW) — A Sonic franchise operator in the Wichita area has been fined nearly $42,000 for violating child labor laws.\r\nAccording to the U.S. Department of Labor, their Wage and Hour Div… [+1864 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "KTRK-TV"
    },
    "author": null,
    "title": "CHI Health Systems IT security incident: St. Luke's in Houston impacted by nationwide outage - KTRK-TV",
    "description": "The health system serving the Houston area said hospitals are operational, but some patient appointments were affected.",
    "url": "https://abc13.com/commonspirit-health-st-lukes-hospital-chi-system-down-it-security-incident/12294900/",
    "urlToImage": "https://cdn.abcotvs.com/dip/images/12295929_100422-ktrk-ewn-10pm-DHU-st-lukes-chi-it-security-incident-irios-vid.jpg?w=1600",
    "publishedAt": "2022-10-04T21:44:43Z",
    "content": "HOUSTON, Texas (KTRK) -- You might not see an appointment through on Tuesday if you're being seen at a St. Luke's Health facility.\r\nThe hospital system serving the Houston area confirmed that its par… [+1305 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "When Will the Fed Pivot? - Bloomberg Markets and Finance",
    "description": "The Reserve Bank of Australia surprised investors Tuesday with a smaller-than-expected interest-rate increase, helping fuel a global rally in stocks amid hop...",
    "url": "https://www.youtube.com/watch?v=FzJ_ex8yYKY",
    "urlToImage": "https://i.ytimg.com/vi/FzJ_ex8yYKY/hqdefault.jpg",
    "publishedAt": "2022-10-04T21:31:40Z",
    "content": null
    }
    ]
    
     
    
    constructor(){
        super();
        
        this.state = {
           articles: [],
           loading : false,
           page: 1
        }
    }
    async componentDidMount(){
      console.log("cdm");
      let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({ articles: parsedData.articles })
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7"&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
}
  handleNextClick = async () => {
    console.log("Next");
   
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
}


  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey- Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>

            <NewsItem title={element.title?element.title:""}
            description={element.description?element.description:""} imageUrl={element.urlToImage}
            newsUrl={element.url}/>
              </div>

         })}
      </div>
      <div className="container d-flex justify-content-between">
    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
    <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div>
      </div>
    ) 
  }
}

export default News
