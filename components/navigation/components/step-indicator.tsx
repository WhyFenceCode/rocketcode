export function StepIndicator({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-10 flex my-6">
            <div className="w-16 h-full rounded-full border border-muted-foreground flex items-center justify-center">
                <p className="text-lg sm:text-xl text-foreground">{children}</p>
            </div>
            <div className="flex grow items-center justify-center">
                <div className="w-full h-[1px] bg-muted-foreground"></div>
            </div>
        </div>
    )
}