# SEO Tester for Url length, Title and meta description length

The reason I created this tool, is because when I was working on a SEO project for my client, I've had like 1600 metadata issues on their site, and as I was solving them, this number was growing constantly as the admins added some more products, not knowing much about what google expect about the metadata tags length.
So I decided to help them out (and myself) by sending a tool which they can check to input the right metadata, straigth at the time when they create a product/page.

I know there are similar tools, and I could use them for this purpose, but I wanted to customise to have some extra features. Also if in the future there are extra request for features, I could easily add them.

As I studied React in the last couple of months, and I fell in love with the speed - I know Google is in love too with it, but that's no problem for me :) I'm quite open minded, it was obvious that I will use the React.js library.
So the tool is a Single Page App (SPA), uploaded to my new website (work in progress atm though, using Next.js): floatingpint.com/seo-tool.  
The website is hosted on a AWS Virtual Private Server, which I have set it up myself (if you have a similar job for me, [drop me a mail](mailto:av@andrasvargas.com))

The page has three main sections/components:

- Url checker
- Meta Title checker
- Meta Description checker

The URL tool, apart from measuring the characters and alerting when the URL is too long, has some extra features:

- You can add a "base url", in this case you need to input only the slug (the last part of the url, after the slash (/). This helps, when you have like me, 900 "url too long" issues and when you open them in the platform admin panel, you see only the slug. Either you add a base or you just copy the full url, both ways it calculates the right length.
- When the url/slug is pasted, you can click the "trim to size" button, and it will chop everything after 75 characters, and you'll see the newly created url below, if you like it you can copy the slug to the clipboard with the button next to it, "copy slug", you just have to paste it into the page/product admin site, and you are done.

The Title tester is measuring the element's width in pixels, this is more accurate then character count. Paste the title, trim it and copy/paste to the page. It gives you an alert if the title is too short or too long.

The Meta Description tool is similar to the title tester, also measures the length in pixels, giving a red notice if the description is too short or too long. Both tools have a copy button, which copies the values of the field to clipboard, making it easy to paste into place.

## Frontend

From 8 Nov 2024 the app is hosted on Netlify, imported manually fron Github, on the subdomain seo.webtechsupport.co.uk
The SPA was previously hosted on a Ubuntu/Apache2 server at AWS, with multiple websites on it, all configured and set up be myself. For source control I use Github, the repository link: [github.com/andvargas/seo-tool](https://github.com/andvargas/seo-tool).
The single page app doesn't have a database connection, no data is being stored.

## Version 0.1.1

- Fixed issue when "add base URL" was clicked and cancelled, the screen went blank.
- Added some instructions and help
- Modified the logo design

## Version 0.1.2

- Fix issue of "Trim to size" button when Base url added
- When Trim to size is not clicked, Copy slug would still work and would copy the above field "Add Url to trim"
- Made the "Slug trimmed" field writable so we can further trim to adjust the slug before copying.

## Version 0.1.3

- Corrected "Trim to size" length

Created by [Andras Vargyas](mailto:av@andrasvargas.com) Front End Developer
