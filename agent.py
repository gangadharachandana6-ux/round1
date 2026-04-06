from langchain_groq import ChatGroq
from langchain.schema import HumanMessage
llm = ChatGroq(model="gemma2-9b-it", api_key="YOUR_GROQ_API_KEY")
def log_interaction_tool(text):
    prompt = f"Summarize this doctor interaction and extract key insights:\n{text}"
    response = llm([HumanMessage(content=prompt)])
    return response.content
def run_agent(user_input):
    return log_interaction_tool(user_input)
