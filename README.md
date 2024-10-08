# GlobalTrust Bank - International Payment Portal
Demo Repo for APDS POE Part 2
## Introduction
![Uploading image.png…]()

GlobalTrust Bank offers a state-of-the-art international payment portal designed to meet the evolving needs of customers in a globalized financial landscape. As international transactions become increasingly common, the demand for a reliable, efficient, and secure payment platform is paramount. Our portal empowers customers to manage their international payments conveniently and securely.

Users can easily navigate the portal to register their accounts, log in with their credentials, and initiate transactions with confidence. By utilizing the SWIFT network, which is a global standard for international banking transactions, we ensure that users can send money across borders with ease and reliability. The platform incorporates robust security measures to protect sensitive financial data, including full names, ID numbers, account numbers, and passwords. GlobalTrust Bank prioritizes the safety and integrity of customer information, making it a trustworthy option for anyone looking to conduct international payments.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Purpose

The primary purpose of the GlobalTrust Bank international payment portal is to facilitate seamless international transactions while ensuring the highest level of security for customer data. In today’s digital economy, the ability to send and receive money internationally is essential for businesses and individuals alike. Our portal aims to streamline this process, eliminating unnecessary complexity and enabling customers to focus on their financial goals.

By offering a user-friendly interface, the portal provides an accessible solution for customers of all experience levels. The registration and login processes are designed to be intuitive, ensuring that users can easily set up and access their accounts. Once logged in, customers can efficiently manage their payments, select currencies, and choose providers, all while adhering to stringent security protocols.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Features Implemented

- User Registration: Customers can register by providing their full name, ID number, account number, and password.
- Secure Login: Users log in using their username (email), account number, and password.
- Transaction Processing: Users can enter the amount to be paid, choose the currency, and select a payment provider.
- Account Information Submission: Customers enter the recipient's account information and SWIFT code before finalizing the payment.
- Transaction Storage: All transactions are securely stored in a database for record-keeping and review.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Prerequisites

Node.js (version 14 or later)
MongoDB
A code editor (e.g., Visual Studio Code)


---------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Built With

Frontend: JavaScript, React, SCSS, CSS, HTML
Backend: Node.js, Express
Database: MongoDB
Development Tools: Visual Studio Code, Git

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Installation

To set up the GlobalTrust Bank international payment portal on your local machine, follow these detailed steps. 

Cloning the Repository
1. Open your terminal and navigate to the directory where you want to clone the project.
2. Clone the repository using the following command:
   ```
   git clone https://github.com/Secret-3/APDS_POE_Part_2.git
   ```
3. Navigate into the cloned directory:
   ```
   cd APDS_POE_Part_2
   ```
then 
```
   cd "GlobalTrust Bank"
   ```

Installing Dependencies
1. The project has a client-side and server-side structure. Navigate to the client directory and install the required dependencies:
   ```
   cd client
   npm install
   ```

2. Next, navigate to the server directory and install the required dependencies:
   ```
   cd ../server
   npm install
   ```
3. Run the Client:

Once the dependencies are installed, go back to the client folder:

```
   cd client
   npm run dev
   ```

This will start the frontend in development mode. It should provide a URL where you can access the frontend, usually something like http://localhost:3000 or http://localhost:5173.

4. Run the Server:
Navigate to the server folder and start the server application:
```
   cd ../server
   npm start
   ```
Once both the client and server are running, the frontend will communicate with the backend.

## Usage
1. Registration: 
   - Navigate to the registration page in your browser.
   - Fill in your full name, ID number, account number, and password. This information will be securely stored in the database.

2. Login:
   - After registering, navigate to the login page.
   - Enter your username, account number, and password to log in.

3. Making Payments:
   - Once logged in, you will have the option to enter the payment amount, select the relevant currency, and choose a payment provider which will be SWIFT).
   - Fill in the required account information and SWIFT code for the transaction.
   - Click on Pay Now to finalize the payment process. 

Stopping the Servers

To stop the servers, simply return to the terminal windows running the server and client and press `Ctrl + C` in each window.

Troubleshooting
- If you encounter issues with missing dependencies or errors during startup, ensure that you have installed all required packages in both the client and server directories.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Functional Requirements

Users must register with their full name, ID number, account number, and password.
Users must log in using their username (email), account number, and password.
The portal should allow users to enter the amount, choose the currency, and select a payment provider.
Users must provide the recipient's account information and SWIFT code.
The system should store transaction data securely in the database.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Non-Functional Requirements

Security: All sensitive data must be encrypted and securely stored.
Performance: The portal should handle multiple transactions simultaneously without significant delays.
Usability: The user interface must be intuitive and easy to navigate.



---------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Utilization of GitHub Workflows Using CircleCI and SonarCloud for DevSecOps

DevSecOps Integration
In the development of the GlobalTrust Bank international payment portal, the integration of GitHub workflows using CircleCI and SonarCloud has played a pivotal role in implementing DevSecOps practices. This approach emphasizes the importance of security throughout the software development lifecycle, ensuring that security is not merely an afterthought but an integral part of the development process.

CircleCI for Continuous Integration and Deployment
CircleCI automates our CI/CD pipelines, allowing for rapid and reliable software delivery. Key benefits include:

Automated Testing: CircleCI facilitates the automatic execution of unit tests, integration tests, and end-to-end tests on every code push. This ensures that any security vulnerabilities or defects are identified early in the development cycle. By enforcing code quality standards, we reduce the risk of introducing bugs that could compromise system security.

Build Automation: Each time code is pushed to the repository, CircleCI triggers builds, ensuring that the application is consistently in a deployable state. This automation not only speeds up the deployment process but also helps maintain the integrity of the application, minimizing human error.

Environment Consistency: CircleCI allows us to define and manage environment configurations, ensuring that our code behaves consistently across different environments (development, testing, and production). This consistency is crucial for security, as it helps prevent discrepancies that could lead to vulnerabilities.

SonarCloud for Continuous Code Quality and Security Analysis
SonarCloud is integrated into our GitHub workflows to enhance code quality and security through continuous analysis. Its key contributions include:

Code Quality Assessment: SonarCloud provides automated analysis of the codebase to identify potential issues such as bugs, vulnerabilities, and code smells. By maintaining high code quality standards, we ensure that the software is less prone to security flaws.

Vulnerability Detection: The platform actively scans for known security vulnerabilities and provides developers with detailed insights and recommendations for remediation. This proactive approach helps us address security concerns before they reach production.

Technical Debt Management: SonarCloud allows us to track technical debt within the codebase, enabling the team to prioritize and address areas of concern over time. This focus on maintaining a healthy codebase reduces the likelihood of security vulnerabilities arising from neglected code.

Integration with Pull Requests: By integrating SonarCloud with GitHub pull requests, developers receive immediate feedback on code quality and security issues as they work. This feedback loop fosters a culture of security awareness among team members, encouraging best practices and reducing the chances of vulnerabilities being introduced into the codebase.

Continuous Improvement and Collaboration
The integration of CircleCI and SonarCloud not only strengthens our security posture but also promotes a culture of collaboration and continuous improvement within the development team. By automating repetitive tasks and providing real-time feedback on code quality and security, developers can focus more on writing secure, high-quality code. This synergy between automation and security aligns with the core principles of DevSecOps, ensuring that security is a shared responsibility across the entire development team.

By utilizing GitHub workflows with CircleCI and SonarCloud, GlobalTrust Bank enhances its DevSecOps practices, ensuring that security is integrated into every phase of the software development lifecycle. This proactive approach not only helps in mitigating security risks but also supports the overall goal of delivering a robust, secure, and efficient international payment portal to our customers.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------





