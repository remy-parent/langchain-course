import "dotenv/config";

console.log(process.env.ANTHROPIC_API_KEY ? "clé chargée" : "clé absente");
console.log("Hello from langchain-course!");
