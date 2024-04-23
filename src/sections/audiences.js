import ora from "ora"
import enquirer from "enquirer";

export default async function({resend, apiKey}) {

}

export async function selectAudience({resend}, message) {
    const spinner = ora({text: "Fetching audiences...", spinner: "toggle9"}).start()
    const audiences = await resend.audiences.list()
    spinner.stop()
    const choices = audiences.data.data.map((audience) => {return {message: audience.name, name: audience.id}})
    let answer = new enquirer.Select({
        name: "listAudiences",
        message: message ?? "Choose an audience",
        choices
    })
    answer = await answer.run()
    return answer
}