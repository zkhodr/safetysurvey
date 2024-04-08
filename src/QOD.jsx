import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import React from 'react';

export default function CybersecurityQuiz() {
     const questions = [
    {
        name: "cyberQuestion1",
        type: "radiogroup",
        title: "Which of the following is a crucial practice for safeguarding against data breaches?",
        choices: ["Regular software updates", "Checking email once a week", "Using the same password for convenience", "Physical storage of all documents"],
        correctAnswer: "Regular software updates",
        feedback: "Regular software updates are crucial as they often include patches for security vulnerabilities that could be exploited by attackers."
    },
    {
        name: "cyberQuestion2",
        type: "radiogroup",
        title: "What is the primary purpose of using strong, unique passwords for every account?",
        choices: ["To make it easier to remember", "To prevent unauthorized access", "To speed up the login process", "To comply with website policies"],
        correctAnswer: "To prevent unauthorized access",
        feedback: "Strong, unique passwords for each account reduce the risk of unauthorized access, making it harder for attackers to compromise multiple accounts."
    },
    {
        type: "radiogroup",
        name: "cyberQuestion3",
        title: "How does encrypting data protect it?",
        choices: [
            "Makes it faster to access",
            "Reduces its size for storage",
            "Prevents unauthorized reading of the data",
            "Improves the data quality"
        ],
        correctAnswer: "Prevents unauthorized reading of the data",
        feedback: "Encryption secures data by transforming it into a format that can only be read if you have the key, protecting it from unauthorized access."
    },
    {
        type: "radiogroup",
        name: "cyberQuestion4",
        title: "Why is it important to avoid using public Wi-Fi for sensitive transactions?",
        choices: [
            "It can be slower than private networks",
            "Public Wi-Fi networks are often unsecured, exposing data to interception",
            "Public Wi-Fi only allows limited data usage",
            "It requires frequent logins"
        ],
        correctAnswer: "Public Wi-Fi networks are often unsecured, exposing data to interception",
        feedback: "Public Wi-Fi networks lack encryption, which makes sensitive transactions vulnerable to interception by attackers."
    },
    {
        type: "radiogroup",
        name: "cyberQuestion5",
        title: "What tactic do attackers use to disguise themselves as legitimate entities in phishing attempts?",
        choices: [
            "Offering free software",
            "Masquerading as a known contact or organization",
            "Providing helpful cybersecurity tips",
            "Promoting cybersecurity tools"
        ],
        correctAnswer: "Masquerading as a known contact or organization",
        feedback: "In phishing attempts, attackers often disguise themselves as legitimate entities to trick individuals into divulging sensitive information."
    },
    {
        type: "radiogroup",
        name: "cyberQuestion6",
        title: "What is the role of a firewall in network security?",
        choices: [
            "Speeding up the network connection",
            "Monitoring and controlling incoming and outgoing network traffic based on predetermined security rules",
            "Storing data for network analysis",
            "Encrypting all data that passes through the network"
        ],
        correctAnswer: "Monitoring and controlling incoming and outgoing network traffic based on predetermined security rules",
        feedback: "Firewalls protect networks by monitoring traffic and blocking potentially harmful incoming and outgoing connections."
    },
    {
        type: "radiogroup",
        name: "cyberQuestion7",
        title: "What does two-factor authentication (2FA) enhance?",
        choices: [
            "User convenience",
            "Password memorability",
            "Account security by requiring an additional verification step",
            "The speed of the login process"
        ],
        correctAnswer: "Account security by requiring an additional verification step",
        feedback: "2FA enhances security by adding a second layer of verification, significantly reducing the risk of unauthorized access."
    },
    {
        type: "radiogroup",
        name: "cyberQuestion8",
        title: "What precaution should you take before connecting devices to your network?",
        choices: [
            "Ensure the devices are of the same brand as the network equipment",
            "Check that the devices are aesthetically compatible with your setup",
            "Verify the devices do not require Internet access",
            "Ensure the devices are secure and have the latest updates installed"
        ],
        correctAnswer: "Ensure the devices are secure and have the latest updates installed",
        feedback: "Securing devices with the latest updates before connecting them to your network helps prevent vulnerabilities that could be exploited."
    },
    {
        type: "radiogroup",
        name: "cyberQuestion9",
        title: "Why is it critical to backup data regularly?",
        choices: [
            "To prevent data loss in case of physical damage or cyberattacks",
            "To increase the data's value",
            "To speed up the computer system",
            "To make data encryption easier"
        ],
        correctAnswer: "To prevent data loss in case of physical damage or cyberattacks",
        feedback: "Regular backups protect against data loss from incidents like ransomware attacks or hardware failures, ensuring data recovery is possible."
    },
    {
        type: "radiogroup",
        name: "cyberQuestion10",
        title: "Why should software and operating systems be kept up to date?",
        choices: [
            "To maintain the warranty on the hardware",
            "To keep the user interface trendy",
            "To ensure compatibility with the latest apps",
            "To patch security vulnerabilities and enhance protection"
        ],
        correctAnswer: "To patch security vulnerabilities and enhance protection",
        feedback: "Updates often include security patches that close vulnerabilities, making devices more resistant to attacks."
    }
];
    // Select a random question to display each time
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomQuestionIndex];

    const surveyJson = {
        title: "Cybersecurity Awareness Quiz",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        html: "You are about to start today's question on Cybersecurity Awareness. <br>Please answer the question to the best of your ability.<br>Click <b>Start Quiz</b> to begin."
                    }
                ]
            },
            {
                elements: [selectedQuestion]
            }
        ],
        completedHtml: "Thank you for your answer. <br/>"
    };

    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        const question = sender.getQuestionByName(selectedQuestion.name);
        const correctAnswer = question.correctAnswer;
        const userAnswer = question.value;
        if (userAnswer === correctAnswer) {
            sender.completedHtml = "Thank you for your answer.<br/>Correct! You've got it right.";
        } else {
            sender.completedHtml = `Thank you for your answer.<br/>Actually, the correct answer was: ${correctAnswer}.`;
        }
    });

    return <Survey model={survey} />;
}