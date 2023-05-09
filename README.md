# integrate-chatbot
Lets you integrate a chatbot with your application.
## Installation
To use this package in your project. Install by running command

`npm install integrate-chatbot`
## Usage
To integrate this chatbot with you application, you need to import its method { chatbot } from the integrate-chatbot package and call it with a query passing to it. Here's an example:
```javascript
import { chatbot } from 'integrate-chatbot'

let query = "Hello, What's your name?";
let result = await chatbot(query);
console.log(chatbot); // "My name is John"
```
You can pass any string input to the chatbot function and it will respond to your query. If input is not valid, the function will throw an error.
## Github repos
[https://github.com/saifullah0317/IntegrateChatbot-npm-package/](https://github.com/saifullah0317/IntegrateChatbot-npm-package/)
## License
This package is licensed under [ISC](https://opensource.org/license/isc-license-txt/)
