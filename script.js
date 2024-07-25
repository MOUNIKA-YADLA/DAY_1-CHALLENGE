const quotes = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur. - Mohnish Pabrai",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou"
];

const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a6", "#a633ff", "#33fff5"];
const fonts = ["Arial", "Verdana", "Times New Roman", "Georgia", "Courier New", "Lucida Console"];
const fontStyles = ["normal", "italic", "oblique"];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomFontStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)];

    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = randomQuote;
    quoteElement.style.color = randomColor;
    quoteElement.style.fontFamily = randomFont;
    quoteElement.style.fontStyle = randomFontStyle;

    // Add animation class to the button
    const button = document.querySelector("button");
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
    }, 200);
}
