import {email, minLength, object, string} from "valibot";

export const ContactSchema = object({
    betreff: string([minLength(1, 'Bitte geben Sie Ihren Betreff an.')]),
    email: string([email('Bitte hinterlassen Sie Ihre E-Mail.')]),
    text: string([minLength(1, 'Bitte hinterlassen Sie Ihre Nachricht.')]),
})
