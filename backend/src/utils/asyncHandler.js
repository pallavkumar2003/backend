// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || 'Internal Server Error',
//             error: error.stack || 'No stack trace available'
//         }); 
//     }
// };

import express from 'express';

const asyncHandler = (reqHandler) => {
   return (req, res, next) => {
        Promise.resolve(reqHandler(req, res, next)).
        catch((err)=> next(err));
    };
};

export default asyncHandler;

