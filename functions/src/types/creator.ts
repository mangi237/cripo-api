
export type CreatorPlatform =
  | "youtube"
  | "spotify"
  | "tiktok"
  | "instagram"
  | "facebook";

export type CreatorCategory =
  | "music"
  | "comedy"
  | "film"
  | "lifestyle"
  | "podcast"
  | "education"
  | "other";

export interface CreatorPlatformProfile {
  platform: CreatorPlatform;
  platformId: string;
  username?: string;
  profileUrl?: string;
  profileImageUrl?: string;
  followers?: number;
  subscribers?: number;
  totalViews?: number;
  monthlyListeners?: number;
  lastUpdated?: string;
}

export interface CreatorSource {
  platform: CreatorPlatform;
  sourceUrl: string;
  externalId: string;
  collectedAt: string;
}

export interface Creator {
  id: string;

  displayName: string;
  biography?: string;

  country?: string;
  city?: string;

  categories: CreatorCategory[];

  platforms: CreatorPlatformProfile[];

  sources: CreatorSource[];

  isClaimed: boolean;
  claimedByUid?: string;

  dataQuality: {
    completeness: number;
    lastVerified?: string;
    missingFields: string[];
  };

  createdAt: string;
  updatedAt: string;
}

export interface RawYouTubeCreator {
  channelId: string;
  title: string;
  description?: string;
  customUrl?: string;
  thumbnailUrl?: string;
  subscribers?: number;
  totalViews?: number;
  videoCount?: number;
  channelUrl: string;
}
