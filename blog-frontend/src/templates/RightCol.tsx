import { Omega } from "lucide-react";

export const RightCol: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-8 m-6 gap-y-4
         border-l-2 border-accent-semi
         h-fit w-96">
            <h2 className="text-xl font-bold text-theme-300 border-b-2 border-theme-400">❤️</h2>
            <img src="https://avatars.githubusercontent.com/u/13455738?s=280&v=4" alt="Profile" className="w-24 h-24 place-self-end " />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1055px-Kubernetes_logo_without_workmark.svg.png"
            alt="Kubernetes Logo" className="w-24 h-24 mt-4 place-self-start" />
            <img src="https://cdn.worldvectorlogo.com/logos/devops-2.svg"
            alt="DevOps Logo" className="h-24" />
            <div className="flex flex-col items-center place-self-end">
                <img src="https://static.thenounproject.com/png/1909030-200.png" className="h-24 invert-70"/>
                <p className="text-theme-300 font-inter"> Data mesh</p>
            </div>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-kafka-icon-download-in-svg-png-gif-file-formats--logo-brand-world-logos-vol-1-pack-icons-282292.png"
            alt="Kafka Logo" className="h-24 place-self-start invert-70" />
        </div>
    );
}