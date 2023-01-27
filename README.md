# GPTHero

There have been a lot of [articles](https://gptzero.me/) and [papers](https://t.co/U0nz9pdMB8) recently around the concept of "watermarking" GPT outputs so that you can prove that the text is generated by LLMs over humans.

This won't work (imo). Why? Because text is information, and information can easily be re-interpreted. It might work for a paper with no "bad" actors; but with a few word changes here, and a few shorter sentences there - and you have a new piece of text.

We could even train new models who sit on top of GPT, who's entire job is to increase the "perplexity" and "burstiness" of text.

This is my small demo on this idea, working out how to beat something like GPTZero.

Here's what I have working so far:

- ~~Create an app that takes in text~~
- ~~Make it look pretty~~
- ~~Replace some words using synonyms~~
- Create a prompt with GPT that specifically targets perplexity and burstiness of text
- Build some kind of measure of the perplexity before and after transfiguration
- Push it live

## Concepts

"Perplexity" is a measure of how well a language model is able to predict a given text. It is calculated by taking the exponential of the average negative log-likelihood of the model's predictions. A lower perplexity score indicates that the model is making more accurate predictions and is therefore a better model.

"Burstiness" refers to the tendency of a language model to generate a large number of similar words or phrases in a short period of time. This can occur when a model is overfitting to the training data or when it has a limited number of parameters. Burstiness can make the model's generated text less coherent and harder to understand.

## How to use

To run, just install the dependencies and run using these commands:

```
npm install
npm run dev
```

You'll need to create an account with [API Ninja](https://api-ninjas.com/) to get an API key.

You'll also need to create an `.env` file and set the variable `NEXT_PUBLIC_API_KEY=`.
