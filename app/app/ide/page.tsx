import { BetaAlert } from "@/components/navigation/components/beta-alert"
import { StepIndicator } from "@/components/navigation/components/step-indicator"

export default function Page() {
    return (
        <div className="my-8 mx-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-foreground leading-loose">Installing an IDE</h1>
            <BetaAlert />
            <p className="font-light">This guide shows you how to choose and install an IDE. In programing an IDE is the text editor we use for our code. IDE's are a powerfull tool and the first step to starting our programing journey is getting one.</p>
            <StepIndicator>1</StepIndicator>
            <p className="font-light">The first step that we will tackle is choosing what IDE we want. This is a personal choice, and is mainly up to you, the user. Some great options for you to check out are:</p>
            <p>- Microsoft Visual Studios Code</p>
            <p>- Sublime Text</p>
            <p></p>
            <p></p>
            <p>- Notepad ++</p>
            <p className="font-light">In this tutorial, as in my personal code, we will use VS Code, due to its ease of use, great plugin support, and wide language compatibility.</p>
        </div>
    )
}