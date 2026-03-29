import { cn } from "lib/utils"
import { PROJECTS_META } from "lib/data/projects-meta"
import { ProjectHeader } from "components/ui/project/project-header"
import { ProjectTags } from "components/ui/project/project-tags"

const meta = PROJECTS_META["lego-auction"]!;
const textBodyClasses = "text-base md:text-lg leading-relaxed text-pretty text-theme-mutedForeground"

// Honest description used in /projects
export function LegoAuctionProject() {
  return (
    <div>
      <ProjectHeader meta={meta} />

      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Built and deployed core REST endpoints for an auction API on Azure App
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
          Found and fixed a critical security flaw: under realistic simulated load, unauthenticated endpoints were
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

      <ProjectTags tags={meta.techStack} />
    </div>
  )
}

// Official description used on the homepage
export function LegoAuctionOfficial() {
  return (
    <div>
      <ProjectHeader meta={meta} />

      <ul className={cn("list-disc list-inside space-y-2 mb-3 pl-4", textBodyClasses)}>
        <li>
          Built and deployed core REST endpoints for an auction API on Azure App
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
          Ran Artillery/Faker.js load tests against two server configs - the caching fix eliminated
          all 46 ETIMEDOUT failures and cut mean latency from 2.2s to 482ms (78% reduction).
        </li>
        <li>
          Re-deployed the entire platform using Docker, Kubernetes, and MongoDB to remove Azure
          vendor lock-in.
        </li>
      </ul>

      <ProjectTags tags={meta.techStack} />
    </div>
  )
}
