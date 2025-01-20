const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// with try catch methode
// const asyncHandler = (fn) => { async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).josn({
//             success: false,
//             message: error.message
//         })F
//     }
// }}

export { asyncHandler };
