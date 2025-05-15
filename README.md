# Shorten
Shorten is a simple web-based URL shortener built with HTML, CSS, and JavaScript 1 . It allows users to
convert long, unwieldy links into short, easy-to-share URLs. The application provides a clean interface
where you paste a long URL, click Shorten, and instantly get a compact link. Shorten uses the shrtco.de
API under the hood to handle the actual shortening process. 

Features
• URL Shortening: Enter a long URL and receive a much shorter link. 
• Copy to Clipboard: Copy the shortened URL to your clipboard with one click. 
• Visit Links: Open the original or shortened link directly in a new tab. 
• Responsive Design: Works seamlessly on desktop and mobile devices. 

Technologies Used
• HTML5 for markup and structure. 
• CSS3 for styling and layout. 
• JavaScript (ES6+) for application logic and DOM manipulation. 
• Fetch API for making HTTP requests to the shortening service. 
• shrtco.de URL Shortener API as the backend service for generating short links. 

Installation
1. Clone the repository to your local machine:

git clone https://github.com/yourusername/Shorten.git
cd Shorten

2. Open the project folder. 
3. Open the index.html  file in your web browser, or start a simple local server (e.g., using VS

Code Live Server or python -m http.server ). No additional dependencies are required. 

Usage Instructions
1. Open the Shorten application in your browser ( index.html ). 
2. Enter the long URL you want to shorten into the input field. 
3. Click the Shorten button. 
4. The shortened URL will appear below the input field. 
5. Click the Copy button next to the shortened URL to copy it to your clipboard. Alternatively, click 

Visit to open the shortened link. 

Example: Shortening https://www.example.com/some/very/long/path  might produce a link like
https://shrtco.de/AbCdE . 

API Information
Shorten uses the free shrtco.de API for link shortening. When you submit a URL, the app sends a GET
request to:

https://api.shrtco.de/v2/shorten?url=<YOUR_LONG_URL>

The API returns a JSON response containing the shortened link. The short URL can be found in the 
result.full_short_link  field of the response 2 . (For example, after fetching and parsing the

JSON, you can access data.result.full_short_link  to get the short link.) No API key or
authentication is required for this basic endpoint. 

Screenshots
Screenshots below are placeholders. Replace with actual images of your app’s UI.

Shorten Home
Figure: The Shorten app interface (enter a long URL and click “Shorten”).

Shorten Result
Figure: Example output showing a shortened URL with Copy/Visit buttons.

Future Enhancements (Optional)
• Add custom alias support so users can choose their own short codes. 
• Store shortened URL history in local storage or a database for future reference. 
• Provide analytics for each short link (click counts, timestamps, etc.). 
• Enhance the UI with themes or a dark mode toggle. 
• Allow bulk shortening of multiple URLs at once. 
• Implement error handling for invalid URLs or API failures. 

License
This project is licensed under the MIT License. 

1 GitHub - jeronasiedu/urlshortener: A simple url shortener project built with HTML,CSS & JS using
api.shrtco.de API
https://github.com/jeronasiedu/urlshortener

2 Make Your Own URL Shortener Using Fetch API | by Taimoor Saddique | JavaScript in Plain English
https://javascript.plainenglish.io/make-your-own-url-shortener-using-fetch-api-f6f5b4c69c39

