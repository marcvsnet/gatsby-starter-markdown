---
date: "2018-09-29"
title: Error adding vRO Endpoint to/capture vRO content from vRealize Suite Lifecycle Manager 2.0
root: "/blog"
---
If you are having issues while adding a vRO endpoint to vRealize Suite Lifecycle Manager 2.0 content management or you are not getting any items listed while trying to capture content out of vRO this might help you.

The error I got was about SSH issues happening to the vRO workflows running the tasks in vRSLCM.

The root cause seems to be missing Xenon Admin Token in any configuration database or config file. The missing token is causing auth issue at the vRSLCM API.

To fix this, do the following:

* Enable access to the built-in vRO by connection to vRSLCM appliance via SSH 
  ```shell
  iptables -A INPUT -p tcp --dport 8281 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
  ```
 
* Open the vRO overview page at `https://<vro instance>:8281/vco`

* Download the vRO Client and start it. Once you are asked for the credentials, use `vcoadmin`  with `vcoadmin`

* Create a new workflow and add the action `configureXenonToken` of the module `com.vmware.cse.clm.xenon`

* Run the workflow and check it has run successfully

* Remove the vRO endpoint and add it again

* Now you shouldn’t have any issues anymore