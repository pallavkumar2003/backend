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

const asyncHandler = (reqHandler) => {
   (req, res, next) => { 
        Promise.resolve(reqHandler(req, res, next)).
        catch((err)=> next(err));
    };
};

// this is a wrapper function that takes an async function and returns a new function that handles errors
// it catches any errors thrown by the async function and sends a response with the error message and status code
// if the error does not have a status code, it defaults to 500 (Internal Server Error)