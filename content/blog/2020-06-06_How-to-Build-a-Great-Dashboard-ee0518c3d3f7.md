---
title: How to Build a Great Dashboard
description: Google Data Studio Empowers Fast and Stunning Visualization for free!
date: '2020-06-06T15:05:55.647Z'
categories: []
keywords: []
slug: /@vincentkernn/how-to-build-a-great-dashboard-ee0518c3d3f7
---

#### My Tips to aspiring Data Scientists and Data Analysts

![](img\1__bPtdQ5vZlJKtpXBFVsA39g.png)

> Getting memberships on interactive dashboards is expensive

> I have trouble collaborating my local changes with colleagues

> There are too many versions of dashboards, I don’t know which one to share

For data scientists and analysts, communicating our data and results to the non technical users is important. We need to produce and share stunning dashboards that is easy to interact with.

Although BI products such as Tableau and Qlikview have an easy interface to produce such visualizations, the technical licenses are costly. They require membership to share privately among your colleagues. [For Tableau, it costs $50 per month.](https://www.betterbuys.com/bi/tableau-pricing/)

> Now, the game changer is

> What if I tell you that you have access to a free, intuitive, and sharable interactive dashboard tool inside your Google Drive.

> Welcome to Google Data Studio

### What is Google Data Studio?

Google Data Studio is a data visualization tool to generate interactive dashboard. With Data Studio, you are able to:

1.  **Import — Supply live data reliably**: JSON/CSV, BigQuery, Sheets, etc.
2.  **Interact — Generate Insights**: Develop interactive dashboards with drag and drop approach.
3.  **Share — Promote your Skill**: Store, collaborate and promote your dashboard privately via Google Drive.

> All for FREE.

This tutorial will prepare you to develop dashboards with live data. Feel free to follow this tutorial or access the [dashboard directly here](https://datastudio.google.com/reporting/9f6b7856-aa66-4ae0-8864-8abef1e77f6a) where you can copy and try yourself..

**P.S:** If you would like a hacky way to develop and deploy your dashboard as a service. [I also provide a tutorial for Dash & Plotly. They are python libraries built on top of Matplotlib and Flask which are useful framework to build web.](https://towardsdatascience.com/build-your-own-data-dashboard-93e4848a0dcf)

> With that let’s get started.

### Import: Supply live data reliably with BigQuery

![](img\1__5lkG17iGit4TqW1u5BPFbQ.gif)

Google BigQuery provides a server-less, free, and highly scalable data warehouse system to analyze terabytes of data in seconds. It is easy to use, scalable, and ready with free terabytes to scan through the data. Google Data Studio connects your data to many different sources.

In this tutorial, we will import JHU (John Hopkins University) Covid data table into our dashboard. Conveniently, Google already has JHU Live Data Connection ready for us.

In private settings, you want to set your BigQuery with limited access rights to prevent leakage to your users. But once the dashboard is published, your users can access the aggregated data on your reports and insights.

### Interact: Generate Insights Fast

![](img\1__a4bd7I__7aPQip0CIl__Czvw.gif)

In Google Data Studio, you can insert the charts and automatically populate the charts with relevant data (dates/regions). Most of the time, you won’t need to touch the specifications except for filter and style.

The interactions assignment is automatic. By default, each date/component pickers already have interactions assigned to other visualizations. This allows you to slice and dice by within one dashboard.

You can also configure the interactions by grouping the components together.

### Share: Track and Promote your Stunning Dashboard!

![](img\1__EkM__S74QSRf6a9nOwXPOaA.png)

Sharing a Google Data Studio Dashboard is the same as sharing a Google Drive Link. You no longer need to create local working versions for your colleagues and manager.

With Google Drive Storage, You will have one private source of truth. You have easy links to onboard collaborators or reviewers. This works by specifying the access links recipients access like how you do with Google Docs.

Furthermore, Google Data Studio made it easy to send a recurring email report to your stakeholders. You could freely set periodical reports schedulers and send your live data to them.

![](img\1__ht5FXsockN2Y7gM9n0mJoA.png)

One other useful function in Cloud is the **Version History**. In collaboration, you can lose track on the changes that we made over time. The Version History prevents that by giving you a unified version history function to keep track of all changes.

With this, you could easily audit and revert to a stable version and collaborate as usual.

### Final Thoughts

In this tutorial, we learnt the 3 biggest strengths of Google Data Studio:

1.  **Import: Supply live data reliably with BigQuery**
2.  **Interact: Generate Insights Fast**
3.  **Share: Track and Promote your Stunning Dashboard!**

With this, you can import live data to dashboard, drag and drop interactive visualizations and stunning styling, and share it to your colleagues and managers with no hassle.

As always, please reach out to me on [Linkedin](http://www.linkedin.com/in/vincenttatan/?source=post_page---------------------------) for any of your questions. I would be glad to answer your queries when time permits.

Soli Deo Gloria

### About the Author

Vincent fights internet abuse with ML @ Google. Vincent uses advanced data analytics, machine learning, and software engineering to protect Chrome and Gmail users.

Apart from his stint at Google, Vincent is also a featured writer for Towards Data Science Medium to guide aspiring ML and data practitioners with 500k+ viewers globally.

During his free time, Vincent studies for ML Master Degree in Georgia Tech and trains for triathlons/cycling trips.

Lastly, please reach out to Vincent via [**LinkedIn**](http://www.linkedin.com/in/vincenttatan/?source=post_page---------------------------)**,** [**Medium**](https://medium.com/@vincentkernn?source=post_page---------------------------) **or** [**Youtube Channel**](https://www.youtube.com/user/vincelance1/videos?source=post_page---------------------------)