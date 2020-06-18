export interface UserProfile {
  name: string;
  lastEdit: number;
  memberSince: number;
  ownerId: string;
  preferences: UserPreferences;
  level?: string;
}

export interface UserPreferences {
  jumpingRope: boolean;
}
