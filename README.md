# TaskEnsure-MERN-Lambda
A modern, full-stack Todo application built with the MERN stack and serverless architecture

## 🚀 Live Demo
**Production Link:** https://taskensure-mern-todo.netlify.app/

## 📋 Overview
TaskEnsure is a feature-rich Todo application that helps users manage their tasks efficiently. Built with modern web technologies and deployed using serverless architecture for optimal performance and scalability.

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3/HTML5** - Responsive design and styling
- **Netlify** - Frontend deployment and hosting

### Backend
- **Node.js** - JavaScript runtime environment
- **AWS Lambda** - Serverless compute service
- **Express.js** - Web application framework
- **RESTful APIs** - For client-server communication

### Database
- **MongoDB** - NoSQL document database
- **Mongoose** - MongoDB object modeling

### Cloud Services
- **AWS Lambda** - Serverless backend hosting
- **AWS API Gateway** - API management
- **Netlify** - Frontend deployment

## ✨ Features
- ✅ Create, read, update, and delete todos
- 📱 Responsive design for all devices
- 🎨 Clean and intuitive user interface
- ⚡ Fast performance with serverless architecture
- 🔄 Real-time task updates
- 📊 Task status management (pending, completed)
- 🎯 Priority-based task organization

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB database
- AWS account (for Lambda deployment)
- Netlify account (for frontend deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/taskensure-mern-lambda.git
   cd taskensure-mern-lambda
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Variables**
   
   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   AWS_REGION=your_aws_region
   NODE_ENV=development
   ```

### Local Development

1. **Start the Backend (Lambda Local)**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the Frontend**
   ```bash
   cd client
   npm start
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001/api

## 📦 Deployment

### Frontend Deployment (Netlify)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

### Backend Deployment (AWS Lambda)
1. Install Serverless Framework:
   ```bash
   npm install -g serverless
   ```
2. Configure AWS credentials
3. Deploy to Lambda:
   ```bash
   cd server
   serverless deploy
   ```

## 📁 Project Structure
```
taskensure-mern-lambda/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── styles/        # CSS files
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── serverless.yml    # Serverless config
│   └── package.json
└── README.md
```

## 🔧 API Endpoints
- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `PATCH /api/todos/:id/toggle` - Toggle todo completion status

## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author
**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments
- React.js community for the amazing framework
- MongoDB for the flexible database solution
- AWS for reliable serverless infrastructure
- Netlify for seamless frontend deployment

## 📞 Support
If you have any questions or need help with setup, please open an issue in the GitHub repository.

---
⭐ Star this repo if you find it helpful!