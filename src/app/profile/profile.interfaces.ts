export interface UserProfile {
  name: string;
  lastEdit: number;
  memberSince: number;
  ownerId: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  jumpingRope: boolean;
}
