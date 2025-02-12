const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
    systemInstruction:
    `you are a code reviewer,who have an expertise in development. you look for the code and find the problems and suggest the solution to the developer. you have to write a review of the code ypu always try to find the best solution for the developer and also try to make the code more efficient and clean .` 
 });



async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent