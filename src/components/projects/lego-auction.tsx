import { ThemeText } from "components/theme-text"
import { cn } from "lib/utils"
import { Lock } from "lucide-react"

export function LegoAuctionProject() {
  const dateRange = "Sep 2025 - Nov 2025"
  const techStack = [
    "Java (JAX-RS)",
    "Maven",
    "Microsoft Azure (App Service, Cosmos DB, Blob Storage, Redis Cache, Azure Functions)",
    "Apache Spark (Databricks)",
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
          Contributed to the design and deployment of a scalable, high-availability RESTful API on
          Microsoft Azure, developing core backend endpoints using Java (JAX-RS) and Maven.
        </li>
        <li>
          Implemented a multi-level caching strategy using Azure Cache for Redis, writing logic at the API
          layer to cache objects/lists and significantly reduce Cosmos DB queries.
        </li>
        <li>
          Authored and deployed a time-triggered Azure Function (&quot;Auction Closer and RecentLegoSetsTracker&quot;)
          to manage auction state and update the Redis Sorted Set of recent items.
        </li>
        <li>
          Engineered and deployed a data processing job using Apache Spark on Azure Databricks to
          analyze historical data and compute &quot;trending&quot; Lego sets.
        </li>
        <li>
          Identified and resolved a critical high-load security flaw, properly securing endpoints that
          allowed unauthenticated data modification under heavy request load.
        </li>
        <li>
          Wrote Artillery (with Faker.js) test scripts to simulate realistic user load, verifying that the
          caching solution dramatically reduced latency and eliminated database spikes.
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