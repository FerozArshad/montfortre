import { getSupabase } from "../supabase";
import { isAdminDevBypass } from "./auth";

/** Current signed-in user id, or null in local dev bypass (no ownership filter). */
export async function getRequiredUserId(): Promise<string | null> {
  if (isAdminDevBypass()) return null;

  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");

  const {
    data: { user },
  } = await sb.auth.getUser();
  if (!user) throw new Error("Not signed in");
  return user.id;
}

export async function assertOwnsResource(authorId: string | null | undefined, userId: string | null): Promise<void> {
  if (!userId) return;
  if (authorId !== userId) {
    throw new Error("You do not have permission to access this content.");
  }
}

export const LISTING_PROPERTY_STATUSES = ["For Sale", "In Contract", "Coming Soon", "Sold"] as const;

export type ListingPropertyStatus = (typeof LISTING_PROPERTY_STATUSES)[number];

export function isListingPropertyStatus(value: string): value is ListingPropertyStatus {
  return (LISTING_PROPERTY_STATUSES as readonly string[]).includes(value);
}
