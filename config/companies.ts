export type AtsProvider =
  | "greenhouse"
  | "lever"
  | "ashby"
  | "smartrecruiters";

export interface CompanyConfig {
  id: string;
  name: string;
  careersUrl: string;
  ats?: {
    provider: AtsProvider;
    boardSlug: string;
  };
}

/**
 * Top companies — independent from board sync.
 * Add `ats` when you know the Greenhouse/Lever/Ashby board slug.
 */
export const companies: CompanyConfig[] = [
  // Examples — replace with the companies you want to track.
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    careersUrl: "https://elevenlabs.io/careers",
    ats: { provider: "ashby", boardSlug: "elevenlabs" },
  },
  {
    id: "qonto",
    name: "Qonto",
    careersUrl: "https://jobs.lever.co/qonto",
    ats: { provider: "lever", boardSlug: "qonto" },
  },
  {
    id: "remote",
    name: "Remote",
    careersUrl: "https://remote.com/careers",
    ats: { provider: "greenhouse", boardSlug: "remote" },
  },
];
