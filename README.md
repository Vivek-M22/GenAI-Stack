# No-Code Intelligent Workflow Builder

This project is a full-stack web application that allows users to visually create, configure, and interact with intelligent workflows. Users can build custom pipelines by connecting components that handle user input, retrieve information from documents, and leverage Large Language Models (LLMs) to generate answers.

## Objective

The primary goal is to develop a No-Code/Low-Code platform where users can:

  * [cite\_start]Visually design and build intelligent workflows by dragging and dropping components[cite: 3].
  * [cite\_start]Configure a flow of components to handle user input, extract knowledge from documents, interact with language models, and return answers through a chat interface[cite: 4].
  * [cite\_start]Ask questions to a valid workflow and receive a final response processed by the defined components[cite: 5, 6].

-----

## 🚀 Tech Stack

The application is built using a modern tech stack:

| Category          | Technology                                          |
| ----------------- | --------------------------------------------------- |
| **Frontend** | [cite\_start]React.js [cite: 8]                                   |
| **Backend** | [cite\_start]FastAPI [cite: 9]                                    |
| **Database** | [cite\_start]PostgreSQL [cite: 10]                                |
| **Drag & Drop** | [cite\_start]React Flow [cite: 11]                                |
| **Vector Store** | [cite\_start]ChromaDB [cite: 12]                                  |
| **Embedding Model**| [cite\_start]OpenAI Embeddings, Gemini [cite: 13, 26]           |
| **LLM** | [cite\_start]OpenAI GPT, Gemini [cite: 14]                        |
| **Web Search** | [cite\_start]SerpAPI / Brave [cite: 15]                           |
| **Text Extraction**| [cite\_start]PyMuPDF [cite: 16]                                   |

-----

## ✨ Core Features

[cite\_start]The application is centered around four main components that users can connect to build workflows[cite: 18]:

  * [cite\_start]**User Query Component**: The entry point for the workflow that accepts user queries and passes them to the next component[cite: 19, 21, 22].
  * [cite\_start]**KnowledgeBase Component**: Allows uploading documents (e.g., PDFs) [cite: 24][cite\_start], extracts text [cite: 25][cite\_start], generates text embeddings, stores them in a vector database [cite: 26, 27][cite\_start], and retrieves relevant context based on the user's query[cite: 28].
  * [cite\_start]**LLM Engine Component**: Takes the user query and optional context from the KnowledgeBase to generate a response using an LLM like GPT or Gemini[cite: 31, 35]. [cite\_start]It can also use web search tools to gather external information[cite: 36].
  * [cite\_start]**Output Component**: Displays the final generated response to the user in a chat-style interface, allowing for follow-up questions[cite: 39, 40, 41].

-----

## 🛠️ Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

  * Node.js and npm/yarn
  * Python 3.8+ and pip
  * PostgreSQL
  * Git

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2\. Backend Setup (FastAPI)

```bash
# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
# Create a .env file and add your API keys and database URL
# Example .env file:
# DATABASE_URL="postgresql://user:password@host:port/dbname"
# OPENAI_API_KEY="your_openai_key"
# SERPAPI_API_KEY="your_serpapi_key"

# Run the backend server
uvicorn main:app --reload
```

The backend server will be running at `http://localhost:8000`.

### 3\. Frontend Setup (React)

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend application will be running at `http://localhost:3000`.

-----

## 📂 Project Structure

The project is organized into two main directories: `frontend` and `backend`.

```
.
├── backend/
│   ├── app/
│   │   ├── api/          # API endpoints/routers
│   │   ├── core/         # Configuration, settings
│   │   ├── crud/         # Database operations
│   │   ├── models/       # Pydantic models
│   │   ├── schemas/      # Database schemas
│   │   └── services/     # Business logic
│   ├── main.py           # FastAPI app entry point
│   └── requirements.txt  # Python dependencies
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/   # Reusable React components
    │   ├── pages/        # Main pages/views
    │   ├── services/     # API integration
    │   ├── styles/       # CSS/styling
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── README.md
```

-----

## Usage

1.  [cite\_start]**Build Your Workflow**: Drag components from the **Component Library Panel** onto the **Workspace Panel**[cite: 51, 53, 55].
2.  [cite\_start]**Connect Components**: Create a logical flow by drawing connection lines between the components[cite: 58].
3.  [cite\_start]**Configure Nodes**: Click on a component to open the **Configuration Panel** and set its properties (e.g., upload a PDF to the KnowledgeBase)[cite: 62].
4.  [cite\_start]**Run the Workflow**: Once the workflow is valid, click the **"Build Stack"** button to prepare it for execution[cite: 67].
5.  [cite\_start]**Chat with Your Workflow**: Click the **"Chat with Stack"** button to open the chat interface, enter your query, and get a response processed by your custom workflow[cite: 47, 48, 68].
