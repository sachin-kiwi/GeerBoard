require('dotenv').config()

module.exports = {
    apps: [
        {
            name: 'auth',
            script: `cd ${process.env.GEER_PUBLIC_API}/auth && npm run dev`,
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        },
        {
            name: 'signup',
            script: `cd ${process.env.GEER_PUBLIC_API}/signup && npm run dev`,
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        },
        {
            name: 'product',
            script: `cd ${process.env.GEER_PUBLIC_API}/product && npm run dev`,
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        },
        {
            name: 'gamePlayers',
            script: `cd ${process.env.GEER_PUBLIC_API}/gamePlayers && npm run dev`,
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        },
        {
            name: 'mint',
            script: `cd ${process.env.GEER_PUBLIC_API}/mint && npm run dev`,
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        },
        {
            name: 'nft',
            script: `cd ${process.env.GEER_PUBLIC_API}/nft && npm run dev`,
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        },
        {
            name: 'Backend',
            script: `cd ${process.env.GEER_BACKEND} && npm start`,
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        },
        {
            name: 'Frontend',
            script: `cd ${process.env.GEER_FRONTEND} && npm run start`,
            watch: true,
            env: {
                NODE_ENV: 'development'
            }
        }
    ]
}
