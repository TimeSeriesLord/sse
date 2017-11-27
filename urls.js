var sites = {

/* 
-------------------------------------
GOOGLE CUSTOM SEARCH
~~~~~~~~~~~~~~~~~~~~~~ 
*/

gdata: ['Gov Data', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:je3fjsqcijm&q=%s'],
ref: ['Big Ref', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:0hnabyt7zuw&q=%s'],
social: ['Big Social', 'https://cse.google.com/cse/publicurl?cx=014888467458561743118:d0fnimmfg20&q=%s'],
blogh: ['Blog Hosts', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:g1nqxo8x81y&q=%s'],
blogd: ['Blog Directories', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:pukj6rewm0u&q=%s'],
foodie: ['Foodie Recipes', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:frzvmu7jqfs&q=%s'],
sayings: ['Great Sayings', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:slhiazwukk8&q=%s'],
math: ['Math How', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:7yyqix2m5cs&q=%s'],
images: ['Image Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:iftil0q9gds&q=%s'],
john: ['Johns SE', 'https://cse.google.com/cse/publicurl?cx=014888467458561743118:kz2ltrch1_m&q=%s'],
sports: ['Sports Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:t5nq63bfci4&q=%s'],
travel: ['Travel Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:xtwe2noxwig&q=%s'],
tdj: ['True Dollar Journal (default)', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:h6ernfazave&q=%s'],
video: ['Video Hound', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:9b_hegjhy-g&q=%s'],
xxx: ['XXX', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:wm4rlz__bp4&q=%s'],
usa: ['Made in USA', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:q2ady31mcg0&q=%s'],
theo: ['Theo Bible studies', 'https://www.google.com/cse/publicurl?cx=014888467458561743118:m_ld3udekwy&q=%s'],



/* 
-------------------------------------
Site Specific Search URLs
~~~~~~~~~~~~~~~~~~~~~~ 
*/

// ---[ A
az: ['Amazon', 'https://www.amazon.com/s?ie=UTF&index=blended&keywords=%s&tag=stusa-20'],
acronym: ['Acronym Finder', 'http://www.acronymfinder.com/~/search/af.aspx?Acronym=%s'],
alarmclock: ['alarmclock', 'http://www.clock2d.com/#'],
alluc: ['Alluc', 'http://www.alluc.ee/stream/search?q=%s&stream=Find+Streams'],

// ---[ B

b: ['Bing', 'http://www.bing.com/search?q=%s&filters=ex1%3a%22ez%s%22'],
bmap: ['Bing Map', 'https://www.bing.com/maps/default.aspx?where1=%s'],
bgifs: ['Bing Gifs', 'http://www.bing.com/images/search?q=%s&go=&qs=bs&qft=+filterui:photo-animatedgif&form=QBIR'],
bim: ['Bing Image', 'http://www.bing.com/images/search?q=%s'],
bang: ['Bangs on DDG (omit the !)', 'https://duckduckgo.com/?q='+"!"+'%s'],
bangs: ['Bangs on DDG', 'https://duckduckgo.com/bang?q=%s'],
bitchute: ['Bitchute', 'https://www.bitchute.com/search?q=%s&sort=date_created+desc'],

// ---[ C
covers: ['Secondhand Songs', 'http://secondhandsongs.com/search?search_text=%s'],

// ---[ D
d: ['Duck Duck Go', 'https://duckduckgo.com/?q=%s'],
da: ['deviantART', 'http://browse.deviantart.com/?q=%s'],

// ---[ F
fl: ['Flickr Search', 'http://flickr.com/search/?q=%s'],

// ---[ G
g: ['Google', 'http://www.google.com/search?q=%s'],
gim: ['Google Images', 'http://images.google.com/images?q=%s'],
gcache: ['Google Cache', 'http://www.google.com/search?q=cache:+%s'],
gdocs: ['Google Documents', 'http://docs.google.com/?pli=1#search/%s'],
gmap: ['Google Map', 'http://www.google.com/maps?q=%s'],
gmail: ['Gmail', 'http://gmail.google.com/gmail?search=query&q=%s&view=tl&fs=1'],
gbold: ['Google Books 1870-1929', 'https://www.google.com/search?hl=en&tbo=d&tbm=bks&tbs=bkv:r,cdr:1,cd_min:%3A1%2F1%2F1870%2Ccd_max%3A12%2F31%2F1929&q=%s'],
gt: ['Google from Time', 'https://www.google.com/search?hl=en&q=%s&tbo=1&tbs=qdr:%s'],
gdr: ['Google with Date Range', 'https://www.google.com/search?q=%s&source=lnt&tbs=cdr:1,cd_min:%s,cd_max:%s&tbm='],
gdd: ['Driving Directions Google Maps', 'https://www.google.com/maps?saddr=%s&daddr=%s&output=classic'],
gab: ['Gab', 'https://gab.ai/search/%s/%s'],

// ---[ H
htag: ['Hashtagify', 'http://hashtagify.me/hashtag/%s'],

// ---[ I

imdb: ['IMDb', 'http://www.imdb.com/find?s=all&q=%s'],
ip: ['IP Address', 'https://duckduckgo.com/?q=my+ip+address&ia=answer'],
inst: ['Instructables', 'http://www.instructables.com/howto/?sort=none&q=%s'],
icast: ['Intellicast', 'http://www.intellicast.com/Local/Default.aspx?query=%s'],

// ---[ K
kym: ['Know Your Meme', 'http://knowyourmeme.com/search?q=%s'],

// ---[ M
memegen: ['Imgflip Meme Gen', 'https://imgflip.com/memegenerator'],

// ---[ O

oe: ['Online Etymology Dictionary', 'https://www.etymonline.com/search?q=%s'],

// ---[ S

sigalert: ['Sigalert', 'http://www.sigalert.com/map.asp?Region=%s'],
sms: ['URL', 'https://shortmarks.com/s.php?q=%s'],

// ---[ T
tw: ['Twitter', 'http://search.twitter.com/search?q=%s'],
tss: ['Tumblr Slideshow', 'http://www.tumbview.com/view.php?t=%s'],
tgv: ['Tumblr Grid Viewer', 'http://tumview.com/tumblr/users/%s/photos'],
timer: ['Timer minutes','http://e.ggtimer.com/m/%s'],

// ---[ U

u: ['URL', 'https://www.%s.com/%s'],


// ---[ V

vimeo: ['Vimeo', 'https://www.vimeo.com/search?q=%s'],
vidme: ['vidme', 'https://vid.me/search?q=%s'],

// ---[ W
weatherca: ['Weather Canada', 'http://weather.gc.ca/city/jump_e.html?city=%s&lang=e&unit='],
wp: ['Wikipedia', 'http://en.wikipedia.org/wiki/Special:Search?search=%s&go=Go'],
wpr: ['Wikipedia', 'http://en.wikipedia.org/wiki/Special:Random'],
wayback: ['Archive.org', 'http://web.archive.org/web/*/%s'],

// ---[ Y
yand: ['Yandex', 'https://yandex.com/search/?text=%s&lr=87'],
yandi: ['Yandex', 'https://yandex.com/images/search?text=%s'],

yt: ['YouTube', 'http://www.youtube.com/results?search_query=%s'],
yn: ['YubNub', 'http://yubnub.org/parser/parse?command=%s'],
yum: ['Yummly', 'http://www.yummly.com/recipes?q=%s'],
ytplaylist: ['YouTube Playlist', 'http://www.youtube.com/view_all_playlists?sf=name&sa=0'],
ytg: ['YT in G', 'https://www.google.com/search?q=%22%s%22+site:youtube.com&tbs=qdr:%s'],
ytsubs: ['YouTube Subscriptions', 'https://www.youtube.com/feed/subscriptions'],


/* 
-------------------------------------
Google Site Search
~~~~~~~~~~~~~~~~~~~~~~ 
*/

amg: ['Allmusic' ,'https://www.google.com/?gws_rd=ssl#q=site:allmusic.com+%s'],

/* 
-------------------------------------
DUCK DUCK GO bangs
~~~~~~~~~~~~~~~~~~~~~~ 
*/

ace: ['Ace Hardware', 'https://duckduckgo.com/?q=!ace%20%s'],
autozone: ['AutoZone', 'https://duckduckgo.com/?q=!autozone%20%s'],
allmusica: ['AllMusic Albums', 'https://duckduckgo.com/?q=!albums%20%s'],
allmusic: ['AllMusic', 'https://duckduckgo.com/?q=!allmusic%20%s'],
beeradvo: ['BeerAdvocate', 'https://duckduckgo.com/?q=!beer%20%s'],
bnbooks: ['Barnes & Noble', 'https://duckduckgo.com/?q=!barnesandnoble%20%s'],
bevmo: ['BevMo', 'http://shop.bevmo.com/search?w=%s'],
bestbuy: ['BestBuy', 'https://duckduckgo.com/?q=!bestbuy%20%s'],
bhpv: ['BH Photo Video', 'https://duckduckgo.com/?q=!bh%20%s'],
costco: ['Costco', 'https://duckduckgo.com/?q=!costco%20%s'],
cantire: ['Canadian Tire', 'https://duckduckgo.com/?q=!canadiantire%20%s'],
eddieb: ['Eddie Bauer', 'https://duckduckgo.com/?q=!eddiebauer%20%s'],
harborfreight: ['Harbor Freight Tools', 'https://duckduckgo.com/?q=!hft%20%s'],
homedepot: ['Home Depot', 'https://duckduckgo.com/?q=!homedepot%20%s'],
homebase: ['Homebase', 'https://duckduckgo.com/?q=!homebase%20%s'],
homedepotca: ['Home Depot Canada', 'https://duckduckgo.com/?q=!homedepotca%20%s'],
ikea: ['Ikea', 'https://duckduckgo.com/?q=!ikea%20%s'],
ikeaca: ['Ikea Canada', 'https://duckduckgo.com/?q=!ikeaca%20%s'],
ikeaau: ['IKEA Australia', 'https://duckduckgo.com/?q=!ikeaau%20%s'],
jcpenney:  ['JC Penney', 'https://duckduckgo.com/?q=!jcpenney%20%s'],
kmart: ['Kmart', 'https://duckduckgo.com/?q=!kmart%20%s'],
kohls: ['Kohls', 'https://duckduckgo.com/?q=!kohls%20%s'],
loblaws: ['Loblaws', 'https://duckduckgo.com/?q=!loblaws%20%s'],
lowes: ['Lowes', 'https://duckduckgo.com/?q=!lowes%20%s'],
londondrugs: ['London Drugs', 'https://duckduckgo.com/?q=!londondrugs%20%s'],
llbean: ['LL Bean', 'https://duckduckgo.com/?q=!llbean%20%s'],
lowesca: ['Lowes Canada', 'https://duckduckgo.com/?q=!lowesca%20%s'],
menards: ['Menards', 'https://duckduckgo.com/?q=!menards%20%s'],
macys: ['Macys', 'https://duckduckgo.com/?q=!macys%20%s'],
nordstroms: ['Nordstrom', 'https://duckduckgo.com/?q=!nordstrom%20%s'],
officed: ['OfficeDepot', 'https://duckduckgo.com/?q=!officedepot%20%s'],
petsmart: ['PetSmart', 'https://duckduckgo.com/?q=!petsmart%20%s'],
petsmartca: ['PetSmart Canada', 'https://duckduckgo.com/?q=!petsmartca%20%s'],
paypal: ['PayPal', 'https://duckduckgo.com/?q=!paypal%20%s'],
petco: ['Petco', 'https://duckduckgo.com/?q=!petco%20%s'],
rei: ['REI', 'https://duckduckgo.com/?q=!rei%20%s'],
rexall: ['Rexall', 'https://duckduckgo.com/?q=!rexall%20%s'],
realcan: ['Real Canadian Superstore', 'https://duckduckgo.com/?q=!superstore%20%s'],
sof: ['Save-On-Foods', 'https://duckduckgo.com/?q=!saveonfoods%20%s'],
sears: ['Sears', 'http://www.sears.com/?keyword=%s'],
sobeys: ['Sobeys', 'https://duckduckgo.com/?q=!sobeys%20%s'],
sdm: ['Shoppers Drug Mart', 'https://duckduckgo.com/?q=!shoppers%20%s'],
staplesca: ['Staples Canada', 'https://duckduckgo.com/?q=!staplesca%20%s'],
socmen: ['Social Mention', 'https://duckduckgo.com/?q=!smention%20%s'],
spi: ['Startpage Images', 'https://duckduckgo.com/?q=!spi%20%s'],
spv: ['Startpage Videos', 'https://duckduckgo.com/?q=!spv%20%s'],
sp: ['Startpage', 'https://duckduckgo.com/?q=!syear%20%s'],
songfacts: ['Songfacts', 'https://duckduckgo.com/?q=!songfacts%20%s'],
setlist: ['Setlist.fm', 'https://duckduckgo.com/?q=!setlist%20%s'],
target: ['Target', 'https://duckduckgo.com/?q=!target%20%s'],
walmart: ['WalMart', 'https://duckduckgo.com/?q=!walmart%20%s'],

calvinhobbes: ['Calvin And Hobbes', 'https://duckduckgo.com/?q=!calvinandhobbes%20%s'],

ixquick: ['ixquick', 'https://duckduckgo.com/?q=!ixquick%20%s'],
ixi: ['Ixquick Picture Search', 'https://duckduckgo.com/?q=!iximg%20%s'],
ixv: ['Ixquick videos', 'https://duckduckgo.com/?q=!ixquickvideos%20%s'],
kbb: ['Kelly Blue Book', 'https://duckduckgo.com/?q=!kbb%20%s'],
dilbert: ['Dilbert', 'https://duckduckgo.com/?q=!dilbert%20%s'],
imgur: ['Imgur gifs', 'https://duckduckgo.com/?q=!igif%20%s'],
rsdb: ['Racial Slur Database', 'https://duckduckgo.com/?q=!rsdb%20%s'],
gscholar: ['Google Scholar', 'https://duckduckgo.com/?q=!googlescholar%20%s'],
stanfordphil: ['Stanford Encyclopedia of Philosophy', 'https://duckduckgo.com/?q=!plato%20%s'],
scidic: ['The Science Dictionary', 'https://duckduckgo.com/?q=!scidict%20%s'],
khan: ['Khan Academic', 'https://duckduckgo.com/?q=!khan%20%s'],
memrise: ['Memrise', 'https://duckduckgo.com/?q=!memrise%20%s'],
mitocw: ['MIT OpenCourseWare', 'https://duckduckgo.com/?q=!mitocw%20%s'],
scidaily: ['Science Daily', 'https://duckduckgo.com/?q=!scd%20%s'],
iephil: ['Internet Encyclopedia of Philosophy', 'https://duckduckgo.com/?q=!iep%20%s'],
fooddata: ['Nutrition Data', 'https://duckduckgo.com/?q=!nutridata%20%s'],
foodsubs: ['Cooks Thesaurus', 'https://duckduckgo.com/?q=!foodsubs%20%s'],
drinks: ['Drinksmixer', 'https://duckduckgo.com/?q=!mixer%20%s'],
ratebeer: ['ratebeer', 'https://duckduckgo.com/?q=!ratebeer%20%s'],
yelp: ['Yelp', 'https://duckduckgo.com/?q=!yelp%20%s'],
mayoclinic: ['Mayo Clinic', 'https://duckduckgo.com/?q=!mayo%20%s'],
meddic: ['The Free Dictionary (Medical)', 'https://duckduckgo.com/?q=!medical%20%s'],
nih: ['NIH', 'https://duckduckgo.com/?q=!nih%20%s'],
yfinance: ['Yahoo Finance', 'https://duckduckgo.com/?q=!yf%20%s'],
webmd: ['WebMD', 'https://duckduckgo.com/?q=!webmd%20%s'],
gpatents: ['Google Patents', 'https://duckduckgo.com/?q=!patent%20%s'],
findlaw: ['FindLaw', 'https://duckduckgo.com/?q=!findlaw%20%s'],
engse: ['English StackExchange', 'https://duckduckgo.com/?q=!en%20%s'],
howstuff: ['How Stuff Works', 'https://duckduckgo.com/?q=!howstuffworks%20%s'],
investopedia: ['Investopedia', 'https://duckduckgo.com/?q=!investopedia%20%s'],

kickstarter: ['Kickstarter', 'https://duckduckgo.com/?q=!kickstarter%20%s'],
mathencyc: ['Encyclopedia of Mathematics', 'https://duckduckgo.com/?q=!eom%20%s'],
ud: ['UrbanDictionary', 'https://duckduckgo.com/?q=!ud%20%s'],
zillow: ['Zillow', 'https://duckduckgo.com/?q=!zillow%20%s'],
nps: ['National Park Service (USA)', 'https://duckduckgo.com/?q=!nps%20%s'],

azvid: ['Amazon Prime Video', 'https://duckduckgo.com/?q=!primevideo%20%s'],
bweather: ['Bing Weather', 'https://duckduckgo.com/?q=!bw%20%s'],
bcdb: ['The Big Cartoon Database', 'https://duckduckgo.com/?q=!bcdb%20%s'],
couchtuner: ['Couchtuner', 'https://duckduckgo.com/?q=!tune%20%s'],
crunchyroll: ['CrunchyRoll', 'https://duckduckgo.com/?q=!crunchyroll%20%s'],
cci: ['creative commons', 'https://duckduckgo.com/?q=!ccsearch%20%s'],
dauser: ['DeviantArt User', 'https://duckduckgo.com/?q=!dauser%20%s'],
ddgi: ['DuckDuckGo Images', 'https://duckduckgo.com/?q=!dggi%20%s'],
drudge: ['Drudge Report', 'https://duckduckgo.com/?q=!drudge%20%s'],
flickr: ['Flickr', 'https://duckduckgo.com/?q=!flickr%20%s'],
flickrcc: ['Flickr All Creative Commons', 'https://duckduckgo.com/?q=!flickrcc%20%s'],
freesound: ['Freesound', 'https://duckduckgo.com/?q=!frs%20%s'],
feedly: ['Feedly', 'https://duckduckgo.com/?q=!fdl%20%s'],
funimation: ['FUNimation', 'https://duckduckgo.com/?q=!funimation%20%s'],
ggifs: ['Google gifs', 'https://duckduckgo.com/?q=!ggif%20%s'],
giphytv: ['Giphy TV', 'https://duckduckgo.com/?q=!giphytv%20%s'],
gifcities: ['Gifcities', 'https://duckduckgo.com/?q=!gifcities%20%s'],
gfycat: ['reddit GfycatDepot', 'https://duckduckgo.com/?q=!gfycatdepot%20%s'],
giphy: ['Giphy', 'https://duckduckgo.com/?q=!giphy%20%s'],
gnews: ['Google News', 'https://duckduckgo.com/?q=!gn%20%s'],
gfinance: ['Google Finance', 'https://duckduckgo.com/?q=!stock%20%s'],
getty: ['Getty Images', 'https://duckduckgo.com/?q=!gettyimages%20%s'],
gimca: ['Google Canada Image Search', 'https://duckduckgo.com/?q=!gica%20%s'],
gimr: ['Google Image Reuse  ', 'https://duckduckgo.com/?q=!imgrwm%20%s'],
giml: ['Google Images Large ', 'https://duckduckgo.com/?q=!il%20%s'],
gimcr: ['Google Images Commercial Reuse', 'https://duckduckgo.com/?q=!gcc%20%s'],
grevi: ['Google Reverse Image Search', 'https://duckduckgo.com/?q=!gri%20%s'],
gdrive: ['Google Drive', 'https://drive.google.com/#search/%s'],
gmail: ['Google mail', 'https://mail.google.com/mail/u/0/#search/%s'],
houzz: ['Houzz', 'https://duckduckgo.com/?q=!houzz%20%s'],
instagram: ['Instagram', 'https://duckduckgo.com/?q=!instagram%20%s'],
imdb: ['IMBD', 'https://duckduckgo.com/?q=!imbd%20%s'],
imdbkw: ['IMDb Keywords', 'https://duckduckgo.com/?q=!imdbk%20%s'],
kodi: ['Kodi Wiki', 'https://duckduckgo.com/?q=!kodi%20%s'],
kidsinmind: ['Kids in Mind', 'https://duckduckgo.com/?q=!kim'],
logo: ['Instant Logo Search', 'https://duckduckgo.com/?q=!instantlogo%20%s'],
mrqe: ['Movie Review Query Engine', 'https://duckduckgo.com/?q=!mrqe%20%s'],
metasearch: ['metasearch', 'https://duckduckgo.com/?q=!mes%20%s'],
noaa: ['NOAA', 'https://duckduckgo.com/?q=!noaa%20%s'],
nws: ['National Weather Service', 'https://duckduckgo.com/?q=!nws%20%s'],
netflix: ['Netflix', 'https://duckduckgo.com/?q=!netflix%20%s'],
openweather: ['Open Weather Map', 'https://duckduckgo.com/?q=!owm%20%s'],
pftv: ['Project Free TV', 'https://duckduckgo.com/?q=!pftv%20%s'],
putlocker: ['PutLocker', 'https://duckduckgo.com/?q=!putlocker%20%s'],
stubhub: ['StubHub', 'https://duckduckgo.com/?q=!stubhub%20%s'],
subreddit: ['Subreddit', 'http://www.reddit.com/r/%s/'],
stackoverflow: ['Stackoverflow', 'http://stackoverflow.com/search?q=%s'],
twn: ['The Weather Network', 'https://duckduckgo.com/?q=!twn%20%s'],
twc: ['The Weather Channel', 'https://duckduckgo.com/?q=!weatherchannel%20%s'],
tvguide: ['TV Guide', 'https://duckduckgo.com/?q=!tvguide%20%s'],
twgo: ['Twitter Home', 'http://twitter.com/home'],
tixnet: ['TicketNetwork', 'https://duckduckgo.com/?q=!ticketnetwork%20%s'],
tumblr: ['tumblr', 'https://duckduckgo.com/?q=!tumblr%20%s'],
timedate: ['timeanddate', 'https://duckduckgo.com/?q=!tz%20%s'],
trulia: ['Trulia', 'https://duckduckgo.com/?q=!trulia%20%s'],
travelmath: ['TravelMath', 'https://duckduckgo.com/?q=!tmn%20%s'],
wcommons: ['Wikimedia Commons', 'https://duckduckgo.com/?q=!commons%20%s'],
watchseries: ['Watch Series', 'https://duckduckgo.com/?q=!wts%20%s'],
wu: ['Weather Underground', 'https://duckduckgo.com/?q=!wu%20%s'],
x4chan: ['4chan', 'https://duckduckgo.com/?q=!4chan%20%s'],
x500px: ['500px', 'https://duckduckgo.com/?q=!500px%20%s'],
yxi: ['Yandex Images', 'https://duckduckgo.com/?q=!iya%20%s'],

// yubnub
sams: ['Sams Club', 'http://yubnub.org/parser/parse?command=sams%20%s'],
ebay: ['ebay', 'http://yubnub.org/parser/parse?command=ebay%20%s'],
gvtm: ['Vancouver Traffic', 'http://yubnub.org/parser/parse?command=gvtm'],

//blogger
bloggerpost: ['Post on Blogger', 'http://www.blogger.com/post-create.g?blogID=%s'],
bloggerstats: ['Blogger Stats', 'http://www.blogger.com/blogger.g?blogID=%s#overviewstats'],





}
