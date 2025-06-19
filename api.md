# GetCall

Types:

- <code><a href="./src/resources/get-call.ts">GetCallRetrieveResponse</a></code>

Methods:

- <code title="get /get-call/{callId}">client.getCall.<a href="./src/resources/get-call.ts">retrieve</a>(callID, { ...params }) -> GetCallRetrieveResponse</code>

# GetUserAnalysis

Types:

- <code><a href="./src/resources/get-user-analysis.ts">GetUserAnalysisRetrieveResponse</a></code>

Methods:

- <code title="get /get-user-analysis/{userId}">client.getUserAnalysis.<a href="./src/resources/get-user-analysis.ts">retrieve</a>(userID, { ...params }) -> GetUserAnalysisRetrieveResponse</code>

# GetUserChats

Types:

- <code><a href="./src/resources/get-user-chats.ts">GetUserChatRetrieveResponse</a></code>

Methods:

- <code title="get /get-user-chats/{userId}">client.getUserChats.<a href="./src/resources/get-user-chats.ts">retrieve</a>(userID, { ...params }) -> GetUserChatRetrieveResponse</code>

# CreateUser

Types:

- <code><a href="./src/resources/create-user.ts">CreateUserCreateResponse</a></code>

Methods:

- <code title="post /create-user">client.createUser.<a href="./src/resources/create-user.ts">create</a>({ ...params }) -> CreateUserCreateResponse</code>

# CategorizeText

Types:

- <code><a href="./src/resources/categorize-text.ts">CategorizeTextClassifyResponse</a></code>
- <code><a href="./src/resources/categorize-text.ts">CategorizeTextClassifyByUserResponse</a></code>

Methods:

- <code title="post /categorize-text">client.categorizeText.<a href="./src/resources/categorize-text.ts">classify</a>({ ...params }) -> CategorizeTextClassifyResponse</code>
- <code title="post /categorize-text/{userId}">client.categorizeText.<a href="./src/resources/categorize-text.ts">classifyByUser</a>(userID, { ...params }) -> CategorizeTextClassifyByUserResponse</code>

# AnalyzeTeam

Types:

- <code><a href="./src/resources/analyze-team.ts">AnalyzeTeamCreateResponse</a></code>

Methods:

- <code title="post /analyze-team">client.analyzeTeam.<a href="./src/resources/analyze-team.ts">create</a>({ ...params }) -> AnalyzeTeamCreateResponse</code>

# CategorizeAudio

Types:

- <code><a href="./src/resources/categorize-audio.ts">CategorizeAudioCreateResponse</a></code>
- <code><a href="./src/resources/categorize-audio.ts">CategorizeAudioCreateForUserResponse</a></code>

Methods:

- <code title="post /categorize-audio">client.categorizeAudio.<a href="./src/resources/categorize-audio.ts">create</a>({ ...params }) -> CategorizeAudioCreateResponse</code>
- <code title="post /categorize-audio/{userId}">client.categorizeAudio.<a href="./src/resources/categorize-audio.ts">createForUser</a>(userID, { ...params }) -> CategorizeAudioCreateForUserResponse</code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatGenerateResponseResponse</a></code>
- <code><a href="./src/resources/chat.ts">ChatGenerateResponseForUserResponse</a></code>

Methods:

- <code title="post /chat">client.chat.<a href="./src/resources/chat.ts">generateResponse</a>({ ...params }) -> ChatGenerateResponseResponse</code>
- <code title="post /chat/{userId}">client.chat.<a href="./src/resources/chat.ts">generateResponseForUser</a>(userID, { ...params }) -> ChatGenerateResponseForUserResponse</code>

# ChatResult

Types:

- <code><a href="./src/resources/chat-result.ts">ChatResultGenerateResponse</a></code>

Methods:

- <code title="post /chat-result">client.chatResult.<a href="./src/resources/chat-result.ts">generate</a>({ ...params }) -> ChatResultGenerateResponse</code>

# MentalHealthChatbot

Types:

- <code><a href="./src/resources/mental-health-chatbot.ts">MentalHealthChatbotGenerateResponseResponse</a></code>

Methods:

- <code title="post /mental-health-chatbot">client.mentalHealthChatbot.<a href="./src/resources/mental-health-chatbot.ts">generateResponse</a>({ ...params }) -> MentalHealthChatbotGenerateResponseResponse</code>

# ChatStream

Types:

- <code><a href="./src/resources/chat-stream.ts">ChatStreamGenerateResponseResponse</a></code>

Methods:

- <code title="post /chat-stream">client.chatStream.<a href="./src/resources/chat-stream.ts">generateResponse</a>({ ...params }) -> ChatStreamGenerateResponseResponse</code>

# SalesAssistant

Types:

- <code><a href="./src/resources/sales-assistant.ts">SalesAssistantGenerateInsightsResponse</a></code>

Methods:

- <code title="post /sales-assistant">client.salesAssistant.<a href="./src/resources/sales-assistant.ts">generateInsights</a>({ ...params }) -> SalesAssistantGenerateInsightsResponse</code>

# Summarize

Types:

- <code><a href="./src/resources/summarize.ts">SummarizeCreateResponse</a></code>

Methods:

- <code title="post /summarize">client.summarize.<a href="./src/resources/summarize.ts">create</a>({ ...params }) -> SummarizeCreateResponse</code>

# GetUser

Types:

- <code><a href="./src/resources/get-user.ts">GetUserRetrieveResponse</a></code>
- <code><a href="./src/resources/get-user.ts">GetUserListResponse</a></code>

Methods:

- <code title="get /get-user/{userId}">client.getUser.<a href="./src/resources/get-user.ts">retrieve</a>(userID, { ...params }) -> GetUserRetrieveResponse</code>
- <code title="get /get-users">client.getUser.<a href="./src/resources/get-user.ts">list</a>({ ...params }) -> GetUserListResponse</code>
