# react-simple-website

A very simple website built using React. Check the [GitHub Pages](https://ivan-akira.github.io/react-simple-website/)!

Created using with following constraint:
- Using ReactJS framework.
- Consist of following pages:
  - Login Page
  - Product Page (acting as the _Main Page_)

Technology and component being used:
- Node.js (https://nodejs.org/) [:octocat: GitHub](https://github.com/nodejs/node)
- Vite (https://vitejs.dev/) [:octocat: GitHub](https://github.com/vitejs/vite)
- TypeScript (https://www.typescriptlang.org/) [:octocat: GitHub](https://github.com/microsoft/TypeScript)
- Bootstrap (https://getbootstrap.com/) [:octocat: GitHub](https://github.com/twbs/bootstrap) [:link: NPM](https://www.npmjs.com/package/bootstrap)
- react-number-format (https://s-yadav.github.io/react-number-format/docs/intro/) [:octocat: GitHub](https://github.com/s-yadav/react-number-format) [:link: NPM](https://www.npmjs.com/package/react-number-format)
- email-validator [:octocat: GitHub](https://github.com/manishsaraan/email-validator) [:link: NPM](https://www.npmjs.com/package/email-validator)

Learning references:
- React Tutorial for Beginners (https://www.youtube.com/watch?v=SqcY0GlETPk) by [Programming with Mosh](https://www.youtube.com/@programmingwithmosh)
- Mastering 'useRef' in React with TypeScript: 4 Different Use-Cases for 'useRef' (https://dev.to/kirubelkinfe/mastering-useref-in-react-with-typescript-4-different-use-cases-for-useref-2a87) by [Kirubel Kinfe](https://dev.to/kirubelkinfe)
- Deploying a Static Site (https://vitejs.dev/guide/static-deploy)

## Pages

### Login Page

Have following input fields:

| Field  | Constraint |
| --- | --- |
| Email  | Validate for valid email address.  |
| Password  | Masking with `*` when user input data, and validate for non empty password.  |

### Product Page (_Main Page_)

- Contain table of products.
- Information of the product as follows:
  - Product Name
  - Image
  - Price
- Use hardcoded dummy data.
