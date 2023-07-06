const shopModel = require("../models/shop.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const KeyTokenService = require("./keyToken.services");
const { createTokenPair } = require("../auth/authUtils");
const { getInfoData } = require("../utils");
const RoleShop = {
	SHOP: "SHOP",
	WRITER: "WRITER",
	EDITOR: "EDITOR",
	ADMIN: "ADMIN",
};
class AccessService {
	static signUp = async ({ name, email, password }) => {
		try {
			// Check email exists
			const holderShop = await shopModel.findOne({ email: email }).lean(); // lean tra ve object thuan tuy nhe hon object cua mongoose
			if (holderShop) {
				return {
					code: "xxx",
					message: "Shop already exists",
				};
			}
			const passwordHash = await bcrypt.hashSync(password, 10);
			// Chua co tao shop moi
			const newShop = await shopModel.create({
				name,
				email,
				password: passwordHash,
				role: RoleShop["SHOP"],
			});

			if (newShop) {
				// created privatekey, publickey
				const { privateKey, publicKey } = crypto.generateKeyPairSync(
					"rsa",
					{
						modulusLength: 4096,
						publicKeyEncoding: {
							type: "pkcs1",
							format: "pem"
						},
						privateKeyEncoding: {
							type: "pkcs1",
							format: "pem"
						}
					}
				);
				console.log(publicKey);
				const publicKeyString = await KeyTokenService.createKeyToken({
					userId: newShop._id,
					publicKey,
				});
				if (!publicKeyString) {
					return {
						code: "xxx",
						message: "publicKeyStirng error",
					};
				}

				const tokens = await createTokenPair(
					{
						userId: newShop._id,
						email,
					},
					publicKeyString,
					privateKey
				);
                return {
                    code: 201,
                    metadata: {
                        shop: getInfoData({ fileds: ['_id','name', 'email'] , object: newShop}),
                        tokens
                    }
                }
			}
            return {
                code: 200,
                metadata: null,
            }
		} catch (error) {
			return {
				code: "xxx",
				message: error.message,
				status: "error",
			};
		}
	};
}

module.exports = AccessService;
