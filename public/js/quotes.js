const quotes = [
    {
        quote: "My formula for greatness in a human being is amor fati \n"
        + " that one wants nothing to be different, not forward, not backward, not in all eternity. \n",
        author: "Ecce Homo, Friedrich Nietzsche"
    },
    {
        quote:"We are not just a collection of atoms, we are a way for the cosmos to know itself. \n",
        author:"Carl Sagan"
    },
    {
        quote: "We all have a limited time on Earth. Life is short, and it is up to us to make it sweet. \n",
        author:"Albert Einstein"
    },
    {
        quote: "It doesn't matter how beautiful your theory is, it doesn't matter how smart you are." +
        "\n If it doesn't agree with experiment, it's wrong.  \n",
        author: "Richard Feynman"
    },
    {
        quote: "Time is what happens when nothing else does. \n",
        author: "Richard Feynman"
    },
    {
        quote: "I think, therefore I am. \n",
        author: "René Descartes"
    },
    {
        quote: "Always recognize that human individuals are ends, and do not use them as means to your end. \n",
        author: "Immanuel Kant"
    },
    {
        quote: "Time is, in itself, a consumable and non-renewable resource. \n",
        author: "aIsaac Newton"
    },
    {
        quote: "We live in a world where there is more and more information, and less and less meaning. \n",
        author: "Gottfried Wilhelm Leibniz"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. \n",
        author: "Gottfried Wilhelm Leibniz"
    },
    {
        quote: "Death is the destination we all share. No one has ever escaped it. \n" + 
        "And that is as it should be because death is very likely the single best invention of life. \n",
        author: "Steve Jobs"
    },
    {
        quote: "Memento mori, Memento te hominem esse. Respice post te hominem te esse memento \n" +
        "Remember that you will die, Remember that you are human. \n Look behind you, remember that you are only human \n",
        author: "Roman empire"
    },
    {
        quote: "Throwing away then all things, hold to these only which are few\n" + 
        "and besides bear in mind that every man lives only this present time, which is an indivisible point,  \n" + 
        "and that all the rest of his life is either past or it is uncertain.",
        author: "Meditation, Marcus aurelius"
    }

]


const quoteForm = document.querySelector("#quoteForm");
const btn = quoteForm.querySelector("button");
const numQuotes = quotes.length;

const setQuote = function () {
   
    
    
const indexQuote = Math.floor((Math.random() * numQuotes ));
const quoteToday = quotes[indexQuote].quote;
const authorQuote = quotes[indexQuote].author;
const pQuote = quoteForm.querySelector("#quote");
const pAuthor = quoteForm.querySelector("#author");
pQuote.innerText = quoteToday;
pAuthor.innerText = authorQuote;
}

setQuote();

btn.addEventListener("click", setQuote);