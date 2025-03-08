import Divider from "@/components/Divider";

export default function Footer() {
    return (
        <>
            <footer className="max-w-4xl w-full flex flex-col mx-auto pt-4 pb-2">
                <Divider />
                <p className="text-center font-semibold text-base pt-2">
                    сделал <a href="https://github.com/1dexx1/" target="_blank" rel="noopener noreferrer" className="text-accent transition-all">@polaarity</a>с любовью
                </p>
                <p className="text-center font-medium brightness-75 text-base">
                    последнее обновление: 8 марта 2025
                </p>
            </footer>
        </>
    );
}
