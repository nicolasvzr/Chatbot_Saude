import google.generativeai as genai
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

genai.configure(api_key="")

model = genai.GenerativeModel("gemini-2.0-flash") # Ou "gemini-pro"

app = FastAPI( )

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

#  Define o formato do que vai ser enviado
class Pergunta(BaseModel):
    texto: str


#  Cria uma rota POST para receber a pergunta e enviar a resposta
@app.post("/perguntar")
async def perguntar(pergunta: Pergunta):
    try:
        resposta = model.generate_content(pergunta.texto)
        return {"resposta": resposta.text}
    except Exception as e:
        return {"erro": str(e)}