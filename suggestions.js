var suggestions = [
    { 'value': 'az', 'label': 'Amazon' },
    { 'value': 'gdata', 'label': 'Government Data' },
    { 'value': 'wordy', 'label': 'Wordy Words' },
    { 'value': 'social', 'label': 'Big Social' },
    { 'value': 'blogh', 'label': 'Blog Hosts' },
    { 'value': 'blogd', 'label': 'Blog Directories' },
    { 'value': 'foodie', 'label': 'Foodie Recipes' },
    { 'value': 'sayings', 'label': 'Great Sayings' },
    { 'value': 'images', 'label': 'Image Hound' },
    { 'value': 'myse', 'label': 'My Search Engine' },
    { 'value': 'usmade', 'label': 'Made in USA' },
    { 'value': 'math', 'label': 'Math How' },
    { 'value': 'sports', 'label': 'Sports Hound' },
    { 'value': 'travel', 'label': 'Travel Hound' },
    { 'value': 'tdj', 'label': 'True Dollar Journal' },
    { 'value': 'video', 'label': 'Video Hound' },
    { 'value': 'yt', 'label': 'YouTube' },
    { 'value': 'yn', 'label': 'YubNub' },
    { 'value': 'xxx', 'label': 'Wank Machine' },
    { 'value': 'b', 'label': 'Bing' },
    { 'value': 'd', 'label': 'Duck Duck Go' },
    { 'value': 'g', 'label': 'Google' },
    { 'value': 'oe', 'label': 'English Etymology Dictionary' },
    { 'value': 'wayback', 'label': 'Wayback Machine' },
    { 'value': 'da', 'label': 'deviantART' },
    { 'value': 'gcache', 'label': 'Google Cache' },
    { 'value': 'gdocs', 'label': 'Google Documents' },
    { 'value': 'gim', 'label': 'Google Images' },
    { 'value': 'gmap', 'label': 'Google Maps' },
    { 'value': 'gmail', 'label': 'Gmail' },
    { 'value': 'imdb', 'label': 'IMDb' },
    { 'value': 'ip', 'label': 'IP Address"' },
    { 'value': 'kym', 'label': 'Know Your Meme' },
    { 'value': 'tw', 'label': 'Twitter' },
    { 'value': 'wp', 'label': 'Wikipedia' },
    { 'value': 'amg', 'label': 'Allmusic Guide' },
    { 'value': 'gbold', 'label': 'Google Books 1870-1929' },
    { 'value': 'tss', 'label': 'Tumblr Slideshow' },
    { 'value': 'tgv', 'label': 'Tumblr Grid View' },
    { 'value': 'yum', 'label': 'Recipes / Yummly' },
    { 'value': 'htag', 'label': 'Hashtags' },
    { 'value': 'inst', 'label': 'Instructables How to Make' },
    { 'value': 'bmap', 'label': 'Bing Map' },
    { 'value': 'acronym', 'label': 'Acronym Finder' },
    { 'value': 'bgifs', 'label': 'Bing Gifs' },
    { 'value': 'bim', 'label': 'Bing Images' },    
    { 'value': 'bang', 'label': 'Run Duck Duck Go Bang' },        
    { 'value': 'bangs', 'label': 'Look Up Bangs on Duck Duck Go' },        
    { 'value': 'ytg', 'label': 'YouTube in Google' },      
    { 'value': 'covers', 'label': 'Song Covers' },    
    { 'value': 'gdd', 'label': 'Driving Directions Google Map' },
	{ 'value': 'ace', 'label': 'Ace Hardware' },
	{ 'value': 'autozone', 'label': 'AutoZone' },
	{ 'value': 'bestbuy', 'label': 'BestBuy' },
	{ 'value': 'bnbooks', 'label': 'Barnes & Noble' },
	{ 'value': 'bevmo', 'label': 'BevMo' },
	{ 'value': 'costco', 'label': 'Costco' },
	{ 'value': 'harborfreight', 'label': 'Harbor Freight Tools' },
	{ 'value': 'homedepot', 'label': 'Home Depot' },
	{ 'value': 'ikeaca', 'label': 'Ikea Canada' },
	{ 'value': 'londondrugs', 'label': 'London Drugs' },
	{ 'value': 'rei', 'label': 'REI' },
	{ 'value': 'sof', 'label': 'Save-On-Foods' },
	{ 'value': 'sears', 'label': 'Sears' },
	{ 'value': 'target', 'label': 'Target' },
	{ 'value': 'cantire', 'label': 'Canadian Tire' },
	{ 'value': 'petsmartca', 'label': 'PetSmart Canada' },
	{ 'value': 'eddieb', 'label': 'Eddie Bauer' },
	{ 'value': 'macys', 'label': 'Macys' },
	{ 'value': 'nordstroms', 'label': 'Nordstrom' },
	{ 'value': 'homebase', 'label': 'Homebase' },
	{ 'value': 'ikeaau', 'label': 'IKEA Australia' },
	{ 'value': 'jcpenney',  'label': 'JC Penney' },
	{ 'value': 'kmart', 'label': 'Kmart' },
	{ 'value': 'llbean', 'label': 'LL Bean' },
	{ 'value': 'lowesca', 'label': 'Lowes Canada' },
	{ 'value': 'menards', 'label': 'Menards' },
	{ 'value': 'officed', 'label': 'OfficeDepot' },
	{ 'value': 'petsmart', 'label': 'PetSmart' },
	{ 'value': 'rexall', 'label': 'Rexall' },
	{ 'value': 'sobeys', 'label': 'Sobeys' },
	{ 'value': 'realcan', 'label': 'Real Canadian Superstore' },
	{ 'value': 'walmart', 'label': 'WalMart' },
	{ 'value': 'bestbuy', 'label': 'Best Buy' },
	{ 'value': 'bhpv', 'label': 'BH Photo Video' },
	{ 'value': 'homedepotca', 'label': 'Home Depot Canada' },
	{ 'value': 'ikea', 'label': 'Ikea' },
	{ 'value': 'kohls', 'label': 'Kohls' },
	{ 'value': 'loblaws', 'label': 'Loblaws' },
	{ 'value': 'lowes', 'label': 'Lowes' },
	{ 'value': 'petco', 'label': 'Petco' },
	{ 'value': 'sdm', 'label': 'Shoppers Drug Mart' },
	{ 'value': 'staplesca', 'label': 'Staples Canada' },
	{ 'value': 'ebay', 'label': 'eBay' },
	{ 'value':  'kbb', 'label': 'Kelly Blue Book' }, 
	{ 'value':  'paypal', 'label': 'PayPal' }, 
	{ 'value':  'socmen', 'label': 'Social Mention' }, 
	{ 'value':  'ixquick', 'label': 'ixquick' }, 
	{ 'value':  'ixi', 'label': 'Ixquick Picture Search' }, 
	{ 'value':  'ixv', 'label': 'Ixquick videos' }, 
	{ 'value':  'spi', 'label': 'Startpage Images' }, 
	{ 'value':  'spv', 'label': 'Startpage Videos' }, 
	{ 'value':  'sp', 'label': 'Startpage' }, 
	{ 'value':  'songfacts', 'label': 'Songfacts' }, 
	{ 'value':  'setlist', 'label': 'Setlist.fm' }, 
	{ 'value':  'calvinhobbes', 'label': 'Calvin And Hobbes' }, 
	{ 'value':  'dilbert', 'label': 'Dilbert' }, 
	{ 'value':  'allmusica', 'label': 'AllMusic Albums' }, 
	{ 'value':  'beeradvo', 'label': 'BeerAdvocate' }, 
	{ 'value':  'allmusic', 'label': 'AllMusic' }, 
	{ 'value':  'imgur', 'label': 'Imgur gifs' }, 
	{ 'value':  'rsdb', 'label': 'Racial Slur Database' }, 
	{ 'value':  'gscholar', 'label': 'Google Scholar' }, 
	{ 'value':  'stanfordphil', 'label': 'Stanford Encyclopedia of Philosophy' }, 
	{ 'value':  'scidic', 'label': 'The Science Dictionary' }, 
	{ 'value':  'khan', 'label': 'Khan Academic' }, 
	{ 'value':  'memrise', 'label': 'Memrise' }, 
	{ 'value':  'mitocw', 'label': 'MIT OpenCourseWare' }, 
	{ 'value':  'scidaily', 'label': 'Science Daily' }, 
	{ 'value':  'iephil', 'label': 'Internet Encyclopedia of Philosophy' }, 
	{ 'value':  'fooddata', 'label': 'nutritiondata' }, 
	{ 'value':  'foodsubs', 'label': 'Cooks Thesaurus' }, 
	{ 'value':  'drinks', 'label': 'Drinksmixer' }, 
	{ 'value':  'ratebeer', 'label': 'ratebeer' }, 
	{ 'value':  'yelp', 'label': 'Yelp' }, 
	{ 'value':  'mayoclinic', 'label': 'Mayo Clinic' }, 
	{ 'value':  'meddic', 'label': 'The Free Dictionary (Medical)' }, 
	{ 'value':  'nih', 'label': 'NIH' }, 
	{ 'value':  'yfinance', 'label': 'Yahoo Finance' }, 
	{ 'value':  'webmd', 'label': 'WebMD' }, 
	{ 'value':  'gpatents', 'label': 'Google Patents' }, 
	{ 'value':  'findlaw', 'label': 'FindLaw' }, 
	{ 'value':  'engse', 'label': 'English StackExchange' }, 
	{ 'value':  'howstuff', 'label': 'How Stuff Works' }, 
	{ 'value':  'investopedia', 'label': 'Investopedia' }, 
	{ 'value':  'kickstarter', 'label': 'Kickstarter' }, 
	{ 'value':  'mathencyc', 'label': 'Encyclopedia of Mathematics' }, 
	{ 'value':  'ud', 'label': 'UrbanDictionary' }, 
	{ 'value':  'zillow', 'label': 'Zillow' }, 
	{ 'value':  'trulia', 'label': 'Trulia' }, 
	{ 'value':  'nps', 'label': 'National Park Service (USA)' }, 
	{ 'value':  'travelmath', 'label': 'TravelMath' }, 
	{ 'value':  'openweather', 'label': 'Open Weather Map' }, 
	{ 'value':  'twn', 'label': 'The Weather Network' }, 
	{ 'value':  'twc', 'label': 'The Weather Channel' }, 
	{ 'value':  'bweather', 'label': 'Bing Weather' }, 
	{ 'value':  'noaa', 'label': 'NOAA' }, 
	{ 'value':  'wu', 'label': 'Weather Underground' }, 
	{ 'value':  'nws', 'label': 'National Weather Service' }, 
	
	{ 'value':  'azvid', 'label': 'Amazon Prime Video' },  
	{ 'value':  'kodi', 'label': 'Kodi Wiki' },  
	{ 'value':  'netflix', 'label': 'Netflix' },  
	{ 'value':  'pftv', 'label': 'Project Free TV' },  
	{ 'value':  'putlocker', 'label': 'PutLocker' },  
	{ 'value':  'watchseries', 'label': 'Watch Series' },  
	{ 'value':  'couchtuner', 'label': 'Couchtuner' },  
	{ 'value':  'tvguide', 'label': 'TV Guide' },  
	{ 'value':  'crunchyroll', 'label': 'CrunchyRoll' },  
	{ 'value':  'funimation', 'label': 'FUNimation' },  
	{ 'value':  'bcdb', 'label': 'The Big Cartoon Database' },  
	{ 'value':  'stubhub', 'label': 'StubHub' },  
	{ 'value':  'tixnet', 'label': 'TicketNetwork' },  
	{ 'value':  'metasearch', 'label': 'metasearch' },  
	{ 'value':  'tumblr', 'label': 'tumblr' },  
	{ 'value':  'ggifs', 'label': 'Google gifs' },  
	{ 'value':  'giphytv', 'label': 'Giphy TV' },  
	{ 'value':  'gifcities', 'label': 'Gifcities' },  
	{ 'value':  'gfycat', 'label': 'reddit GfycatDepot' },  
	{ 'value':  'giphy', 'label': 'Giphy' },  
	{ 'value':  'cci', 'label': 'creative commons' },  
	{ 'value':  'dauser', 'label': 'DeviantArt User' },  
	{ 'value':  'ddgi', 'label': 'DuckDuckGo Images' },  
	{ 'value':  'flickrcc', 'label': 'Flickr All Creative Commons' },  
	{ 'value':  'flickr', 'label': 'Flickr' },  
	{ 'value':  'getty', 'label': 'Getty Images' },  
	{ 'value':  'gimca', 'label': 'Google Canada Image Search' },  
	{ 'value':  'gimr', 'label': 'Google Image Reuse  ' },  
	{ 'value':  'giml', 'label': 'Google Images Large ' },  
	{ 'value':  'gimcr', 'label': 'Google Images Commercial Reuse' },  
	{ 'value':  'grevi', 'label': 'Google Reverse Image Search' },  
	{ 'value':  'instagram', 'label': 'Instagram' },  
	{ 'value':  'logo', 'label': 'Instant Logo Search' },  
	{ 'value':  'houzz', 'label': 'Houzz' },  
	{ 'value':  'yandi', 'label': 'Yandex Images' },  
	{ 'value':  'yand', 'label': 'Yandex' },  	
	{ 'value':  'freesound', 'label': 'Freesound' },  
	{ 'value':  'wcommons', 'label': 'Wikimedia Commons' },  
	{ 'value':  'imdb', 'label': 'IMBD' },  
	{ 'value':  'imdbkw', 'label': 'IMDb Keywords' },  
	{ 'value':  'kidsinmind', 'label': 'Kids in Mind' },  
	{ 'value':  'mrqe', 'label': 'Movie Review Query Engine' },  
	{ 'value':  'timedate', 'label': 'timeanddate' },  
	{ 'value':  'drudge', 'label': 'Drudge Report' },  
	{ 'value':  'feedly', 'label': 'Feedly' },  
	{ 'value':  'gnews', 'label': 'Google News' },  
	{ 'value':  'gfinance', 'label': 'Google Finance' },  
	{ 'value':  'x4chan', 'label': '4chan' },  
	{ 'value':  'x500px', 'label': '500px' },  
	{ 'value':  'ytsubs', 'label': 'YouTube Subscriptions' },  
	{ 'value':  'subreddit', 'label': 'Reddit Subreddits' },  
	{ 'value':  'sams', 'label': 'Sams Club' },  
	{ 'value':  'gdrive', 'label': 'Google Drive' },  
	{ 'value':  'gmail', 'label': 'Gmail' },  
	{ 'value':  'stackoverflow', 'label': 'Stackoverflow' },  
	{ 'value':  'vimeo', 'label': 'Vimeo' },  
	{ 'value':  'gsince', 'label': 'Google Since kw;[hn,dn,mn,yn]' },  
	{ 'value':  'timer', 'label': 'Timer [add minutes | hour]' },  
	{ 'value':  'sigalert', 'label': 'Sigalert Traffic' },  
	{ 'value':  'alarmclock', 'label': 'Alarm Clock' },  
	{ 'value':  'weatherca', 'label': 'Weather Canada' },  
	{ 'value':  'alluc', 'label': 'Alluc' },  
	{ 'value':  'theo', 'label': 'Bible Christian Theology' },  
	{ 'value':  'gdr', 'label': 'Google Date Range' },  
	{ 'value':  'icast', 'label': 'Intellicast' },  
	{ 'value':  'bitchute', 'label': 'Bitchute Video' },  
	{ 'value':  'vidme', 'label': 'Vidme Video' },  
	{ 'value':  'sms', 'label': 'Shortmarks' },  
	{ 'value':  'gvtm', 'label': 'Vancouver Traffic' },  
	{ 'value':  'memegen', 'label': 'Imgflip Meme Generator' },  
	{ 'value':  'bloggerpost', 'label': 'Post on Blogger' },  
	{ 'value':  'bloggerstats', 'label': 'Blogger Stats' },  
	{ 'value':  'trust', 'label': 'Knowledge Trust' },  
	{ 'value':  'frink', 'label': 'Frink' },  
	{ 'value':  'gsite', 'label': 'Google Site' },  
	{ 'value':  'gimurl', 'label': 'Image Search by URL on Google' },  
	{ 'value':  'btimein', 'label': 'Time in Y When Time in X' },  
	{ 'value':  'gtrans', 'label': 'Google Translate [from;to;word(s)] en,de,fr,es,ru' },  
	{ 'value':  'gflights', 'label': 'Google Flights from;to;yyyy-mm-dd;yyyy-mm-dd' },  
	{ 'value':  'chromeext', 'label': 'Chrome Extensions' },  
	{ 'value':  'bnews', 'label': 'News / Bing 1h:4,4h:5,24h:7,7d:8,30d:9' },  
	{ 'value':  'newsnow', 'label': 'News Now UK' },  
	{ 'value':  'uksun', 'label': 'UK Sun' },  	
	{ 'value':  'u', 'label': 'URL domain;[endpoint]' },  		
	{ 'value':  'ukdailymail', 'label': 'UK Daily Mail' },  		
	{ 'value':  'ukexpress', 'label': 'UK Express' },  			
	{ 'value':  'foxbiz', 'label': 'Fox Business' },  				
	{ 'value':  'wikihow', 'label': 'Wikihow' },  					
	{ 'value':  'gtransit', 'label': 'Google Transit' },  					
	{ 'value':  'indeed', 'label': 'Indeed Jobs' },  					
	{ 'value':  'whitepages', 'label': 'Whitepages' },  						
	{ 'value':  'revphone', 'label': 'Phone Reverse Lookup' },  						
	{ 'value':  'simsites', 'label': 'Similiar Sites' },  						
	{ 'value':  'gexpress', 'label': 'Google Express' },  						
	{ 'value':  'gabh', 'label': 'Gab Hashtag Search' },  
	{ 'value':  'gab', 'label': 'Gab [kwds;[date|relevance|score]' },  
	{ 'value':  'gabe', 'label': 'Gab Explore' },  		
	{ 'value':  'boodigo', 'label': 'Boodigo Porn' },  				
	{ 'value':  'tlist', 'label': 'Twitter List' },  				
	{ 'value':  'gbold2', 'label': 'Google Books 1500-1869' },  				
	{ 'value':  'ynus', 'label': 'YubNub URL Substitution' },  				
	{ 'value':  'upi', 'label': 'UPI' }, 
	{ 'value':  'gbfb', 'label': 'Google Free Books'}, 	
	{ 'value':  'bittube, 'label': 'BitTube'}, 	
	
	
	
];