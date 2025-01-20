import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: 'a732bb1903514b2eb52c4206c1deb418',
    baseURL: 'https://api.aimlapi.com',
    dangerouslyAllowBrowser: true
})

class ActionProvider {

    createChatBotMessage
    setState
    createClientMessage
    stateRef
    createCustomMessage

    constructor (
    createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
            ...rest
    ){
        this.createChatBotMessage=createChatBotMessage;
        this.setState=setStateFunc;
        this.createClientMessage=createClientMessage;
        this.stateRef=stateRef;
        this.createCustomMessage=createCustomMessage
    }

callGenAI = async (prompt) => {
    const chatCompletion = await openai.chat.completions.create(
        {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are TripNavigator, an intelligent, friendly, and highly resourceful travel assistant. Your purpose is to make travel planning seamless and enjoyable for users. ' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.5,
            max_tokens: 50
        }
    );
    return chatCompletion.choices[0].message.content;
}

timer = ms => new Promise(res => setTimeout(res, ms));

generateResponseMessage = async (userMessage) => {
    const responseFromGPT = await this.callGenAI(userMessage);
    let message;
    let numberNoLines = responseFromGPT.split('\n').length;
    for (let i = 0; i < numberNoLines; i++) {
        const msg = responseFromGPT.split('\n')[i];
        if (msg.length) {
            message = this.createChatBotMessage(msg);
            this.updateChatBotMessage(message)

        }
        await this.timer(1000);
    }
}
respond = (message) => {
    this.generateResponseMessage(message);
}
updateChatBotMessage = (message) => {
    this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message] 
    }));
};

}
export default ActionProvider