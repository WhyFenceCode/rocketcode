import { BetaAlert } from "@/components/navigation/components/liability-alert"
import { StepIndicator } from "@/components/navigation/components/step-indicator"
import { IdeLink } from "@/components/navigation/components/ide-links"
import { RecomendedArticle } from "@/components/navigation/components/recomended-article"
import { ImageCard } from "@/components/navigation/components/image-card"

import Link from 'next/link'

export default function Page() {
    return (
        <div className="my-8 sm:px-16 px-4">
            <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-foreground leading-loose">Installing an IDE</h1>
            <BetaAlert />
            <p className="font-light">This guide shows you how to choose and install an IDE. In programing an IDE is the text editor we use for our code. IDE's are a powerfull tool and the first step to starting our programing journey is getting one.</p>
            <StepIndicator>1</StepIndicator>
            <p className="font-light">The first step that we will tackle is choosing what IDE we want. This is a personal choice, and is mainly up to you, the user. Some great options for you to check out are:</p>
            <IdeLink />
            <p className="font-light">In this tutorial, as in my personal code, we will use VS Code, due to its ease of use, great plugin support, and on top of that its free. Once you have done your research into editors, it is time to make your decision, and decide on an editor you think you will like.</p>
            <StepIndicator>2</StepIndicator>
            <p className="font-light">Now that we have chosen our IDE we can move on to installing it. At this point, if you are not installing Visual Studios Code this tutorial can no longer help you, but if you are moving forward with our recomended IDE then lets go.</p>
            <p className="font-light mt-8">This tutorial from this point forewards will cover the install of VS Code onto windows devices. If you are on a MAC the install is very simple, just follow the installer prompts and that is it. If you are on linux, then I expect that you know how to install programs and can figure this out on your own. (I also love poking fun at you).</p>
            <ImageCard href="https://ui.shadcn.com/placeholder.svg" />
            <p className="font-light">Our first big step that we need to accomplish is to download the Visual Studio installer from <Link href="https://code.visualstudio.com/Download" rel="noopener noreferrer" target="_blank" className="text-secondary-foreground">the download webiste</Link>. The downoad might take a while depending on your internet speed, so now is a great time go grab a snack if you feel like it.</p>
            <StepIndicator>3</StepIndicator>
            <p className="font-light">Once the .EXE file has finnished downloading we can begin our install. Start by double clicking on the .EXE to open the installer. At this point there should be a licensing agreement. If you agree with it then select the option "I accept the agreement" and press "Next".</p>
            <ImageCard href="https://ui.shadcn.com/placeholder.svg" />
            <p className="font-light">You should now be at a screen titled "Select Destination Location", and there should be a filepath that is already filled in. This will be where Visual Studios will install its files, and is the default location. Unless you know what you are doing I would recomend not changing this.</p>
            <ImageCard href="https://ui.shadcn.com/placeholder.svg" />
            <p className="font-light">The last thing that we need to do on this screen is check that we have enough space on our hard drive. Look at the number in the bottom left of the installer, and then check that you have a minumum of that much space avalible on your computer. If every thing looks good we can press "Next" to continue to start menu settings.</p>
            <StepIndicator>4</StepIndicator>
            <p className="font-light">At this point we will be on a page asking us about start menu folders. We should also probably leave this in its default folder, unless you know what you are doing. We can now press "Next" to move on to the Aditional Tasks menu.</p>
            <ImageCard href="https://ui.shadcn.com/placeholder.svg" />
            <p className="font-light">We should now have arrived at a page titled "Select Additional Tasks". The first thing to do is to choose if we want a desktop icon, a realatively straightforward step.</p>
            <p className="font-light mt-8">Under other there are a few more confusing options which we will break down. The first two allow you to right click in the file explorer and have an option to "Open with Code", which I have enabled as I find it helpfull. The third option ("Register Code ...") means that you can open specialty files with code, which we want, so we need to enable that. The last one ("Add to PATH") is a toll that allows us to use commands to control code, something that we will use in later tutorials and therefore want enabled.</p>
            <p className="font-light mt-8">At this point we can press "Next" to move on to a quick summary page.</p>
            <StepIndicator>5</StepIndicator>
            <ImageCard href="https://ui.shadcn.com/placeholder.svg" />
            <p className="font-light">Now we have arrived at our last page before we install, the summary page. At this point we should review all of our install setting, as well as all the choices that we have made, and go back to change anything we need to. If you are happy with the install you can go ahead and press the "Install" button.</p>
            <p className="font-light mt-8">After a short wait (5-20 seconds) a progress bar should apear for our install, allowing us to track the install. This install can take a few minutes so dont panic if it does.</p>
            <StepIndicator>6</StepIndicator>
            <ImageCard href="https://ui.shadcn.com/placeholder.svg" />
            <p className="font-light">Once the install finishes you should be greated by a success screen with a check box to launch VS Code. Make sure this box is enabled as we need to finish the setup in VS Code. Then, press the "Finish" button.</p>
            <p className="font-light mt-8">While it may take a few seconds, VS Code should now boot up. Once it has opened you can select a theme, and then we have succesfully installed our IDE.</p>
            <ImageCard href="https://ui.shadcn.com/placeholder.svg" />
            <RecomendedArticle href="#">Now that we have Visual Studios Code our next step will be to learn about files and how VS Code works</RecomendedArticle>
        </div>
    )
}