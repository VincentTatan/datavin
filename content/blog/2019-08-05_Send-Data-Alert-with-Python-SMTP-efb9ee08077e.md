---
title: Send Data Alert with Python SMTP
description: Sending Business Reporting and Email Using Python smtplib
date: '2019-08-05T18:35:19.819Z'
categories: []
keywords: []
slug: /@vincentkernn/send-data-alert-with-python-smtp-efb9ee08077e
---

#### Definitive Guide for Data Professionals (Business Intelligence)

![](img\0__FEY7__RJDHraGk5pd.jpg)

### Problem Statement:

For data scientists, it is very important to communicate reports to the non technical users especially if there are some abnormality within the data. From my working experience, most analysts would send the users business reports manually — they would process the data, run some validations, and generate reports to send via Outlook/gmail. All of these take much time and leaves rooms for human errors.

> What if we could automate the business reporting and alerts through the same Python Program which analyze our data.

That would save huge amount of time and hassle!

### Enter Python SMTP Library

![](img\0__PbTeAm87IpVyv05j.png)

Simple Mail Transfer Protocol (SMTP) lets users send mail to another. When you push the mail from Python app, the users are receiving it through Post Office Protocol (POP) and Internet Message Access Protocol (IMAP). These are the base for standard email interfaces such as Outlook and Gmail.

SMTP allows the server to listen for email request through a TCP connection then send the email through port 587 (Data Flair).

### Python SMTP in Action

![](img\1__9yoEuQziXtpmbZ0A1M75ww.png)

In this tutorial, you will learn how to generate email alerts with Python SMTP.

We will visit our previous projects on [Building Dashboard Web Application](https://towardsdatascience.com/build-your-own-data-dashboard-93e4848a0dcf), with the [task scheduler](https://towardsdatascience.com/automate-your-python-scripts-with-task-scheduler-661d0a40b279) to [web scrape data from Lazada](https://towardsdatascience.com/in-10-minutes-web-scraping-with-beautiful-soup-and-selenium-for-data-professionals-8de169d36319?source=post_page---------------------------) (eCommerce) website and dump it into [SQLite RDBMS](https://towardsdatascience.com/relational-database-management-rdbms-basic-for-data-professionals-aca3567f03da?source=post_page---------------------------) Database. Based on the products that users are confirmed, we are going to check if the price drops from the original price and use it to generate alerts.

Feel free to just enjoy this article or visit my [Github Repo](https://github.com/VincentTatan/Web-Scraping/blob/master/Selenium%20Web%20Scraping/lazada/dashboard.py) for the complete codes. Alternatively just scroll down and enjoy this article.

For you who are not familiar with the Dashboard Web Application that I am referring to. I am building a dashboard based on the price changes on Lazada Scraped Products. Each time the user modifies the input dropdown, the app will alert the users if the price of the product drops.

**Our task** is to assign a webhook which will send an email once you modify the dropdown parameters.

![](img\1__PPLSYv59EbKhc1NeL5eOUQ.gif)

#### These are the key important steps to do it:

1.  Importing Python SMTP
2.  Generating Email and SMTP Server Properties
3.  Sending Email Requests
4.  Preparing the Webhooks with our Python Dash Dashboard
5.  Creating Configuration File for Email Authentication Secrets

### Importing and Activating Python SMTP

Python smtplib is already inbuilt when you download Python packages. If you have it running, you could just import the smtplib as the following

import smtplib

To activate the SMTP connection, you will need to insert your authentication credentials by replacing the tags as the following:

gmail\_user = '<input your gmail user. No need to use @gmail.com>'  
gmail\_password = '<input your gmail password>'

> That is all! Very easy.

![](img\0__LilyJRy52PL7BwAX.gif)

### Generating Email and SMTP Server Properties

There are 2 parts you need to consider when building the emails: email properties and email send request.

In the **email properties**, you can set up:

#email properties  
sent\_from = gmail\_user  
to = \[<email\_send\_address>\]  
subject = 'Alert for reduced in price'  
email\_text =   
"""  
Alert for reduced in price  
"""

1.  `sent_from`: the sender who sends the email
2.  `to`: the addressee of the email
3.  `subject`: the email subject
4.  `email_text`: the content of the email body.

In the **email send request**, this is where the SMTP server is set up:

#email send request  
try:  
    server = smtplib.SMTP\_SSL('smtp.gmail.com', 465)  
    server.ehlo()  
    server.login(gmail\_user, gmail\_password)  
    server.sendmail(sent\_from, to, email\_text)  
    server.close()  
  
    print ('Email sent!')  
except Exception as e:  
    print(e)  
    print ('Something went wrong...')

1.  The `smtplib` are setting up the SMTP server with gmail Secure Socket Layer (SSL) channel and port 465. This will allow us to send from our own gmail account.
2.  The `ehlo()` is used to identify yourself to the server. This will check the SMTP service extensions (ESMTP) to the gmail server we set up.
3.  The `login`is pretty straightforward. We will use our own username and password to login into gmail server.
4.  Then we will use our account to `sendmail` to using the email properties we set up before.
5.  Finally, we will `close` the server which will free up our port 465 and memory usage for the server.

### Sending Email Requests

Once you set up the properties, everything is set. You just need to run it. And…

> you encountered an issue.

#### Troubleshoot your Issues

Chances are you would encounter this error

![](img\1____o__7__NMJVCgrVt2zVHSyxw.png)

If you encounter this error and you have double checked that your username and password are correct, then you would need to open your Gmail Settings and Toggle on the _Less Secure App Access_ Option. This will allow Python SMTP to access your gmail account and send emails on your behalf.

Of course to maintain your gmail security, you could turn it off after you are no longer using this functionality.

![](img\1__R83LefEWNlaUiFz9T2YU8g.png)

Finally, once you run your script. You will receive this email. (Noted that currently I am using my own email to test the application).

![](img\1__8OO9rORhTswR5MtIANek3g.png)
undefined

> Congratulations. You just send your first automated email send request!

![](img\0__VM__QAW4falCieuLc.jpg)

### Preparing the Webhooks with our Python Dash Dashboard

Now that we know that our alert works, let us setup the web hooks.

Web hooks are a resource-light event reactions by a server-side app to notify a client-side app to trigger an event. In this case, we will setup Dash to activate the Alert Logic anytime users modify the the Dashboard’s Dropdown. We will set an alert if there is price decrease in our product.

![](img\1__oTKkBsBzWDfvLWlLULMOJg.png)

1.  The `product_df_specific` will sort the values of a specific product by date.
2.  The `original_price` takes the earliest date of the product
3.  The `latest_price` takes the latest and most recent date of the product
4.  Then the email will be sent once we find that the `latest_price` is lower than the `original_price`.

The end result, we will have a specific email detail that list all of the product and price alerts which the users are concerned of.

![](img\1__fHheezB8JcCl9C9NXxne0w.png)

### Creating Configuration File for Email Authentication Secrets

Remember the credentials from step 1?

gmail\_user = '<input your gmail user. No need to use @gmail.com>'  
gmail\_password = '<input your gmail password>'

Let us put these sensitive information in a properties file where you can secure and configure easily.

First let us create a Python Properties file called properties.ini:

**\[EMAIL\]  
**user= <gmail username>  
password = <gmail password>

These are the private files which you need to protect and secure. To access this, simply use the Python inbuilt configparser library.

import configparser

config = configparser.ConfigParser()  
config.read('properties.ini')  
gmail\_user = config\['EMAIL'\]\['user'\]  
gmail\_password = config\['EMAIL'\]\['password'\]

You will first initiate a `config parser`, this will structure your properties into a tree dir to extract.

Then you will `read` the properties ini file and extract your username and password just like how you extract an element from 2D arrays.

### End Results

Congratulations!! You have created your first SMTP within your dashboard. If you did it properly, you would be able to receive this result. If not, feel free to refer back to my [Github Codes](https://github.com/VincentTatan/Web-Scraping/blob/master/Selenium%20Web%20Scraping/lazada/dashboard.py?source=post_page---------------------------) or post your questions here.

![](img\1__PPLSYv59EbKhc1NeL5eOUQ.gif)

> _Now set free and create your own Dash Dashboard and Python SMTP!_

### More References

If you need more examples and better insights of what Python SMTP can do. Feel free to visit the following links.

1.  [Real Python](https://realpython.com/python-send-email/)
2.  [Tutorials Point](https://www.tutorialspoint.com/python/python_sending_email)
3.  [Python For Beginners](https://www.pythonforbeginners.com/code-snippets-source-code/using-python-to-send-email/)

### Finally…

![](img\0__uCAubvFLKCvVBX3q.jpg)

I really hope this has been a great read and a source of inspiration for you to develop and innovate.

Please **Comment** out below to suggest and feedback. Just like you, I am still learning how to become a better Data Scientist and Engineer. Please help me improve so that I could help you better in my subsequent article releases.

Thank you and Happy coding :)

### About the Author

Vincent Tatan is a Data and Technology enthusiast with relevant working experiences from Visa Inc. and Lazada to implement microservice architectures, business intelligence, and analytics pipeline projects[.](https://bit.ly/2I8jkWV.?source=post_page---------------------------)

Vincent is a native Indonesian with a record of accomplishments in problem solving with strengths in Full Stack Development, Data Analytics, and Strategic Planning.

He has been actively consulting SMU BI & Analytics Club, guiding aspiring data scientists and engineers from various backgrounds, and opening up his expertise for businesses to develop their products .

Please reach out to Vincent via [**LinkedIn**](http://www.linkedin.com/in/vincenttatan/?source=post_page---------------------------) **,** [**Medium**](https://medium.com/@vincentkernn?source=post_page---------------------------) **or** [**Youtube Channel**](https://www.youtube.com/user/vincelance1/videos?source=post_page---------------------------)