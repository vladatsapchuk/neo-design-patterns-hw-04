import { UserProfilePrototype } from "./UserProfilePrototype";

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,

    public department: "finance" | "engineering" | "marketing",

    public permissions: {
      canEditUsers: boolean;
      canApproveBudget: boolean;
      canAccessInternalTools: boolean;
    }
  ) {}

  public clone(): UserProfilePrototype {
    return new UserProfile(
      this.username,

      this.department,

      {
        canEditUsers: this.permissions.canEditUsers,

        canApproveBudget: this.permissions.canApproveBudget,

        canAccessInternalTools:
          this.permissions.canAccessInternalTools
      }
    );
  }
}