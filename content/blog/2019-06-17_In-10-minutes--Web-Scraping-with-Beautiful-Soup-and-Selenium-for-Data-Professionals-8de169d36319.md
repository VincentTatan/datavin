---
title: >-
  In 10 minutes: Web Scraping with Beautiful Soup and Selenium for Data
  Professionals
description: Extract Critical Information Quickly with BS4 and Selenium
date: '2019-06-17T13:50:51.144Z'
categories: []
keywords: []
slug: >-
  /@vincentkernn/in-10-minutes-web-scraping-with-beautiful-soup-and-selenium-for-data-professionals-8de169d36319
---

#### Definitive Guide to Analytics

![](img\0__9PbNnwHdp8ocBn7b.jpg)

### Introduction

**Web Scraping** is a process to extract valuable information from websites and online contents. It is a free method to extract information and receive datasets for further analysis. In this era where information is practically highly related to each other, I believe that the need for Web Scraping to extract alternative data is enormous especially for me as a data professional.

**The objective for this publication** is for you to understand several ways on scraping any publicly available information using quick and dirty Python Code. Just spend 10 minutes to read this article — or even better, contribute. Then you could get a quick glimpse to code your first Web Scraping tool.

**In this article**, we are going to learn how to scrape data from Wikipedia and e-commerce (Lazada). We will clean up, process, and save the data into _.csv_ file. We will use Beautiful Soup and Selenium as our main Web Scraping Libraries.

### What are Beautiful Soup and Selenium

#### Beautiful Soup

Beautiful Soup parses HTML into an easy machine readable tree format to extract DOM Elements quickly. It allows extraction of a certain paragraph and table elements with certain HTML ID/Class/XPATH.

![](img\1__QCcUijJQWnu1oW__b2QeunQ.png)

Whenever I need a quick and dirty way approach to extract information online. I will always use BS as my first approach. Usually it would take me in less than 10 minutes within 15 lines of codes to extract.

[**Beautiful Soup Documentation - Beautiful Soup 4.4.0 documentation**  
_Beautiful Soup 4 is published through PyPi, so if you can't install it with the system packager, you can install it…_www.crummy.com](https://www.crummy.com/software/BeautifulSoup/bs4/doc/ "https://www.crummy.com/software/BeautifulSoup/bs4/doc/")[](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)

#### Selenium

Selenium is a tool designed to automate Web Browser. It is commonly used by Quality Assurance (QA) engineers to automate their testings Selenium Browser application.

Additionally, it is very useful to web scrape because of these automation capabilities:

1.  Clicking specific form buttons
2.  Inputting information in text fields
3.  Extracting the DOM elements for browser HTML code

[**Selenium - Web Browser Automation**  
_Selenium has the support of some of the largest browser vendors who have taken (or are taking) steps to make Selenium a…_www.seleniumhq.org](https://www.seleniumhq.org/ "https://www.seleniumhq.org/")[](https://www.seleniumhq.org/)

### Coding your first Web Scraping Tool

(Github is available at the end of this article)

### Beautiful Soup

#### Problem Statement

Imagine you were UN ambassadors, aiming to make visits on cities all around the world to discuss about the Kyoto Protocol status on Climate Changes. You need to plan your travel, but you do not know the capital city for each of the country. Therefore, you googled and found this link on Wikipedia.

[**List of national capitals - Wikipedia**  
_This is a list of national capitals, including capitals of territories and dependencies, non-sovereign states including…_en.wikipedia.org](https://en.wikipedia.org/wiki/List_of_national_capitals "https://en.wikipedia.org/wiki/List_of_national_capitals")[](https://en.wikipedia.org/wiki/List_of_national_capitals)

Inside this link, there is a table which maps each country to the capital city. You find this is good, but you do not stop there. As a data scientist and UN ambassador, you want to extract the table from Wikipedia and dump it into your data application. You took up the challenge to write some scripts with Python and BeautifulSoup.

#### Steps

We will leverage on the following steps:

1.  **Pip install** [**beautifulsoup**](https://pypi.org/project/beautifulsoup4/)**4 and pip install requests**. Requests would get the HTML element from URL, this will become the input for BS to parse.
2.  **Check which DOM element the table is referring to**. Right click on your mouse and click on _inspect element_. Shortcut is CTRL+I (inspect) for Chrome Browser.
3.  **Click on the inspect button** at the top left corner to highlight the elements you want to extract. Now you know that the element is a table element in the HTML document.

![](img\1__Fq8oC46rEnTeuU__D8JH6hA.png)

4\. **Add header and url into your requests**. This will create a request into the wikipedia link. The header would be useful to spoof your request so that it looks like it comes from a legitimate browser.

For Wikipedia, it might not matter as all the information is open sourced and publicly available. But for some other sites such as Financial Trading Site (SGX), it might block the requests which do not have legitimate headers.

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'}  
url = "https://en.wikipedia.org/wiki/List\_of\_national\_capitals"  
r = requests.get(url, headers=headers)

5.**Initiate BS and list element** to extract all the rows in the table

soup = BeautifulSoup(r.content, "html.parser")  
table = soup.find\_all('table')\[1\]  
rows = table.find\_all('tr')  
row\_list = list()

6\. **Iterate through all of the rows in table** and get through each of the cell to append it into rows and row\_list

for tr in rows:  
    td = tr.find\_all('td')  
    row = \[i.text for i in td\]  
    row\_list.append(row)

7\. **Create Pandas Dataframe and export data into csv**.

df\_bs = pd.DataFrame(row\_list,columns=\['City','Country','Notes'\])  
df\_bs.set\_index('Country',inplace=True)  
df\_bs.to\_csv('beautifulsoup.csv')

![](img\1__vbnksmi5MPTS3q2F__ZMZ__A.png)

> Congratulations! You have become a web scraper professional in only 7 steps and within 15 lines of code

#### The Limitations of Beautiful Soup

So far BS has been really successful to web scrape for us. But I discovered there are some limitations depending on the problems:

1.  The requests takes the html response prematurely without waiting for async calls from Javascript to render the browser. This means it does not get the most recent DOM elements that is generated by Javascript async calls (AJAX, etc).
2.  Online retailers, such as Amazon or Lazada put anti-bot software throughout the websites which might stop your crawler. These retailers will shut down any requests from Beautiful Soup as it knows that it does not come from legitimate browsers.

> **Note**

> If we run Beautiful Soup in e commerce websites such as Lazada and Amazon, we will run to this Connection Error which is caused by their anti scraping software to deter bots from making http requests.

> HTTPSConnectionPool(host=’[www.amazon.com'](http://www.amazon.com%27), port=443): Max retries exceeded with url: / (Caused by SSLError(SSLError(1, ‘\[SSL: CERTIFICATE\_VERIFY\_FAILED\] certificate verify failed (\_ssl.c:833)’),))

One way to fix it is to use client browsers and automate our browsing behavior. We can achieve this by using Selenium.

All hail Selenium!!

### Selenium

#### Problem Statement

Imagine you were creating price fluctuation model to analyze e-Commerce providers such as Lazada and Amazon. Without Web Scraping tool, you would need to hire somebody to manually browse through numerous product pages and copy paste the pricing one by one into Excelsheet. This process would be very repetitive, especially if you’d like to collect the data point every day/every hour. This would also be a very time consuming process as it involves many manual clicks and browses to duplicate the information.

> What if I tell you, you can automate this process:

> By having Selenium doing the exploration of products and clicking for you.

> By having Selenium opening your Google Chrome Browser to mimic legitimate user browsing behaviors.

> By having Selenium pump all of the information into lists and csv files for you.

Well you’re in luck, because all you need to do is write a simple Selenium script and you can now run the web scraping program while having a good night sleep.

![](img\1__6UX4Tsq9FQ6ZMkWNj2YFpA.png)

#### Setting Up

1.  **Pip install selenium**.
2.  **Install the Selenium Browser**. Please refer to this link to identify your favorite browser (Chrome, Firefox, IE, etc). Put that in the same directory as your project. Feel free to download it from my Github link below if you are not sure which one to use.
3.  **Include these import**

from selenium import webdriver  
from selenium.webdriver.common.by import By  
from selenium.webdriver.support.ui import WebDriverWait  
from selenium.webdriver.support import expected\_conditions as EC  
from selenium.common.exceptions import TimeoutException

4\. **Drive Selenium Chrome Browser** by inserting the executable path and url. In my case, I used the relative path to find the chromedriver.exe located in the same directory as my script.

driver = webdriver.Chrome(executable\_path='chromedriver')  
driver.get('https://www.lazada.sg/#')

![](img\1__hk0veJ7ap8P97jmJ2Hd7WQ.gif)

5.**Wait page to load and find the element**. This is how Selenium could be different from Requests and BS. You could instruct the page to wait until a certain DOM element is renderred. After that, it would continue running its web scraping logic.

You can stop the wait until Expected Conditions (EC) is met to find by ID _“Level\_1\_Category\_No1”._ If 30 seconds already passed without finding such element, then pass _TimeoutException_ to shut the browser.

timeout = 30  
try:  
    WebDriverWait(driver, timeout).until(EC.visibility\_of\_element\_located((By.ID, "Level\_1\_Category\_No1")))  
except TimeoutException:  
    driver.quit()

Congrats. We have setup Selenium to use our Chrome Browser. Now we are ready to automate the Information Extraction.

#### Information Extraction

Let us identify several attributes from our Lazada Websites and extract their DOM Elements.

![](img\1__dynGsoeFwBS8Ix9H9lqYIg.png)

1.  **find\_element by ID** to return the relevant category listing.

category\_element = driver.find\_element(By.ID,'Level\_1\_Category\_No1').text;  
#result -- Electronic Devices as the first category listing

2. **Get the unordered list xpath** (ul) and extract the values for each list item (li). You could inspect the element, right click, and select copy>XPATH to easily generate the relevant XPATH. Feel free to open the following link for further detail.

[**How to Locate Elements in Chrome and IE Browsers for Building Selenium Scripts - Selenium Tutorial…**  
_This is tutorial #7 in our Selenium Online Training Series. If you want to check all Selenium tutorials in this series…_www.softwaretestinghelp.com](https://www.softwaretestinghelp.com/locate-elements-in-chrome-ie-selenium-tutorial-7/ "https://www.softwaretestinghelp.com/locate-elements-in-chrome-ie-selenium-tutorial-7/")[](https://www.softwaretestinghelp.com/locate-elements-in-chrome-ie-selenium-tutorial-7/)

list\_category\_elements = driver.find\_element(By.XPATH,'//\*\[@id="J\_icms-5000498-1511516689962"\]/div/ul')  
links = list\_category\_elements.find\_elements(By.CLASS\_NAME,"lzd-site-menu-root-item")  
for i in range(len(links)):  
    print("element in list ",links\[i\].text)  
#result {Electronic Devices, Electronic Accessories, etc}

#### Clicks and Actions

1.  **Automate Actions**. Supposedly you want to browse to Redmart from Lazada Homepage, you can mimic the click in the _ActionChains Object._

element = driver.find\_elements\_by\_class\_name('J\_ChannelsLink')\[1\]  
webdriver.ActionChains(driver).move\_to\_element(element).click(element).perform()

#### Extracting all product listings from Redmart

1.  **Create lists** of product title. We can extract and print them as following

product\_titles = driver.find\_elements\_by\_class\_name('title')  
for title in product\_titles:  
    print(title.text)

![](img\1__3Fqiq3r4T8xsy__WU87jmMQ.png)
undefined![](img\1__w__6W7hJadl3SwgD147ZhoQ.png)

2\. **Extract the product title, pack size, price, and rating**. We will open several lists to contain every item and dump them into a Dataframe.

product\_containers = driver.find\_elements\_by\_class\_name('product\_container')  
  
for container in product\_containers:    product\_titles.append(container.find\_element\_by\_class\_name('title').text)  
pack\_sizes.append(container.find\_element\_by\_class\_name('pack\_size').text)    product\_prices.append(container.find\_element\_by\_class\_name('product\_price').text)  
rating\_counts.append(container.find\_element\_by\_class\_name('ratings\_count').text)  
  
data = {'product\_title': product\_titles, 'pack\_size': pack\_sizes,'product\_price': product\_prices, 'rating\_count': rating\_counts}

3\. **Dump the information** into a Pandas Dataframe and csv

df\_product = pd.DataFrame.from\_dict(data)  
df\_product.to\_csv('product\_info.csv')

![](img\1__4VWv2mdDvTu__lUPll2__EGw.png)

> Congrats! You have effectively expanded your skills to extract any information found online!

### Purpose, Github Code and Your Contributions

The purpose for this Proof Of Concepts (POC) was created as a part of my own side project. The goal of this application is to use web scraping tool to extract any publicly available information without much cost and manpower.

In this POC, I used Python as the scripting language, [_B_](https://www.mathworks.com/matlabcentral/answers/155126-how-does-the-vision-cascadeobjectdetector-detect-left-and-right-eyes-separately-it-is-constantly-de "https://www.mathworks.com/matlabcentral/answers/155126-how-does-the-vision-cascadeobjectdetector-detect-left-and-right-eyes-separately-it-is-constantly-de")_eautiful Soup and Selenium library_ to extract the necessary information.

The Github Python Code is located below.

[**VincentTatan/Web-Scraping**  
_Web Scraping with Beautiful Soup and Selenium. Contribute to VincentTatan/Web-Scraping development by creating an…_github.com](https://github.com/VincentTatan/Web-Scraping "https://github.com/VincentTatan/Web-Scraping")[](https://github.com/VincentTatan/Web-Scraping)

Feel free to clone the repository and contribute whenever you have time.

### Beautiful Soup and Stocks Investing

In lieu with today’s topics about python and web scraping. You could also visit another of my publication regarding web scraping for aspiring investors. You should try this walk through to guide you to code quick and dirty Python to scrape, analyze, and visualize stocks.

[**Value Investing Dashboard with Python Beautiful Soup and Dash Python**  
_An Overview of Web Scraping with a Quick Dash Visualization for Value Investing_towardsdatascience.com](https://towardsdatascience.com/value-investing-dashboard-with-python-beautiful-soup-and-dash-python-43002f6a97ca "https://towardsdatascience.com/value-investing-dashboard-with-python-beautiful-soup-and-dash-python-43002f6a97ca")[](https://towardsdatascience.com/value-investing-dashboard-with-python-beautiful-soup-and-dash-python-43002f6a97ca)

Hopefully from this relevant publication, you could learn how to scrape critical information and develop an useful application. Please read and reach out to me if you like it.

#### Finally…

Whew… That’s it, about my idea which I formulated into writings. I really hope this has been a great read for you guys. With that, I hope my idea could be a source of inspiration for you to develop and innovate.

Please **Comment** out below to suggest and feedback.

Happy coding :)

### About the Author

Vincent Tatan is a Data and Technology enthusiast with relevant working experiences from Visa Inc. and Lazada to implement microservice architectures, data engineering, and analytics pipeline projects[.](https://bit.ly/2I8jkWV.)

Vincent is a native Indonesian with a record of accomplishments in problem solving with strengths in Full Stack Development, Data Analytics, and Strategic Planning.

He has been actively consulting SMU BI & Analytics Club, guiding aspiring data scientists and engineers from various backgrounds, and opening up his expertise for businesses to develop their products .

Please reach out to Vincent via [**LinkedIn**](http://www.linkedin.com/in/vincenttatan/) **,** [**Medium**](https://medium.com/@vincentkernn) **or** [**Youtube Channel**](https://www.youtube.com/user/vincelance1/videos)

**Disclaimer**

**This disclaimer informs readers that the views, thoughts, and opinions expressed in the text belong solely to the author, and not necessarily to the author’s employer, organization, committee or other group or individual**. **References are picked up from the list and any similarities with other works are purely coincidental**

**This article was made purely as the author’s side project and in no way driven by any other hidden agenda.**