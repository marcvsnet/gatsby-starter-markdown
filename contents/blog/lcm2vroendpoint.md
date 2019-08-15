---
date: "2018-09-29"
title: Error adding vRO Endpoint to/capture vRO content from vRealize Suite Lifecycle Manager 2.0
root: "/blog"
---
If you are having issues while adding a vRO endpoint to vRealize Suite Lifecycle Manager 2.0 content management or you are not getting any items listed while trying to capture content out of vRO this might help you.

The error I got was about SSH issues happening to the vRO workflows running the tasks in vRSLCM.

The root cause seems to be missing Xenon Admin Token in any configuration database or config file. The missing token is causing auth issue at the vRSLCM API.