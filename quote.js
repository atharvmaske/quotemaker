function generate(){
var quotes =
{
    " - Oscar Wilde " : "To live is the rarest thing in the world. Most people exist, that is all.",
    " -Emily Dickinson" : "That it will never come again is what makes life so sweet. ",
    "-George Eliot " : "It is never too late to be what you might have been.",
    "- Ralph Waldo Emerson" : "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "- Haruki Murakami" : "Pain is inevitable. Suffering is optional",
    "- William Shakespeare" : "All the world's a stage, and all the men and women merely players",
    "- Plato" : "Be kind, for everyone you meet is fighting a hard battle" , 
    "- Emily Dickinson" : "Unable are the loved to die for love is immortality.",
    "- Voltaire" : "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well"
}
var authors = Object.keys(quotes);
var author = authors[Math.floor(Math.random()*authors.length)];
var quote = quotes[author];
document.getElementById("author").innerHTML = author;
document.getElementById("quote").innerHTML = quote;
}