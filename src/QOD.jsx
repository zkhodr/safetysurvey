import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import React from 'react';

export default function CybersecurityQuiz() {
    const questions = [
        {
            name: "cyberQuestion1",
            type: "radiogroup",
            title: "What is a common method attackers use to steal data?",
            choices: ["Phishing attacks", "Asking politely", "Using public Wi-Fi", "Physical theft"],
            correctAnswer: "Phishing attacks"
        },
        {
            name: "cyberQuestion2",
            type: "radiogroup",
            title: "What does 'HTTPS' stand for?",
            choices: ["Hyper Text Transfer Protocol Secure", "Hyper Text Transfer Protocol Simple", "Hyperlink and Text Transfer Protocol Secure", "Hyperlink Transfer Protocol Secure"],
            correctAnswer: "Hyper Text Transfer Protocol Secure"
        },
        {
    type: "radiogroup",
    name: "cyberQuestion3",
    title: "What does a firewall do?",
    choices: [
        "Prevents unauthorized access to or from a private network",
        "Encrypts files on your computer",
        "Steals personal information",
        "Increases internet speed"
    ],
    correctAnswer: "Prevents unauthorized access to or from a private network",
    feedback: "Firewalls are designed to prevent unauthorized access to or from a private network, enhancing security."
},
{
    type: "radiogroup",
    name: "cyberQuestion4",
    title: "Which practice is most secure for Wi-Fi networks?",
    choices: [
        "Using WEP encryption",
        "Disabling SSID broadcast",
        "Enabling WPA2 or WPA3 encryption",
        "Sharing your Wi-Fi password publicly"
    ],
    correctAnswer: "Enabling WPA2 or WPA3 encryption",
    feedback: "WPA2 or WPA3 encryption provides strong security for Wi-Fi networks by encrypting connections."
},
{
    type: "radiogroup",
    name: "cyberQuestion5",
    title: "What is 'social engineering' in the context of cybersecurity?",
    choices: [
        "Building social media platforms",
        "The technical structuring of social networks",
        "Tricking individuals into revealing sensitive information",
        "Engineering social interactions in public spaces"
    ],
    correctAnswer: "Tricking individuals into revealing sensitive information",
    feedback: "Social engineering involves manipulating individuals into revealing confidential information."
},
{
    type: "radiogroup",
    name: "cyberQuestion6",
    title: "Which type of attack involves encrypting the victim's data and demanding payment for the decryption key?",
    choices: [
        "Phishing",
        "Ransomware",
        "Trojan Horse",
        "Virus"
    ],
    correctAnswer: "Ransomware",
    feedback: "Ransomware attacks encrypt the victim's data and demand payment for the decryption key."
},
{
    type: "radiogroup",
    name: "cyberQuestion7",
    title: "What is the purpose of two-factor authentication?",
    choices: [
        "To double the password strength",
        "To create a backup password",
        "To add an extra layer of security beyond just the password",
        "To encrypt password storage"
    ],
    correctAnswer: "To add an extra layer of security beyond just the password",
    feedback: "Two-factor authentication adds an extra layer of security, requiring a second form of verification."
},
{
    type: "radiogroup",
    name: "cyberQuestion8",
    title: "What should you do if you receive an unexpected email attachment, even from someone you know?",
    choices: [
        "Open it immediately to see what it is",
        "Download it, then scan it with antivirus software",
        "Delete the email immediately",
        "Verify the sender’s identity before opening"
    ],
    correctAnswer: "Verify the sender’s identity before opening",
    feedback: "Verifying the sender’s identity helps prevent opening malicious attachments."
},
{
    type: "radiogroup",
    name: "cyberQuestion9",
    title: "What is the most effective step you can take to secure a new computing device?",
    choices: [
        "Install numerous antivirus programs",
        "Leave it in its default state for simplicity",
        "Update the device to the latest software",
        "Use it only for web browsing"
    ],
    correctAnswer: "Update the device to the latest software",
    feedback: "Keeping the device updated ensures you have the latest security patches."
},
{
    type: "radiogroup",
    name: "cyberQuestion10",
    title: "What action can help to prevent identity theft?",
    choices: [
        "Sharing passwords with trusted friends and family",
        "Using the same password for multiple accounts",
        "Regularly monitoring your financial accounts for unusual activity",
        "Posting detailed personal information on social media"
    ],
    correctAnswer: "Regularly monitoring your financial accounts for unusual activity",
    feedback: "Monitoring accounts for unusual activity can help detect and prevent identity theft early."
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