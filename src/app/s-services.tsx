export function Services() {
    return (
        <>
        <section className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-10 lg:mt-[100px]">
            <main className="flex flex-col gap-[16px]">
                <article className="flex flex-col items-center gap-4 justify-center lg:flex-row lg:justify-between">
                    <h1 className="text-4xl lg:text-6xl font-bold text-[#E53935]">{item.title}</h1>
                    <button className="rounded-full border border-[#E53935] py-16 px-4 text-[#E53935] cursor-pointer">{item.btnText}</button>
                </article>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                    
                </div>
            </main>
        </section>
        </>
    )
}