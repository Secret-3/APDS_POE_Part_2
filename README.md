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
## Utilization of GitHub Workflows Using CircleCI for DevSecOps

The GlobalTrust Bank project leverages GitHub for version control and collaborative development, enhancing both the efficiency and security of the software development lifecycle (SDLC). By integrating CircleCI as our continuous integration and continuous deployment (CI/CD) tool within GitHub workflows, we have significantly improved our DevSecOps practices. Here’s how:

1. Automated Testing
CircleCI enables automated testing of the application at various stages of the development process. With each commit made to the GitHub repository, CircleCI runs a series of predefined tests to verify code changes. This early detection of potential bugs or vulnerabilities minimizes the chances of introducing security flaws into the production environment, promoting a culture of security-first development.

2. Continuous Integration
Using CircleCI, we have implemented continuous integration practices that allow developers to integrate their code changes into a shared repository frequently. Each integration triggers an automated workflow that builds the application and runs tests, ensuring that new code does not disrupt existing functionality. This practice encourages developers to contribute code more often, leading to quicker feedback loops and reducing the risk of merging problematic code into the main branch.

3. Automated Security Checks
Incorporating security checks into our CI/CD pipelines is a crucial aspect of our DevSecOps strategy. By configuring CircleCI workflows to include automated security scans (e.g., static code analysis, dependency checks), we can identify vulnerabilities and security issues early in the development process. This proactive approach ensures that security is embedded into our development practices rather than being an afterthought, allowing us to address potential threats before they reach production.

4. Deployment Automation
CircleCI also facilitates automated deployment to various environments, ensuring that code is deployed consistently and securely. By using GitHub Actions integrated with CircleCI, we can define deployment workflows that include security checks, allowing us to enforce security policies during the deployment process. This reduces the likelihood of deploying insecure code to production and enhances the overall security posture of the application.

5. Collaboration and Traceability
The use of GitHub for version control allows for better collaboration among team members. Each change is tracked, providing a comprehensive history of contributions. This traceability is essential for security audits and compliance, as it allows us to quickly identify who made specific changes and when. CircleCI enhances this collaboration by providing visibility into the CI/CD process, enabling the team to monitor build statuses, test results, and deployment histories in real time.

6. Feedback Loop
Integrating CircleCI workflows with GitHub fosters a quick feedback loop, essential for agile development and DevSecOps practices. Developers receive immediate feedback on their code changes, allowing them to address issues quickly. This rapid feedback mechanism supports continuous improvement, making it easier to adopt best practices and enhance the overall quality and security of the codebase.

By utilizing GitHub workflows with CircleCI in our development process, the GlobalTrust Bank project effectively incorporates DevSecOps principles. The combination of automated testing, security checks, continuous integration, and deployment automation fosters a culture of collaboration and security. This not only enhances the reliability and security of our application but also aligns with our commitment to protecting sensitive customer information in the international payment portal.



---------------------------------------------------------------------------------------------------------------------------------------------------------------------



