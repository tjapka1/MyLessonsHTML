/*
  <div class="news">
                        <div class="tag">спорт</div>
                        <h3 class="header">sdfg</h3>
                        <div class="time">17:00</div>
                    </div>
*/

const element = document.createElement("div");
const text = document.createTextNode("Text;/");
element.setAttribute("class", "tag")
element.appendChild(text);
document.body.appendChild(element);

const strTag="новость";
const strUrl= "google.com";
const strHeader="Yjdjcm";
const strTime="20:00";


const news=document.createElement("div");
news.setAttribute("class", "news");

const tag=document.createElement("div");
tag.setAttribute("class", "tag");
text.textContent=strTag;
news.appendChild(tag);

const link=document.createElement("a");
link.href=strUrl;
link.target= "_blank";

const header=document.createElement("h3")
header.textContent=strHeader
header.classList.add("news-tittle", "header");
link.appendChild(header);

news.appendChild(link);

const time=document.createElement("div");
time.classList.add("time");
time.textContent=strTime;
news.appendChild(time);

const days = document.getElementsByClassName("day");
days[0].appendChild(news);

const pNews = days[0].querySelector(".date");
pNews.insertAdjacentElement("afterend", news);


//document.body.appendChild(news);