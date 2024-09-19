import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const user_roles = v.union(
  v.literal("creator"),
  v.literal("brand"),
  v.literal("creator_agency")
);

export default defineSchema({
  roles: defineTable({
    name: user_roles,
  }),
  users: defineTable({
    userId: v.string(),
    roleId: v.optional(v.id("roles")),
    email: v.string(),
    name: v.optional(v.string()),
    profileImage: v.optional(v.string()),
    isAdmin: v.optional(v.boolean()),
  })
    .index("by_userId", ["userId"])
    .index("by_email", ["email"]),
});
