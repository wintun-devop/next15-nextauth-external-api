import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
    providers: [],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',
    },
    debug: process.env.NODE_ENV === 'development',
});

export { handler as GET, handler as POST };