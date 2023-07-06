'use strict';

const findById = async ( key ) => {
    const objectKey = await apiKeyModel.findOne({ key, status:true}).lean();
    return objectKey
}

module.exports = { findById  }