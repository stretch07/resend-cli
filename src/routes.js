import enquirer from "enquirer";
import email from "./sections/email.js";
import domain from "./sections/domain.js";
import apikeys from "./sections/apikeys.js";
import audiences from "./sections/audiences.js";
import contacts from "./sections/contacts.js";

export default async ({resend, apiKey}) => {
    const prompt = new enquirer.Select({
        message: "Choose a section",
        choices: [
            {name: "email", message: "Emails"},
            {name: "domain", message: "Domains"},
            {name: "apiKeys", message: "API Keys"},
            {name: "audiences", message: "Audiences"},
            {name: "contacts", message: "Contacts"},
        ]
    })
    const answer = await prompt.run()
    switch (answer) {
        case "email":
            await email({resend, apiKey})
            break
        case "domain":
            await domain({resend, apiKey})
            break
        case "apiKeys":
            await apikeys({resend, apiKey})
            break
        case "audiences":
            await audiences({resend, apiKey})
            break
        case "contacts":
            await contacts({resend, apiKey})
            break
    }
}