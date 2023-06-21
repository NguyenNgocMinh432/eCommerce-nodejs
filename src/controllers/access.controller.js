const AccessService = require("../services/access.services.js");

class AccessController {
    signUp = async ( req, res,next ) => {
        try {
            console.log(`[P]::SignUp::`, req.body);
            // Mã code 201 tạo thành công
            return res.status(201).json(await AccessService.signUp(req.body))
        }catch (error) {
            next( error );
        }
    }
}

module.exports = new AccessController();