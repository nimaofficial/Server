var axios = require("axios"), cheerio = require("cheerio"), pkg = require("./package.json"), msg = "Not Allowed Cracked Version.. Please use @sl-code-lords/esana-news npm pkg", test = () => {
  if (pkg.name != "@sl-code-lords/esana-news") {
    throw new Error(msg);
  }
}, isabelle = {};
isabelle.name = "Ravindu_Manoj";
isabelle.github = "@ravindu01manoj";
var code_creator = isabelle;
async function esana_news(shanielle) {
  if (pkg.name != "@sl-code-lords/esana-news") {
    throw new Error(msg);
  }
  test();
  if (!shanielle) {
    var shanan = {};
    return shanan.code = 407, shanan.code_creator = code_creator, shanan.error = "Need Esana News Id", shanan;
  }
  var ahmiyah = await axios.get("https://www.helakuru.lk/esana"), latoisha = ahmiyah.data.split("csrfHash")[1].split("';")[0].split("'")[1], clarisa = {cookie: ahmiyah.headers["set-cookie"][0]};
  clarisa["Accept-Encoding"] = "application/json";
  clarisa["user-agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33";
  var rameka = await axios({url: "https://www.helakuru.lk/esana/search", data: "GET_NEWS_BY_ID=true&NEWS_ID=" + shanielle + "&LOAD_TYPE=true&csrf=" + latoisha, headers: clarisa, method: "POST"});
  rameka.data.TAGS.sub_img = [];
  var cyron = cheerio.load("<div>" + rameka.data.VIEW + "</div>");
  cyron("div.news-single-content > img.img-fluid").map((sorrell, camiesha) => {
    rameka.data.TAGS.sub_img.push(cyron(camiesha).attr("src"));
  });
  var reganne = {news_url: "https://www.helakuru.lk/esana/" + shanielle, news_id: shanielle, ...rameka.data.TAGS}, buxton = {};
  return buxton.code = 200, buxton.code_creator = code_creator, buxton.results = reganne, buxton;
}
async function esana_news_list() {
  if (pkg.name != "@sl-code-lords/esana-news") {
    throw new Error(msg);
  }
  test();
  var lonnesha = await axios.get("https://www.helakuru.lk/esana"), rajdeep = lonnesha.data.split("csrfHash")[1].split("';")[0].split("'")[1], selica = await axios({url: "https://www.helakuru.lk/esana/load", headers: {cookie: lonnesha.headers["set-cookie"][0], "Accept-Encoding": "application/json", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33"}, data: " newsLimit=&esanaWidget=false&csrf=" + rajdeep, method: "POST"});
  const leiya = cheerio.load("<div>" + selica.data.VIEW + "</div>");
  var khassidy = [];
  leiya("div.p-2.news_row_esena").each(function (saamiya, tavius) {
    khassidy.push({id: leiya(tavius).attr("onclick").split("getNewsById('")[1].split("'")[0], title: leiya(tavius).find("div.col-8 > div.news-thum-deatils > p").text(), thumb: leiya(tavius).find("div.news-thum-inner.rounded-lg-10.overflow-hidden > img").attr("src")});
  });
  var shaqueil = {};
  return shaqueil.code = 200, shaqueil.code_creator = code_creator, shaqueil.results = khassidy, shaqueil;
}
async function esana_latest_news() {
  return await latest_news();
}
async function esana_latest_news_id() {
  return await latest_news(true);
}
async function latest_news(zaley) {
  if (pkg.name != "@sl-code-lords/esana-news") {
    throw new Error(msg);
  }
  test();
  var raziya = await axios.get("https://www.helakuru.lk/esana");
  var ellioth = raziya.data.split("csrfHash")[1].split("';")[0].split("'")[1];
  var athenamarie = await axios({url: "https://www.helakuru.lk/esana/load", headers: {cookie: raziya.headers["set-cookie"][0], "Accept-Encoding": "application/json", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33"}, data: " newsLimit=20&esanaWidget=false&csrf=" + ellioth, method: "POST"});
  if (zaley) {
    return {code: 200, code_creator: code_creator, results: {latest_news_url: "https://www.helakuru.lk/esana/" + athenamarie.data.FIRST_NEWS_ID, news_id: athenamarie.data.FIRST_NEWS_ID}};
  }
  return await esana_news(athenamarie.data.FIRST_NEWS_ID);
}
async function esana_news_comments(jung) {
  if (pkg.name != "@sl-code-lords/esana-news") {
    throw new Error(msg);
  }
  test();
  if (!jung) {
    var enylah = {};
    return enylah.code = 407, enylah.code_creator = code_creator, enylah.error = "Need Esana News Id", enylah;
  }
  var deneena = await axios.get("https://www.helakuru.lk/esana"), viha = deneena.data.split("csrfHash")[1].split("';")[0].split("'")[1], marquavion = await axios({url: "https://www.helakuru.lk/esana/comments", headers: {cookie: deneena.headers["set-cookie"][0], "Accept-Encoding": "application/json", "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.33"}, data: "NewsId=" + jung + "&uid=&loadType=true&csrf=" + viha, method: "POST"}), kasiah = [], low = cheerio.load("<div>" + marquavion.data.newsList + "</div>");
  low("div > div.d-flex").map(function (jzon, gwenevere) {
    var naidelyn = [];
    low(gwenevere).find("div.comment-content > div > div > p").map(function (draylon, chantavia) {
      naidelyn.push(low(chantavia).text().trim());
    });
    kasiah.push({comment_id: low(gwenevere).find("div.comment-content").attr("data-comment-id"), name: naidelyn[0], comment: naidelyn[1], ago: naidelyn[2] + " Ago", img: low(gwenevere).find("img").attr("src")});
  });
  var macallen = {};
  return macallen.code = 200, macallen.code_creator = code_creator, macallen.results = kasiah, macallen;
}
var keadrian = {};
keadrian.esana_news_comments = esana_news_comments;
keadrian.esana_latest_news_id = esana_latest_news_id;
keadrian.esana_latest_news = esana_latest_news;
keadrian.esana_news_list = esana_news_list;
keadrian.esana_news = esana_news;
module.exports = keadrian;
