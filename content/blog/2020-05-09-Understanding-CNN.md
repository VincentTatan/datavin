---
date: 2020-11-20T10:58:08-04:00
description: "Your first baby step to learn Deep Learning for Image Classification"
featured_image: "/images/cnn.jpg"
title: "Understanding CNN (Convolutional Neural Network)"
draft: false
---
Understanding CNN (Convolutional Neural Network)
================================================
Your first baby step to learn Deep Learning for Image Classification
--------------------------------------------------------------------

> Imagine Google Photos: for all of the pictures you have, how do you label those by objects. Do you want to tag them one by one? Is it possible to do a search on your latest Chicken Maryland snapshots? Enter CNN!

Understanding Image Classification
==================================

> Image classification defines image objects and labeled these images from labeled examples.

Our brains are the master at determining objects quickly. When you enter a grocery store, you can separate bananas from other goods such as shoes. My 2 year old niece knew how to differentiate cats and dogs.

Yet to teach those classifications with computer is very hard.

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/7530/1\*PiqtkepRtZC02\_0j3GNw3g.png" width="3765" height="1163" srcSet="https://miro.medium.com/max/552/1\*PiqtkepRtZC02\_0j3GNw3g.png 276w, https://miro.medium.com/max/1104/1\*PiqtkepRtZC02\_0j3GNw3g.png 552w, https://miro.medium.com/max/1280/1\*PiqtkepRtZC02\_0j3GNw3g.png 640w, https://miro.medium.com/max/1400/1\*PiqtkepRtZC02\_0j3GNw3g.png 700w" sizes="700px"/>

My search for the word ΓÇ£catΓÇ¥

Take a look into these images. Within a few glimpse, you should have realized that in the middle of cat images, there are a few actresses from the musical theatre ΓÇ£CatsΓÇ¥. There are also a few which are the pictures of cat doodles but not cats. So how do we teach our computers to understand these images?

Classical Image Classification
==============================

In the past, image classification models used raw pixels to classify the images. You can classify cats by color histogram and edge detection which allows you to classify cats by color and ear shape. This method has been successful but until the method encounters more complex variants.

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1240/0\*W8wIkmPcC0p\_dPNz" width="620" height="413" srcSet="https://miro.medium.com/max/552/0\*W8wIkmPcC0p\_dPNz 276w, https://miro.medium.com/max/858/0\*W8wIkmPcC0p\_dPNz 429w" sizes="429px"/>

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1280/0\*qvb71TVJ9bRgOwo5.jpg" width="640" height="640" srcSet="https://miro.medium.com/max/552/0\*qvb71TVJ9bRgOwo5.jpg 276w, https://miro.medium.com/max/572/0\*qvb71TVJ9bRgOwo5.jpg 286w" sizes="286px"/>

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/900/0\*gd57eyZom8oknC5S.jpg" width="450" height="450" srcSet="https://miro.medium.com/max/552/0\*gd57eyZom8oknC5S.jpg 276w, https://miro.medium.com/max/572/0\*gd57eyZom8oknC5S.jpg 286w" sizes="286px"/>

Imagine if our classifiers only specify cats by their black color and ear shape. Are all of these pictures cats?

ThatΓÇÖs where the classical image recognition fails because the model does not account for _other features_. But what are these _other features_? Do you need to tell the model one by one? You will find it a great hassle if not impossible.

Introducing Convolutional Neural Networks (CNN)
===============================================

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/2052/0\*78--J5vGoBls\_Hbc.jpeg" width="1026" height="300" srcSet="https://miro.medium.com/max/552/0\*78--J5vGoBls\_Hbc.jpeg 276w, https://miro.medium.com/max/1104/0\*78--J5vGoBls\_Hbc.jpeg 552w, https://miro.medium.com/max/1280/0\*78--J5vGoBls\_Hbc.jpeg 640w, https://miro.medium.com/max/1400/0\*78--J5vGoBls\_Hbc.jpeg 700w" sizes="700px"/>

CNN Architecture

CNN is a type of neural network model which allows us to extract higher representations for the image content. Unlike the classical image recognition where you define the image features yourself, CNN takes the imageΓÇÖs raw pixel data, trains the model, then extracts the features automatically for better classification.

LetΓÇÖs take a look at the following optical illusion to understand how CNN works.

CNNΓÇÖs Intuition ΓÇö Imagine an Optical Illusion
---------------------------------------------

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1700/0\*ubFYiqbo4fJLbvcg.jpg" width="850" height="491" srcSet="https://miro.medium.com/max/552/0\*ubFYiqbo4fJLbvcg.jpg 276w, https://miro.medium.com/max/988/0\*ubFYiqbo4fJLbvcg.jpg 494w" sizes="494px"/>

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/4382/1\*ZD2k1GKX42xIXFnoIXSmNw.png" width="2191" height="1235" srcSet="https://miro.medium.com/max/552/1\*ZD2k1GKX42xIXFnoIXSmNw.png 276w, https://miro.medium.com/max/1014/1\*ZD2k1GKX42xIXFnoIXSmNw.png 507w" sizes="507px"/>

Psychologist Edwin Boring introduced the painting of ΓÇ£My Wife and My Mother-in-LawΓÇ¥ where the figure seems to morph from young lady to old woman, to the public in 1930. (Source)

Consider this image. Do you see a young lady or a grandma? If you start your focus on a dot in the middle of an image, you would see a young lady. However, if you focus on the black strip in the middle-bottom of the image, you will see an old lady. Look at the red boxes on the image.

This picture provides an insight on how humans recognize images. Because the human brain is designed to capture patterns in order to classify an object, changing the points where you focus your observation also changes your interpretation of the overall image.

Similar to how the human brain works, CNN distinguishes meaningful features in an image in order to classify the image as a whole.

Principles of CNN
=================

Convolution
-----------

A convolution sweeps the window through images then calculates its input and filter dot product pixel values. This allows convolution to emphasize the relevant features.

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/3570/1\*VxQvrbcOaduumKYzoGLjOQ.png" width="1785" height="703" srcSet="https://miro.medium.com/max/552/1\*VxQvrbcOaduumKYzoGLjOQ.png 276w, https://miro.medium.com/max/1104/1\*VxQvrbcOaduumKYzoGLjOQ.png 552w, https://miro.medium.com/max/1280/1\*VxQvrbcOaduumKYzoGLjOQ.png 640w, https://miro.medium.com/max/1400/1\*VxQvrbcOaduumKYzoGLjOQ.png 700w" sizes="700px"/>

1D Convolution Operation with features(filter)

Look at this input. We will encase the window elements with a small window, dot multiplies it with the filter elements, and save the output. We will repeat each operation to derive 5 output elements as \[0,0,0,1,0\]. From this output, we can know that the feature change(1 becomes 0) in sequence 4. The filter has done well to identify the input values. Similarly, this happened for 2D Convolutions as well.

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1616/0\*Lxtbs0P1NdWwdUxb" width="808" height="380" srcSet="https://miro.medium.com/max/552/0\*Lxtbs0P1NdWwdUxb 276w, https://miro.medium.com/max/1104/0\*Lxtbs0P1NdWwdUxb 552w, https://miro.medium.com/max/1280/0\*Lxtbs0P1NdWwdUxb 640w, https://miro.medium.com/max/1400/0\*Lxtbs0P1NdWwdUxb 700w" sizes="700px"/>

2D Convolution Operation with features(filter) ΓÇö [Source](https://github.com/PetarV-/TikZ/tree/master/2D%20Convolution)

With this computation, you detect a particular feature from the input image and produce **feature maps** (convolved features) which emphasizes the important features. These convolved features will always change depending on the filter values affected by the gradient descent to minimize prediction loss.

Furthermore, The more filters deployed, the more features that CNN will extract. This allows more features found but with the cost of more training time. There is a sweet spot for the number of layers, usually, I will put 6 for 150 x 150 size of image.

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1370/0\*iADec-3T1pLI9P\_9" width="685" height="411" srcSet="https://miro.medium.com/max/552/0\*iADec-3T1pLI9P\_9 276w, https://miro.medium.com/max/1104/0\*iADec-3T1pLI9P\_9 552w, https://miro.medium.com/max/1280/0\*iADec-3T1pLI9P\_9 640w, https://miro.medium.com/max/1370/0\*iADec-3T1pLI9P\_9 685w" sizes="685px"/>

Feature map in each layer of CNN ([source](https://stackoverflow.com/questions/52741291/creating-a-cnn-model-in-keras-with-feature-maps-from-each-of-the-previous-filter))

However, what about the corner or side values. They do not have enough adjacent blocks to fit the filter. Should we remove them?

No, because you would lose important information. Therefore, what you want to do instead is **padding;** you pad the adjacent feature map output with 0. By inserting 0 to its adjacent, you no longer need to exclude these pixels.

Essentially, these convolution layers promote **weight sharing** to examine pixels in kernels and develop visual context to classify images. Unlike Neural Network (NN) where the weights are independent, CNNΓÇÖs weights are attached to the neighboring pixels to extract features in every part of the image.

Max Pooling
-----------

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1574/0\*0sIbLSH-rU8v40sB.jpeg" width="787" height="368" srcSet="https://miro.medium.com/max/552/0\*0sIbLSH-rU8v40sB.jpeg 276w, https://miro.medium.com/max/1104/0\*0sIbLSH-rU8v40sB.jpeg 552w, https://miro.medium.com/max/1280/0\*0sIbLSH-rU8v40sB.jpeg 640w, https://miro.medium.com/max/1400/0\*0sIbLSH-rU8v40sB.jpeg 700w" sizes="700px"/>

We take the maximum max pooling slices of each 2x2 filtered areas ([source](http://cs231n.github.io/convolutional-networks/))

CNN uses **max pooling** to replace output with a max summary to reduce data size and processing time. This allows you to determine features that produce the highest impact and reduces the risk of overfitting.

Max pooling takes two **hyperparameters**: stride and size. The stride will determine the skip of value pools while the size will determine how big the value pools in every skip.

Activation Function (ReLU and Sigmoid)
--------------------------------------

After each convolutional and max pooling operation, we can apply Rectified Linear Unit (ReLU). The ReLU function mimics our neuron activations on a ΓÇ£big enough stimulusΓÇ¥ to introduce nonlinearity for values x>0 and returns 0 if it does not meet the condition. This method has been effective to solve diminishing gradients. Weights that are very small will remain as 0 after the ReLU activation function.

The CNN Big Picture + Fully Connected Layer
===========================================

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1690/0\*EJ08nVFu6LD1h2mZ" width="845" height="260" srcSet="https://miro.medium.com/max/552/0\*EJ08nVFu6LD1h2mZ 276w, https://miro.medium.com/max/1104/0\*EJ08nVFu6LD1h2mZ 552w, https://miro.medium.com/max/1280/0\*EJ08nVFu6LD1h2mZ 640w, https://miro.medium.com/max/1400/0\*EJ08nVFu6LD1h2mZ 700w" sizes="700px"/>

CNN architectures with convolutions, pooling (subsampling), and fully connected layers for softmax activation function

Finally, we will serve the convolutional and max pooling feature map outputs with Fully Connected Layer (FCL). We flatten the feature outputs to column vector and feed-forward it to FCL. We wrap our features with **softmax** activation function which assign decimal probabilities for each possible label which add up to 1.0. Every node in the previous layer is connected to the last layer and represents which distinct label to output.

**The end results?** You will be able to classify the dogs and cat images as below.

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1718/0\*loet1nSd4EwCIYcR" width="859" height="357" srcSet="https://miro.medium.com/max/552/0\*loet1nSd4EwCIYcR 276w, https://miro.medium.com/max/1104/0\*loet1nSd4EwCIYcR 552w, https://miro.medium.com/max/1280/0\*loet1nSd4EwCIYcR 640w, https://miro.medium.com/max/1400/0\*loet1nSd4EwCIYcR 700w" sizes="700px"/>

Finding the perfect image classification with softmax ([Source](https://colab.sandbox.google.com/drive/1v0VWuWnmP1Ns-PAUCiksxbzpy3AopXjc))

Cleaning and Preventing Overfitting in CNN
==========================================

Unfortunately, CNN is not immune to overfitting. If not monitored properly, the model can get trained too much that it could not generalize unseen data. Through my experiences, I have made many beginner overfitting mistakes and how I resolve them as following:

Using test set as the validation set to test the model
------------------------------------------------------

Even though we do not use the test set to train the model, the model could adjust the loss function with the test set. This will base the training on the test dataset and is a common cause of overfitting. Therefore, during the training, we need to use **validation sets** then ultimately test the finished model with the unseen test set.

Dataset is relatively small
---------------------------

When dataset is small, it is very easy to specialize onto a few set of rules and forget to generalize. For example, if your model only sees boots as shoes, then the next time you show high heels, it would not recognize them as shoes.

Therefore, in the case of small training data set, you need to artificially boost the diversity and number of training examples. One way of doing this is to add **image augmentations** and creating new variants. These include translating images and creating dimension changes such as zoom, crop, flips, etc.

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1200/0\*m9G3r4C99KbneQsE" width="600" height="400" srcSet="https://miro.medium.com/max/552/0\*m9G3r4C99KbneQsE 276w, https://miro.medium.com/max/1104/0\*m9G3r4C99KbneQsE 552w, https://miro.medium.com/max/1200/0\*m9G3r4C99KbneQsE 600w" sizes="600px"/>

Image augmentation [Source](https://www.javatpoint.com/pytorch-data-augmentation-process)

Over Memorization
-----------------

Too many neurons, layers, and training epochs promote memorization and inhibit generalize. The more you train your model, the more likely it becomes too specialized. To counter this, you could reduce the complexity by removing a few hidden layers and neurons per layer.

Alternatively, you could also use regularization techniques such as **Dropout** to remove activation unit in every gradient step training. Each epoch training deactivates different neurons.

Since the number of gradient steps is usually high, all neurons will averagely have same occurrences for dropout. Intuitively, the more you drop out, the less likely your model memorizes.

<img alt="Image for post" class="eq fe fa jl v" src="https://miro.medium.com/max/1458/0\*qElVyiza3Bs-z-k6" width="729" height="389" srcSet="https://miro.medium.com/max/552/0\*qElVyiza3Bs-z-k6 276w, https://miro.medium.com/max/1104/0\*qElVyiza3Bs-z-k6 552w, https://miro.medium.com/max/1280/0\*qElVyiza3Bs-z-k6 640w, https://miro.medium.com/max/1400/0\*qElVyiza3Bs-z-k6 700w" sizes="700px"/>

Drop out images

Dealing with color images
-------------------------

You can also easily include images with 3 layers of color channels: Red Green Blue (RGB). During convolution, you use 3 separate convolutions for each color channel and train 3-level stack of filters. This allows you to retrieve 3D feature maps.

How could we do better? ΓÇö Transfer Learning
===========================================

As the use cases become complex, the complexity of the model needs to improve as well. With a few layers of CNN, you could determine simple features to classify dogs and cats. However, at the deep learning stage, you might want to classify more complex objects from images and use more data. Therefore, rather than training them yourself, **transfer learning** allows you to leverage existing models to classify quickly.

**Transfer learning** is a technique that reuses an existing model to the current model. You could produce on top of existing models that were carefully designed by experts and trained with millions of pictures.

However, there are a few caveats that you need to follow. First, you need to modify the final layer to match the number of possible classes. Second, you will need to freeze the parameters and set the trained model variables to immutable. This prevents the model from changing significantly.

One famous Transfer Learning that you could use is MobileNet. It is created for mobile devices which have less memory and computational resources. You can find MobileNet in [Tensorflow Hub](https://www.tensorflow.org/hub) which gathers many pretrained models. You can just simply add your own FCL Layer on top of these models.

Conclusion: CNN to perceive our visual world
============================================

CNN is a tough subject but a rewarding technique to learn. It teaches us how we perceive images and learn useful applications to classify images and videos. After learning CNN, I realized that I could use this for my project at Google to detect phishing attacks.

I also realized that the knowledge for CNN is very deep. Over the years, there are many improvements in CNN variations including one of the latest ΓÇö ResNet ΓÇö which even beats human reviewers in ImageNet Classifications.

1.  Le-Net (Yann Le Cun, 1998)
2.  Alex Net (2012)
3.  VGGNet (2014) ΓÇö Deep neural network
4.  Inception Module Google Net (2014) ΓÇö Stack module Layer
5.  ResNet (2015) ΓÇö First net to outperform human imagenet

For me, I am writing this article to explore my basic understanding of CNN for a project I work at Google. Therefore, feel free to give me any feedback if I made any mistakes or knowledge gaps in my writing. Soli Deo Gloria.

References
==========

I sincerely hope this pique your interest to learn deeper about CNN. If you do, here are some resources which you might find very useful:

1.  [Yann LeCunΓÇÖs paper of CNN](http://yann.lecun.com/exdb/publis/pdf/lecun-99.pdf)
2.  [CS 231 Stanford](http://cs231n.github.io/convolutional-networks/)
3.  [Google ML CNN](https://developers.google.com/machine-learning/practica/image-classification/convolutional-neural-networks)
4.  And many others

FinallyΓÇª
========

I really hope this has been a great read and a source of inspiration for you to develop and innovate.

Please **Comment** out below for suggestions and feedback. Just like you, I am still learning how to become a better Data Scientist and Engineer. Please help me improve so that I could help you better in my subsequent article releases.

Thank you and Happy coding :)

About the Author
================

Vincent Tatan is a Data and Technology enthusiast with relevant working experiences from Google LLC, Visa Inc. and Lazada to implement microservice architectures, business intelligence, and analytics pipeline projects[.](https://bit.ly/2I8jkWV.?source=post_page---------------------------)

Vincent is a native Indonesian with a record of accomplishments in problem-solving with strengths in Full Stack Development, Data Analytics, and Strategic Planning.

He has been actively consulting SMU BI & Analytics Club, guiding aspiring data scientists and engineers from various backgrounds, and opening up his expertise for businesses to develop their products.

Vincent also opens up his 1 on 1 mentorship service on 10to8 to coach how you can land your dream Data Scientist/Engineer Job at Google, Visa or other large tech companies.

1.  [**Please inform him if you need referrals to Google. Google is hiring!**](https://forms.gle/iyo4oJtqKpQ1MgWy5)
2.  [**Book your appointment with him here**](https://somtrbdynishjjjdkn.10to8.com/) **if you are looking for mentorship.**

Lastly, please reach out to Vincent via [**LinkedIn**](http://www.linkedin.com/in/vincenttatan/?source=post_page---------------------------)**,** [**Medium**](https://medium.com/@vincentkernn?source=post_page---------------------------) **or** [**Youtube Channel**](https://www.youtube.com/user/vincelance1/videos?source=post_page---------------------------)
