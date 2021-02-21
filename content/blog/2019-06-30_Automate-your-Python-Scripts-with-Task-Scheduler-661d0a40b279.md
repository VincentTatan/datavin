---
title: Automate your Python Scripts with Task Scheduler
description: Windows Task Scheduler to Scrape Alternative Data
date: '2019-06-30T12:51:37.401Z'
categories: []
keywords: []
slug: /@vincentkernn/automate-your-python-scripts-with-task-scheduler-661d0a40b279
---

#### Definitive Guide to Data Professionals

![](img\0__FXOxBCj7qoODjAfH.jpg)

> Running my Python Scripts every day is too troublesome.

> I need a way to run my Python Scripts periodically and automatically

Imagine your manager asks you to wake up in the middle of night to run a script. This will be your biggest nightmare. You wake up prematurely, expose with the horrendous blue light, and avoid decent sleeps every midnight.

As any data professionals, you might need to run multiple scripts to generate reports or deploy analytics pipeline. Hence, you need to learn about **schedulers** to avoid ruining your weekend.

> Every data engineer and scientist at one point of time needs to run periodic tasks.

By definition, periodic tasks are tasks which are executed repeatedly along a certain time interval with no or minimum human intervention. In the period where data and technology evolve rapidly, you need to run scripts to develop database backups, Twitter streaming, etc.

Luckily, with Task Scheduler, you can now run your Python script to execute periodic tasks every day/week/month/year depending on your needs.

In this tutorial, you will learn how to run task scheduler to [web scrape data from Lazada](https://towardsdatascience.com/in-10-minutes-web-scraping-with-beautiful-soup-and-selenium-for-data-professionals-8de169d36319) (eCommerce) website and dump it into [SQLite RDBMS](https://towardsdatascience.com/relational-database-management-rdbms-basic-for-data-professionals-aca3567f03da) Database.

This is a quick glimpse to run your script automatically!

![](img\1__4mMQZUInec491zWyb2pufQ.gif)

> Let’s get started!

### The Methods

In this tutorial, we will use Windows Task Scheduler to run a bat script which will trigger the Python Scripts. To execute these scripts, we have two simple steps:

1.  Create Python Executable Files (bat file)
2.  Configure Task in Windows Task Scheduler

However, if you are Linux users and do not have the Windows Task Scheduler available, you should use [cron schedulers](https://medium.com/@Ratik96/https-medium-com-ratik96-scheduling-jobs-with-crontab-on-macos-add5a8b26c30).

### Creating Windows Executable bat file to run Python

> A **BAT file** is a DOS **batch file** used to execute commands with the Windows Command Prompt (cmd.exe). It contains a series of line commands that typically might be entered at the DOS command prompt. **BAT files** are most commonly used to start programs and run maintenance utilities within Windows. — fileinfo.com

Using bat file as our executable, we would store our run script in a file then double click on the bat file to execute the command on cmd (command prompt) to run python script.

All you need to do is to create a new bat file (e.g: web-scraping.bat) and write the executable script with the format of **<Your Python.exe Location> <Your python Scripts Location>** . You can add the _pause_ command to avoid closing the command prompt after the execution.

C:\\new\_software\\finance\\Scripts\\python.exe "C:/new\_software/Web Scraping/Web-Scraping/Selenium Web Scraping/scraping-lazada.py"  
pause

Once you double click on this bat file, Windows will open your command prompt and run the web scraping tool. To schedule this double click/execution, we will hook our task scheduler to the bat file.

### Configure Task in Windows Task Scheduler

**Windows Task Scheduler** is a default Windows Application to manage tasks in response of an event based or time based trigger. For example, you could suggest a certain click and computer actions (such as reboot) or even suggest timing like _every first day of financial quarter_ to execute the task.

In a larger picture, this task would contain the script and metadata to define what and how the action will be executed. You can add certain security context in the argument and control where the scheduler will run the program in. Windows will serialize all of these tasks as a **.job** files in a special folder called **Task Folder**.

![](img\1__F__gCBEpQioL5bfrKTBwW2w.png)

In this tutorial, we are going to set a time based event to run our application and dump the data into SQLite. In total there

1.  Click on Start Windows, search for Task Scheduler, and open it.
2.  Click Create Basic Task at the right window
3.  Choose your trigger time.
4.  Pick the exact time for our previous selection.
5.  Start a program
6.  Insert your program script where you saved your bat file earlier.
7.  Click Finish.

#### Let’s get started!

1.  **Click on Start Windows, search for Task Scheduler, and open it**.

![](img\1__mZQ2Zy5su6r8QzCaGpLckw.png)

2\. **Click Create Basic Task at the right window**.

You should put your task name (e.g: Web scraping) and description (e.g: Web Scraping and SQLite Dump automatically every day at 6 pm)

![](img\1__rcZMqC46mIHnEkvTCNY87w.png)
undefined

3\. **Choose your trigger time**.

You will have an option to pick the time trigger in daily weekly, and even monthly. Logically, this choice depends largely on how often you want to refresh the values from your data source. For example, if your task is to scrape MarketWatch Stocks balance sheet, you should run the scripts every financial quarter.

![](img\1__xVl7Y3UWv4dGDV9GFCE8Ww.png)
undefined

4\. **Pick the exact time for our previous selection**.

We will pick the month January, April, July, and September to indicate all early financial quarter.

![](img\1__AJt6qLbO4lyBF4tI0x3BwQ.png)
undefined

5\. **Start a program**

Here you will be able to start the Python Scripts, send an e-mail, and even display a message. Feel free to choose ones which you are most comfortable with. However, you should watch out as there are deprecated tasks which will be removed in the subsequent patches.

![](img\1__qvt7Z6rQE__MpoNqONhXd8w.png)
undefined

6\. **Insert your program script where you saved your bat file earlier.**

This will run Task Scheduler to your Python Script for automation. Make sure you also include Start in to the location of your application folder to access all of the relevant elements (Selenium Browser executables / SQLite Disk)

![](img\1__FlaW7UWGzgUNJqmyT7LM7A.png)
undefined

7\. **Click Finish**.

You can check your created task schedule in your front page of Task Scheduler.

![](img\1__bXZJFbumCoG36syta__GlwA.png)
undefined

> Congratulations, you have set up your first automated scheduler in Windows.

### Result

Here is the gif animation for your references. Notice how the scheduler runs the Python Scripts by itself. Once the scripts finish running, it will dump the extracted value inside SQLite database. In the future, this application will run every time the trigger condition is met and append the updated values into SQLite.

![](img\1__4mMQZUInec491zWyb2pufQ.gif)
![](img\1__kmgbxc__M5JWRCzTG5EL3yw.png)

#### Finally…

![](img\0__GyLaSQxHu0RWXVGY.jpg)

I really hope this has been a great read and a source of inspiration for you to develop and innovate.

Please **Comment** out below to suggest and feedback.

If you really like it, please check out my profile. There are more about Data Analytics and Python Projects articles which will suit your interest.

Happy coding :)

### About the Author

Vincent Tatan is a Data and Technology enthusiast with relevant working experiences from Visa Inc. and Lazada to implement microservice architectures, business intelligence, and analytics pipeline projects[.](https://bit.ly/2I8jkWV.)

Vincent is a native Indonesian with a record of accomplishments in problem solving with strengths in Full Stack Development, Data Analytics, and Strategic Planning.

He has been actively consulting SMU BI & Analytics Club, guiding aspiring data scientists and engineers from various backgrounds, and opening up his expertise for businesses to develop their products .

Please reach out to Vincent via [**LinkedIn**](http://www.linkedin.com/in/vincenttatan/) **,** [**Medium**](https://medium.com/@vincentkernn) **or** [**Youtube Channel**](https://www.youtube.com/user/vincelance1/videos)