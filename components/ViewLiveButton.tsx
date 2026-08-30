import { ArrowUpRight } from "lucide-react";

interface ViewLiveButtonProps {
  /** Full URL to the deployed project. */
  href: string;
  /** Name of the project, used to build the accessible label. */
  projectName: string;
  /** Optional extra classes to adjust spacing/layout per usage site. */
  className?: string;
}

/**
 * Small pill button linking out to a project's live deployment.
 * Renders nothing if the caller doesn't have a real URL — callers should
 * only mount this component when a genuine live link exists, e.g.:
 *
 *   {project.live !== "#" && (
 *     <ViewLiveButton href={project.live} projectName={project.title} />
 *   )}
 */
export default function ViewLiveButton({
  href,
  projectName,
  className = "",
}: ViewLiveButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${projectName} live — opens in a new tab`}
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-white/70 border border-white/15 hover:border-white/40 hover:text-white px-3 py-1.5 rounded-full transition-colors ${className}`}
    >
      View Live
      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
    </a>
  );
}
