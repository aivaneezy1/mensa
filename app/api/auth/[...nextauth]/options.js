import { connectDB } from "@/app/utils/connectDb";
import User from "@/app/models/User";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { typographyClasses } from "@mui/material";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        let userRole = "Github User";
        if (profile?.email == process.env.ADMIN) userRole = "admin";

      
        return {
          ...profile,
          role: userRole,
          id: profile.id,
          image: profile.avatar_url,
        };
      },

      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      profile(profile) {
        let userRole = "Github User";
        if (profile?.email == process.env.ADMIN) userRole = "admin";

        return {
          ...profile,
          role: userRole,
          id: profile.sub,
          image: profile.picture,
        };
      },

      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.picture = user.image
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.image = token.picture;
      }
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectDB();
        if (profile?.email) {
          const userExists = await User.findOne({ email: profile.email });
          if (!userExists) {
            await User.create({
              username: profile.name.toLowerCase(),
              email: profile.email,
              userId: profile.id || profile.sub,
              role: profile.email == process.env.ADMIN ? "admin" : "user",
            });
          }
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};
