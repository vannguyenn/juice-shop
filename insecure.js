exports.authorize = (user = {}) => jwt.sign(user, privateKey, { expiresInMinutes: 60 * 5, algorithm: 'RS256' })
