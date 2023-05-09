import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey:"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",
});
const openai = new OpenAIApi(configuration);

export async function chatbot(query) {
  if (!configuration.apiKey) {
    return "API not configured, Try later !!!";
  }

  const queryText = query || '';
  if (queryText.trim().length === 0) {
    return "Enter a valid query !!!";
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: queryText,
      temperature: 1.0,
      max_tokens: 2048,
    });
    return JSON.stringify(completion.data.choices[0].text);
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      return error.response.data;
    } else {
      return `Error with OpenAI API request: ${error.message}`;
    }
  }
}