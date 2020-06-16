const context = ({ req, res }: any) => ({
    setCookie: ({ token, refreshToken }) => {
        const options = {
            maxAge: 60 * 60 * 24 * 7000,
            httpOnly: true
        }
        res.cookie('token', token, options);
        res.cookie('refresh-token', refreshToken, options);
    },

    auth: async () => {
        if (!req.user) { res.status(401) }
        return req.user;
    },
})

export default context;