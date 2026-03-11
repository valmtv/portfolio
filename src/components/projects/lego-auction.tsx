import { ThemeText } from "components/theme-text"
import { cn } from "lib/utils"
import { Lock } from "lucide-react"

export function LegoAuctionProject() {
  const dateRange = "Sep 2025 – Nov 2025"
  const techStack = [
    "Java (JAX-RS)",
    "Maven",
    "Azure (App Service, Cosmos DB, Blob Storage, Redis Cache, Azure Functions)",
    "Apache Spark (Databricks)",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "Artillery",
    "Faker.js",
    "Git",
  ]

  const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h5 className="text-lg font-semibold text-theme-foreground">Cloud-Native Lego Auction Platform</h5>
          <span
            className="inline-flex items-center gap-1 text-base text-theme-secondary font-medium cursor-default select-none"
            title="Private Repository"
          >
            <Lock size={20} />
            Private Repository
          </span>
        </div>
        <ThemeText muted className="text-sm whitespace-nowrap">
          {dateRange}
        </ThemeText>
      </div>

      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Built and deployed core REST endpoints for a high-availability auction API on Azure App
          Service using Java and Maven.
        </li>
        <li>
          Designed a two-level Redis caching strategy (object + list caches at the API layer) that
          cut mean response time by 57% (180ms → 77ms) and dropped p99 latency from 3.5s to 153ms,
          verified with load tests.
        </li>
        <li>
          Wrote a time-triggered Azure Function (&quot;Auction Closer and RecentLegoSetsTracker&quot;) to
          manage auction lifecycle and keep the Redis Sorted Set of recent items up to date.
        </li>
        <li>
          Built an Apache Spark job on Azure Databricks to process historical bid data and surface
          trending Lego sets.
        </li>
        <li>
          Found and fixed a critical security flaw: under high load, unauthenticated endpoints were
          accepting data modifications. Verified the fix held up under the same load conditions.
        </li>
        <li>
          Ran Artillery/Faker.js load tests against two server configs - the caching fix eliminated
          all 46 ETIMEDOUT failures and cut mean latency from 2.2s to 482ms (78% reduction).
        </li>
        <li>
          Re-deployed the entire platform using Docker, Kubernetes, and MongoDB to remove Azure
          vendor lock-in.
        </li>
      </ul>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-medium bg-theme-accent text-theme-accentForeground opacity-90 border border-theme-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}