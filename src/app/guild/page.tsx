import { GuildIntro } from "../../components/guild/GuildIntro";
import { GuildRules } from "../../components/guild/GuildRules";
import { GuildStats } from "../../components/guild/GuildStats";
import { RecruitmentStatus } from "../../components/guild/RecruitmentStatus";
import { PageWrapper } from "../../components/layout/PageWrapper";

export default function GuildPage() {
  return (
    <PageWrapper>
      <div className="space-y-24">
        <GuildIntro />

        <GuildStats />

        <RecruitmentStatus />

        <GuildRules />
      </div>
    </PageWrapper>
  );
}
