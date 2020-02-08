# jacobvoller.com
The personal website of Jacob C. Voller, Software Engineer.

For more information, visit www.jacobvoller.com

## Hosting
The project [static files] are hosted at https://github.com/JacobVoller/jacobvoller.com.

### Generated Images
There are a series of generated images. The source code to generate them is in a seperate git repo: https://github.com/JacobVoller/jacobvoller.com-image-generator. The actual generated files should be placed in this repository to be copied to the production server on deploy.

## Deployment
Everytime there is a push to master, DeployHQ hooks into the GitHub repo and copies the contents to the /httpdocs/ folder in the GoDaddy Plesk Admin console.

* url: **https://jacobvoller.deployhq.com/projects/jacobvoller-com/**
* Project: **jacobvoller.com**
* Server: **GoDaddy**
* Protocol: **FTP**
* Host Name: **50.62.160.246**
* Port: **21**
* Username: **deployhq**
* Deployment Path: **/httpdocs**
* Branch to Deploy From: **Master**
* Excluded Files: **README.md**

## Components

### Content
#### Home
The home page is intended to be the primary web page. Styled like a formal letter to provide a brief descriptiobn of Jacob and provide SEO material.

#### Links
The links page is not intended to be viewed by people or linked to; it's meant to be crawled and establish SEO links to elevate positive profiles and news articles of Jacob.

### Google Analytics
Google anaystics is used to track site traffic and performance.

### Mobile Formnatting
The main site has two sizing abilities: screens larger then 700px wide and screens smaller then 700px wide. When making changes, ensure the site looks okay in both sizing options.

### robots.txt
The robots file tells search engines that it's okay to scan and index the site.

### sitemap.xml
The sitemap explicitly defines the components of the site so that search engines can detect when a page has been updated or new content has been added. When adding new pages make sure to also add it to the sitemap. When updating existing pages, make sure to update the last update date so that search engines will rescan the page to pick up the newest changes.