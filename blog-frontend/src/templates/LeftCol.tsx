

export const LeftCol: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-8 m-6 space-between gap-y-37
         border-r-2 border-accent-semi">
            <p className="text-theme-300 font-theme"> Platforms </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="Profile" className="w-24 h-24 mb-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" className="w-24 h-24 mb-4 invert-40" />
            <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" alt="Email Icon" className="w-24 h-24 mb-4 invert-60" />
        </div>
    )
}
