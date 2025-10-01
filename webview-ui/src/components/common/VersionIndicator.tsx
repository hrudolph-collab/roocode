import React from "react"
import { useTranslation } from "react-i18next"
import { Package } from "@roo/package"

interface VersionIndicatorProps {
	onClick: () => void
	className?: string
	showNewIndicator?: boolean
}

const VersionIndicator: React.FC<VersionIndicatorProps> = ({ onClick, className = "", showNewIndicator = false }) => {
	const { t } = useTranslation()

	return (
		<button
			onClick={onClick}
			className={`text-xs text-vscode-descriptionForeground hover:text-vscode-foreground transition-colors cursor-pointer px-2 py-1 rounded border ${className}`}
			aria-label={t("chat:versionIndicator.ariaLabel", { version: Package.version })}>
			v{Package.version}
			{showNewIndicator && (
				<span className="ml-1.5 text-xs font-semibold text-vscode-textLink">
					{t("chat:versionIndicator.new")}
				</span>
			)}
		</button>
	)
}

export default VersionIndicator
