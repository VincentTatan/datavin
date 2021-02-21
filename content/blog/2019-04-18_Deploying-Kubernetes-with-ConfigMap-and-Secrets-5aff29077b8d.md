---
title: Deploying Kubernetes with ConfigMap and Secrets
description: >-
  I would like to provide explanations for Kubernetes native configuration
  resources for regular and confidential data. This is created…
date: '2019-04-18T07:46:50.977Z'
featured_image: "img/1__doN78Le8j__prkvgLhowddQ.png"
categories: []
keywords: []
slug: /@vincentkernn/deploying-kubernetes-with-configmap-and-secrets-5aff29077b8d
---

![](img\1__doN78Le8j__prkvgLhowddQ.png)
undefined

I would like to provide explanations for Kubernetes native configuration resources for regular and confidential data. This is created based on my experience working in Visa as a Data Engineer to launch Client Directories into Microservices, hence the picture you see above. I hope that my experience here can be a useful learning experience for you to configure your Kubernetes deployments and services quickly with Config Maps and Secrets.

**Problem Statement**

Environment Variable Configuration Pattern’s significant disadvantage is that it is only suitable for a handful of variables and simple configurations. Some of the places of these variables may vary, and might be overridden in another location.

For example, configurations in Docker may be clashed with configurations in Kubernetes Deployment.

Therefore, ConfigMaps and Secrets are necessary for Kubernetes to keep all the configuration data in a single place while providing the flexibility to allow differences amongst Kubernetes Deployments and pods.

**What are Config Maps and Secrets?**

Config Maps and Secrets are storages to manage key-value pairs. Secrets are similar to ConfigMaps but with the additional benefits of actual data encoding (Base64 for Secrets).

**There are 3 ways to use these objects:**

1.  Reference to environment variables, where the key is the name of the environment variable
2.  Files mapped to a volume in Pod.
3.  Store configurations in external volumes then mount it.

For the sake of POC we will focus on the first method.

**How Secure Are Secrets?**

A secret is encoded by Base64 and decoded prior to passing it to Pod either as env variables or mounted volume. Base 64 is not encryption method, but is an encoded text.

**What make secrets more secure are other implementations such as:**

1.  A secret is only distributed to running pods which need the secrets
2.  Secrets are stored in a tmpfs memory and never physical storage, this is gone when pod is removed.
3.  In etcd, secrets are stored in encrypted form.

**Some ways on how you can make it secure:**

1.  Apply role based access control to secrets to allow certain predefined pods to read them.
2.  Application level encryption

**Alternative: using gitRepo Volumes?**

GitRepo volumes mount an empty directory on the pod and clones a git repository into it. You can get versioning and auditing for free. However, this is not kubernetes resource, and you will need additional access to Git Repository.

**Restrictions**

Secrets only have 1 MB Size limits. They can’t store large data. Considering that need to encoded it, the most binary data you could put is 700 kb.

### **Establishing ConfigMaps and Secrets**

**Config maps**

> **_Create configmap (from application.properties)_** kubectl create configmap my-config — from-file application.properties

> **_Export into yaml files_** kubectl get configmap dev-config -o yaml > dev-config.yaml

**Secret**

> **Create secret from files or inputs (from file):** kubectl create secret generic dbsecret — from-file=username.txt — from-file=password.txt

> **Create secret from files or inputs (from cmd):** kubectl create secret generic dbsecret — from-literal=db.username=<username> — from-literal=db.password=<password> — from-literal=db.url=<url> — from-literal=remote.username=<remote.username> — from-literal=remote.pass=<remote.pass>

> **Export into yaml** kubectl get secret <secretname> -o yaml > dbsecret.yaml

### End Result

**Final State**

I am able to run two config maps and one secret which I connected to my test service. Each of this config map is connected to Kubernetes Deployment Client Profile Application. This is injected as environment variables in specific pod for the designated deployment. We are then able to access this environment variables through Java Spring Annotation.

**Learning Outcome**

ConfigMaps and Secrets give very easy management of configurations in Kubernetes. It is suitable for simple configurations which in a single point of truth that is not clashing with other configurations. It also allows easy separations of configurations amongst different services and deployments. One can then deploy multiple DB2 subsystems, Machine Learning pipelines, and even Deployment Versions as necessary through simple labels and config alterations.

Lastly, please reach out to me via my LinkedIn [www.linkedin.com/in/vincenttatan/](http://www.linkedin.com/in/vincenttatan/)

Happy coding :)

**References:**

1.  [https://kubernetes.io/blog/2016/04/configuration-management-with-containers/](https://kubernetes.io/blog/2016/04/configuration-management-with-containers/)
2.  [https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#define-container-environment-variables-using-configmap-data](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#define-container-environment-variables-using-configmap-data)
3.  [https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#create-configmaps-from-files](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#create-configmaps-from-files)
4.  Design Patterns in Kubernetes Safari books.

**_Disclaimer_**

This disclaimer **informs readers that the views, thoughts, and opinions expressed in the text belong solely to the author, and not necessarily to the author’s employer, organization, committee or other group or individual**. **References are picked up from the list and any similarities with other works are purely coincidental**