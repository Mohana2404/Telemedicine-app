
from flask import Flask, request, jsonify
import ollama
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
@app.route("/generate", methods=["POST","GET"])
def generate():
    data = request.get_json()
    question = data.get("question", "")
    if not question:
        return jsonify({"error": "No question provided"}), 400

    response = ollama.generate(model="mistral", prompt=question)
    return jsonify({"answer": response['response']})

if __name__ == "__main__":
    app.run(host="localhost", port=5000 , debug=True)