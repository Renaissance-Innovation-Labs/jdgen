# JDGEN WIDGET

The primary objective of JDGEN is to assist job recruiters and companies in generating accurate and tailored job descriptions for various roles they are hiring for. The widget aims to eliminate the common practice of copying and pasting job descriptions that may not fit specific roles, ensuring that the requirements and responsibilities listed are appropriate for the position being advertised.

## Features

1. Generate job description based on the role, experience level and work location type
2. Copy generated job description.
3. Toggle between dark and light theme

## Screenshots.

![Form Input](src/assets/images/Jdgen-1.png) ![Generating JD](src/assets/images/Jdgen-2.png)
![Dark mode preview](src/assets/images/Jdgen-3.png)

## Get Started

To get started with this repository, follow these steps:

1. **Fork the repository:**

   Click on the fork icon on the repository which create a copy of the repository.

2. **Clone your forked repository:**

   ```bash
   git clone https://github.com/Renaissance-Innovation-Labs/jdgen-widget.git
   ```

3. **Navigate to the project directory:**

   ```
   cd jdgen-widget
   ```

4. **Set up development environment**
   Install dependencies

   ```
   npm install
   ```

   Add .env file

   ```
   REACT_APP_OPEN_API_KEY=sk-xyxyxyxyxyxyxyxyyx

   ```

   Change root element id to 'jdgen-widet-root'

5. Run development

```

npm start

```

## Contributing

This is open for conatributions. Please fork the repository and customize this template further based on your specific needs and additional features.

1. **Fork the repository**
2. **Create a new branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Commit your changes**: `git commit -m 'Add some feature'`
5. **Push to the branch**: `git push origin feature/your-feature-name`
6. **Create a pull request**

## Usage

### Demo for HTML Site

Embed in an HTML and CSS Project add main css and main link, then reference the root id 'jdgen-widget-root'.

```
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>The Job Board</title>

      //jdgen css
      <link
         rel="stylesheet"
         href="https://jdgen.vercel.app/static/css/main.css"
      />
   </head>

   <body class="bg-white">
      <nav class="container mx-auto flex items-center justify-between pt-4 px-4">
         <div class="font-bold">Job Board</div>

         <ul class="flex items-center gap-6">
         <li>About us</li>
         <li>Our services</li>
         <li>Contact us</li>
         </ul>
      </nav>
      <main class="container mx-auto">
         <h1 class="text-black mt-8">Create Job description</h1>

         <div id="jdgen-widget-root"></div>
      </main>

      //jdgen javascript
      <script src="https://jdgen.vercel.app/static/js/main.js"></script>
   </body>
   </html>
```

### Demo for React App

Embed jdgen widget in react project utilising CTA customisation.

Step 1 : Add jdgen widget javascript and css links to your React App html file

```
<head>
   <meta charset="utf-8" />
   <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <meta name="theme-color" content="#000000" />
   <meta
     name="description"
     content="Web site created using create-react-app"
   />
   <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

   <link
     rel="stylesheet"
     href="https://jdgen.vercel.app/static/css/main.css"
   />
   <script src="https://jdgen.vercel.app/static/js/main.js"></script>

   <title>Job Board </title>
 </head>
```

Step 2: Create a JobDescription component where JDGEN wigdet can be mounted on

```
   import React, { useEffect, useRef } from 'react';

   const JobDescription = () => {
   const widgetRef = useRef(null);

   useEffect(() => {
      const script = document.createElement('script');

      //jdgen widget javascript link
      script.src = 'https://jdgen.vercel.app/static/js/main.js';
      script.async = true;
      script.onload = () => {
         if (widgetRef.current && window.initializeWidget) {
         window.initializeWidget(widgetRef.current);
         }
      };
      document.body.appendChild(script);

      const link = document.createElement('link');
      //jdgen widget css link
      link.href = 'https://jdgen.vercel.app/static/css/main.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      return () => {
         document.body.removeChild(script);
         document.head.removeChild(link);
      };
   }, []);

      // the data-hide-button attribute hides the default JDGEN-WIDGET button,
      // you need this when you choose to customise your own entry button

   return (
      <div ref={widgetRef} data-hide-button="true" id="jdgen-widget-root"></div>
   );
   };

   export default JobDescription;
```

Step 3: Import JobDescription component into App.js

```
function App() {
  return (
    <div>
        <JobDescription />
    </div>
  );
}
```

Step 4: Create JobBoard page, createa button and style, reference the customisable button feature by adding the class name 'jd-widget-trigger'

```
function JobBoard() {
  return (
    <div className="mb-4 relative">
      <div className="flex justify-between items-center mb-2">
         <label className="block mb-2 text-dark-1 text-sm">
         Job Description
         </label>

         <button
         type="button"
         className="jd-widget-trigger py-2 px-2 bg-black text-white rounded-full text-xs"
         >
             Write with AI
         </button>
   </div>
  );
}
```

## License

This repository is licensed under the MIT License. For more details, please look at the [LICENSE](LICENSE) file.
