import "dotenv/config";
import {PromptTemplate} from "@langchain/core/prompts";
import {ChatAnthropic} from "@langchain/anthropic";


const information = "Yvon Deschamps, né le 31 juillet 1935 à Montréal, est un monologuiste et humoriste québécois.\n" +
    "Il s’est illustré entre 1968 et 2010 par près d’une centaine de monologues — quelque trente heures d’écoute — dans lesquels il dénonce le racisme, l’exploitation de la classe ouvrière, le sexisme, l’homophobie ainsi que les multiples préjugés qui peuvent nous habiter.\n" +
    "Monté sur les planches à l’âge de 22 ans, il joue pendant dix ans dans une grande variété de rôles devant des publics divers, tout en ouvrant deux restaurants à Montréal qui, après le boum de l'Expo 67, ont fait faillite. En 1968, avec le spectacle de L’Osstidcho, il trouve enfin sa voie et fera désormais du monologue une carrière à temps plein, largement saluée par la critique et le public québécois. Il a aussi joué dans une demi-douzaine de films et d’émissions télévisées, notamment Samedi de rire, très populaire, avant de créer sa propre série humoristique CTYVON qui n’eut qu’un accueil mitigé.\n" +
    "Dès l’arrivée du succès, il commence à s’investir, personnellement et par sa fondation, dans diverses organisations : aide aux personnes handicapées ou aux femmes en difficulté, lutte contre la faim dans le monde et pour la justice sociale.\n" +
    "Profondément fier d’être québécois, il refuse toutefois de s’associer à un parti politique lors du référendum québécois de 1980, estimant que la majorité des Québécois veulent en fait, comme dans sa célèbre boutade, « un Québec indépendant dans un Canada fort »."

const summaryTemplate = `given the information ${information}, about a person I want you to create:
1. A short summary
2. two interesting facts about them`
const summaryPromptTemplate = new PromptTemplate({
    template: summaryTemplate,
    inputVariables: ["information"]
})

const llm = new ChatAnthropic({model: 'claude-sonnet-5-5'});

const chain = summaryPromptTemplate.pipe(llm);

const response = await chain.invoke({information: information})

console.log(response.content)
