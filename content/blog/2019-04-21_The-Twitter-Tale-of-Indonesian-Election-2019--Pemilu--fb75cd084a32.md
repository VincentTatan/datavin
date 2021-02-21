---
title: The Twitter Tale of Indonesian Election 2019 (Pemilu)
description: >-
  During the Indonesian presidential election, Jokowi and Prabowo have become
  the most talked candidates which represents the candidacy. The…
date: '2019-04-21T05:34:24.998Z'
categories: []
keywords: []
slug: >-
  /@vincentkernn/the-twitter-tale-of-indonesian-election-2019-pemilu-fb75cd084a32
---

![](img\1__7UAN6jgYUlah6RbFn82gIA.png)

During the Indonesian presidential election, Jokowi and Prabowo have become the most talked candidates which represents the candidacy. The Indonesian Presidential Primaries were becoming news sensation. Many news and social media generated fads over who are going to win the presidential election. Now in 2019, we will try and analyse the tale of the Indonesian presidential elections through the Twitter Eyes.

Github ([Link to Jupyter Notebook](https://github.com/VincentTatan/PythonAnalytics/blob/master/Youtube/Indonesian%20Election%20Social%20Text%20Analysis%20%28Social%20Media%20Trend%20-%20Twitter-%20Media-%20Big%20Data%29.ipynb)) — please access for the source code:

**Disclaimer**

This analysis is just my own personal project and in no ways could be used as a reliable source of political opinion. Please use it with care!

**Some weaknesses and assumptions of this analysis is as followed:**

1.  Limited scope of data streamed (please look at Data Sources)
2.  Limited access of Tweepy API and Google Translate API (please look at Data sources)
3.  Limited access to other external data sources to validate the reliability of the results (quick count tabulated data, geographical segmentation, etc)

### Data Sources

Data sources come from Twitter Tweepy API, which streamed the data ranged from date 19th of April 2019. In total, the streamed Twitter posts that I have is 20509 which took several hours for me and stored in dataset/pemilu-data-2019.json for quick retrieval. For more information on how you can grab Twitter Historical Data (more than a week past). Feel free to retrieve from [here](https://blog.gnip.com/tag/historical-twitter-data/)

If you want to see how I streamed, please open my Jupyter Notebook on Github. In there you will be able to see my codes and reproduce the results on your specified starting date.

![](img\1__2jQd46SZTLZ1YKMEQlGfPQ.png)

### Data Cleaning and Wrangling

#### Remove empty text twitter

Some of the text are in different text formats (some Chinese characters that could not be passed on the gettext(tweet. element). Therefore, since it does not take too many lines, we will ignore these lines

#### **Translating Indonesian to English**

Most of the language are in Indonesian. This means that to analyse this, we will need to translate the posts into English for sentimental or other non Indonesian supported libraries to use.

In this case we will use TextBlob translate to translate the Indonesian post to English. This could be done simply with the following code. TextBlob will access Google Translate API to generate translations

![](img\1__N9lPIXLhI7ZV7dzHmDP9AQ.png)
![](img\1__wLK1XFxKa9l0myntuXRNFw.gif)

Unfortunately, There are [limits that Google API](https://cloud.google.com/translate/quotas) translate impose, so we could not translate everything. We will use those subsets which could be translated into a separate dataset in translation.txt for sentimental analysis.

#### Extracting the relevant posts for each presidential candidate

To find these relevant posts, we would search a certain word in a sentence. For example does Jokowi or Prabowo is mentioned in the tweets, which one is the tweets belonged to?

For Example:

*   Jokowi dan Prabowo selalu bertarung seperti anak-anak (Jokowi 1, Prabowo 1)
*   Jokowi mengembangkan on Jawa Tengah (Jokowi 1, Prabowo 0)
*   Prabowo terlalu cepat senang (Jokowi 0, Prabowo 1)

This will help us encode which post mentioned on which presidential candidate. The following is the Python Pandas Lambda function to iterate each entry in a Series and apply the extraction method for candidates.

![](img\1____7__Y7ejC__5DG85wRYuMaww.png)
![](img\1__iAU9k__k4XEGiF6gjUjgAug.png)

### Analysis

#### **What are the overall public sentiment with the two presidential candidates? (Python TextBlob Sentiment Analysis)**

#### What is Sentimental Analysis

> Sentiment Analysis refers to the process of taking natural language to identify and extract subjective information. You can take text, run it through the TextBlob and the program will spit out if the text is positive, neutral, or negative by analyzing the language used in the text.

![](img\1__AEbNJnGAzP5da8kAKFy4KA.png)

#### Coding out the Sentimental Analysis

We will generate polarity and subjectivity for each English posts. As the end result, we will receive Pandas DataFrame result as followed.

![](img\1__fPxkeLpMraFA2XQTWIElBQ.png)
undefined![](img\1__qJv4iAtCbCyM3GlN8GkDWg.png)

#### Analyzing Public Sentiments for Jokowi and Prabowo

![](img\1__98CASKtmfxkWwqGuJu0k__A.png)

The overall sentiments on the tweets are favorable to support Prabowo. After some further digging into the data, there are some meaningful/informative remarks about Prabowo. In terms of subjectivity, there have been large amount of meaningful opinions (related to the neutral tones) around Prabowo and Jokowi.

#### How about news and media? What are the Coverage for both two Candidates?

The next analysis is about News Coverage. News coverage could cement public opinions about presidential candidates and hence, would greatly affect election results. [It is even mentioned that news coverage cemented Trump’s triumph for USA candidacy](https://www.poynter.org/reporting-editing/2016/journalists-helped-cement-donald-trumps-candidacy-according-to-a-new-report/). Therefore, it is mandatory for us to analyse their coverage in regards to major news channels.

![](img\1__Xlm2bB8EPVBy__tLj1V2flQ.png)

KPU\_ID (which is the posts for elections) mentioned about Prabowo a lot of times compared to other major social media channel. More or less, the coverage of both candidates remained the same.

### What are the common topics which both candidates are associated with? (Topic Extractions with NMF and LDA)

#### Topic extractions

This section illustrates how to do approximate topic modeling in Python. We will use a technique called non-negative matrix factorization (NMF) that strongly resembles Latent Dirichlet Allocation (LDA) which is used to find extract topics from bags of words (list of words)

#### Preparing data for topic extractions by making texts into bags of words

> **Bag of words** model is a technique from **Natural Language Processing** or **NLP** to extract features from text. It does this by counting the frequency of words in a document. A document can be defined as you need, it can be a single sentence or all Wikipedia. The output of the bag of words model is a **frequency vector**. (InsightsBot)

![](img\1__sJ78hjUccAFUjw__2vpuKgA.png)

#### Generating Topics through Decomposition Model

By analogy with LDA, we will use NMF to get a document-topic matrix (topics here will also be referred to as “components”) and a list of top words for each topic. We will make analogy clear by using the same variable names: doctopic and topic\_words

![](img\1__Tfhr5V8NsipCTFpmgLmQHg.png)

Then based on the doctopic and clf.components, we could sort the coefficients list and retrieve the index with maximum coefficient which indicates closeness of the word to the topic. We will find the 8 topics such this

![](img\1__cvD8ePIL8t__5hBVrgqYTTg.png)

#### Analyzing Common Topics for Jokowi and Prabowo during Election

Through the extractions of topics earlier, we find the dominant topics for each post and visualize it as followed:

![](img\1__8yJAEHKjhR__N__AQ7w5djBQ.png)

The first topic relates Prabowo and Jokowi to democrat party which is a very big socialist party in Indonesia and very closely related to the image of the former president Susilo Bambang Yudhoyono (SBY)

The second topic we see that the netizens mentioned about claiming c1 form with BPN which stands for Badan Pemenangan Nasional which closely referred to the Prabowo-Sandi team. We need to further analyse it to find out what exactly is the content of mentioning c1 form with BPN.

The rest of the topics showed the conditions of the current election stages which is after voting and quick counts. There were some regional languages that were mixed up and can be cleaned up further.

### So, what have we learnt and concluded?

1.  Public Sentiment to Prabowo and Jokowi are similar. With some of the sentiments mentioned satisfactions to Prabowo Candidacy.
2.  News coverage from KPU (Komisi Pemilihan Umum) and other news covered both presidential candidates equally, with slight more coverage for Prabowo.
3.  The topics we extracted from Twitter posts showcased election stages with brief relations of C1 forms to Prabowo-Sandi pair and both candidates to Democrat party.

Of course in this conclusion, there are some assumptions taken including selection bias which not all voters would actively tweet. This analysis did not take into account on the scopes outside Twitter. Another assumption taken is the accuracy of double steps to analyse social sentiments, which are to translate using Google API then analyse with TextBlob. This might impair the accuracy of the sentiment analysis. The better procedure is to use sentiment analysis in its native language, Bahasa, however while I was writing this, I could not find a reliable and accessible library yet. Probably maybe you would fill up the gap :)… Finally, as currently, this analysis took a very naive approach which is aggregate all of the posts’ sentiment scores, we could instead group them by user ID first and then aggregate the scores by the number of users. This also best simulates voters as one person can only vote once.

In short, it still remains very hard to figure out who will win, however based on our Twitter Analysis alone, Prabowo had more popularity by counts and percentage of number of posts compared to Jokowi (including positive sentiments).

This however, is very different from the recent quick counts which is 45% to 55% in Jokowi’s favor. As such, this analysis is still very narrow in scope and required larger time series dataset to find reliable outcomes. However, as my goal is to walk you through some techniques and retell a glimpse of Indonesian Candidacy from Twitter POV, my article has served well.

### So, what’s next?

As what every analysis produces more questions, in the future we improve the analysis with the following:

1.  Group the sentimental analysis from Tweeter users by regions, then compared it with the quick count analysis per region. This would establish the initial stage of validity testing of the model.
2.  There are many researches on fake news to help shape public views of presidential candidacy. We could review their contents and the association it brings to quick count results.
3.  Establish more possible independent variables such as the possibility of fake news, tweeter users ages, demographics, etc.

Should there be time, I will continue improving on this analysis and tackling some of the assumptions made. I sincerely thank my Data Whatsapp Group for the kind and constructive feedback. I learnt so much from their critique.

I hope this analysis would open up many other questions and insights which would help you better understand our country Indonesia.

Please reach out to me via my [LinkedIn](http://www.linkedin.com/in/vincenttatan/) and subscribe to my [Youtube Channel](https://www.youtube.com/user/vincelance1/videos)

Comment out below for suggestions and feedbacks.

Happy coding :)