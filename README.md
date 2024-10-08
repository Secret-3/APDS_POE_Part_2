# GlobalTrust Bank - International Payment Portal


## Introduction

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
   cd ..
   cd server
   npm install
   ```
   
4. Run the Client:

Once the dependencies are installed, go back to the client folder:

```
cd client
   npm run dev
   ```

This will start the frontend in development mode. It should provide a URL where you can access the frontend, usually something like http://localhost:3000 or http://localhost:5173.

4. Run the Server:
Open a new terminal and navigate to the server folder and start the server application:
```
   cd server
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
## Security Implementations against Cyberattacks

The implementations listed to protect the GlobalTrust Bank international payment portal from various cyberattacks are well-rounded and effective in addressing common vulnerabilities.

1. Session Hijacking
Attack Description: Session hijacking occurs when an attacker steals a user's session ID to gain unauthorized access to the user's account without needing login credentials.
Prevention: HTTPS & SSL (Valid Certificate and Key):
Effectiveness: HTTPS encrypts all communication between the user’s browser and the server, ensuring that sensitive session information is protected during transmission. SSL certificates authenticate the server and establish encrypted connections, preventing attackers from intercepting or tampering with session cookies or other sensitive data.
Why It Works: Even if an attacker attempts to intercept the traffic, the encrypted session data is unreadable, protecting it from being hijacked.

2. Clickjacking
Attack Description: Clickjacking tricks users into clicking on something different from what they perceive, often through invisible or disguised UI elements, leading them to unknowingly execute malicious actions.
Prevention: X-Frame Options HTTP Header:
Effectiveness: The X-Frame-Options HTTP header prevents the portal from being embedded into an iframe on other websites, which is a common method used in clickjacking attacks.
Why It Works: By denying the ability to embed the site, this header ensures that attackers can’t overlay hidden buttons or trick users into interacting with invisible elements that could execute malicious commands.

3. SQL Injection Attacks
Attack Description: SQL injection occurs when an attacker inserts or manipulates SQL queries through user input fields to access, modify, or delete data from the database.
Prevention: User Input Validation & Sanitation (express-validator):
Effectiveness: Input validation ensures that only expected and correctly formatted data is accepted. Express-validator sanitizes inputs by stripping out potentially harmful characters and patterns before processing them.
Why It Works: This blocks malicious SQL code from being injected into database queries, effectively preventing unauthorized access or manipulation of the database.

4. Cross-Site Scripting (XSS)
Attack Description: XSS allows attackers to inject malicious scripts into web pages viewed by other users, potentially stealing cookies, session information, or executing unauthorized actions.
Prevention: Input Validation & Sanitation (express-validator and validator.js), RegEx:
Effectiveness: Input validation and sanitation ensure that any potentially dangerous input, such as scripts, is filtered out before being processed by the system. Validator.js and regular expressions (RegEx) are used to further tighten input control by ensuring that only valid data formats are accepted.
Why It Works: These measures prevent the execution of unauthorized scripts, protecting users from inadvertently triggering malicious code on the portal.

5. Man-in-the-Middle (MITM) Attacks
Attack Description: MITM attacks occur when an attacker intercepts communication between two parties, potentially altering or stealing transmitted data.
Prevention: HTTPS Encryption, SSL (Valid Certificate and Key):
Effectiveness: HTTPS and SSL encrypt all communication, ensuring that even if an attacker intercepts the data, they cannot read or alter it.
Why It Works: Encryption scrambles the data, making it incomprehensible to any unauthorized party attempting to listen in on the communication.

6. Distributed Denial-of-Service (DDoS) Attacks
Attack Description: DDoS attacks overwhelm a server with excessive traffic, causing it to slow down or crash, disrupting access for legitimate users.
Prevention: Rate Limiting, Whitelisting:
Effectiveness: Rate limiting restricts the number of requests a user can make to the server within a specific time frame, preventing bots or malicious actors from flooding the system with traffic. Whitelisting allows only trusted IP addresses or users to access certain areas of the system.
Why It Works: Rate limiting helps mitigate the impact of a DDoS attack by controlling traffic, while whitelisting ensures only authorized users are granted access, reducing the risk of attacks from unknown sources.

Additional Security Measures:
Password Security (Hashing and Salting):

Effectiveness: Hashing transforms a password into a fixed-length, unreadable string. Salting adds an additional unique value to the password before hashing, ensuring that even identical passwords have unique hashes.
Why It Works: This prevents attackers from deciphering passwords even if they manage to gain access to the password database. It also protects against rainbow table attacks, where precomputed hash values are used to reverse-engineer passwords.
Whitelisting with RegEx Patterns:

Effectiveness: Whitelisting ensures that only known, valid input formats are accepted by the system. Regular expressions (RegEx) are used to define acceptable patterns for various inputs (e.g., email addresses, account numbers).
Why It Works: This approach drastically reduces the attack surface by rejecting any input that does not strictly conform to expected formats, making it harder for attackers to inject malicious code.
All Traffic Served Over SSL:

Effectiveness: Serving all traffic over SSL guarantees that data transmitted between users and the portal is encrypted, ensuring confidentiality and integrity.
Why It Works: Even if an attacker manages to intercept traffic, they won’t be able to read or tamper with the encrypted data, protecting sensitive information like user credentials and payment details.

These layered security measures are highly effective in defending the GlobalTrust Bank international payment portal from a wide range of attacks. By implementing encryption, input validation, rate limiting, and secure password storage, the system is better equipped to maintain the confidentiality, integrity, and availability of both user data and payment transactions.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
## References 

Hacking, E., 2022. What Is Session Hijacking, and How Can It Be Prevented?. [Online] Available at: https://www.eccouncil.org/cybersecurity-exchange/ethical-hacking/how-to-prevent-session-hijacking-attacks/
[Accessed 3 October 2024].

Hooper, C., 2023. Secure payments: How to safely take payments online. [Online] Available at: https://gocardless.com/guides/posts/secure-payments/
[Accessed 4 October 2024].

Identity, P., 2024. How to Detect and Prevent a Clickjacking Attack. [Online] Available at: https://www.pingidentity.com/en/resources/cybersecurity-fundamentals/threats/clickjacking.html
[Accessed 5 October 2024].

Imperva, 2024. Clickjacking. [Online] Available at: https://www.imperva.com/learn/application-security/clickjacking/
[Accessed 6 October 2024].

Imperva, 2024. Data in Transit. [Online] Available at: https://www.imperva.com/learn/data-security/data-in-transit/
[Accessed 2 October 2024].

Imperva, 2024. Session Hijacking. [Online] Available at: https://www.imperva.com/learn/application-security/session-hijacking/
[Accessed 4 October 2024].

Katz, E., 2023. 8 Steps To Prevent Clickjacking. [Online] Available at: 8 Steps To Prevent Clickjacking
[Accessed 5 October 2024].

Kumar, D., 2024. How to Prevent Session Hijacking?. [Online] Available at: https://www.baeldung.com/cs/session-hijacking
[Accessed 7 October 2024].

Lab, A. K., 2024. What is session hijacking and how does it work?. [Online] Available at: https://www.kaspersky.com/resource-center/definitions/what-is-session-hijacking
[Accessed 27 September 2024].

Ltd., P., 2024. Clickjacking (UI redressing). [Online] Available at: https://portswigger.net/web-security/clickjacking
[Accessed 5 October 2024].

Mithouard, V., 2023. How bank security protocols help keep the data safe. [Online] Available at: https://www.numeral.io/blog/bank-security-protocols
[Accessed 3 October 2024].

OWASP, 2024. Clickjacking Defense Cheat Sheet. [Online] Available at: https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html
[Accessed 2 October 2024].

OWASP, 2024. Session hijacking attack. [Online] Available at: https://owasp.org/www-community/attacks/Session_hijacking_attack
[Accessed 1 October 2024].

prateekswqlwu, 2024. What is an Asymmetric Encryption?. [Online] Available at: What is an Asymmetric Encryption?
[Accessed 4 October 2024].

Software, L., 2024. What is a network diagram?. [Online] Available at: https://www.lucidchart.com/pages/network-diagram
[Accessed 1 October 2024].

Amazon Web Services, 2024. What is a DDOS Attack & How to Protect Your Site Against One. [Online] Available at: https://aws.amazon.com/shield/ddos-attack-protection/
[Accessed 27 September 2024].

Berkeley, U., 2023. How to Protect Against SQL Injection Attacks | Information Security Office. [Online] Available at: https://security.berkeley.edu/education-awareness/how-protect-against-sql-injection-attacks
[Accessed 2 October 2024].

Changmai, A., 2024. What is Cross-Site Scripting (XSS) and How to Prevent It?. [Online] Available at: https://www.malcare.com/blog/cross-site-scripting-xss-attacks-what-how-prevent-them/
[Accessed 1 October 2024].

Gangwar, A., 2024. XSS attacks in React apps and how to prevent them.. [Online] Available at: https://abhishek-gangwar.medium.com/xss-attacks-in-react-apps-and-how-to-prevent-them-cfafd2369dc5
[Accessed 29 September 2024].

Hofesh, B., 2022. Bright Security. [Online] Available at: https://brightsec.com/blog/sql-injection-attack/
[Accessed 1 October 2024].

Imperva, 2019. What is MITM (Man in the Middle) Attack. [Online] Available at: https://www.imperva.com/learn/application-security/man-in-the-middle-attack-mitm/
[Accessed 4 October 2024].

Imperva, n.d. What does DDoS Mean? | Distributed Denial of Service Explained | Imperva. [Online] Available at: https://www.imperva.com/learn/ddos/denial-of-service/
[Accessed 30 September 2024].

Kime, C., 2023. How to Prevent SQL Injection: 5 Key Prevention Methods. [Online] Available at: https://www.esecurityplanet.com/threats/how-to-prevent-sql-injection-attacks/
[Accessed 5 October 2024].

Manico, J. & Detlefsen, A., 2015. Iron-Clad Java: Building Secure Web Applications. 1st ed. New York: Mcgraw-Hill Education.
Rapid7, 2023. Man-in-the-Middle (MITM) Attacks: Techniques and Prevention. [Online] Available at: https://www.rapid7.com/fundamentals/man-in-the-middle-attacks/
[Accessed 6 October 2024].


